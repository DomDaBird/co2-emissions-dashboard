# CO₂ Emissions Dashboard

Responsive Webanwendung zur übersichtlichen Darstellung fiktiver CO₂-Emissionsdaten von Ländern und Unternehmen.

Das Projekt entsteht im Rahmen des IU-Kurses  
**IPWA01-01 – Programmierung von Webanwendungsoberflächen**.

## Projektstatus

Sichere Verarbeitung von Benutzereingaben und Schutz vor der Ausführung injizierten Codes umgesetzt.

Aktuelle Version: `v0.7.0`

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
- dynamische Textausgaben ausschließlich als Text verarbeitet
- grundlegende HTML-Injection- und XSS-Tests erfolgreich durchgeführt

Als nächster Schritt werden das Responsive Design und die grundlegende Barrierearmut der Anwendung systematisch überprüft und optimiert.

## Geplante weitere Funktionen

- weitere Optimierung für Desktop, Tablet und Smartphone
- Überprüfung der Tastaturbedienbarkeit
- Überprüfung semantischer HTML-Strukturen und Beschriftungen
- systematische Funktionstests
- Browserkompatibilität prüfen
- Projektdokumentation vervollständigen
- Veröffentlichung über GitHub Pages

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