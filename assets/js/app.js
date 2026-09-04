/**
 * Einstiegspunkt und zentrale Steuerung
 * der CarbonScope-Webanwendung.
 */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const tableContainer =
            document.getElementById(
                "emissions-table-container"
            );

        const countryFilter =
            document.getElementById(
                "country-filter"
            );

        const companyFilter =
            document.getElementById(
                "company-filter"
            );

        const resetFiltersButton =
            document.getElementById(
                "reset-filters"
            );


        /*
         * Prüfen, ob alle benötigten
         * Elemente vorhanden sind.
         */

        if (
            !tableContainer ||
            !countryFilter ||
            !companyFilter ||
            !resetFiltersButton
        ) {
            console.error(
                "Benötigte Elemente der Emissionsansicht wurden nicht gefunden."
            );

            return;
        }


        const data =
            window.CarbonScope.emissionsData;


        /*
         * Zentraler Zustand
         * der Emissionsansicht.
         */

        const state = {
            country: "",
            company: "",
            sortKey: "country",
            sortDirection: "ascending"
        };


        /**
         * Befüllt die Länderauswahl
         * mit den vorhandenen Ländern.
         */
        function populateCountryFilter() {

            const countries =
                window.CarbonScope.getCountries(
                    data
                );

            countries.forEach((country) => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    country;

                option.textContent =
                    country;

                countryFilter.appendChild(
                    option
                );
            });
        }


        /**
         * Filtert und sortiert die Daten
         * und aktualisiert anschließend
         * die Tabelle.
         */
        function updateTable() {

            const filteredData =
                window.CarbonScope.filterEmissionsData(
                    data,
                    state.country,
                    state.company
                );

            const sortedData =
                window.CarbonScope.sortEmissionsData(
                    filteredData,
                    state.sortKey,
                    state.sortDirection
                );

            window.CarbonScope.renderEmissionsTable(
                sortedData,
                tableContainer,
                {
                    key: state.sortKey,
                    direction: state.sortDirection
                }
            );
        }


        /*
         * Land filtern
         */

        countryFilter.addEventListener(
            "change",
            (event) => {

                state.country =
                    event.target.value;

                updateTable();
            }
        );


        /*
         * Unternehmen filtern
         */

        companyFilter.addEventListener(
            "input",
            (event) => {

                state.company =
                    event.target.value;

                updateTable();
            }
        );


        /*
         * Filter zurücksetzen
         */

        resetFiltersButton.addEventListener(
            "click",
            () => {

                state.country = "";
                state.company = "";

                state.sortKey =
                    "country";

                state.sortDirection =
                    "ascending";

                countryFilter.value = "";
                companyFilter.value = "";

                updateTable();
            }
        );


        /*
         * Tabellenüberschriften
         * zur Sortierung verwenden.
         */

        tableContainer.addEventListener(
            "click",
            (event) => {

                const button =
                    event.target.closest(
                        "[data-sort-key]"
                    );

                if (!button) {
                    return;
                }

                const sortKey =
                    button.dataset.sortKey;


                /*
                 * Wird dieselbe Spalte erneut
                 * ausgewählt, wird die
                 * Sortierrichtung umgekehrt.
                 */

                if (
                    state.sortKey === sortKey
                ) {
                    state.sortDirection =
                        state.sortDirection ===
                        "ascending"
                            ? "descending"
                            : "ascending";
                } else {

                    state.sortKey =
                        sortKey;

                    state.sortDirection =
                        "ascending";
                }

                updateTable();
            }
        );


        /*
         * Anwendung initialisieren.
         */

        populateCountryFilter();

        updateTable();
    }
);