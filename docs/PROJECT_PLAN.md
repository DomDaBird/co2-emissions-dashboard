# Projektplan – CO₂ Emissions Dashboard

## 1. Projektziel

Ziel des Projekts ist die Entwicklung einer responsiven Webanwendung zur Darstellung fiktiver CO₂-Emissionsdaten.

Die Anwendung soll Nutzer:innen ermöglichen, Emissionswerte verschiedener Länder und Unternehmen übersichtlich darzustellen, zu filtern und zu sortieren.

Die Anwendung wird als clientseitige Webanwendung mit HTML, CSS, Bootstrap und JavaScript umgesetzt.

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

Die Position dieses Menüs wird abhängig von der verwendeten Schriftkultur angepasst:

- bei Links-nach-Rechts-Schriftkulturen (`LTR`) links vom Hauptinhalt
- bei Rechts-nach-Links-Schriftkulturen (`RTL`) rechts vom Hauptinhalt

Die deutschsprachigen Inhalte selbst werden dabei nicht gespiegelt. Die Anpassung beschränkt sich gezielt auf die Position der lokalen Navigation.

Die Schriftkultur kann manuell ausgewählt werden. Zusätzlich wird eine grundlegende Voreinstellung anhand der Browsersprache ermittelt und die Auswahl lokal gespeichert.

**Status:** Erfüllt

---

### REQ-05 – Responsive Design

Die Anwendung ist für unterschiedliche Bildschirmgrößen ausgelegt:

- Desktop
- Tablet
- Smartphone

Für die Umsetzung werden Bootstrap sowie eigenes CSS und Media Queries eingesetzt.

Auf kleineren Bildschirmgrößen werden Navigation, Inhaltsbereiche und Filter neu angeordnet. Die Emissionstabelle besitzt bei begrenzter Breite einen eigenen horizontalen Scrollbereich, sodass die gesamte Seite nicht horizontal verschoben werden muss.

**Status:** Erfüllt

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

Beide Filter können miteinander kombiniert und gemeinsam zurückgesetzt werden.

**Status:** Erfüllt

---

### REQ-08 – Sortierung

Die Tabelle kann nach relevanten Spalten sortiert werden:

- Land
- Unternehmen
- CO₂-Emission

Die Sortierrichtung kann zwischen aufsteigend und absteigend gewechselt werden.

**Status:** Erfüllt

---

### REQ-09 – Sichere Eingabeverarbeitung

Benutzereingaben werden grundsätzlich als nicht vertrauenswürdig behandelt.

Freie Texteingaben werden vor der weiteren Verarbeitung normalisiert und in ihrer Länge begrenzt.

Eingaben mit einer festgelegten Menge zulässiger Werte werden über Allow-Lists validiert. Dies betrifft unter anderem:

- Länderwerte
- Sortierschlüssel
- LTR- und RTL-Werte

Auch aus dem `localStorage` gelesene Werte werden vor ihrer Verwendung erneut validiert.

Dynamisch erzeugte Tabelleninhalte werden über sichere DOM-Operationen wie `textContent` ausgegeben. Benutzereingaben werden nicht über `innerHTML` in das Dokument eingefügt.

Tests mit HTML- und JavaScript-ähnlichen Eingaben wurden durchgeführt. Dabei wurde kein injizierter Code ausgeführt.

**Status:** Erfüllt

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

Verwaltet den aktuellen Zustand der Filterung und Sortierung und verwendet Sicherheitsfunktionen zur Validierung der verarbeiteten Werte.

Nach der Neudarstellung einer sortierten Tabelle wird der Tastaturfokus bei Bedarf auf die zuvor verwendete Sortierschaltfläche zurückgesetzt.

### `data.js`

Enthält die fiktiven CO₂-Emissionsdaten.

### `direction.js`

Steuert die Berücksichtigung unterschiedlicher Schriftkulturen.

Die Datei enthält Funktionen für:

- Erkennung einer grundlegenden LTR- oder RTL-Schriftkultur
- manuelle Auswahl der Schriftkultur
- lokale Speicherung der Auswahl
- Validierung zulässiger Schriftkulturwerte
- dynamische Positionierung der lokalen Navigation

### `filters.js`

Enthält die Logik für:

- Filterung nach Land
- Filterung nach Unternehmen
- kombinierte Filterung
- Sortierung der Emissionsdaten

### `security.js`

Enthält zentrale Hilfsfunktionen zur sicheren Verarbeitung von Benutzereingaben.

Dazu gehören:

- Normalisierung freier Texteingaben
- Begrenzung der Eingabelänge
- Allow-List-Validierung für Werte mit einer festgelegten Menge zulässiger Optionen

### `table.js`

Erzeugt und aktualisiert die Emissionstabelle.

Stellt sortierbare Tabellenüberschriften sowie die aktuelle Sortierrichtung dar.

Dynamische Tabelleninhalte werden als Text über DOM-Operationen wie `textContent` eingefügt.

Zusätzlich werden ARIA-Sortierzustände und Statusmeldungen für unterstützende Technologien bereitgestellt.

### `styles.css`

Enthält projektspezifische CSS-Regeln und ergänzt das Bootstrap-Layout.

Die Datei enthält unter anderem:

- responsive Anpassungen für verschiedene Bildschirmgrößen
- sichtbare Fokuszustände
- Darstellung des Skip-Links
- mobile Navigation
- horizontal scrollbar dargestellte Tabelle
- Berücksichtigung reduzierter Animationen

---

## 5. Entwicklungsphasen

### Phase 0 – Planung

- [x] Repository anlegen
- [x] Projektstruktur erstellen
- [x] Anforderungen dokumentieren
- [x] Technologien festlegen

**Status:** Abgeschlossen

**Version:** `v0.1.1`

---

### Phase 1 – Projektgrundgerüst

- [x] Grundstruktur der `index.html` erstellen
- [x] Bootstrap einbinden
- [x] CSS- und JavaScript-Dateien anbinden
- [x] grundlegende semantische HTML-Struktur erstellen

**Status:** Abgeschlossen

**Version:** `v0.2.0`

**Dokumentationsstand:** `v0.2.1`

---

### Phase 2 – Grundlayout

- [x] Header erstellen
- [x] globale Navigation erstellen
- [x] Hauptinhaltsbereich strukturieren
- [x] lokale Navigation erstellen
- [x] Footer ergänzen
- [x] Logo integrieren

**Status:** Abgeschlossen

**Version:** `v0.3.0`

---

### Phase 3 – CO₂-Datensatz

- [x] fiktiven Datensatz erstellen
- [x] Tabelle dynamisch mit JavaScript erzeugen

**Status:** Abgeschlossen

**Version:** `v0.4.0`

---

### Phase 4 – Filtern und Sortieren

- [x] Filterung nach Land
- [x] Filterung nach Unternehmen
- [x] kombinierte Filterung
- [x] Sortierung nach Land
- [x] Sortierung nach Unternehmen
- [x] Sortierung nach CO₂-Emission
- [x] Filter zurücksetzen
- [x] aktuelle Sortierrichtung darstellen

**Status:** Abgeschlossen

**Version:** `v0.5.0`

---

### Phase 5 – Schriftkulturen

- [x] LTR-Darstellung berücksichtigen
- [x] RTL-Darstellung berücksichtigen
- [x] lokale Navigation dynamisch positionieren
- [x] manuelle Auswahl der Schriftkultur ermöglichen
- [x] ausgewählte Schriftkultur lokal speichern
- [x] deutschsprachige Inhalte von der Positionsänderung unberührt lassen

**Status:** Abgeschlossen

**Version:** `v0.6.0`

---

### Phase 6 – Sicherheit

- [x] Benutzereingaben überprüfen
- [x] freie Texteingaben normalisieren
- [x] maximale Eingabelänge begrenzen
- [x] feste Eingabewerte über Allow-Lists validieren
- [x] gespeicherte Werte erneut validieren
- [x] unsichere HTML-Ausgabe vermeiden
- [x] HTML-Injection verhindern
- [x] Ausführung eingeschleusten JavaScript-Codes verhindern
- [x] grundlegende Sicherheitstests dokumentieren

**Status:** Abgeschlossen

**Version:** `v0.7.0`

---

### Phase 7 – Responsive Design und Barrierearmut

- [x] Desktopdarstellung optimieren
- [x] Tabletdarstellung optimieren
- [x] Smartphonedarstellung optimieren
- [x] mobile Navigation überprüfen
- [x] Tabelle für kleine Bildschirmgrößen optimieren
- [x] Tastaturbedienbarkeit überprüfen
- [x] sichtbare Fokuszustände ergänzen
- [x] Skip-Link ergänzen
- [x] Tastaturfokus nach Sortierung erhalten
- [x] semantisches HTML und Beschriftungen überprüfen
- [x] Screenreader-Rückmeldungen ergänzen
- [x] reduzierte Animationen berücksichtigen

**Status:** Abgeschlossen

**Version:** `v0.8.0`

---

### Phase 8 – Tests und Dokumentation

- [ ] Funktionstests systematisch durchführen
- [ ] Responsive Design abschließend testen
- [ ] Sicherheitstests vervollständigen
- [ ] Browserkompatibilität prüfen
- [ ] Quellcode überprüfen
- [ ] README vervollständigen
- [ ] Screenshots erstellen

**Status:** Offen

**Zielversion:** `v0.9.0`

---

### Phase 9 – Abschluss

- [ ] HTML validieren
- [ ] JavaScript überprüfen
- [ ] CSS bereinigen
- [ ] ungenutzten Code entfernen
- [ ] Dokumentation abschließen
- [ ] Anwendung über GitHub Pages veröffentlichen

**Status:** Offen

**Zielversion:** `v1.0.0`

---

## 6. Definition of Done

Das Projekt gilt als abgeschlossen, wenn:

- alle Anforderungen umgesetzt wurden
- Titel und Logo vorhanden sind
- Header, Navigation, Inhaltsbereich und Footer vorhanden sind
- die CO₂-Daten vollständig dargestellt werden
- Filterung und Sortierung funktionieren
- die Position der lokalen Navigation unterschiedliche Schriftkulturen berücksichtigt
- Benutzereingaben keinen injizierten Code ausführen können
- die Anwendung auf Desktop, Tablet und Smartphone funktioniert
- die Anwendung grundlegend per Tastatur bedienbar ist
- der Quellcode strukturiert und dokumentiert ist
- die definierten Testfälle erfolgreich durchgeführt wurden
- die Anwendung über GitHub Pages erreichbar ist
- die Git-Historie die Entwicklung nachvollziehbar dokumentiert
- die Projektdokumentation vollständig ist