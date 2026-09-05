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
- Tastaturbedienbarkeit

## 2. Geplante Testumgebungen

Die Anwendung soll mindestens in folgenden Browsern überprüft werden:

- Google Chrome
- Mozilla Firefox
- Apple Safari

Zusätzlich werden unterschiedliche Bildschirmgrößen über die Entwicklerwerkzeuge der Browser getestet.

## 3. Aktueller Status

Die Grundstruktur der Webanwendung, die dynamische Darstellung der fiktiven CO₂-Emissionsdaten, die Filter- und Sortierfunktionen, die Berücksichtigung unterschiedlicher Schriftkulturen, grundlegende Sicherheitsmaßnahmen sowie responsive und barrierearme Bedienfunktionen sind umgesetzt.

Für Version `v0.7.0` wurden gezielte Sicherheitstests durchgeführt.

Für Version `v0.8.0` wurden die Darstellung auf unterschiedlichen Bildschirmgrößen sowie grundlegende Funktionen der Tastaturbedienbarkeit überprüft.

Eine vollständige systematische Testphase mit allen Funktionstests und der Browserkompatibilität ist für Version `v0.9.0` vorgesehen.

## 4. Funktionstests für Filterung und Sortierung

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| FT-01 | Anwendung ohne gesetzten Filter öffnen | Alle zwölf Datensätze werden angezeigt | Offen |
| FT-02 | Land „Deutschland“ auswählen | Nur die beiden deutschen Datensätze werden angezeigt | Offen |
| FT-03 | Land „Frankreich“ auswählen | Nur die beiden französischen Datensätze werden angezeigt | Offen |
| FT-04 | Im Unternehmensfeld „eco“ eingeben | Nur passende Unternehmen werden angezeigt | Offen |
| FT-05 | Im Unternehmensfeld „Nord“ eingeben | Unternehmen mit „Nord“ im Namen werden angezeigt | Bestanden |
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
| SK-06 | Ansicht auf Smartphone beziehungsweise Tablet prüfen | Lokale Navigation bleibt in der gestapelten Darstellung nutzbar | Bestanden |

## 6. Sicherheitstests

Die sichere Verarbeitung von Benutzereingaben wurde in Version `v0.7.0` gezielt überprüft.

| ID | Eingabe beziehungsweise Test | Erwartetes Ergebnis | Status |
|---|---|---|---|
| SEC-01 | Normale Unternehmenssuche mit `Nord` | Reguläre Filterfunktion bleibt erhalten | Bestanden |
| SEC-02 | HTML-ähnliche Eingabe `<b>EcoForge</b>` | Eingabe wird nicht als HTML dargestellt oder ausgeführt | Bestanden |
| SEC-03 | JavaScript-Eingabe über ein `script`-Element | Kein JavaScript wird ausgeführt und kein Dialog erscheint | Bestanden |
| SEC-04 | HTML-Eingabe mit ereignisbasiertem JavaScript-Handler | Kein JavaScript wird ausgeführt und kein Dialog erscheint | Bestanden |
| SEC-05 | Eingabe mit mehr als 80 Zeichen | Unternehmenssuchfeld akzeptiert maximal 80 Zeichen | Bestanden |
| SEC-06 | Sicherheitstests nach den Änderungen von v0.8 wiederholen | Weiterhin keine Ausführung injizierten Codes | Bestanden |

### Verwendete Sicherheitsmaßnahmen

Die Anwendung verwendet unter anderem:

- Normalisierung freier Texteingaben
- Begrenzung der maximalen Eingabelänge
- Allow-List-Prüfung bei Eingaben mit definierten zulässigen Werten
- erneute Validierung von Werten aus `localStorage`
- Ausgabe dynamischer Tabelleninhalte über `textContent`
- Verzicht auf die Ausgabe von Benutzereingaben über `innerHTML`

## 7. Responsive Tests

| ID | Testfall | Erwartetes Ergebnis | Status |
|---|---|---|---|
| RD-01 | Desktopansicht mit großer Bildschirmbreite | Lokale Navigation und Hauptinhalt werden nebeneinander dargestellt | Bestanden |
| RD-02 | Tabletansicht mit etwa 768 Pixel Breite | Lokale Navigation wird oberhalb des Hauptinhalts dargestellt | Bestanden |
| RD-03 | Smartphoneansicht mit etwa 375 Pixel Breite | Inhalte und Filter werden vollständig lesbar dargestellt | Bestanden |
| RD-04 | Smartphoneansicht mit etwa 320 Pixel Breite | Die gesamte Seite besitzt keine unnötige horizontale Scrollbewegung | Bestanden |
| RD-05 | Emissionstabelle auf kleinem Bildschirm | Nur der Tabellenbereich kann horizontal gescrollt werden | Bestanden |
| RD-06 | Mobile globale Navigation | Navigation wird über das Bootstrap-Menü ein- und ausgeklappt | Bestanden |
| RD-07 | Lokale Navigation auf Smartphone | Links werden kompakt und nutzbar dargestellt | Bestanden |

## 8. Tests der Tastaturbedienbarkeit und Barrierearmut

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
| ACC-09 | Browserkonsole während der Tests prüfen | Keine roten JavaScript-Fehler | Bestanden |

## 9. Browserkompatibilität

Die abschließende Browserprüfung ist für Version `v0.9.0` vorgesehen.

Geprüft werden mindestens:

- Google Chrome
- Mozilla Firefox
- Apple Safari

**Status:** Offen