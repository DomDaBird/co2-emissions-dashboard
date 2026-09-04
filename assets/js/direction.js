/**
 * Steuerung der Schreibrichtung der CarbonScope-Webanwendung.
 */

window.CarbonScope = window.CarbonScope || {};

window.CarbonScope.directionStorageKey =
    "carbonscope-writing-direction";


/**
 * Prüft, ob eine Sprache üblicherweise
 * von rechts nach links geschrieben wird.
 *
 * @returns {string} "rtl" oder "ltr"
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
 * Gibt eine zuvor gespeicherte
 * Schreibrichtung zurück.
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
            "Die gespeicherte Schreibrichtung konnte nicht gelesen werden.",
            error
        );
    }

    return null;
};


/**
 * Speichert die ausgewählte Schreibrichtung.
 *
 * @param {string} direction Schreibrichtung.
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
            "Die Schreibrichtung konnte nicht gespeichert werden.",
            error
        );
    }
};


/**
 * Wendet eine Schreibrichtung auf
 * das HTML-Dokument an.
 *
 * @param {string} direction Schreibrichtung.
 */
window.CarbonScope.setWritingDirection = function (
    direction
) {

    const normalizedDirection =
        direction === "rtl"
            ? "rtl"
            : "ltr";

    document.documentElement.setAttribute(
        "dir",
        normalizedDirection
    );

    return normalizedDirection;
};


/**
 * Initialisiert die Steuerung
 * für LTR- und RTL-Darstellung.
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
                "Die Auswahl für die Schreibrichtung wurde nicht gefunden."
            );

            return;
        }

        const savedDirection =
            window.CarbonScope.getSavedWritingDirection();

        const initialDirection =
            savedDirection ||
            window.CarbonScope.detectWritingDirection();

        const appliedDirection =
            window.CarbonScope.setWritingDirection(
                initialDirection
            );

        directionSelect.value =
            appliedDirection;


        directionSelect.addEventListener(
            "change",
            (event) => {

                const direction =
                    window.CarbonScope.setWritingDirection(
                        event.target.value
                    );

                window.CarbonScope.saveWritingDirection(
                    direction
                );
            }
        );
    }
);