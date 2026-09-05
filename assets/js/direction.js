/**
 * Steuerung der Schriftkultur und der Position
 * der lokalen Navigation.
 */

window.CarbonScope = window.CarbonScope || {};

window.CarbonScope.directionStorageKey =
    "carbonscope-writing-direction";


/**
 * Zulässige Werte für die Schriftkultur.
 */
window.CarbonScope.allowedWritingDirections = [
    "ltr",
    "rtl"
];


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
 * Auch Werte aus localStorage werden
 * grundsätzlich erneut validiert.
 *
 * @returns {string|null}
 */
window.CarbonScope.getSavedWritingDirection = function () {

    try {

        const savedDirection =
            localStorage.getItem(
                window.CarbonScope.directionStorageKey
            );

        const validatedDirection =
            window.CarbonScope.getAllowedValue(
                savedDirection,
                window.CarbonScope.allowedWritingDirections,
                null
            );

        return validatedDirection;

    } catch (error) {

        console.warn(
            "Die gespeicherte Schriftkultur konnte nicht gelesen werden.",
            error
        );

        return null;
    }
};


/**
 * Speichert ausschließlich eine
 * validierte Schriftkultur.
 *
 * @param {string} direction "ltr" oder "rtl"
 */
window.CarbonScope.saveWritingDirection = function (
    direction
) {

    const validatedDirection =
        window.CarbonScope.getAllowedValue(
            direction,
            window.CarbonScope.allowedWritingDirections,
            "ltr"
        );

    try {

        localStorage.setItem(
            window.CarbonScope.directionStorageKey,
            validatedDirection
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

    const validatedDirection =
        window.CarbonScope.getAllowedValue(
            direction,
            window.CarbonScope.allowedWritingDirections,
            "ltr"
        );

    document.body.classList.remove(
        "culture-ltr",
        "culture-rtl"
    );

    document.body.classList.add(
        `culture-${validatedDirection}`
    );

    return validatedDirection;
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

        const detectedDirection =
            window.CarbonScope.detectWritingDirection();

        const initialDirection =
            savedDirection ||
            detectedDirection;

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

                directionSelect.value =
                    direction;

                window.CarbonScope.saveWritingDirection(
                    direction
                );

            }
        );

    }
);