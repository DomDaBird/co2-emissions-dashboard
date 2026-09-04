/**
 * Funktionen zur Darstellung der CO₂-Emissionstabelle.
 */

window.CarbonScope = window.CarbonScope || {};

/**
 * Erstellt eine Tabelle aus den übergebenen Emissionsdaten.
 *
 * @param {Array} data Emissionsdatensätze, die dargestellt werden sollen.
 * @param {HTMLElement} container HTML-Element, in das die Tabelle eingefügt wird.
 */
window.CarbonScope.renderEmissionsTable = function (data, container) {
    // Vorherigen Inhalt entfernen.
    container.replaceChildren();

    if (!Array.isArray(data) || data.length === 0) {
        const message = document.createElement("p");
        message.className = "text-muted mb-0";
        message.textContent = "Keine Emissionsdaten verfügbar.";

        container.appendChild(message);
        return;
    }

    const table = document.createElement("table");

    table.className =
        "table table-striped table-hover align-middle mb-0";

    table.setAttribute(
        "aria-label",
        "Fiktive CO₂-Emissionsdaten nach Land und Unternehmen"
    );

    const caption = document.createElement("caption");
    caption.className = "caption-top text-muted";

    caption.textContent =
        `${data.length} fiktive Datensätze · Angaben in Mio. t CO₂ pro Jahr`;

    table.appendChild(caption);

    const tableHead = document.createElement("thead");
    tableHead.className = "table-dark";

    const headerRow = document.createElement("tr");

    const headers = [
        {
            label: "Land",
            className: ""
        },
        {
            label: "Unternehmen",
            className: ""
        },
        {
            label: "CO₂-Emissionen",
            className: "text-end"
        }
    ];

    headers.forEach((header) => {
        const th = document.createElement("th");

        th.scope = "col";
        th.textContent = header.label;

        if (header.className) {
            th.className = header.className;
        }

        headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    const tableBody = document.createElement("tbody");

    const numberFormatter = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });

    data.forEach((record) => {
        const row = document.createElement("tr");

        const countryCell = document.createElement("td");
        countryCell.textContent = record.country;

        const companyCell = document.createElement("td");
        companyCell.textContent = record.company;

        const emissionsCell = document.createElement("td");
        emissionsCell.className = "text-end";

        emissionsCell.textContent =
            `${numberFormatter.format(record.emissions)} Mio. t`;

        row.append(
            countryCell,
            companyCell,
            emissionsCell
        );

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    container.appendChild(table);
};