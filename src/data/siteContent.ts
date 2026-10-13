export const nav = [
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'Meet Our Team', to: '/about-us/meet-our-team' },
      { label: 'Vaal Triangle Branch', to: '/about-us/vaal-triangle-branch' },
      { label: 'Sandton Branch', to: '/about-us/sandton-branch' },
    ],
  },
  { label: 'IV Drips', to: '/iv-drips' },
  { label: 'Injections', to: '/injections' },
  { label: 'Weight Management', to: '/weight-management' },
  { label: 'Wellness Tests & Screening', to: '/wellness-tests-screening' },
  { label: 'Customized IV Drips', to: '/customized-iv-drips' },
  { label: 'Corporate Wellness', to: '/corporate-wellness' },
  { label: 'Concierge', to: '/concierge-medical-services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contacts-us' },
];

export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'IV Drips', to: '/iv-drips' },
  { label: 'Injections', to: '/injections' },
  { label: 'Wellness Tests & Screening', to: '/wellness-tests-screening' },
  { label: 'Corporate Wellness', to: '/corporate-wellness' },
  { label: 'Concierge Services', to: '/concierge-medical-services' },
  { label: 'Contact Us', to: '/contacts-us' },
];

export interface Branch {
  id: 'vaal' | 'sandton';
  name: string;
  tagline: string;
  blurb: string;
  address: string;
  phone?: string;
  whatsapp: string;
  email: string;
  hours: string[];
  mapEmbed: string;
  image: string;
  topImage: string;
  slug: string;
}

export const branches: Branch[] = [
  {
    id: 'vaal',
    name: 'Vaal Triangle Branch',
    tagline: 'Three Rivers, Vereeniging',
    blurb:
      "Your wellness destination in the Vaal Triangle. Our friendly medically qualified team will always insure you feel your best.",
    address: 'Orwell Office Park 3, Three Rivers, Vereeniging (Opposite Virgin Active Gym Entrance)',
    phone: '016 100 6051',
    whatsapp: '073 541 4308',
    email: 'info@ivboosterbar.co.za',
    hours: ['Mon – Fri: 08:00 – 17:00', 'Sat: 9:00 – 13:00'],
    mapEmbed:
      'https://www.google.com/maps?q=Orwell+Office+Park+3+Three+Rivers+Vereeniging&output=embed',
    image: '/images/branches/vaal-home.jpeg',
    topImage: '/images/branches/vaal-top.jpeg',
    slug: '/about-us/vaal-triangle-branch',
  },
  {
    id: 'sandton',
    name: 'Sandton Branch',
    tagline: 'Edenburg, Sandton',
    blurb:
      'Wellness gets dripping in Sandton. Visit our branch for premium IV drips, vitamin injections, and expert care – all tailored to your lifestyle needs.',
    address: 'Pestana Medical, 1B De La Rey Road, Edenburg, Sandton',
    whatsapp: '072 844 7429',
    email: 'sandton@ivboosterbar.co.za',
    hours: ['Mon – Fri: 08:00 – 17:00', 'Sat: By appointment only'],
    mapEmbed:
      'https://www.google.com/maps?q=Pestana+Medical+1B+De+La+Rey+Road+Edenburg+Sandton&output=embed',
    image: '/images/branches/sandton-home.jpeg',
    topImage: '/images/branches/sandton-top.jpeg',
    slug: '/about-us/sandton-branch',
  },
];

export const services = [
  {
    title: 'IV Drips',
    slug: '/iv-drips',
    blurb:
      'A targeted way to deliver essential vitamins, minerals, and hydration directly into your bloodstream for fast, effective results.',
    icon: 'droplet',
    color: '#F3A89C',
  },
  {
    title: 'Injections',
    slug: '/injections',
    blurb: 'Quick, convenient vitamin shots designed to boost your health, energy, and overall well-being.',
    icon: 'syringe',
    color: '#F2984F',
  },
  {
    title: 'Wellness Tests',
    slug: '/wellness-tests-screening',
    blurb: 'Early detection is key. We offer quick, reliable testing so you can take charge of your health.',
    icon: 'clipboard',
    color: '#F6D657',
  },
  {
    title: 'Corporate Days',
    slug: '/corporate-wellness',
    blurb: 'Keep your team healthy, energised, and performing at their best with tailored wellness programmes.',
    icon: 'briefcase',
    color: '#8FD0B0',
  },
  {
    title: 'Customized IV Drips',
    slug: '/customized-iv-drips',
    blurb: 'Because your health goals are unique, we create tailored drips designed to give you the best possible support.',
    icon: 'edit',
    color: '#8EC0E6',
  },
];

export const testimonials = [
  {
    quote:
      'Very great service, so friendly. I received a drip and it did not hurt. Same with the COVID test - no pain! Thanks so much, The IV Booster Bar!',
    name: 'Anita Botha',
  },
  {
    quote:
      'Professional clean and friendly! Explained exactly what they were doing and why! I would recommend The IV Booster Bar & Medical Centre every time!',
    name: 'Bonita du Plessis',
  },
  {
    quote:
      'The only place in the area that was able to help me with an iron drip. They take their work very seriously. I would 100% recommend.',
    name: 'Monique Schoultz',
  },
];

export const whyInvest = [
  {
    title: 'Boost Immunity',
    text: "Strengthen your body's defences so you can fight off bugs and bounce back faster.",
  },
  {
    title: 'Increase Energy',
    text: 'Say goodbye to sluggish days with nutrient support that revitalises from the inside out.',
  },
  {
    title: 'Enhance Recovery',
    text: "Whether you're training hard, travelling, or recovering from illness, we help you get back on your feet sooner.",
  },
  {
    title: 'Support Skin Health',
    text: 'Glow naturally with therapies that promote hydration, collagen, and cellular repair.',
  },
  {
    title: 'Promote Mental Clarity',
    text: 'Nourish your brain with the nutrients it needs for sharper focus and a brighter mood.',
  },
];

export const team = [
  { name: 'Frans Engelbrecht', role: 'Managing Director', image: '/images/team/frans-engelbrecht.png' },
  { name: 'Charnel Engelbrecht', role: 'Director', image: '/images/team/charnel-engelbrecht.png' },
  { name: 'Angelique Wilsenach', role: 'Registered Nurse', image: '/images/team/angelique-wilsenach.png' },
  { name: 'Raesa Nxusa', role: 'Registered Nurse', image: '/images/team/raesa-nxusa.png' },
];

export const ivDrips = [
  { name: 'All-In-One Drip', text: 'A comprehensive blend of vitamins, minerals, and antioxidants for total body wellness.' },
  { name: 'Immune Booster Drip', text: 'Strengthen your immune system and help your body fight off colds and infections.' },
  { name: 'Hangover Cure Drip', text: 'Rehydrate, detox, and bounce back fast after a big night out.' },
  { name: 'Skin Radiance & Anti-Aging Drip', text: 'Brighten, hydrate, and smooth skin for a youthful, healthy glow.' },
  { name: 'Skin Lightening Drip', text: 'Even out skin tone and promote a brighter complexion over time.' },
  { name: 'Detox Drip', text: 'Flush out toxins and support liver function for better energy and clarity.' },
  { name: 'Weight Loss Drip', text: 'Boost metabolism, burn fat, and support your weight loss journey.' },
  { name: 'Pain Buster Drip', text: 'Reduce inflammation and ease chronic pain naturally.' },
  { name: 'Flu Fighter Drip', text: 'Recover faster from flu symptoms and replenish lost nutrients.' },
  { name: 'Sport Endurance Drip', text: 'Enhance stamina, performance, and recovery for athletes.' },
  { name: 'Jet Fuel Drip', text: 'Supercharge your energy and mental focus when you need it most.' },
  { name: 'Libido Enhancer Drip', text: 'Boost circulation, vitality, and overall sexual wellness.' },
  { name: 'Sport Injury Drip', text: 'Speed up recovery and reduce inflammation after sports injuries.' },
  { name: 'Mood & Brain Booster Drip', text: 'Enhance mood, focus, and cognitive function naturally.' },
  { name: 'Big Boy IV Drip', text: 'Support healthy testosterone levels and boost energy and performance.' },
  { name: 'Co-Enzyme Drip', text: 'Support heart health, cellular energy, and antioxidant protection.' },
  { name: 'B NAD Drip', text: 'Boost cellular repair, brain function, and overall energy levels.' },
  { name: 'Alpha Lipoic Acid Drip', text: 'Powerful antioxidant support for detox, skin, and nerve health.' },
  { name: 'Biotin Drip', text: 'Strengthen hair, skin, and nails from within.' },
  { name: 'Zinc Drip', text: 'Support immunity, skin health, and wound healing.' },
  { name: 'Iron Drip', text: 'Replenish iron levels to combat fatigue, improve energy, and support healthy blood function.' },
  { name: 'Gout Relief Drip', text: 'Targeted relief from intense pain and inflammation of an acute gout flare-up.' },
  { name: 'Liver Detox Drip', text: "Support the body's natural filtration system, neutralise toxins and promote cellular repair." },
  { name: 'Gut Health Drip', text: 'Soothe gastrointestinal inflammation, repair the gut lining and optimise nutrient absorption.' },
];

export const injections = [
  { name: 'B12 Injection', text: "Replenish your body's B12 stores to boost energy, improve focus, and support healthy nerve function." },
  { name: 'B Complex Injection', text: 'A blend of essential B vitamins to enhance mood, energy levels, and overall metabolic health.' },
  { name: 'Mr Muscle Injection (Testosterone)', text: 'Support strength, stamina, and vitality with professionally monitored testosterone therapy.' },
  { name: 'Weight Loss Injection', text: 'Kickstart your metabolism and support fat burning as part of your weight management plan.' },
  { name: 'Energy Bomb Injection', text: 'A quick, powerful pick-me-up packed with vitamins and nutrients to fight fatigue.' },
  { name: 'Neurobion Injection', text: 'Nourish your nerves and muscles with a high-dose blend of B vitamins for optimal nerve health.' },
  { name: 'Depo-Provera & Nur-Isterate', text: 'Effective birth control injections for flexible family planning.' },
  { name: 'Lipolysis Injection', text: 'Target stubborn fat deposits with injections designed to break down fat cells.' },
];

export const wellnessTests = [
  { name: '12-Lead ECG', text: 'Monitor heart health and detect irregularities.' },
  { name: 'Blood Pressure', text: 'Check and track your cardiovascular health.' },
  { name: 'Pregnancy Testing', text: 'Quick and private confirmation.' },
  { name: 'HIV Testing', text: 'Confidential testing with support and advice.' },
  { name: 'Drug Testing', text: 'For workplace or personal purposes.' },
  { name: 'Blood Sugar Testing', text: 'Monitor glucose levels for diabetes screening or management.' },
  { name: 'Wound Care', text: 'Professional cleaning and dressing for minor wounds.' },
  { name: 'Blood Draws', text: 'For laboratory testing and diagnostics.' },
  { name: 'Annual Medical Check-Ups', text: 'Comprehensive assessment to keep you on track.' },
];

export const corporateOfferings = [
  {
    title: 'On-Site IV Drip Days',
    text: 'We set up at your office or event space, providing tailored IV drip treatments to help staff stay energised, focused, and resilient.',
  },
  {
    title: 'Preventative Health Screenings',
    text: 'Early detection is key. Our screenings cover vital checks such as blood pressure, sugar testing, HIV testing, and more – discreetly and professionally.',
  },
  {
    title: 'Wellness Events & Team Days',
    text: 'Perfect for corporate wellness weeks or reward days. We combine education, relaxation, and revitalising treatments for an experience your team will thank you for.',
  },
  {
    title: 'Custom Wellness Packages',
    text: "We work with you to design a programme that meets your business's unique needs – whether monthly visits, seasonal flu-prevention campaigns, or staff incentive programmes.",
  },
];

export const weightManagementOfferings = [
  { title: 'GLP-1 Medications', text: 'Advanced clinical options to help manage appetite and metabolic health.' },
  { title: 'Weight Loss IV Drips', text: 'Premium nutrient infusions formulated to boost metabolism and energy.' },
  { title: 'Weight Loss Injections', text: 'Targeted treatments designed to support fat burning and wellness.' },
  { title: 'Supportive Care', text: 'Continuous professional guidance to keep you motivated and on track.' },
];

// Vaal photos removed – awaiting updated photos from the client.
export const galleryPhotos = {
  vaal: [] as string[],
  sandton: [
    '/images/gallery/sandton-1.jpeg',
    '/images/gallery/sandton-2.webp',
    '/images/gallery/sandton-4.webp',
    '/images/gallery/sandton-5.jpeg',
    '/images/gallery/sandton-6.jpeg',
  ],
};
