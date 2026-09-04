/**
 * Steuerung der Schriftkultur und der Position
 * der lokalen Navigation.
 */

window.CarbonScope = window.CarbonScope || {};

window.CarbonScope.directionStorageKey =
    "carbonscope-writing-direction";


/**
 * Erkennt anhand der Browsersprache,
 * ob üblicherweise eine LTR- oder
 * RTL-Schriftkultur verwendet wird.
 *
 * @returns {string} "ltr" oder "rtl"
 */
window.CarbonScope.detectWritingDirection = function () {

    const rtlLanguages = [
        "ar",
        "fa",
        "he",
        "ur"
    ];

    const browserLanguage =
        navigator.language || "de";

    const languageCode =
        browserLanguage
            .split("-")[0]
            .toLowerCase();

    return rtlLanguages.includes(languageCode)
        ? "rtl"
        : "ltr";
};


/**
 * Liest eine zuvor gespeicherte
 * Auswahl aus dem Browser.
 *
 * @returns {string|null}
 */
window.CarbonScope.getSavedWritingDirection = function () {

    try {

        const savedDirection =
            localStorage.getItem(
                window.CarbonScope.directionStorageKey
            );

        if (
            savedDirection === "ltr" ||
            savedDirection === "rtl"
        ) {
            return savedDirection;
        }

    } catch (error) {

        console.warn(
            "Die gespeicherte Schriftkultur konnte nicht gelesen werden.",
            error
        );

    }

    return null;
};


/**
 * Speichert die ausgewählte Schriftkultur.
 *
 * @param {string} direction "ltr" oder "rtl"
 */
window.CarbonScope.saveWritingDirection = function (
    direction
) {

    try {

        localStorage.setItem(
            window.CarbonScope.directionStorageKey,
            direction
        );

    } catch (error) {

        console.warn(
            "Die Schriftkultur konnte nicht gespeichert werden.",
            error
        );

    }
};


/**
 * Passt die Position der lokalen Navigation an.
 *
 * Die Schreibrichtung der deutschsprachigen
 * Inhalte selbst wird dabei nicht verändert.
 *
 * @param {string} direction "ltr" oder "rtl"
 * @returns {string} angewendete Schriftkultur
 */
window.CarbonScope.applyWritingDirection = function (
    direction
) {

    const normalizedDirection =
        direction === "rtl"
            ? "rtl"
            : "ltr";

    document.body.classList.remove(
        "culture-ltr",
        "culture-rtl"
    );

    document.body.classList.add(
        `culture-${normalizedDirection}`
    );

    return normalizedDirection;
};


/**
 * Initialisiert die Auswahl der Schriftkultur.
 */
document.addEventListener(
    "DOMContentLoaded",
    () => {

        const directionSelect =
            document.getElementById(
                "writing-direction"
            );

        if (!directionSelect) {

            console.error(
                "Die Auswahl für die Schriftkultur wurde nicht gefunden."
            );

            return;
        }

        const savedDirection =
            window.CarbonScope.getSavedWritingDirection();

        const initialDirection =
            savedDirection ||
            window.CarbonScope.detectWritingDirection();

        const appliedDirection =
            window.CarbonScope.applyWritingDirection(
                initialDirection
            );

        directionSelect.value =
            appliedDirection;


        directionSelect.addEventListener(
            "change",
            (event) => {

                const direction =
                    window.CarbonScope.applyWritingDirection(
                        event.target.value
                    );

                window.CarbonScope.saveWritingDirection(
                    direction
                );

            }
        );

    }
);