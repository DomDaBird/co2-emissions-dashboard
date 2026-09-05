/**
 * Sicherheitsfunktionen für Benutzereingaben.
 *
 * Alle Eingaben werden grundsätzlich als nicht vertrauenswürdig behandelt.
 * Freie Texteingaben werden normalisiert und begrenzt.
 * Eingaben mit festgelegten Werten werden über Allow-Lists validiert.
 */

window.CarbonScope = window.CarbonScope || {};


/**
 * Maximale Länge des Suchfelds für Unternehmen.
 */
window.CarbonScope.maxSearchLength = 80;


/**
 * Normalisiert eine freie Texteingabe.
 *
 * Die Funktion:
 * - akzeptiert ausschließlich Strings
 * - normalisiert Unicode-Zeichen
 * - entfernt nicht darstellbare Steuerzeichen
 * - begrenzt die maximale Eingabelänge
 *
 * Die Eingabe wird ausdrücklich nicht als HTML interpretiert.
 *
 * @param {*} value Eingabewert.
 * @param {number} maxLength Maximale Länge.
 * @returns {string} Normalisierte Texteingabe.
 */
window.CarbonScope.normalizeTextInput = function (
    value,
    maxLength = window.CarbonScope.maxSearchLength
) {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .normalize("NFKC")
        .replace(
            /[\u0000-\u001F\u007F]/g,
            ""
        )
        .slice(
            0,
            maxLength
        );
};


/**
 * Prüft einen Wert gegen eine Liste
 * ausdrücklich erlaubter Werte.
 *
 * @param {*} value Zu prüfender Wert.
 * @param {Array} allowedValues Erlaubte Werte.
 * @param {*} fallback Rückgabewert bei ungültiger Eingabe.
 * @returns {*} Validierter Wert oder Fallback.
 */
window.CarbonScope.getAllowedValue = function (
    value,
    allowedValues,
    fallback = ""
) {
    if (!Array.isArray(allowedValues)) {
        return fallback;
    }

    return allowedValues.includes(value)
        ? value
        : fallback;
};