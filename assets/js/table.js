/**
 * Funktionen zur Darstellung der CO₂-Emissionstabelle.
 */

window.CarbonScope = window.CarbonScope || {};

/**
 * Erstellt eine Tabelle aus den übergebenen Emissionsdaten.
 *
 * @param {Array} data Emissionsdatensätze, die dargestellt werden sollen.
 * @param {HTMLElement} container HTML-Element für die Tabelle.
 * @param {Object} sortState Aktueller Zustand der Sortierung.
 */
window.CarbonScope.renderEmissionsTable = function (
    data,
    container,
    sortState
) {
    container.replaceChildren();

    if (!Array.isArray(data) || data.length === 0) {
        const message =
            document.createElement("p");

        message.className =
            "text-muted text-center p-4 mb-0";

        message.textContent =
            "Keine passenden Emissionsdaten gefunden.";

        container.appendChild(message);

        return;
    }

    const table =
        document.createElement("table");

    table.className =
        "table table-striped table-hover align-middle mb-0";

    table.setAttribute(
        "aria-label",
        "Fiktive CO₂-Emissionsdaten nach Land und Unternehmen"
    );


    /* Tabellenbeschriftung */

    const caption =
        document.createElement("caption");

    caption.className =
        "caption-top text-muted";

    caption.textContent =
        `${data.length} fiktive Datensätze · Angaben in Mio. t CO₂ pro Jahr`;

    table.appendChild(caption);


    /* Tabellenkopf */

    const tableHead =
        document.createElement("thead");

    tableHead.className =
        "table-dark";

    const headerRow =
        document.createElement("tr");

    const headers = [
        {
            label: "Land",
            key: "country",
            className: ""
        },
        {
            label: "Unternehmen",
            key: "company",
            className: ""
        },
        {
            label: "CO₂-Emissionen",
            key: "emissions",
            className: "text-end"
        }
    ];

    headers.forEach((header) => {
        const th =
            document.createElement("th");

        th.scope = "col";

        if (header.className) {
            th.className =
                header.className;
        }

        const isActive =
            sortState.key === header.key;

        if (isActive) {
            th.setAttribute(
                "aria-sort",
                sortState.direction
            );
        }

        const button =
            document.createElement("button");

        button.type = "button";
        button.className =
            "sort-button";

        button.dataset.sortKey =
            header.key;

        const label =
            document.createElement("span");

        label.textContent =
            header.label;

        const indicator =
            document.createElement("span");

        indicator.className =
            "sort-indicator";

        indicator.setAttribute(
            "aria-hidden",
            "true"
        );

        if (!isActive) {
            indicator.textContent = "↕";
        } else if (
            sortState.direction === "ascending"
        ) {
            indicator.textContent = "↑";
        } else {
            indicator.textContent = "↓";
        }

        button.append(
            label,
            indicator
        );

        th.appendChild(button);

        headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);

    table.appendChild(tableHead);


    /* Tabelleninhalt */

    const tableBody =
        document.createElement("tbody");

    const numberFormatter =
        new Intl.NumberFormat(
            "de-DE",
            {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            }
        );

    data.forEach((record) => {

        const row =
            document.createElement("tr");

        const countryCell =
            document.createElement("td");

        countryCell.textContent =
            record.country;


        const companyCell =
            document.createElement("td");

        companyCell.textContent =
            record.company;


        const emissionsCell =
            document.createElement("td");

        emissionsCell.className =
            "text-end";

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