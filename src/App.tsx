import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  AlertTriangle,
  Menu,
  X,
  Droplets,
  Wrench,
  Thermometer,
  Bath,
  House,
  ShieldCheck,
  Star
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Area {
  id: string;
  name: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    description: 'Burst pipes, major leaks, and urgent plumbing failures. We arrive fast to minimize damage.',
    icon: <AlertTriangle className="w-10 h-10 text-orange-500" />
  },
  {
    id: 'boiler',
    title: 'Boiler Services',
    description: 'Installation, annual servicing, and repairs for all major boiler brands in Leicester.',
    icon: <Thermometer className="w-10 h-10 text-blue-500" />
  },
  {
    id: 'bathroom',
    title: 'Bathroom Fitting',
    description: 'From simple tap upgrades to full luxury bathroom installations and tiling.',
    icon: <Bath className="w-10 h-10 text-cyan-500" />
  },
  {
    id: 'leaks',
    title: 'Leak Detection',
    description: 'Advanced technology to find hidden leaks inside walls or under flooring without destruction.',
    icon: <Droplets className="w-10 h-10 text-blue-600" />
  },
  {
    id: 'maintenance',
    title: 'General Maintenance',
    description: 'Toilet repairs, radiator bleeding, power flushing, and routine pipework checks.',
    icon: <Wrench className="w-10 h-10 text-gray-600" />
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Reliable plumbing solutions for local businesses, offices, and industrial units.',
    icon: <House className="w-10 h-10 text-indigo-600" />
  }
];

const AREAS: Area[] = [
  { 
    id: 'leicester', 
    name: 'Leicester', 
    description: 'Our main hub. We provide full coverage across the city center and all suburbs including Braunstone, Evington, and Birstall.' 
  },
  { 
    id: 'loughborough', 
    name: 'Loughborough', 
    description: 'Specialized local teams serving Loughborough and surrounding villages for over 10 years.' 
  },
  { 
    id: 'hinckley', 
    name: 'Hinckley', 
    description: 'Reliable 24/7 plumbing services for residents and businesses across Hinckley and Burbage.' 
  },
  { 
    id: 'wigston', 
    name: 'Wigston', 
    description: 'Rapid response times for all plumbing and heating needs in Great Wigston and Wigston Harcourt.' 
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Leicester City",
    text: "PrimeFlow saved us when our pipe burst at 3 AM. They were here within 45 minutes and fixed it perfectly. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    name: "David Thompson",
    location: "Oadby",
    text: "Professional, clean, and reasonably priced. They installed our new boiler last month and the service was impeccable.",
    rating: 5
  },
  {
    id: 3,
    name: "Mark Wilson",
    location: "Loughborough",
    text: "Great experience with their bathroom fitting team. Very attentive to detail and finished the job ahead of schedule.",
    rating: 5
  }
];

const FAQS: FAQItem[] = [
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes, we have a dedicated emergency team on call 7 days a week, 365 days a year to handle urgent plumbing issues across Leicestershire."
  },
  {
    question: "Are your plumbers Gas Safe registered?",
    answer: "Absolutely. All our heating engineers are fully Gas Safe registered and insured to work on all types of gas appliances and boilers."
  },
  {
    question: "How much do you charge for a call-out?",
    answer: "We offer transparent pricing. We provide free, no-obligation quotes for planned work, and our emergency call-out rates are competitive with no hidden fees."
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes, all our workmanship comes with a 12-month guarantee for your peace of mind, alongside any manufacturer warranties on parts provided."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Areas', href: '#areas' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-blue-900'}`}>
              PrimeFlow
            </span>
            <span className={`text-xs block font-medium uppercase tracking-widest ${isScrolled ? 'text-blue-600' : 'text-blue-700'}`}>
              Plumbing Co.
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-600' : 'text-blue-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:01162984417"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            <Phone className="w-4 h-4" />
            0116 298 4417
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-blue-900'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-blue-900'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:01162984417"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-4 rounded-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                Call Now: 0116 298 4417
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const EmergencyBanner = () => (
  <div className="bg-orange-600 text-white py-2 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 relative z-50">
    <AlertTriangle className="w-4 h-4 animate-pulse" />
    <span>24/7 Emergency Plumbing Across Leicestershire - We Are Open Now!</span>
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blue-50 overflow-hidden">
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 skew-x-[-15deg] translate-x-24 -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3 h-3" />
            Serving All of Leicestershire
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-blue-900 leading-[1.1] mb-6">
            Expert Plumbing <br />
            <span className="text-blue-600">You Can Rely On.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Professional, Gas Safe registered plumbers serving Leicester and surroundings. 
            From emergency repairs to luxury bathroom installations, we Flow better than the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:01162984417"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              0116 298 4417
            </a>
            <a 
              href="#services"
              className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 transition-all flex items-center justify-center gap-3"
            >
              View Our Services
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-blue-100 pt-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Gas Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Local Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Insured</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl bg-blue-200 overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" 
              alt="Plumbing Installation"
              className="w-full h-full object-cover mix-blend-overlay"
            />
            {/* Absolute Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-900 font-bold">Fast Response Times</span>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">Active Now</span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-gray-500">450+ 5-Star Reviews</span>
              </div>
            </div>
          </div>
          {/* Decorative Badge */}
          <div className="absolute -top-6 -right-6 bg-blue-900 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-4 border-4 border-white shadow-xl rotate-12">
            <span className="text-2xl font-black block">1hr</span>
            <span className="text-[10px] items-center font-bold uppercase leading-none">Max Arrival <br /> Time</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
        <p className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Complete Plumbing Solutions</p>
        <div className="w-16 h-1 w-full max-w-[200px] bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300"
          >
            <div className="mb-6 bg-white p-4 rounded-2xl w-fit shadow-sm group-hover:shadow-md transition-all">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceAreas = () => {
  const [activeArea, setActiveArea] = useState(AREAS[0].id);

  return (
    <section id="areas" className="py-24 bg-blue-900 text-white overflow-hidden relative">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Service Locations</h2>
            <p className="text-4xl md:text-5xl font-extrabold mb-8">Serving the heart of <br /> <span className="text-blue-300">Leicestershire</span></p>
            
            <div className="flex flex-col gap-4">
              {AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  className={`text-left p-6 rounded-2xl transition-all border ${
                    activeArea === area.id 
                    ? 'bg-blue-800 border-blue-400 shadow-xl scale-[1.02]' 
                    : 'bg-blue-900/50 border-blue-800 hover:border-blue-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${activeArea === area.id ? 'bg-blue-400 text-blue-900' : 'bg-blue-800 text-blue-400'}`}>
                      {area.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{area.name}</h4>
                      <p className={`text-sm mt-1 transition-opacity ${activeArea === area.id ? 'opacity-100' : 'opacity-0'}`}>
                        {area.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-blue-800/50 rounded-full p-12 border border-blue-700/50 animate-pulse">
               <div className="w-full h-full bg-blue-700/50 rounded-full p-12 flex items-center justify-center border border-blue-600/50">
                 <div className="w-full h-full bg-blue-600/50 rounded-full flex items-center justify-center">
                    <MapPin className="w-24 h-24 text-blue-300" />
                 </div>
               </div>
            </div>
            {/* Callout */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-900 p-8 rounded-3xl shadow-2xl text-center w-64 border border-blue-100">
               <span className="text-4xl font-black block mb-2 text-blue-600">60min</span>
               <p className="text-sm font-bold uppercase tracking-wider">Average Arrival <br /> To {AREAS.find(a => a.id === activeArea)?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Got Questions?</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">Frequently Asked</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-blue-900"
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="reviews" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Client Feedback</h2>
        <p className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">What Leicester Says</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-8 flex-grow">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                {t.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-blue-900">{t.name}</h4>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-950 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight">PrimeFlow</span>
              <span className="text-[10px] block font-bold uppercase tracking-widest text-blue-400">Plumbing Co.</span>
            </div>
          </div>
          <p className="text-blue-200/60 leading-relaxed mb-6">
            Providing high-quality plumbing and heating services to Leicestershire for over a decade. Reliability is our flow.
          </p>
          <div className="flex items-center gap-4">
             <ShieldCheck className="w-10 h-10 text-blue-400 opacity-50" />
             <div className="text-xs font-bold text-blue-300 uppercase tracking-tighter">Gas Safe <br /> Registered</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="text-sm text-blue-200/60">Phone</p>
                <a href="tel:01162984417" className="font-bold hover:text-blue-400 transition-colors">0116 298 4417</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="text-sm text-blue-200/60">Email</p>
                <a href="mailto:hello@primeflowplumbing.co.uk" className="font-bold hover:text-blue-400 transition-colors">hello@primeflowplumbing.co.uk</a>
              </div>
            </li>
          </ul>
        </div>

        <div>
            <h4 className="font-bold text-lg mb-6">Service Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-sm font-bold">Open 7 Days a Week</p>
                  <p className="text-sm text-blue-200/60 mt-1">24/7 Emergency Response</p>
                  <p className="text-xs text-blue-400 mt-2 font-black uppercase tracking-widest">Always Available</p>
                </div>
              </li>
            </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Main Areas</h4>
          <ul className="grid grid-cols-2 gap-2">
            {AREAS.map(area => (
              <li key={area.id}>
                <a href="#areas" className="text-sm text-blue-200/60 hover:text-white transition-colors flex items-center gap-2">
                   <div className="w-1 h-1 bg-blue-400 rounded-full" />
                   {area.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-blue-900/50 flex flex-col md:flex-row items-center justify-between gap-6 text-blue-200/40 text-sm">
        <p>© 2026 PrimeFlow Plumbing Co. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <EmergencyBanner />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <Testimonials />
        <FAQSection />
        
        {/* Quick Contact Bar for Mobile */}
        <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
          <a 
            href="tel:01162984417"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white p-4 rounded-2xl font-black text-lg shadow-2xl shadow-blue-500/40 ring-4 ring-white"
          >
            <Phone className="w-6 h-6 fill-white" />
            CALL NOW: 0116 298 4417
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

