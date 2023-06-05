const content =  {
    nav: {
        navLinks: [
            {
                name: "Bestsellers",
                to: "#bestsellers"
            },
            {
                name: "New Games",
                to: "#new-games"
            }
        ],

        navImg: {
            url: "/logo.png",
            alt: "Bitte alt text hier"
        },

        shoppingCart: {
            svg: (
                <>
                <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                </>
            ),
        }
    },

    cart: {
        removeIcon: (
                <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                <path d="m18 9-6 6"></path>
                <path d="m12 9 6 6"></path>
                </svg>
            )
    },

    slideshow: [
        {
            url: "/minecraft_slideshow.png",
            text: "Minecraft",
            alt: "Minecraft Banner"
        },
        {
            url: "/fortnite_slideshow.png",
            text: "Fortnite",
            alt: "Fortnite Banner"
        },
        {
            video: true,
            url: "/GTA_6_Trailer.mp4",
            text: "GTA 6",
            alt: "GTA 6 Video"
        },
    ],

    bestseller: {
        title: "Bestseller",
        cards: [
            {
                name: "Bestseller 1",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "Bestseller 2",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "Bestseller 3",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "Bestseller 4",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
        ]
    },

    new: {
        title: "New-Games",
        cards: [
            {
                name: "New 1",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "New 2",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "New 3",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "New 4",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
        ]
    },

    games: [
        {
            name: "Minecraft",
            imageUrl: "/minecraft_buy.png",
            alt: "Minecraft Picture",
            type: "bestseller",
            id: 1,
            price: "25,99€"
        },
        {
            name: "Fortnite",
            imageUrl: "/fortnite_buy.png",
            alt: "Fortnite Picture",
            type: "bestseller",
            id: 2,
            price: "free"
        },
        {
            name: "GTA 5",
            imageUrl: "/GTA_buy.png",
            alt: "GTA 5 Picture",
            type: "bestseller",
            id: 3,
            price: "29,99€"
        },
        {
            name: "PUBG",
            imageUrl: "/PUBG_buy.png",
            alt: "Alt Text Here",
            type: "bestseller",
            id: 4,
            price: "free"
        },
        {
            name: "Diablo IV",
            imageUrl: "/diablo_4_buy.png",
            alt: "Diablo IV Picture",
            type: "new-games",
            id: 5,
            price: "69.99€"
        },
        {
            name: "The Legend of Zelda: Tears of the Kingdom",
            imageUrl: "/TLOZ_TOTK_buy.png",
            alt: "The Legend of Zelda: Tears of the Kingdom Picture",
            type: "new-games",
            id: 6,
            price: "59.99€"
        },
        {
            name: "Sons of the Forest",
            imageUrl: "/SOTF_buy.png",
            alt: "Sons of the Forest Picture",
            type: "new-games",
            id: 7,
            price: "28.99€"
        },
        {
            name: "Hogwarts Legacy",
            imageUrl: "/Hog_Leg_buy.png",
            alt: "Hogwarts Legacy Picture",
            type: "new-games",
            id: 8,
            price: "69.99€"
        },
    ],

    gallery: {
        images: [
            {
                smallUrl: "/Assasins_Creed.png",
                url: "/Assasins_Creed.png",
                alt: "Assasins Creed Picture"
            },
            {
                smallUrl: "/Call_of_Duty.png",
                url: "/Call_of_Duty.png",
                alt: "Call of Duty Picture"
            },
            {
                smallUrl: "/FIFA.png",
                url: "/FIFA.png",
                alt: "FIFA Picture"
            },
            {
                smallUrl: "/GoatSimulator.png",
                url: "/GoatSimulator.png",
                alt: "Goat Simulator Picture"
            },
            {
                smallUrl: "/God_of_War.png",
                url: "/God_of_War.png",
                alt: "God of War Picture"
            },
            {
                smallUrl: "/Hitman.png",
                url: "/Hitman.png",
                alt: "Hitman Picture"
            },
            {
                smallUrl: "/LuigisMansion.png",
                url: "/LuigisMansion.png",
                alt: "Mario: Luigis Mansion Picture"
            },
            {
                smallUrl: "/Mario.png",
                url: "/Mario.png",
                alt: "Mario 64 Picture"
            },
            {
                smallUrl: "/Mario_Kart.png",
                url: "/Mario_Kart.png",
                alt: "Mario Kart Picture"
            },
            {
                smallUrl: "/Mario_odyssey.png",
                url: "/Mario_odyssey.png",
                alt: "Mario Odyssey"
            },
            {
                smallUrl: "/Mario_pinguin.png",
                url: "/Mario_pinguin.png",
                alt: "Mario and Pinguin Picture"
            },
            {
                smallUrl: "/Mario3d.png",
                url: "/Mario3d.png",
                alt: "Mario 3d World Picture"
            },
            {
                smallUrl: "/Minecraft.png",
                url: "/Minecraft.png",
                alt: "Minecraft Picture"
            },
            {
                smallUrl: "/Red_dead_redemption.png",
                url: "/Red_dead_redemption.png",
                alt: "Red Dead Redemption Picture"
            },
            {
                smallUrl: "/Resident_evil.png",
                url: "/Resident_evil.png",
                alt: "Resident Evil Picture"
            },
            {
                smallUrl: "/Sackboy.png",
                url: "/Sackboy.png",
                alt: "Sackboy "
            },

        ]
    },

    mailAdress: "manuel.neurauter@sz-ybbs.ac.at",

    form: {
        subjectPlaceholder: "Subject",
        contentPlaceholder: "Content"
    },

    imprint: {
        firmawortlaut: [
            "GameGo ",
            "Offene Gesellschaft"
        ],
        unternehmensgegenstand: "Marketing",
        UIDNr: "ATU12345678",
        firmenbuchnummer: "123456a",
        firmenbuchgericht: "Wien",
        firmensitz: "1070 Wien",
        volleGeographischeAnschrift: "Stiftgasse 18 | Wien",
        kontaktdaten: [
            "TEL: +43 677 61622407",
            "Mail: manuel.neurauter@sz-ybbs.ac.at"
        ],
        mitgliedschaftenBeiDerWKO: "Mitglied der WKÖ, WKNÖ, Landesinnung Marketing, Bundesinnung Marketing",
        anwendbareRechtsvorschriften: {
            berufsrecht: {
                gewerbeordnung: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517",
            }
        },
        aufsichtsbehörde: "Bezirkshauptmannschaft Wien",
        berufsbezeichnung: "Meisterbetrieb",
        verleihungsstaat: "Meisterprüfung abgelegt in Österreich",
        onlineStreitbeteiligung: {
            text: [
                "Verbraucher haben die Möglichkeit, Beschwerden an die Online- Streitbeilegungsplattform der EU zu richten:",
                false,
                "Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten."
            ],
            link: "http://ec.europa.eu/odr"
        }
    },

    footer: {
        footerText: "© 2023 GameGo Österreich GmbH"
    }
}

export default content