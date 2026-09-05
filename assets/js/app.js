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

        const tableStatus =
            document.getElementById(
                "table-status"
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
            !tableStatus ||
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
         * Erlaubte Länderwerte werden
         * ausschließlich aus dem lokalen
         * Datensatz erzeugt.
         */

        const countries =
            window.CarbonScope.getCountries(
                data
            );

        const allowedCountries = [
            "",
            ...countries
        ];


        /*
         * Zentraler Zustand.
         */

        const state = {
            country: "",
            company: "",
            sortKey: "country",
            sortDirection: "ascending"
        };


        /**
         * Befüllt die Länderauswahl.
         */
        function populateCountryFilter() {

            countries.forEach(
                (country) => {

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

                }
            );

        }


        /**
         * Filtert und sortiert die Daten
         * und aktualisiert die Tabelle.
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
                    key:
                        state.sortKey,
                    direction:
                        state.sortDirection
                },
                tableStatus
            );

        }


        /*
         * Land filtern.
         */

        countryFilter.addEventListener(
            "change",
            (event) => {

                state.country =
                    window.CarbonScope.getAllowedValue(
                        event.target.value,
                        allowedCountries,
                        ""
                    );

                countryFilter.value =
                    state.country;

                updateTable();

            }
        );


        /*
         * Unternehmen filtern.
         */

        companyFilter.addEventListener(
            "input",
            (event) => {

                const normalizedInput =
                    window.CarbonScope.normalizeTextInput(
                        event.target.value
                    );

                state.company =
                    normalizedInput;

                if (
                    event.target.value !==
                    normalizedInput
                ) {

                    event.target.value =
                        normalizedInput;

                }

                updateTable();

            }
        );


        /*
         * Filter zurücksetzen.
         */

        resetFiltersButton.addEventListener(
            "click",
            () => {

                state.country =
                    "";

                state.company =
                    "";

                state.sortKey =
                    "country";

                state.sortDirection =
                    "ascending";

                countryFilter.value =
                    "";

                companyFilter.value =
                    "";

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

                if (
                    !(
                        event.target
                        instanceof Element
                    )
                ) {
                    return;
                }


                const button =
                    event.target.closest(
                        "[data-sort-key]"
                    );


                if (!button) {
                    return;
                }


                const shouldRestoreFocus =
                    document.activeElement ===
                    button;


                const sortKey =
                    button.dataset.sortKey;


                const allowedSortKeys = [
                    "country",
                    "company",
                    "emissions"
                ];


                const validatedSortKey =
                    window.CarbonScope.getAllowedValue(
                        sortKey,
                        allowedSortKeys,
                        "country"
                    );


                /*
                 * Bei erneutem Auswählen
                 * derselben Spalte wird die
                 * Richtung umgekehrt.
                 */

                if (
                    state.sortKey ===
                    validatedSortKey
                ) {

                    state.sortDirection =
                        state.sortDirection ===
                        "ascending"
                            ? "descending"
                            : "ascending";

                } else {

                    state.sortKey =
                        validatedSortKey;

                    state.sortDirection =
                        "ascending";

                }


                updateTable();


                /*
                 * Da die Tabelle neu erzeugt wird,
                 * wird der Tastaturfokus auf den
                 * entsprechenden Sortierbutton
                 * zurückgesetzt.
                 */

                if (shouldRestoreFocus) {

                    requestAnimationFrame(
                        () => {

                            const newButton =
                                tableContainer.querySelector(
                                    `[data-sort-key="${validatedSortKey}"]`
                                );

                            if (newButton) {
                                newButton.focus();
                            }

                        }
                    );

                }

            }
        );


        /*
         * Anwendung initialisieren.
         */

        populateCountryFilter();

        updateTable();

    }
);