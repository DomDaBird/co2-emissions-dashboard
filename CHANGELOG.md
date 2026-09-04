
---

# `CHANGELOG.md`

Die bisherigen Versionen kannst du darunter unverändert lassen. Der obere Teil sollte jetzt so aussehen:

```markdown
# Changelog

In diesem Dokument werden wichtige Änderungen und Entwicklungsstände des Projekts festgehalten.

## [Unreleased]

### Geplant

- sichere Verarbeitung von Eingaben
- Schutz vor HTML- und JavaScript-Injection
- weitere Optimierung des Responsive Designs
- Überprüfung der Barrierearmut
- systematische Tests und Projektdokumentation
- Veröffentlichung über GitHub Pages

## [0.6.0] - 2026-09-04

### Hinzugefügt

- Auswahl zwischen LTR- und RTL-Schriftkulturen
- automatische Erkennung einer grundlegenden Schriftkultur anhand der Browsersprache
- lokale Speicherung der ausgewählten Schriftkultur
- dynamische Positionierung der lokalen Navigation
- eigene JavaScript-Datei `direction.js` für die Steuerung der Schriftkultur

### Geändert

- lokale Navigation wird bei LTR links vom Hauptinhalt dargestellt
- lokale Navigation wird bei RTL rechts vom Hauptinhalt dargestellt
- Schriftkultur beeinflusst ausschließlich die Position der lokalen Navigation
- deutschsprachige Inhalte, Filter und Emissionstabelle behalten ihre normale Schreibrichtung
- responsive Darstellung behält auf kleineren Bildschirmgrößen die gestapelte Navigation bei

## [0.5.0] - 2026-09-04

### Hinzugefügt

- Auswahlfeld zur Filterung nach Land
- Suchfeld zur Filterung nach Unternehmen
- kombinierte Filterung nach Land und Unternehmen
- Schaltfläche zum Zurücksetzen der Filter
- Sortierung nach Land
- Sortierung nach Unternehmen
- numerische Sortierung nach CO₂-Emissionen
- visuelle Anzeige der aktuellen Sortierrichtung
- Meldung bei nicht vorhandenen Suchergebnissen

### Geändert

- Tabellenüberschriften als interaktive Sortierschaltflächen umgesetzt
- Emissionsbereich um eine Filteroberfläche erweitert
- zentrale Anwendungssteuerung um Filter- und Sortierzustand ergänzt
- Überblickstext an die verfügbaren interaktiven Funktionen angepasst

## [0.4.0] - 2026-09-04

### Hinzugefügt

- fiktiver CO₂-Emissionsdatensatz
- zwölf fiktive Unternehmensdatensätze
- dynamische Tabellenerzeugung mit JavaScript
- formatierte Darstellung der Emissionswerte
- responsive Tabellenansicht
- Tabellenbeschriftung und semantische Spaltenüberschriften

### Geändert

- CO₂-Bereich von einem Platzhalter zu einer dynamischen Datenansicht erweitert
- JavaScript-Dateien nach Verantwortlichkeiten strukturiert

## [0.3.0] - 2026-09-04

### Hinzugefügt

- CarbonScope-Logo
- Header mit globaler Navigation
- responsive Bootstrap-Navigation
- lokale Seitennavigation
- strukturierter Hauptinhaltsbereich
- Footer mit rechtlichen Hinweisen
- grundlegendes projektspezifisches Styling
- Platzhalter für die spätere CO₂-Emissionstabelle

## [0.2.0] - 2026-09-04

### Hinzugefügt

- HTML5-Grundgerüst der Webanwendung
- grundlegende semantische Seitenstruktur
- Bootstrap 5 eingebunden
- projektspezifisches Stylesheet verknüpft
- JavaScript-Einstiegspunkt eingebunden
- Metadaten für Zeichencodierung und responsive Darstellung ergänzt

## [0.1.0] - 2026-09-04

### Hinzugefügt

- initiale Projektstruktur
- Projektplan
- dokumentierte Anforderungen
- Entwicklungsphasen
- erste README-Dokumentation
- grundlegende Teststrategie