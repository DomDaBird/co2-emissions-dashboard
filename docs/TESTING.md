# Testdokumentation

Dieses Dokument enthält die Teststrategie und die geplanten beziehungsweise durchgeführten Tests des CO₂ Emissions Dashboards.

## 1. Testbereiche

Während der Entwicklung werden folgende Bereiche überprüft:

- Funktionalität
- Filterung und Sortierung
- Schriftkulturen und Position der lokalen Navigation
- Responsive Design
- Browserkompatibilität
- sichere Verarbeitung von Benutzereingaben
- grundlegende Barrierearmut

## 2. Geplante Testumgebungen

Die Anwendung soll mindestens in folgenden Browsern überprüft werden:

- Google Chrome
- Mozilla Firefox
- Apple Safari

Zusätzlich werden unterschiedliche Bildschirmgrößen über die Entwicklerwerkzeuge der Browser getestet.

## 3. Aktueller Status

Die Grundstruktur der Webanwendung, die dynamische Darstellung der fiktiven CO₂-Emissionsdaten, die Filter- und Sortierfunktionen sowie die Berücksichtigung unterschiedlicher Schriftkulturen sind umgesetzt.

Während der Entwicklung werden grundlegende Funktionsprüfungen durchgeführt. Eine vollständige und systematisch dokumentierte Testphase ist für Version `v0.9.0` vorgesehen.

## 4. Funktionstests für Filterung und Sortierung

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| FT-01 | Anwendung ohne gesetzten Filter öffnen | Alle zwölf Datensätze werden angezeigt | Offen |
| FT-02 | Land „Deutschland“ auswählen | Nur die beiden deutschen Datensätze werden angezeigt | Offen |
| FT-03 | Land „Frankreich“ auswählen | Nur die beiden französischen Datensätze werden angezeigt | Offen |
| FT-04 | Im Unternehmensfeld „eco“ eingeben | Nur passende Unternehmen werden angezeigt | Offen |
| FT-05 | Im Unternehmensfeld „Nord“ eingeben | Unternehmen mit „Nord“ im Namen werden angezeigt | Offen |
| FT-06 | Land und Unternehmenssuche kombinieren | Nur Datensätze, die beide Kriterien erfüllen, werden angezeigt | Offen |
| FT-07 | Suchbegriff ohne Treffer eingeben | Hinweis auf fehlende passende Emissionsdaten wird angezeigt | Offen |
| FT-08 | Schaltfläche „Filter zurücksetzen“ betätigen | Alle Filter werden entfernt und alle Datensätze wieder angezeigt | Offen |
| FT-09 | Spalte „Land“ auswählen | Daten werden alphabetisch nach Land sortiert | Offen |
| FT-10 | Spalte „Land“ erneut auswählen | Sortierrichtung wird umgekehrt | Offen |
| FT-11 | Spalte „Unternehmen“ auswählen | Daten werden alphabetisch nach Unternehmen sortiert | Offen |
| FT-12 | Spalte „CO₂-Emissionen“ auswählen | Daten werden numerisch nach Emissionswert sortiert | Offen |
| FT-13 | Spalte „CO₂-Emissionen“ erneut auswählen | Numerische Sortierrichtung wird umgekehrt | Offen |
| FT-14 | Filter anwenden und anschließend sortieren | Nur gefilterte Datensätze werden sortiert | Offen |

## 5. Tests der Schriftkultur

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| SK-01 | Schriftkultur LTR auswählen | Lokale Navigation wird links vom Hauptinhalt dargestellt | Bestanden |
| SK-02 | Schriftkultur RTL auswählen | Lokale Navigation wird rechts vom Hauptinhalt dargestellt | Bestanden |
| SK-03 | Zwischen LTR und RTL wechseln | Nur die Position der lokalen Navigation verändert sich | Bestanden |
| SK-04 | RTL auswählen | Deutsche Texte, Filter und Tabelle bleiben normal lesbar | Bestanden |
| SK-05 | Schriftkultur auswählen und Seite neu laden | Auswahl bleibt durch lokale Speicherung erhalten | Offen |
| SK-06 | Ansicht auf Smartphone beziehungsweise Tablet prüfen | Lokale Navigation bleibt in der gestapelten Darstellung nutzbar | Offen |

## 6. Responsive Tests

Die responsive Darstellung wird in einer späteren Entwicklungsphase systematisch überprüft.

Dabei werden mindestens folgende Ansichten berücksichtigt:

- Desktop
- Tablet
- Smartphone

Die Darstellung der Navigation, Filterelemente und Emissionstabelle wird dabei insbesondere auf Lesbarkeit, Bedienbarkeit und horizontale Überläufe geprüft.

## 7. Sicherheitstests

Die systematische Überprüfung der sicheren Verarbeitung von Benutzereingaben erfolgt in Version `v0.7.0`.

Geplant sind unter anderem Tests mit HTML- und JavaScript-ähnlichen Eingaben, um sicherzustellen, dass eingegebener Inhalt nicht als ausführbarer Code interpretiert wird.

## 8. Browserkompatibilität

Die abschließende Browserprüfung ist für Version `v0.9.0` vorgesehen.

Geprüft werden mindestens:

- Google Chrome
- Mozilla Firefox
- Apple Safari