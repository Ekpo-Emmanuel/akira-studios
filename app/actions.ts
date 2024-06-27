interface NavItem {
    title: string;
    href: string;
}


interface Feature {
    name: string;
}

interface Package {
    id: number;
    name: string;
    price: string;
    niche: string;
    features: Feature[];
    callToAction: string;
  }
  


export const navItems: NavItem[] = [
    { title: 'Home', href:"/" },
    { title: 'About', href:"/about" },
    { title: 'Services', href:"/services" },
    { title: 'Pricing', href:"/pricing" },
]

export const packages: Package[] = [
    {
        id: 1,
        name: "DTC Brand Package",
        niche: "DTC Brands",
        price: '499.99',
        features: [
            { name: "(2) 30 second TOF Ads" },
            { name: "(3) 15 second UGC Ads" },
            { name: "(4) Trendy 30 second Reels" },
            { name: "20 lifestyle Images"},
            ],
        callToAction: "Contact us",
    },
    {
        id: 2,
        name: "Event/Mastermind Package",
        niche: "Event/Mastermind",
        price: "999.99",
        features: [
            { name: "1.5 day production"},
            { name: "60 seconds recap trailer"},
            { name: "2 mins testimonail mashup"},
            { name: "(5) individual testimonial footage for each keynote speaker"},
            { name: "20 lifestyle Images"},
        ],
        callToAction: "Contact us",
    },
    {
        id: 3,
        name: "Local Businesses Package",
        niche: "Local Businesses",
        price: "1299.99",
        features: [
            { name: "(2) 90 minutes production"},
            { name: "(10) 30s short form rels"},
            { name: "(2) 30 second TOF Ads"},
            { name: "(5) 15s sizzle reels)"},
            { name: "20 lifestyle Images"},
        ], 
        callToAction: "Contact us",
    },
];