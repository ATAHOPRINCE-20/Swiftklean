import { CheckCircle2 } from 'lucide-react';
import { BRAND } from '../constants/brand';

const SERVICES = [
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781350726/IMG-20260613-WA0007_1_uswdll.jpg",
    title: "Laundry Services",
    description: "Complete washing, drying, and crisp ironing for everyday clothes, corporate wear, and delicate fabrics. We protect your fabrics while giving them a fresh, retail-ready finish with absolute care.",
    features: [
      "Wash, Dry and Fold",
      "Dry Cleaning",
      "Professional Steam Ironing",
      "Stain Treatment and Removal",
      "Delicate Fabric Care",
      "Same Day Service Available",
    ],
    message: "Hi, I'd like to book laundry services",
  },
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348298/IMG_20251210_105508_879_ambxdx.jpg",
    title: "Professional Upholstery Cleaning",
    description: "Deep cleaning for sofas, chairs, and mattresses. We restore your sofas, chairs, and mattresses by removing deep stains, odors, and hidden bacteria.",
    features: [
      "Sofa Cleaning",
      "Carpet Cleaning",
      "Mattress Cleaning",
    ],
    message: "Hi, I'd like to book upholstery cleaning",
  },
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348752/IMG_20260309_103000_423_m3qqto.jpg",
    title: "Residential Cleaning",
    description: "Thorough, comprehensive cleaning of homes, apartments, and living spaces. We turn your living space into a clean, fresh, and healthy home.",
    features: [
      "Deep Cleaning",
      "Regular Cleaning",
      "Move In / Move Out Cleaning",
      "Detailed Kitchen and Bathroom Cleaning",
      "Floor and Surface Cleaning",
      "Window Cleaning",
      "Furniture Maintenance",
    ],
    message: "Hi, I'd like to book residential cleaning",
  },
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781353700/IMG_20251029_115112_676_kta2m1.jpg",
    title: "Commercial Cleaning",
    description: "Tailored cleaning solutions for businesses, retail spaces, and offices. Scheduled seamlessly around your operational hours, we guarantee a spotless workplace with zero disruption to your business.",
    features: [
      "Office Cleaning and Maintenance",
      "Retail Space Cleaning",
      "Reception and Workspace Cleaning",
      "Washroom Sanitization",
      "Floor Cleaning and Polishing",
      "Dusting and Waste Management",
      "Daily, Weekly & Monthly Contracts",
    ],
    message: "Hi, I'd like to book commercial cleaning",
  },
  {
    image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348300/IMG_20260521_193345_095_n4lc67.jpg",
    title: "Specialty Cleaning",
    description: "We handle deep and complex cleaning tasks that require professional equipment and expertise.",
    features: [
      "Post-Construction Cleaning",
      "Pest Control and Fumigation",
    ],
    message: "Hi, I'd like to book specialty cleaning",
  },
];

export function Services() {
  const openWhatsApp = (message: string) =>
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dywusgc6j/image/upload/v1781348302/IMG_20260521_193357_385_tk9cv7.jpg"
          alt="SwiftKlean services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F9EB6]/85 to-slate-900/70" />
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-[#BFEAF0] max-w-3xl mx-auto">
            Comprehensive cleaning solutions for homes and businesses in Mbarara
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100`}
            >
              {/* Image */}
              <div className="md:w-2/5 h-72 md:h-auto overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">What's Included</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: BRAND.colors.teal }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => openWhatsApp(service.message)}
                  className="mt-8 w-full sm:w-auto text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: BRAND.colors.teal }}
                >
                  Book via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Need a Custom Cleaning Solution?</h2>
          <p className="text-xl text-slate-600 mb-8">
            We can create a personalised cleaning plan tailored to your specific needs
          </p>
          <button
            onClick={() => openWhatsApp("Hi, I need a custom cleaning solution")}
            className="text-white px-10 py-4 rounded-lg text-lg font-bold transition shadow-lg hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.teal }}
          >
            Contact Us for a Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
}
