# CO₂ Emissions Dashboard

Responsive Webanwendung zur übersichtlichen Darstellung fiktiver CO₂-Emissionsdaten von Ländern und Unternehmen.

Das Projekt entsteht im Rahmen des IU-Kurses  
**IPWA01-01 – Programmierung von Webanwendungsoberflächen**.

## Projektstatus

Responsive Design und grundlegende Barrierearmut der Webanwendung umgesetzt und optimiert.

Aktuelle Version: `v0.8.0`

### Aktueller Entwicklungsstand

- Projektplanung abgeschlossen
- HTML5-Grundgerüst erstellt
- Bootstrap 5 eingebunden
- CarbonScope-Logo integriert
- Header und globale Navigation umgesetzt
- lokale Seitennavigation umgesetzt
- Hauptinhaltsbereich und Footer umgesetzt
- fiktiver CO₂-Emissionsdatensatz erstellt
- Emissionstabelle dynamisch mit JavaScript erzeugt
- Filterung nach Land umgesetzt
- Suche nach Unternehmen umgesetzt
- kombinierte Filterung umgesetzt
- Sortierung nach Land umgesetzt
- Sortierung nach Unternehmen umgesetzt
- numerische Sortierung nach CO₂-Emissionen umgesetzt
- Zurücksetzen der Filter umgesetzt
- LTR- und RTL-Schriftkulturen berücksichtigt
- Position der lokalen Navigation abhängig von der Schriftkultur umgesetzt
- manuelle Auswahl der Schriftkultur integriert
- Auswahl der Schriftkultur lokal im Browser gespeichert
- freie Texteingaben normalisiert und in ihrer Länge begrenzt
- Eingaben mit festgelegten Werten über Allow-Lists validiert
- gespeicherte Werte aus `localStorage` erneut validiert
- dynamische Textausgaben sicher verarbeitet
- grundlegende HTML-Injection- und XSS-Tests erfolgreich durchgeführt
- Desktop-, Tablet- und Smartphone-Darstellung optimiert
- responsive Emissionstabelle mit horizontalem Scrollbereich umgesetzt
- sichtbare Tastatur-Fokuszustände ergänzt
- Skip-Link zum Hauptinhalt integriert
- Sortierfunktionen für die Tastaturbedienung optimiert
- Screenreader-Rückmeldungen für Tabelle und Sortierung ergänzt
- semantische Beschriftungen und ARIA-Attribute erweitert
- Einstellung für reduzierte Animationen berücksichtigt

Als nächster Schritt werden die Funktionen der Anwendung systematisch getestet, die Browserkompatibilität überprüft und die Projektdokumentation vervollständigt.

## Geplante weitere Schritte

- systematische Funktionstests durchführen
- Responsive Design abschließend testen
- Sicherheitstests vervollständigen
- Browserkompatibilität prüfen
- Quellcode überprüfen
- Projektdokumentation vervollständigen
- Screenshots erstellen
- HTML, CSS und JavaScript abschließend validieren
- Anwendung über GitHub Pages veröffentlichen

## Sicherheitskonzept

Benutzereingaben werden grundsätzlich als nicht vertrauenswürdig behandelt.

Zur Absicherung verwendet CarbonScope unter anderem:

- Normalisierung freier Texteingaben
- Begrenzung der maximalen Eingabelänge
- Allow-Lists für Eingaben mit festgelegten Werten
- erneute Validierung gespeicherter Werte
- sichere DOM-Manipulation mit `textContent`
- Verzicht auf die Verarbeitung von Benutzereingaben über `innerHTML`

Dadurch werden eingegebene HTML- oder JavaScript-Inhalte nicht als ausführbarer Code interpretiert.

## Responsive Design und Barrierearmut

Die Benutzeroberfläche wurde für unterschiedliche Bildschirmgrößen optimiert.

Dabei werden unter anderem folgende Maßnahmen eingesetzt:

- responsives Layout mit Bootstrap und eigenen Media Queries
- angepasste Navigation für Desktop, Tablet und Smartphone
- horizontal scrollbar dargestellte Tabelle auf kleinen Bildschirmen
- Skip-Link zum direkten Wechsel in den Hauptinhalt
- sichtbare Fokuszustände für Tastaturnutzer:innen
- vollständig per Tastatur bedienbare Sortierfunktionen
- Wiederherstellung des Tastaturfokus nach einer Sortierung
- Screenreader-Rückmeldungen zur Anzahl und Sortierung der Datensätze
- semantische HTML-Elemente und ARIA-Beschriftungen
- Berücksichtigung der Systemeinstellung für reduzierte Animationen

## Technologien

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript
- Git
- GitHub
- GitHub Pages

## Bildnachweis

Das CarbonScope-Logo wurde 2026 mit ChatGPT erstellt. Ausgangsprompt: „CO₂-Logo mit Sperling in Grün“, anschließend iterativ angepasst.

## Projektstruktur

```text
assets/
├── css/
│   └── styles.css
├── img/
│   └── logo.svg
└── js/
    ├── app.js
    ├── data.js
    ├── direction.js
    ├── filters.js
    ├── security.js
    └── table.js

docs/
├── screenshots/
├── PROJECT_PLAN.md
└── TESTING.md