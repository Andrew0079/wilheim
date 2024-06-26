interface EventData {
  title: string;
  text: string;
}

// Interface for the service data
interface ServiceData {
  title: string;
  text: string;
}

interface LocalizationData {
  homeTitle: string;
  navigation: string[];
  buttonText: string;
  events: {
    title: string;
    items: EventData[];
  };
  service: {
    title: string;
    text: string;
    services: ServiceData[];
  };
  inquire: {
    title: string;
    text: string;
    subText: string;
  };
  contact: {
    title: string;
    subTitle: {
      one: string;
      two: string;
    };
  };
}

const enLocalization: LocalizationData = {
  homeTitle: "You Bring the Laughter We Serve the Love",
  navigation: [
    "Home",
    "Events",
    "Our Service",
    "Gallery",
    "Inquire",
    "Contact",
  ],
  buttonText: "Inquire Now",
  events: {
    title: "Events",
    items: [
      {
        title: "Birthday",
        text: "The event location in Vienna for birthday parties",
      },
      {
        title: "Company Party",
        text: "The event location in Vienna for company celebrations",
      },
      {
        title: "Christmas Party",
        text: "The event location in Vienna for Christmas parties",
      },
      {
        title: "Bachelor Party",
        text: "The event location in Vienna for bachelor parties",
      },
      {
        title: "Meeting",
        text: "The event location in Vienna for meetings",
      },
      {
        title: "Live Performance",
        text: "The event location in Vienna for concerts",
      },
    ],
  },
  service: {
    title: "Services",
    text: "Why choose Wilheim for your special event? Well, picture this: a place where each sip is a journey through unique and tasty drinks, every bite a burst of culinary delight, and the air filled with the laughter of friends engaged in friendly bouts of table football and darts. But that’s not all – imagine having this vibrant space all to yourself for private celebrations with your inner circle. Here’s the kicker: no hefty rental fees, just a modest deposit of 250€, which comes back to you in the form of on-site drinks.",
    services: [
      {
        title: "Free table reservation",
        text: "Free table reservations allow you to welcome new faces into your event, turning strangers into friends.",
      },
      {
        title: "Venue Reservation",
        text: "Deposit: 250 € in advance. Minimum Spend: 700 €. Indoor 35-60 people. You can use our location for your company presentation in a completely relaxed manner.",
      },
      {
        title: "Indoor & Outdoor",
        text: "We can provide excellent care for up to 60 guests at the location. 60 inside and 40 outside on the terrace. It doesn't matter whether you're sitting or dancing.",
      },
      {
        title: "Sweet Moments",
        text: "Need a cake? We’ve got you covered. Whether you want our expert advice in choosing or prefer to bring your own, the serving is on the house.",
      },
      {
        title: "Best location in the 1st district",
        text: "The Wilheim enjoys one of the best locations in Vienna. Our location is right on the edge of the beautiful Rudolfspark.",
      },
      {
        title: "Groovy Tunes",
        text: "Of course, you are welcome to play your own music using a USB stick. It is also possible to book your own DJ through us.",
      },
      {
        title: "Flexible use",
        text: "The changeable room layout and the flexible variation options for the seating elements create the perfect setting for your company presentation.",
      },
      {
        title: "Entertainment & Multimedia",
        text: "Watch your favorite team playing and don't miss a moment. We offer a variety of sports events.",
      },
      {
        title: "Food & Catering",
        text: "From homemade bread rolls to top catering, everything is possible! You are also allowed to bring snacks and your own cake.",
      },
    ],
  },
  inquire: {
    title: "Inquire",
    text: "INQUIRE NOW FOR YOUR EVENT LOCATION IN VIENNA",
    subText: "✔ NO ROOM RENTAL ✔ NON-BINDING INQUIRY ✔ QUICK RESPONSE",
  },
  contact: {
    title: "Contact",
    subTitle: {
      one: "Customers love our event location and confirm this with their reviews.",
      two: "his is just a small selection of satisfied customers.",
    },
  },
};

export const deLocalization: LocalizationData = {
  homeTitle: "Du bringst das Lachen, wir servieren die Liebe",
  navigation: [
    "Startseite",
    "Veranstaltungen",
    "Unser Service",
    "Galerie",
    "Anfragen",
    "Kontakt",
  ],
  buttonText: "Jetzt Anfragen",
  events: {
    title: "Veranstaltungen",
    items: [
      {
        title: "Geburtstag",
        text: "Der Veranstaltungsort in Wien für Geburtstagsfeiern",
      },
      {
        title: "Betriebsfeier",
        text: "Der Veranstaltungsort in Wien für Firmenfeiern",
      },
      {
        title: "Weihnachtsfeier",
        text: "Der Veranstaltungsort in Wien für Weihnachtsfeiern",
      },
      {
        title: "Junggesellenabschied",
        text: "Der Veranstaltungsort in Wien für Junggesellenabschiede",
      },
      {
        title: "Meeting",
        text: "Der Veranstaltungsort in Wien für Besprechungen",
      },
      {
        title: "Live-Auftritt",
        text: "Der Veranstaltungsort in Wien für Konzerte",
      },
    ],
  },
  service: {
    title: "Unser Service",
    text: "Warum Wilheim für Ihre besondere Veranstaltung wählen? Stellen Sie sich vor: ein Ort, an dem jeder Schluck eine Reise durch einzigartige und leckere Getränke ist, jeder Bissen eine Explosion kulinarischer Freude, und die Luft erfüllt ist vom Lachen von Freunden, die sich in freundlichen Spielen von Tischfußball und Darts engagieren. Aber das ist noch nicht alles – stellen Sie sich vor, diesen lebendigen Raum ganz für sich und Ihre private Feier mit Ihrem inneren Kreis zu haben. Hier ist der Clou: Keine hohen Mietgebühren, nur eine bescheidene Kaution von 250 €, die Ihnen in Form von Vor-Ort-Getränken zurückgegeben wird.",
    services: [
      {
        title: "Kostenlose Tischreservierung",
        text: "Kostenlose Tischreservierungen ermöglichen es Ihnen, neue Gesichter bei Ihrer Veranstaltung zu begrüßen und Fremde in Freunde zu verwandeln.",
      },
      {
        title: "Veranstaltungsortreservierung",
        text: "Kaution: 250 € im Voraus. Mindestumsatz: 700 €. Innenbereich für 35-60 Personen. Sie können unseren Standort für Ihre Unternehmenspräsentation in völlig entspannter Atmosphäre nutzen.",
      },
      {
        title: "Innen- und Außenbereich",
        text: "Wir können eine ausgezeichnete Betreuung für bis zu 60 Gäste vor Ort bieten. 60 drinnen und 40 draußen auf der Terrasse. Es spielt keine Rolle, ob Sie sitzen oder tanzen.",
      },
      {
        title: "Süße Momente",
        text: "Brauchen Sie einen Kuchen? Wir haben Sie abgedeckt. Ob Sie unsere fachkundige Beratung bei der Auswahl wünschen oder lieber Ihren eigenen mitbringen, die Bedienung ist kostenlos.",
      },
      {
        title: "Beste Lage im 1. Bezirk",
        text: "Der Wilheim genießt eine der besten Lagen in Wien. Unser Standort liegt direkt am Rand des schönen Rudolfspark.",
      },
      {
        title: "Tolle Musik",
        text: "Natürlich sind Sie eingeladen, Ihre eigene Musik mit einem USB-Stick abzuspielen. Es ist auch möglich, Ihren eigenen DJ über uns zu buchen.",
      },
      {
        title: "Flexible Nutzung",
        text: "Die veränderbare Raumgestaltung und die flexiblen Variationsmöglichkeiten für die Sitzmöbel schaffen die perfekte Kulisse für Ihre Unternehmenspräsentation.",
      },
      {
        title: "Unterhaltung & Multimedia",
        text: "Sehen Sie Ihr Lieblingsteam spielen und verpassen Sie keinen Moment. Wir bieten eine Vielzahl von Sportveranstaltungen an.",
      },
      {
        title: "Essen & Catering",
        text: "Von hausgemachten Brötchen bis hin zum erstklassigen Catering ist alles möglich! Sie dürfen auch Snacks und Ihren eigenen Kuchen mitbringen.",
      },
    ],
  },
  inquire: {
    title: "Anfragen",
    text: "JETZT ANFRAGEN FÜR IHREN VERANSTALTUNGSORT IN WIEN",
    subText: "✔ KEINE RAUMMIETE ✔ UNVERBINDLICHE ANFRAGE ✔ SCHNELLE ANTWORT",
  },
  contact: {
    title: "Kontakt",
    subTitle: {
      one: "Unsere Veranstaltungsort wird von den Kunden geliebt und dies bestätigen sie mit ihren Bewertungen.",
      two: "Dies ist nur eine kleine Auswahl zufriedener Kunden.",
    },
  },
};

export const getLocalization = (language: "EN" | "DE") => {
  switch (language) {
    case "EN":
      return enLocalization;
    case "DE":
      return deLocalization;
    default:
      return deLocalization;
  }
};
