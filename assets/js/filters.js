/**
 * Funktionen zur Filterung und Sortierung der CO₂-Emissionsdaten.
 */

window.CarbonScope = window.CarbonScope || {};

/**
 * Gibt alle vorhandenen Länder alphabetisch sortiert zurück.
 *
 * @param {Array} data Emissionsdatensätze.
 * @returns {Array<string>} Alphabetisch sortierte Ländernamen.
 */
window.CarbonScope.getCountries = function (data) {
    const countries = data.map((record) => record.country);

    return [...new Set(countries)].sort((a, b) =>
        a.localeCompare(
            b,
            "de",
            {
                sensitivity: "base"
            }
        )
    );
};


/**
 * Filtert Emissionsdaten nach Land und Unternehmen.
 *
 * @param {Array} data Emissionsdatensätze.
 * @param {string} country Ausgewähltes Land.
 * @param {string} company Suchbegriff für Unternehmen.
 * @returns {Array} Gefilterte Datensätze.
 */
window.CarbonScope.filterEmissionsData = function (
    data,
    country,
    company
) {
    const companySearch = company
        .trim()
        .toLocaleLowerCase("de-DE");

    return data.filter((record) => {
        const matchesCountry =
            country === "" ||
            record.country === country;

        const matchesCompany =
            companySearch === "" ||
            record.company
                .toLocaleLowerCase("de-DE")
                .includes(companySearch);

        return matchesCountry && matchesCompany;
    });
};


/**
 * Sortiert Emissionsdaten anhand einer ausgewählten Spalte.
 *
 * @param {Array} data Emissionsdatensätze.
 * @param {string} sortKey Zu sortierende Eigenschaft.
 * @param {string} direction Sortierrichtung.
 * @returns {Array} Sortierte Kopie der Datensätze.
 */
window.CarbonScope.sortEmissionsData = function (
    data,
    sortKey,
    direction
) {
    const sortedData = [...data];

    const multiplier =
        direction === "descending"
            ? -1
            : 1;

    sortedData.sort((a, b) => {

        if (sortKey === "emissions") {
            return (
                a.emissions - b.emissions
            ) * multiplier;
        }

        const valueA =
            String(a[sortKey]);

        const valueB =
            String(b[sortKey]);

        return valueA.localeCompare(
            valueB,
            "de",
            {
                sensitivity: "base"
            }
        ) * multiplier;
    });

    return sortedData;
};