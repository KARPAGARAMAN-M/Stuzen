export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    hasDropdown: true,
    children: [
      { name: 'All Services', path: '/services', isOverview: true },
      { name: 'Website Development', path: '/services/website-development' },
      { name: 'Custom Software', path: '/services/custom-software' },
      { name: 'AI & Automation', path: '/services/ai-automation' },
    ],
  },
  { name: 'Our Work', path: '/portfolio' },
  { name: 'Contact Us', path: '/contact' },
];

export const footerLinks = {
  company: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'All Services Overview', path: '/services' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Custom Software Development', path: '/services/custom-software' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
  ],
  contact: {
    email: 'hello@stuzen.com',
    phone: '+91 74186 72022',
    address: 'View on Google Maps',
    mapsUrl: 'https://maps.app.goo.gl/eGEjixKQtGE34ogt8',
    instagramUrl: 'https://www.instagram.com/stuzen_tech?obrf=MXI0NDM5bGltMDR2cA==',
    whatsappUrl: 'https://wa.me/917418672022',
    hours: 'Mon–Sat, 9:00 AM – 7:00 PM IST',
  },
  legal: [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Security', path: '#' },
  ],
};

