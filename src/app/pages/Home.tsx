import { HeroSlider } from '../components/HeroSlider';
import { Star, Users, Clock, CheckCircle2, Heart, Tag, Settings, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router';
import { BRAND } from '../constants/brand';

export function Home() {
  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      image: "https://images.unsplash.com/photo-1648627667032-d02d79b28066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Laundry Services",
      description: "Professional washing, drying, and ironing for all your garments. We handle everything from everyday wear to delicate fabrics.",
      features: ["Wash & Fold", "Dry Cleaning", "Ironing", "Stain Removal"],
      message: "Hi, I'd like to book laundry services"
    },
    {
      image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348752/IMG_20260309_103000_423_m3qqto.jpg",
      title: "Residential Cleaning",
      description: "Complete home cleaning services that leave your space spotless. From deep cleans to regular maintenance.",
      features: ["Deep Cleaning", "Regular Cleaning", "Move In/Out", "Kitchen & Bath"],
      message: "Hi, I'd like to book residential cleaning"
    },
    {
      image: "https://res.cloudinary.com/dywusgc6j/image/upload/v1781348298/IMG_20251210_105508_879_ambxdx.jpg",
      title: "Professional Upholstery Cleaning",
      description: "Deep cleaning for sofas, chairs, and mattresses. We restore your furniture by removing deep stains, odors, and hidden bacteria.",
      features: ["Sofa Cleaning", "Carpet Cleaning", "Mattress Cleaning"],
      message: "Hi, I'd like to book upholstery cleaning"
    }
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider onBookNow={() => openWhatsApp("Hi, I'd like to get a free quote")} />

      {/* Trust Badges */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-slate-50">
              <div className="w-14 h-14 bg-[#BFEAF0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-[#1F9EB6]" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50">
              <div className="w-14 h-14 bg-[#BFEAF0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-[#1F9EB6]" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1 flex items-center justify-center gap-1">
                5<Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-slate-600">Rated Service</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50">
              <div className="w-14 h-14 bg-[#BFEAF0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#1F9EB6]" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-[#1F9EB6] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openWhatsApp(service.message)}
                    className="w-full bg-[#1F9EB6] hover:bg-[#178A9F] text-white px-6 py-3 rounded-lg font-medium transition"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why choose <em className="not-italic" style={{ color: BRAND.colors.teal }}>us?</em>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We go beyond clean — we deliver care, reliability, and results you can count on every time.
            </p>
          </div>

          {/* 3-col layout: features | image | features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Left column */}
            <div className="flex flex-col gap-10">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "We Treat Your Space Like Our Own",
                  desc: "We pay attention to the little details and clean every space with care, respect, and professionalism.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Reliable & On Time",
                  desc: "Your time matters. We arrive as scheduled and complete our work efficiently without compromising quality.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-start gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#BFEAF0', color: BRAND.colors.teal }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Centre image */}
            <div className="relative mx-auto w-full max-w-xs md:max-w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src="https://res.cloudinary.com/dywusgc6j/image/upload/v1781348752/IMG_20260309_103000_423_m3qqto.jpg"
                  alt="SwiftKlean professional cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Teal accent block behind image */}
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10"
                style={{ backgroundColor: BRAND.colors.teal, opacity: 0.2 }}
              />
              <div className="mt-8 text-center">
                <button
                  onClick={() => openWhatsApp("Hi, I'd like to get a free quote")}
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: BRAND.colors.teal }}
                >
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-10">
              {[
                {
                  icon: <Tag className="w-6 h-6" />,
                  title: "Fair, Honest Pricing",
                  desc: "No hidden charges or unexpected costs. We provide clear pricing so you know exactly what you're paying for.",
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Tailored to Your Needs",
                  desc: "Every home and business is different. We customize our services to match your specific requirements.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-start gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#BFEAF0', color: BRAND.colors.teal }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5th reason — full width below */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#BFEAF0', color: BRAND.colors.teal }}>
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Your Satisfaction Comes First</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are committed to delivering results that leave you happy, comfortable, and confident in choosing SwiftKlean again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple steps to spotless spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Book Online", desc: "Contact us via WhatsApp or phone to schedule your service" },
              { num: "02", title: "Get a Quote", desc: "Receive a transparent quote based on your specific needs" },
              { num: "03", title: "We Clean", desc: "Our professional team arrives and delivers exceptional results" },
              { num: "04", title: "Enjoy", desc: "Relax in your fresh, clean space with complete satisfaction" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-bold text-[#BFEAF0] mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1F9EB6] to-[#178A9F] rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-xl mb-10 text-[#BFEAF0] max-w-2xl mx-auto">
              Get in touch today for a free quote and experience the SwiftKlean difference
            </p>
            <button
              onClick={() => openWhatsApp("Hi, I'd like to schedule a cleaning service")}
              className="bg-white text-[#1F9EB6] px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#E6F7FA] transition shadow-xl"
            >
              Contact Us on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
