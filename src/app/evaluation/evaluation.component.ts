import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent {
  wcagCriteria = [
    {
      criteria: '1.1.1 Non-text Content Level A',
      notes: 'Erfordert, dass alle nicht-textlichen Inhalte durch Textäquivalente wie Alt-Texte oder Transkripte ersetzt werden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Bilder und nicht-textlichen Inhalte wurden mit Alt-Texten versehen.'
    },

    {
      criteria: '1.2.1 Audio-only and Video-only (Prerecorded) Level A',
      notes: 'Erfordert, dass Audio- oder Video-Inhalte, die keine Textinhalte haben, mit Textalternativen wie Transkripten versehen werden.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },
    {
      criteria: '1.2.2 Captions (Prerecorded) Level A',
      notes: 'Erfordert, dass alle vorab aufgenommenen Video-Inhalte mit Untertiteln versehen sind, um gehörlosen oder schwerhörigen Benutzern den Zugang zu ermöglichen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle vorab aufgenommenen Videos wurden mit synchronisierten Untertiteln ausgestattet.'
    },
    {
      criteria: '1.2.3 Audio Description or Media Alternative (Prerecorded) Level A',
      notes: 'Erfordert, dass für vorab aufgezeichnete Videos eine Audio-Beschreibung angeboten wird, damit visuelle Inhalte für blinde oder sehbehinderte Benutzer zugänglich sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Vorab aufgezeichnete Videos wurden mit Audio-Beschreibungen ergänzt.'
    },
    {
      criteria: '1.2.4 Captions (Live) Level AA',
      notes: 'Erfordert, dass live übertragene Video-Inhalte (z. B. Webcasts) Untertitel bieten, um Benutzern mit Hörbehinderungen den Zugang zu ermöglichen.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },
    {
      criteria: '1.2.5 Audio Description (Prerecorded) Level AA',
      notes: 'Erfordert, dass vorab aufgezeichnete Videos eine Audio-Beschreibung bieten, wenn visuelle Informationen für das Verständnis wichtig sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Vorab aufgezeichnete Videos wurden mit Audio-Beschreibungen ergänzt, wenn visuelle Informationen wichtig sind.'
    },
    {
      criteria: '1.2.6 Sign Language (Prerecorded) Level AAA',
      notes: 'Erfordert, dass Videos für Benutzer, die Gebärdensprache bevorzugen, eine Gebärdensprachdolmetscher-Option bieten.',
      assessment: 'Dieses Kriterium haben wir nicht umgesetzt'
    },
    {
      criteria: '1.2.7 Extended Audio Description (Prerecorded) Level AAA',
      notes: 'Erfordert, dass Videos für Benutzer, die eine detailliertere Audio-Beschreibung benötigen, eine erweiterte Version der Audio-Beschreibung bieten.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Erweiterte Audio-Beschreibungen wurden für Videos mit komplexen visuellen Inhalten hinzugefügt.'
    },
    {
      criteria: '1.2.8 Media Alternative (Prerecorded) Level AAA',
      notes: 'Erfordert, dass eine mediale Alternative für vorab aufgezeichnete Video-Inhalte bereitgestellt wird, wenn Audio und/oder visuelle Inhalte nicht zugänglich sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle relevanten Medieninhalte wurden mit alternativen Formaten wie Transkripten oder Audios bereitgestellt.'
    },
    {
      criteria: '1.2.9 Audio-only (Live) Level AAA',
      notes: 'Erfordert, dass live übertragene Audio-Inhalte eine Möglichkeit zur visuellen Darstellung bieten, um gehörlose oder schwerhörige Benutzer zu unterstützen.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },

    {
      criteria: '1.3.1 Info and Relationships Level A',
      notes: 'Erfordert, dass alle Informationen auf der Seite und ihre Beziehungen (wie Tabellen oder Formulare) korrekt mit HTML-Elementen und -Strukturen dargestellt werden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Tabellen und Formulare wurden mit korrekt strukturierten HTML-Elementen ausgestattet.'
    },
    {
      criteria: '1.3.2 Meaningful Sequence Level A',
      notes: 'Erfordert, dass Inhalte in einer logischen Reihenfolge präsentiert werden, sodass Benutzer sie auch ohne visuelle Reihenfolge sinnvoll verstehen können.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Inhalte werden in einer klaren, logischen Reihenfolge angezeigt, die durch Bildschirmleser verständlich ist.'
    },
    {
      criteria: '1.3.3 Sensory Characteristics Level A',
      notes: 'Erfordert, dass wichtige Informationen nicht nur durch visuelle oder akustische Merkmale vermittelt werden, sondern auch durch andere Eigenschaften wie Text oder Farben.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle wichtigen Informationen werden sowohl durch Text als auch visuelle Merkmale vermittelt.'
    },
    {
      criteria: '1.3.4 Orientation Level AA',
      notes: 'Erfordert, dass Inhalte in einer Weise präsentiert werden, die es Benutzern ermöglicht, die Orientierung der Seite oder der Ansicht zu ändern, ohne dass Informationen verloren gehen oder die Benutzererfahrung beeinträchtigt wird. Dies bedeutet, dass Inhalte sowohl im Hoch- als auch im Querformat zugänglich bleiben müssen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Unsere Inhalte passen sich der Bildschirmorientierung an und bleiben sowohl im Hoch- als auch im Querformat vollständig zugänglich.'
    },
    {
      criteria: '1.3.5 Identify Input Purpose Level AA',
      notes: 'Erfordert, dass die Eingabefelder (z. B. Formulare) für Benutzer mit assistiven Technologien klar und eindeutig gekennzeichnet sind, damit sie erkennen können, was von ihnen erwartet wird. Die Eingabefelder müssen durch entsprechende Beschriftungen und Hinweise identifiziert werden.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant.'
    },
    {
      criteria: '1.3.6 Identify Purpose Level AAA',
      notes: 'Erfordert, dass Formulare und andere interaktive Elemente so gestaltet sind, dass der Zweck jedes Eingabefeldes eindeutig ist, insbesondere für Benutzer von assistiven Technologien. Dies umfasst auch dynamische Inhalte, bei denen die Bedeutung und der Zweck von Eingaben klar erkennbar sein müssen.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant.'
    },


    // **1.4** Distinguishable
    {
      criteria: '1.4.1 Use of Color Level A',
      notes: 'Erfordert, dass Farbe nicht als einziges Mittel verwendet wird, um Informationen zu vermitteln, da dies für Benutzer mit Farbsehstörungen problematisch sein könnte.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Informationen, die durch Farbe vermittelt werden, sind zusätzlich durch Text oder Symbole erkennbar.'
    },
    {
      criteria: '1.4.2 Audio Control Level A',
      notes: 'Erfordert, dass Audio-Inhalte, die automatisch abgespielt werden, vom Benutzer gestoppt oder pausiert werden können, um unangemessene Störungen zu vermeiden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Es gibt keine automatisch abspielenden Audio-Inhalte.'
    },
    {
      criteria: '1.4.3 Contrast (Minimum) Level AA',
      notes: 'Erfordert, dass der Kontrast zwischen Text und Hintergrund mindestens 4.5:1 beträgt, um den Text für Benutzer mit Sehbehinderungen lesbar zu machen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Der Kontrast zwischen Text und Hintergrund wurde geprüft und beträgt mindestens 4.5:1.'
    },
    {
      criteria: '1.4.4 Resize text Level AA',
      notes: 'Erfordert, dass der Text auf der Seite bis auf 200 % vergrößert werden kann, ohne dass der Inhalt unzugänglich wird oder verloren geht.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Texte können bis zu 200 % vergrößert werden, ohne dass Layout-Probleme auftreten.'
    },
    {
      criteria: '1.4.5 Images of Text Level AA',
      notes: 'Erfordert, dass Text nicht als Bild dargestellt wird, es sei denn, es ist aus einem bestimmten Grund erforderlich (z. B. Logos).',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Texte sind als echter Text und nicht als Bilder eingebunden.'
    },
    {
      criteria: '1.4.6 Contrast (Enhanced) Level AAA',
      notes: 'Erfordert, dass der Kontrast zwischen Text und Hintergrund hoch genug ist, damit auch Menschen mit Sehbehinderungen den Text gut lesen können. Der Kontrastverhältnis muss mindestens 7:1 für normalen Text und 4.5:1 für große Schrift betragen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Texte haben ein ausreichendes Kontrastverhältnis von mindestens 7:1 für normalen Text und 4.5:1 für große Schrift, um eine gute Lesbarkeit zu gewährleisten.'
    },
    {
      criteria: '1.4.7 Low or No Background Audio AAA',
      notes: 'Erfordert, dass Hintergrundmusik oder andere Audioinhalte optional sind oder ganz deaktiviert werden können, damit Benutzer, die auf visuelle Inhalte angewiesen sind, nicht durch störende Geräusche abgelenkt werden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Audioinhalte können vom Benutzer jederzeit deaktiviert werden, um eine bessere Zugänglichkeit zu gewährleisten.'
    },
    {
      criteria: '1.4.8 Visual Presentation Level AAA',
      notes: 'Erfordert, dass Textinhalte so präsentiert werden, dass Benutzer die Darstellung an ihre Bedürfnisse anpassen können, ohne dass Informationen verloren gehen. Dazu gehören Anpassungen wie Schriftgröße, Zeilenabstand und Schriftarten.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Unsere Inhalte sind so gestaltet, dass Benutzer die Schriftgröße, den Zeilenabstand und andere visuelle Eigenschaften anpassen können, ohne dass Inhalte verloren gehen.'
    },
    {
      criteria: '1.4.9 Images of Text (No Exception) Level AAA',
      notes: 'Erfordert, dass Text nicht als Bild dargestellt wird, es sei denn, es gibt einen sehr guten Grund dafür, wie z. B. ein Logo oder eine besondere gestalterische Absicht. Text als Bild erschwert die Anpassung von Schriftgröße und Kontrast für Benutzer mit Sehbehinderungen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Wir verwenden echten Text.'
    },
    {
      criteria: '1.4.10 Reflow Level AAA',
      notes: 'Erfordert, dass Inhalte so gestaltet sind, dass sie sich bei Vergrößerung des Textes oder der Ansicht automatisch umformatieren, sodass der Text nicht horizontal scrollen muss und die Benutzeroberfläche weiterhin benutzbar bleibt.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Unsere Inhalte passen sich dynamisch an, wenn die Textgröße geändert wird, ohne dass ein horizontales Scrollen erforderlich ist, um die Benutzerfreundlichkeit zu gewährleisten.'
    },
    {
      criteria: '1.4.11 Non-text Contrast Level AAA',
      notes: 'Erfordert, dass nicht nur der Text, sondern auch andere wichtige visuelle Elemente wie Schaltflächen, Formulare und Grafiken ein ausreichendes Kontrastverhältnis haben, um sicherzustellen, dass sie für alle Benutzer sichtbar sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle wichtigen visuellen Elemente wie Schaltflächen und Formulare haben ein ausreichendes Kontrastverhältnis von mindestens 3:1, um eine bessere Sichtbarkeit für Benutzer zu gewährleisten.'
    },
    {
      criteria: '1.4.12 Text Spacing Level AAA',
      notes: 'Erfordert, dass Benutzer den Text so anpassen können, dass er leserlicher wird, ohne dass Inhalte abgeschnitten oder unleserlich werden. Dazu gehören Einstellungen wie Zeilenhöhe, Buchstabenabstand und Wortabstand.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Wir ermöglichen es Benutzern, die Textabstände wie Zeilenhöhe und Wortabstände zu ändern, um die Lesbarkeit zu verbessern, ohne dass der Text abgeschnitten wird.'
    },
    {
      criteria: '1.4.13 Content on Hover or Focus Level AAA',
      notes: 'Erfordert, dass Inhalte, die nur beim Hover oder Fokus angezeigt werden, immer zugänglich sind, auch für Benutzer, die mit Tastatur oder assistiven Technologien arbeiten. Informationen dürfen nicht nur auf Hover oder Fokus angezeigt werden, da diese Benutzer möglicherweise keine Maus verwenden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Es gibt keine  Inhalte, die beim Hover oder Fokus angezeigt werden.'
    },

    {
      criteria: '2.1.1 Keyboard Level A',
      notes: 'Erfordert, dass alle interaktiven Elemente über die Tastatur zugänglich sind, ohne dass eine Maus erforderlich ist.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle interaktiven Elemente können vollständig über die Tastatur gesteuert werden.'
    },
    {
      criteria: '2.1.2 No Keyboard Trap Level A',
      notes: 'Erfordert, dass Benutzer nicht in einem interaktiven Element gefangen sind, ohne sich mit der Tastatur davon entfernen zu können.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Es gibt keine Tastaturfallen, alle Elemente sind leicht zugänglich.'
    },
    {
      criteria: '2.1.3 Keyboard (No Exception) Level A',
      notes: 'Erfordert, dass alle interaktiven Elemente über die Tastatur zugänglich sind, ohne dass Ausnahmen gemacht werden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle interaktiven Elemente sind vollständig über die Tastatur zugänglich.'
    },

    {
      criteria: '2.2.1 Timing Adjustable Level A',
      notes: 'Erfordert, dass Benutzern genügend Zeit zum Lesen und Verwenden von Inhalten gegeben wird, wenn Zeitbegrenzungen erforderlich sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Es werden keine Zeitbegrenzungen genutzt'
    },
    {
      criteria: '2.2.2 Pause, Stop, Hide Level A',
      notes: 'Erfordert, dass automatisch abspielende Inhalte pausiert, gestoppt oder ausgeblendet werden können, um Benutzern die Kontrolle zu ermöglichen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Wir nutzen keine automatisch abspielenden Inhalte.'
    },
    {
      criteria: '2.2.3 No Timing Level AAA',
      notes: 'Erfordert, dass Zeitbegrenzungen in interaktiven Elementen vermieden werden, wenn diese für die Benutzer nicht zwingend notwendig sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Keine Zeitbegrenzungen auf der Website.'
    },
    {
      criteria: '2.2.4 Interruptions Level AAA',
      notes: 'Erfordert, dass Nutzer nicht durch zeitgesteuerte Unterbrechungen gestört werden, wenn diese nicht zwingend notwendig sind. Wenn eine Zeitbegrenzung verwendet wird, muss den Benutzern ausreichend Zeit eingeräumt werden, um ihre Aufgaben zu beenden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Es gibt keine zeitgesteuerte Unterbrechungen.'
    },
    {
      criteria: '2.2.5 Re-authenticating Level AAA',
      notes: 'Erfordert, dass Benutzer nicht zu oft oder zu schnell wiederholt ihre Anmeldedaten eingeben müssen. Falls eine erneute Authentifizierung erforderlich ist, muss den Benutzern ausreichend Zeit gegeben werden, um sich erneut anzumelden, und sie müssen vorzeitig benachrichtigt werden.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant.'
    },
    {
      criteria: '2.2.6 Timeouts Level AAA',
      notes: 'Erfordert, dass bei Zeitlimits für Benutzeraktionen, wie z.B. Session-Timeouts, den Benutzern entweder eine Möglichkeit zur Verlängerung des Zeitlimits oder eine Warnung vor Ablauf der Zeit angeboten wird.',
      assessment: 'Wir haben es folgendermaßen umgesetzt:  Wir nutzen keine Zeitlimits.'
    },

    {
      criteria: '2.3.1 Three Flashes or Below Threshold Level A',
      notes: 'Erfordert, dass Inhalte keine Blink- oder Flash-Effekte enthalten, die zu einem Anfall führen könnten.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Auf unserer Website werden keine blinkenden oder schnell flimmernden Effekte benutzt, die potentiell gesundheitliche Risiken wie Anfälle auslösen könnten.'
    },
    {
      criteria: '2.3.2 Three Flashes Level AAA',
      notes: 'Verlangt, dass Inhalte keine blinkenden oder schnell flimmernden Effekte enthalten, die bei einer Frequenz von mehr als 3 Hz und weniger als 55 Hz auftreten, um das Risiko eines Anfalls zu vermeiden. Diese Effekte dürfen keine Reaktionen wie Krampfanfälle oder andere gesundheitliche Probleme bei Nutzern auslösen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Auf unserer Website werden keine blinkenden oder schnell flimmernden Effekte benutzt, die potentiell gesundheitliche Risiken wie Anfälle auslösen könnten.'
    },
    {
      criteria: '2.3.3 Animation from Interactions Level AAA',
      notes: 'Erfordert, dass Animationen, die aus Benutzerinteraktionen entstehen, wie z.B. bei Mausbewegungen oder Klicks, entweder deaktiviert werden können oder den Benutzern eine Möglichkeit geboten wird, diese zu pausieren, zu stoppen oder die Geschwindigkeit zu steuern. Dies hilft, unerwünschte Reaktionen bei Nutzern zu vermeiden, die empfindlich auf solche Bewegungen reagieren.',
      assessment: 'Wir benutzen keine Animationen'
    },
    {
      criteria: '2.4.1 Bypass Blocks Level A',
      notes: 'Erfordert, dass Benutzer schnell zum Hauptinhalt der Seite gelangen können, ohne durch unnötige Navigationselemente hindurch zu müssen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Durch einen Klick auf "Fortgeschrittene-Mensch-Computer-Interaktion" kann der Benutzer jeder Zeit zur Hauptseite zurück kehren'
    },
    {
      criteria: '2.4.2 Page Titled Level A',
      notes: 'Erfordert, dass jede Seite auf der Website einen eindeutigen und beschreibenden Titel hat, der Benutzern hilft, sie zu identifizieren und zu navigieren.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Jede Seite hat einen eindeutigen, beschreibenden Titel.'
    },
    {
      criteria: '2.4.3 Focus Order Level A',
      notes: 'Erfordert, dass die Reihenfolge, in der Elemente den Fokus erhalten, für die Benutzer sinnvoll ist und der logischen Struktur der Seite entspricht.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die Tab-Reihenfolge folgt einer logischen Struktur, die für alle Benutzer verständlich ist.'
    },
    {
      criteria: '2.4.4 Link Purpose (In Context) Level A',
      notes: 'Erfordert, dass der Zweck eines Links für die Benutzer aus dem Kontext heraus eindeutig erkennbar ist, auch wenn der Link isoliert betrachtet wird. Dies bedeutet, dass Links klar benannt oder beschrieben werden müssen, sodass Benutzer verstehen, was sie erwartet, wenn sie auf den Link klicken.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Links sind klar benannt und geben einen eindeutigen Hinweis auf den Zweck der Seite oder Funktion, auf die sie verweisen.'
    },
    {
      criteria: '2.4.5 Multiple Ways Level AA',
      notes: 'Erfordert, dass Benutzer verschiedene Methoden haben, um eine bestimmte Information oder Funktion auf der Website zu finden. Das bedeutet, dass neben der normalen Navigation auch andere Navigationsmethoden wie eine Suchfunktion oder eine Sitemap zur Verfügung stehen müssen.',
      assessment: 'Die Umsetzung könnte optimiert werden, da derzeit nur die Sidebar zur Verfügung steht.'
    },
    {
      criteria: '2.4.6 Headings and Labels Level AA',
      notes: 'Erfordert, dass Überschriften und Bezeichner sinnvoll und konsistent verwendet werden, um den Inhalt der Seite zu strukturieren. Dies hilft den Benutzern, sich auf der Seite zurechtzufinden und den relevanten Inhalt schnell zu identifizieren.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Überschriften und Labels sind klar und konsistent, was den Benutzern hilft, den Inhalt der Seite leicht zu verstehen und zu navigieren.'
    },
    {
      criteria: '2.4.7 Focus Visible Level AA',
      notes: 'Erfordert, dass Benutzer erkennen können, welches Element den Fokus hat, wenn sie durch die Seite navigieren, sei es mit der Tastatur oder einem anderen Eingabegerät. Dies bedeutet, dass das fokussierte Element visuell hervorgehoben wird, sodass Benutzer wissen, welches Element sie gerade verwenden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle fokussierten Elemente auf der Website sind deutlich sichtbar und hervorgerufen, wenn Benutzer die Seite mit der Tastatur oder einem anderen Eingabegerät navigieren.'
    },
    {
      criteria: '2.4.8 Location Level AAA',
      notes: 'Erfordert, dass Benutzer immer wissen, wo sie sich auf einer Website befinden, um die Navigation zu erleichtern. Dies kann durch klare und konsistente Navigationsmenüs, Breadcrumbs oder visuelle Markierungen geschehen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Unsere Website zeigt den Benutzern jederzeit ihren Standort in der Navigationsstruktur an.'
    },
    {
      criteria: '2.4.9 Link Purpose (Link Only) Level AAA',
      notes: 'Erfordert, dass der Zweck von Links, die nur als Links und nicht als Schaltflächen oder andere Interaktionsarten genutzt werden, allein durch den Linktext oder das Kontextumfeld für die Benutzer erkennbar ist. Links sollten so benannt sein, dass der Benutzer ihre Funktion auch ohne zusätzliche Hinweise versteht.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Links auf der Website sind klar benannt, sodass der Zweck des Links für die Benutzer eindeutig erkennbar ist, ohne zusätzliche Kontextinformationen.'
    },
    {
      criteria: '2.4.10 Section Headings Level AAA',
      notes: 'Erfordert, dass Abschnittsüberschriften korrekt und konsistent verwendet werden, um eine klare Struktur und Hierarchie auf der Seite zu gewährleisten. Diese Überschriften helfen Benutzern, sich durch den Inhalt zu navigieren und zu verstehen, wie verschiedene Abschnitte miteinander in Beziehung stehen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle Abschnitte auf der Website sind durch klare und konsistente Überschriften strukturiert, um den Benutzern zu helfen, den Inhalt schnell und einfach zu finden.'
    },

    {
      criteria: '3.1.1 Language of Page Level A',
      notes: 'Erfordert, dass die Hauptsprache der Seite korrekt angegeben wird, damit Screenreader und andere assistive Technologien die Inhalte richtig interpretieren und vorlesen können.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die Sprache der Seite ist korrekt mit dem HTML-Tag "lang" angegeben.'
    },
    {
      criteria: '3.1.2 Language of Parts Level AA',
      notes: 'Verlangt, dass die Sprache von Textabschnitten oder Elementen korrekt angegeben wird, wenn diese sich von der Hauptsprache der Seite unterscheiden (z. B. bei mehrsprachigen Inhalten). Dies ermöglicht eine korrekte Aussprache und Verständlichkeit durch assistive Technologien.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die Sprache einzelner Textteile wurde mit dem Attribut "lang" korrekt gekennzeichnet.'
    },
    {
      criteria: '3.1.3 Unusual Words Level AAA',
      notes: 'Fordert, dass ungewöhnliche oder spezialisierte Wörter (z. B. Fachbegriffe) erklärt oder definiert werden, damit alle Benutzer sie verstehen können, besonders wenn sie mit assistiven Technologien arbeiten.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Ungewöhnliche oder fachliche Begriffe sind entweder definiert oder werden in einfacher Sprache zu verfügung gestellt.'
    },
    {
      criteria: '3.1.4 Abbreviations Level AAA',
      notes: 'Erfordert, dass Abkürzungen oder Akronyme bei ihrer ersten Verwendung auf der Seite erklärt werden, um Missverständnisse zu vermeiden, besonders für Benutzer von assistiven Technologien.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Abkürzungen und Akronyme sind bei ihrer ersten Verwendung entweder definiert. Zum Beispiel auf der Startseite'
    },
    {
      criteria: '3.1.5 Reading Level Level AAA',
      notes: 'Verlangt, dass die Inhalte auf einer Ebene geschrieben werden, die für die Zielgruppe verständlich ist. Komplexe oder technische Texte sollten so aufbereitet werden, dass sie für Benutzer mit unterschiedlichem Lesefähigkeitsniveau zugänglich sind.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Der gesamte Text ist in einfacher Sprache verfügbar. Da die Webseite jedoch Teil einer wissenschaftlichen Arbeit ist, wurde der reguläre Text auf das entsprechende Niveau angepasst, um die fachliche Präzision und Komplexität zu wahren'
    },
    {
      criteria: '3.1.6 Pronunciation Level AAA',
      notes: 'Erfordert, dass die Aussprache von schwer aussprechbaren oder spezielleren Wörtern gegebenenfalls durch eine alternative Beschreibung oder Aussprachehilfe unterstützt wird, damit Benutzer, die auf sprachbasierte Assistenz angewiesen sind, die Inhalte korrekt verstehen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Der gesamte Text ist in einfacher Sprache verfügbar'
    },


    {
      criteria: '3.2.1 On Focus Level A',
      notes: 'Erfordert, dass beim Setzen des Fokus auf ein Element (z. B. durch Tab-Taste oder Klick) der Fokus nicht zu unerwarteten Änderungen auf der Seite führt, sodass die Benutzer in der Lage sind, die Interaktion vorhersehbar zu steuern.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die Tab-Reihenfolge folgt einer logischen Struktur, die für alle Benutzer verständlich ist.'
    },
    {
      criteria: '3.2.2 On Input Level A',
      notes: 'Verlangt, dass die Eingabe von Nutzern keine unerwünschten Auswirkungen auf die Seite hat. Benutzer sollten keine unerwarteten Änderungen oder Aktionen auf der Seite auslösen, wenn sie Daten eingeben (z. B. in ein Formular).',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die Tab-Reihenfolge folgt einer logischen Struktur, die für alle Benutzer verständlich ist. Außerdem müssen nutzer keine Daten eingeben'
    },
    {
      criteria: '3.2.3 Consistent Navigation Level AA',
      notes: 'Erfordert, dass die Navigationselemente auf der Seite konsistent platziert und gestaltet sind, damit Benutzer die Seite leichter durchsuchen und nutzen können. Navigationselemente sollten an den gleichen Stellen bleiben, damit Benutzer sich problemlos zurechtfinden.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die Navigationselemente auf der Webseite sind konsistent und an den gleichen Stellen verfügbar, was die Benutzerführung vereinfacht.'
    },
    {
      criteria: '3.2.4 Consistent Identification Level AA',
      notes: 'Fordert, dass Elemente, die auf der Seite ähnliche Funktionen haben, einheitlich identifiziert werden, z. B. durch ähnliche Bezeichner oder visuelle Merkmale. Dies hilft den Benutzern, die Interaktionen zu verstehen und vorherzusagen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Die visuellen Merkmale und Bezeichner für ähnliche interaktive Elemente sind auf der gesamten Seite konsistent. Zum Beispeil wird beim Hovern immer der gleiche Gelbton genutzt'
    },
    {
      criteria: '3.2.5 Change on Request Level AAA',
      notes: 'Erfordert, dass Änderungen auf der Webseite (z. B. beim Wechseln von Inhalten oder Layouts) nur auf Benutzeranforderung hin erfolgen. Dies verhindert, dass Benutzer durch automatische Änderungen überrascht oder gestört werden.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant.'
    },


    {
      criteria: '3.3.1 Error Identification Level A',
      notes: 'Erfordert, dass Fehler, die beim Ausfüllen von Formularen auftreten, klar und eindeutig identifiziert werden. Benutzer müssen über den Fehler und die Art des Fehlers informiert werden, damit sie den Fehler leicht korrigieren können. Dies ist besonders wichtig für die Barrierefreiheit, um sicherzustellen, dass auch Benutzer mit assistiven Technologien fehlerhafte Eingaben erkennen können.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant.'
    },
    {
      criteria: '3.3.2 Labels or Instructions Level A',
      notes: 'Erfordert, dass alle interaktiven Elemente wie Formulare und Eingabefelder mit klaren Beschriftungen und Anweisungen versehen sind, die den Benutzern helfen, zu verstehen, welche Eingaben erwartet werden. Diese Labels sollten für alle Benutzer, insbesondere für diejenigen, die assistive Technologien verwenden, zugänglich und verständlich sein.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant.'
    },
    {
      criteria: '3.3.3 Error Suggestion Level AA',
      notes: 'Erfordert, dass, wenn ein Fehler gemacht wird, Vorschläge zur Fehlerbehebung angeboten werden, um den Benutzer bei der Korrektur der Eingabe zu unterstützen. Diese Vorschläge müssen einfach und verständlich sein.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },
    {
      criteria: '3.3.4 Error Prevention (Legal, Financial, Data) Level AA',
      notes: 'Erfordert, dass Maßnahmen ergriffen werden, um Fehler in rechtlichen, finanziellen oder datenspezifischen Formularen zu verhindern, bevor sie abgeschickt werden. Benutzer sollten die Möglichkeit haben, ihre Eingaben zu überprüfen und zu bestätigen, bevor sie endgültig gespeichert oder abgeschickt werden.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },
    {
      criteria: '3.3.5 Help Level AAA',
      notes: 'Erfordert, dass den Benutzern Hilfestellungen oder Anleitungen angeboten werden, um Fehler zu vermeiden und die richtige Verwendung von Funktionen zu gewährleisten. Diese Hilfe muss leicht zugänglich und verständlich sein, sodass sie allen Benutzern zugutekommt.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },
    {
      criteria: '3.3.6 Error Prevention (All) Level AAA',
      notes: 'Erfordert, dass für alle wichtigen Interaktionen, die zu Fehlern führen können, eine Möglichkeit zur Fehlervermeidung und -korrektur angeboten wird. Benutzer sollten in der Lage sein, ihre Eingaben zu überprüfen und Fehler zu beheben, bevor sie abgeschickt werden.',
      assessment: 'Dieses Kriterium ist für diese Webseite nicht relevant'
    },


    {
      criteria: '4.1.1 Parsing Level A',
      notes: 'Erfordert, dass der HTML-Code einer Webseite korrekt und konsistent strukturiert ist, damit assistive Technologien wie Screenreader den Inhalt zuverlässig interpretieren können. Die richtige Verwendung von HTML-Tags und Attributen ist entscheidend, um die Seitenstruktur für alle Benutzer zugänglich zu machen.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle HTML-Elemente sind semantisch korrekt und entsprechen den Standard-Webvorgaben, wodurch eine ordnungsgemäße Interpretation durch assistive Technologien gewährleistet wird.'
    },
    {
      criteria: '4.1.2 Name, Role, Value Level A',
      notes: 'Erfordert, dass interaktive Elemente wie Formulare und Steuerungselemente (z. B. Buttons, Dropdown-Menüs) korrekt benannt und mit einer Rolle und einem Wert versehen werden, die es den Benutzern ermöglichen, die Funktionalität dieser Elemente zu verstehen. Dies ist besonders wichtig für assistive Technologien wie Screenreader.',
      assessment: 'Wir haben es folgendermaßen umgesetzt: Alle interaktiven Elemente sind mit den entsprechenden Namen, Rollen und Werten versehen, sodass sie von assistiven Technologien korrekt erkannt und beschrieben werden.'
    }


  ];

  displayedColumns = ['criteria', 'notes', 'assessment'];
}
