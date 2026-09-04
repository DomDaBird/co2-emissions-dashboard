---
# Projektplan – CO₂ Emissions Dashboard
---

## 1. Projektziel

Ziel des Projekts ist die Entwicklung einer responsiven Webanwendung zur Darstellung fiktiver CO₂-Emissionsdaten.

Die Anwendung soll Nutzer:innen ermöglichen, Emissionswerte verschiedener Länder und Unternehmen übersichtlich darzustellen, zu filtern und zu sortieren.

## Die Anwendung wird als clientseitige Webanwendung mit HTML, CSS, Bootstrap und JavaScript umgesetzt.

## 2. Anforderungen

### REQ-01 – Öffentliches Repository

Der vollständige Quellcode wird in einem öffentlichen GitHub-Repository verwaltet.

**Status:** Erfüllt

---

### REQ-02 – Titel und Logo

Die Webanwendung besitzt:

- einen Anwendungstitel
- ein Logo

**Status:** Erfüllt

---

### REQ-03 – Seitenstruktur

Die Anwendung enthält:

- Header
- globale Navigation
- Hauptinhaltsbereich
- Footer mit rechtlichen Hinweisen

**Status:** Erfüllt

---

### REQ-04 – Lokale Navigation und Schriftkultur

Die Anwendung besitzt zusätzlich ein lokales Navigationsmenü.

Die Position dieses Menüs wird abhängig von der verwendeten Schreibrichtung angepasst:

- Links-nach-Rechts (`LTR`)
- Rechts-nach-Links (`RTL`)

**Status:** Teilweise erfüllt

---

### REQ-05 – Responsive Design

Die Anwendung soll auf unterschiedlichen Bildschirmgrößen nutzbar sein:

- Desktop
- Tablet
- Smartphone

Für die Umsetzung werden Bootstrap sowie eigenes CSS eingesetzt.

**Status:** Teilweise erfüllt

---

### REQ-06 – CO₂-Emissionsdaten

Fiktive CO₂-Emissionsdaten werden in einer Tabelle dargestellt.

Ein Datensatz enthält mindestens:

- Land
- Unternehmen
- jährliche CO₂-Emission

**Status:** Erfüllt

---

### REQ-07 – Filterung

Die dargestellten Daten können nach folgenden Kriterien gefiltert werden:

- Land
- Unternehmen

**Status:** Geplant

---

### REQ-08 – Sortierung

Die Tabelle kann nach relevanten Spalten sortiert werden:

- Land
- Unternehmen
- CO₂-Emission

**Status:** Geplant

---

### REQ-09 – Sichere Eingabeverarbeitung

Von Nutzer:innen eingegebene Inhalte dürfen nicht als ausführbarer HTML- oder JavaScript-Code interpretiert werden.

Unsichere DOM-Manipulationen sollen vermieden und Eingaben bei Bedarf geprüft beziehungsweise normalisiert werden.

**Status:** Geplant

---

## 3. Technischer Aufbau

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript

### Datenhaltung

Die Anwendung verwendet einen lokal definierten, fiktiven Datensatz.

Eine externe API oder Datenbank ist für die Anwendung nicht erforderlich.

### Versionsverwaltung

- Git
- GitHub

### Deployment

Die fertige Anwendung soll über GitHub Pages veröffentlicht werden.

---

## 4. Dateistruktur

### `app.js`

Initialisierung und zentrale Steuerung der Anwendung.

### `data.js`

Enthält die fiktiven CO₂-Emissionsdaten.

### `table.js`

Erzeugt und aktualisiert die Emissionstabelle.

### `filters.js`

Enthält die Logik für Filterung und Sortierung.

### `security.js`

Enthält Hilfsfunktionen zur sicheren Verarbeitung von Benutzereingaben.

### `styles.css`

Enthält projektspezifische CSS-Regeln und ergänzt das Bootstrap-Layout.

---

## 5. Entwicklungsphasen

### Phase 0 – Planung

- Repository anlegen
- Projektstruktur erstellen
- Anforderungen dokumentieren
- Technologien festlegen

**Status:** Abgeschlossen

**Version:** `v0.1.0`

---

### Phase 1 – Projektgrundgerüst

- Grundstruktur der `index.html` erstellen
- Bootstrap einbinden
- CSS- und JavaScript-Dateien anbinden
- grundlegende semantische HTML-Struktur erstellen

**Status:** Abgeschlossen

**Version:** `v0.2.0`

---

### Phase 2 – Grundlayout

- Header erstellen
- globale Navigation erstellen
- Hauptinhaltsbereich strukturieren
- lokale Navigation erstellen
- Footer ergänzen
- Logo integrieren

**Status:** Abgeschlossen

**Version:** `v0.3.0`

---

### Phase 3 – CO₂-Datensatz

- fiktiven Datensatz erstellen
- Tabelle dynamisch mit JavaScript erzeugen

**Status:** Abgeschlossen

**Version:** `v0.4.0`

---

### Phase 4 – Filtern und Sortieren

- Filterung nach Land
- Filterung nach Unternehmen
- Sortierung der Tabelle
- Filter zurücksetzen

**Zielversion:** `v0.5.0`

---

### Phase 5 – Schriftkulturen

- LTR-Darstellung umsetzen
- RTL-Darstellung umsetzen
- lokale Navigation dynamisch positionieren

**Zielversion:** `v0.6.0`

---

### Phase 6 – Sicherheit

- Benutzereingaben überprüfen
- HTML-Injection verhindern
- Ausführung eingeschleusten JavaScript-Codes verhindern
- Sicherheitstests dokumentieren

**Zielversion:** `v0.7.0`

---

### Phase 7 – Responsive Design und Barrierearmut

- Desktopdarstellung optimieren
- Tabletdarstellung optimieren
- Smartphonedarstellung optimieren
- Tastaturbedienbarkeit überprüfen
- semantisches HTML und Beschriftungen überprüfen

**Zielversion:** `v0.8.0`

---

### Phase 8 – Tests und Dokumentation

- Funktionstests durchführen
- Responsive Design testen
- Sicherheitstests durchführen
- Browserkompatibilität prüfen
- Quellcode dokumentieren
- README vervollständigen
- Screenshots erstellen

**Zielversion:** `v0.9.0`

---

### Phase 9 – Abschluss

- HTML validieren
- JavaScript überprüfen
- CSS bereinigen
- ungenutzten Code entfernen
- Dokumentation abschließen
- Anwendung über GitHub Pages veröffentlichen

**Zielversion:** `v1.0.0`

---

## 6. Definition of Done

Das Projekt gilt als abgeschlossen, wenn:

- alle Anforderungen umgesetzt wurden
- Titel und Logo vorhanden sind
- Header, Navigation, Inhaltsbereich und Footer vorhanden sind
- die CO₂-Daten vollständig dargestellt werden
- Filterung und Sortierung funktionieren
- LTR- und RTL-Darstellung funktionieren
- Benutzereingaben keinen injizierten Code ausführen können
- die Anwendung auf Desktop, Tablet und Smartphone funktioniert
- der Quellcode strukturiert und dokumentiert ist
- die definierten Testfälle erfolgreich durchgeführt wurden
- die Anwendung über GitHub Pages erreichbar ist
- die Git-Historie die Entwicklung nachvollziehbar dokumentiert
- die Projektdokumentation vollständig ist
