/**
 * Einstiegspunkt der CarbonScope-Webanwendung.
 */

document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById(
        "emissions-table-container"
    );

    if (!tableContainer) {
        console.error(
            "Der Container für die Emissionstabelle wurde nicht gefunden."
        );

        return;
    }

    window.CarbonScope.renderEmissionsTable(
        window.CarbonScope.emissionsData,
        tableContainer
    );
});