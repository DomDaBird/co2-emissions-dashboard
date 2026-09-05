
---

# `CHANGELOG.md` vollständig

Hier bitte wirklich den **gesamten bisherigen Inhalt löschen**, damit der versehentlich hineinkopierte Chat-Text verschwindet. :contentReference[oaicite:2]{index=2}

```markdown
# Changelog

In diesem Dokument werden wichtige Änderungen und Entwicklungsstände des Projekts festgehalten.

## [Unreleased]

### Geplant

- weitere Optimierung des Responsive Designs
- Überprüfung der Barrierearmut
- systematische Funktions- und Browsertests
- Vervollständigung der Projektdokumentation
- Veröffentlichung über GitHub Pages

## [0.7.0] - 2026-09-05

### Hinzugefügt

- zentrale Sicherheitsfunktionen in `security.js`
- Normalisierung freier Texteingaben
- Begrenzung des Unternehmenssuchfelds auf maximal 80 Zeichen
- Allow-List-Validierung für Länderwerte
- Allow-List-Validierung für Sortierschlüssel
- Allow-List-Validierung für LTR- und RTL-Werte
- erneute Validierung von Werten aus `localStorage`
- grundlegende Tests gegen HTML-Injection und Cross-Site-Scripting

### Geändert

- Unternehmenssuche verarbeitet normalisierte Eingaben
- Länderfilter akzeptiert ausschließlich Werte aus dem vorhandenen Datensatz
- Schriftkultur akzeptiert ausschließlich `ltr` und `rtl`
- Sortierung akzeptiert ausschließlich definierte Sortierschlüssel
- Sicherheitsfunktionen werden vor den davon abhängigen JavaScript-Dateien geladen

### Sicherheit

- HTML-Injection-Test erfolgreich durchgeführt
- XSS-Test mit `script`-Element erfolgreich durchgeführt
- XSS-Test mit ereignisbasierter HTML-Eingabe erfolgreich durchgeführt
- eingegebener Code wurde bei den durchgeführten Tests nicht ausgeführt
- dynamische Tabelleninhalte werden weiterhin über `textContent` ausgegeben

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

## [0.2.1] - 2026-09-04

### Geändert

- Projektdokumentation an den Entwicklungsstand des HTML-Grundgerüsts angepasst
- Versionsdokumentation aktualisiert

## [0.2.0] - 2026-09-04

### Hinzugefügt

- HTML5-Grundgerüst der Webanwendung
- grundlegende semantische Seitenstruktur
- Bootstrap 5 eingebunden
- projektspezifisches Stylesheet verknüpft
- JavaScript-Einstiegspunkt eingebunden
- Metadaten für Zeichencodierung und responsive Darstellung ergänzt

## [0.1.1] - 2026-09-04

### Hinzugefügt

- initiale Projektstruktur
- Projektplan
- dokumentierte Anforderungen
- Entwicklungsphasen
- erste README-Dokumentation
- grundlegende Teststrategie