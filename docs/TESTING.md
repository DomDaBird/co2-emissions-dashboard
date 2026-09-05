# Testdokumentation

Dieses Dokument enthält die Teststrategie und die durchgeführten Tests des CO₂ Emissions Dashboards.

## 1. Testbereiche

Folgende Bereiche wurden während der Entwicklung überprüft:

- Funktionalität
- Filterung und Sortierung
- Schriftkulturen und Position der lokalen Navigation
- Responsive Design
- Browserkompatibilität
- sichere Verarbeitung von Benutzereingaben
- grundlegende Barrierearmut
- Tastaturbedienbarkeit
- Browserkonsole

## 2. Testumgebungen

Die Anwendung wurde in folgenden Browsern getestet:

- Google Chrome
- Apple Safari

Zusätzlich wurden unterschiedliche Bildschirmgrößen über die Entwicklerwerkzeuge des Browsers simuliert.

Verwendete Testgrößen umfassten unter anderem:

- Desktop
- Tablet mit etwa 820 Pixel Breite
- Smartphone mit etwa 430 Pixel Breite
- kleinere Smartphone-Breiten

Bei Safari wurde für die vollständige Navigation über interaktive Seitenelemente die entsprechende Tastaturnavigation des Browsers beziehungsweise von macOS aktiviert.

## 3. Funktionstests für Filterung und Sortierung

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| FT-01 | Anwendung ohne gesetzten Filter öffnen | Alle zwölf Datensätze werden angezeigt | Bestanden |
| FT-02 | Land „Deutschland“ auswählen | Nur die beiden deutschen Datensätze werden angezeigt | Bestanden |
| FT-03 | Land „Frankreich“ auswählen | Nur die beiden französischen Datensätze werden angezeigt | Bestanden |
| FT-04 | Im Unternehmensfeld „eco“ eingeben | Nur EcoForge GmbH wird angezeigt | Bestanden |
| FT-05 | Im Unternehmensfeld „Nord“ eingeben | Nordwerk Energie AG und Nordic Alloy AB werden angezeigt | Bestanden |
| FT-06 | Land „Deutschland“ und Unternehmenssuche „eco“ kombinieren | Nur EcoForge GmbH wird angezeigt | Bestanden |
| FT-07 | Suchbegriff ohne Treffer eingeben | Hinweis auf fehlende passende Emissionsdaten wird angezeigt | Bestanden |
| FT-08 | Schaltfläche „Filter zurücksetzen“ betätigen | Alle Filter werden entfernt und alle zwölf Datensätze wieder angezeigt | Bestanden |
| FT-09 | Spalte „Land“ auswählen | Daten werden alphabetisch aufsteigend nach Land sortiert | Bestanden |
| FT-10 | Spalte „Land“ erneut auswählen | Sortierrichtung wird umgekehrt | Bestanden |
| FT-11 | Spalte „Unternehmen“ auswählen | Daten werden alphabetisch nach Unternehmen sortiert | Bestanden |
| FT-12 | Spalte „CO₂-Emissionen“ auswählen | Daten werden numerisch aufsteigend sortiert | Bestanden |
| FT-13 | Spalte „CO₂-Emissionen“ erneut auswählen | Numerische Sortierrichtung wird umgekehrt | Bestanden |
| FT-14 | Filter anwenden und anschließend sortieren | Nur gefilterte Datensätze werden sortiert | Bestanden |

## 4. Tests der Schriftkultur

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| SK-01 | Schriftkultur LTR auswählen | Lokale Navigation wird links vom Hauptinhalt dargestellt | Bestanden |
| SK-02 | Schriftkultur RTL auswählen | Lokale Navigation wird rechts vom Hauptinhalt dargestellt | Bestanden |
| SK-03 | Zwischen LTR und RTL wechseln | Nur die Position der lokalen Navigation verändert sich | Bestanden |
| SK-04 | RTL auswählen | Deutsche Texte, Filter und Tabelle bleiben normal lesbar | Bestanden |
| SK-05 | Schriftkultur auswählen und Seite neu laden | Auswahl bleibt durch lokale Speicherung erhalten | Bestanden |
| SK-06 | Ansicht auf Smartphone beziehungsweise Tablet prüfen | Lokale Navigation bleibt in gestapelter Darstellung nutzbar | Bestanden |

## 5. Sicherheitstests

Die sichere Verarbeitung von Benutzereingaben wurde gezielt mit normalen und manipulierten Eingaben überprüft.

| ID | Eingabe beziehungsweise Test | Erwartetes Ergebnis | Status |
|---|---|---|---|
| SEC-01 | Normale Unternehmenssuche mit `Nord` | Reguläre Filterfunktion bleibt erhalten | Bestanden |
| SEC-02 | HTML-ähnliche Eingabe `<b>EcoForge</b>` | Eingabe wird nicht als HTML dargestellt oder ausgeführt | Bestanden |
| SEC-03 | JavaScript-Eingabe über ein `script`-Element | Kein JavaScript wird ausgeführt und kein Dialog erscheint | Bestanden |
| SEC-04 | HTML-Eingabe mit ereignisbasiertem JavaScript-Handler | Kein JavaScript wird ausgeführt und kein Dialog erscheint | Bestanden |
| SEC-05 | Eingabe mit mehr als 80 Zeichen | Unternehmenssuchfeld akzeptiert maximal 80 Zeichen | Bestanden |
| SEC-06 | Sicherheitstests nach späteren Änderungen erneut ausführen | Weiterhin keine Ausführung injizierten Codes | Bestanden |

### Verwendete Sicherheitsmaßnahmen

Die Anwendung verwendet unter anderem:

- Normalisierung freier Texteingaben
- Begrenzung der maximalen Eingabelänge
- Allow-List-Prüfung bei Eingaben mit definierten zulässigen Werten
- erneute Validierung von Werten aus `localStorage`
- Ausgabe dynamischer Tabelleninhalte über `textContent`
- Verzicht auf die Ausgabe von Benutzereingaben über `innerHTML`

Für die geprüften Eingabefälle wurde kein HTML- oder JavaScript-Code ausgeführt.

## 6. Responsive Tests

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| RD-01 | Desktopansicht mit großer Bildschirmbreite | Lokale Navigation und Hauptinhalt werden nebeneinander dargestellt | Bestanden |
| RD-02 | Tabletansicht mit etwa 820 Pixel Breite | Lokale Navigation wird oberhalb des Hauptinhalts dargestellt | Bestanden |
| RD-03 | Smartphoneansicht mit etwa 430 Pixel Breite | Inhalte und Filter werden vollständig lesbar dargestellt | Bestanden |
| RD-04 | Kleine Smartphoneansicht | Die gesamte Seite besitzt keine unnötige horizontale Scrollbewegung | Bestanden |
| RD-05 | Emissionstabelle auf kleinem Bildschirm | Nur der Tabellenbereich kann horizontal gescrollt werden | Bestanden |
| RD-06 | Mobile globale Navigation | Navigation wird über das Bootstrap-Menü ein- und ausgeklappt | Bestanden |
| RD-07 | Lokale Navigation auf Smartphone | Links werden kompakt und nutzbar dargestellt | Bestanden |

## 7. Tests der Tastaturbedienbarkeit und Barrierearmut

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| ACC-01 | Tab-Taste am Seitenanfang verwenden | Skip-Link „Zum Hauptinhalt springen“ wird sichtbar | Bestanden |
| ACC-02 | Skip-Link mit Enter aktivieren | Fokus wechselt zum Hauptinhalt | Bestanden |
| ACC-03 | Mit Tab durch die Anwendung navigieren | Interaktive Elemente sind per Tastatur erreichbar | Bestanden |
| ACC-04 | Sortierbutton mit Enter bedienen | Tabelle wird entsprechend sortiert | Bestanden |
| ACC-05 | Sortierbutton mit Leertaste bedienen | Tabelle wird entsprechend sortiert | Bestanden |
| ACC-06 | Sortierung per Tastatur ausführen | Fokus bleibt auf der gewählten Sortierspalte | Bestanden |
| ACC-07 | Tastaturfokus auf Links, Eingaben und Buttons | Fokus ist visuell deutlich erkennbar | Bestanden |
| ACC-08 | Emissionstabelle aktualisieren | Statusbereich erhält eine textuelle Rückmeldung zur Darstellung und Sortierung | Bestanden |
| ACC-09 | Safari mit aktivierter Tastaturnavigation verwenden | Interaktive Seitenelemente können per Tastatur erreicht werden | Bestanden |

## 8. Browserprüfung

### Google Chrome

Geprüft wurden:

- Laden der Anwendung
- Filterung
- Sortierung
- LTR- und RTL-Darstellung
- Responsive Design
- Tastaturbedienbarkeit
- Sicherheitsfunktionen
- Browserkonsole

**Status:** Bestanden

### Apple Safari

Geprüft wurden:

- Laden der Anwendung
- Filterung
- Sortierung
- LTR- und RTL-Darstellung
- Responsive Design
- Tastaturbedienbarkeit
- Sicherheitsfunktionen
- Browserkonsole

Für die vollständige Tastaturnavigation wurde die entsprechende Safari- beziehungsweise macOS-Einstellung aktiviert.

**Status:** Bestanden

### Mozilla Firefox

Firefox wurde im Rahmen der aktuellen Testphase nicht systematisch geprüft.

**Status:** Nicht getestet

## 9. Konsolenprüfung

Während der Prüfung wurde zunächst eine fehlende Ressource `favicon.ico` mit HTTP-Status 404 festgestellt.

Daraufhin wurde das vorhandene CarbonScope-Logo explizit als SVG-Favicon in `index.html` eingebunden.

Nach der Anpassung wurde der Fehler nicht mehr angezeigt.

Anwendungsbezogene JavaScript-Fehler wurden bei den abschließenden Prüfungen nicht festgestellt.

**Status:** Bestanden

## 10. Screenshots

Folgende Screenshots dokumentieren unterschiedliche Zustände und Bildschirmgrößen der Anwendung:

- `01-desktop-ltr.png` – Desktopdarstellung mit LTR-Schriftkultur
- `02-desktop-rtl.png` – Desktopdarstellung mit RTL-Schriftkultur
- `03-smartphone-430px.png` – Smartphone-Darstellung
- `04-filter-sortierung.png` – kombinierte Filterung und sortierte Emissionstabelle
- `05-tablet-820px.png` – Tablet-Darstellung

Die Dateien befinden sich unter `docs/screenshots/`.

## 11. Testergebnis

Die für Version `v0.9.0` definierten Funktions-, Sicherheits-, Responsive- und Accessibility-Tests wurden erfolgreich durchgeführt.

Die Anwendung zeigte in den getesteten Browsern Google Chrome und Apple Safari keine funktionskritischen Fehler.

Die abschließende Phase umfasst die Validierung und Bereinigung des Quellcodes sowie die Veröffentlichung über GitHub Pages.