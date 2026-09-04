# CO₂ Emissions Dashboard

Responsive Webanwendung zur übersichtlichen Darstellung fiktiver CO₂-Emissionsdaten von Ländern und Unternehmen.

Das Projekt entsteht im Rahmen des IU-Kurses  
**IPWA01-01 – Programmierung von Webanwendungsoberflächen**.

## Projektstatus

Unterstützung unterschiedlicher Schriftkulturen und dynamische Positionierung der lokalen Navigation umgesetzt.

Aktuelle Version: `v0.6.0`

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

Als nächster Schritt wird die sichere Verarbeitung von Benutzereingaben umgesetzt und getestet.

## Geplante weitere Funktionen

- sichere Verarbeitung von Benutzereingaben
- Schutz vor HTML- und JavaScript-Injection
- weitere Optimierung für Desktop, Tablet und Smartphone
- Überprüfung der Barrierearmut
- systematische Funktionstests und Sicherheitstests
- Veröffentlichung über GitHub Pages

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