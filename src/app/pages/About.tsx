import { Star, Users, Award, Heart, Shield, Sparkles } from 'lucide-react';
import { BRAND } from '../constants/brand';

export function About() {
  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dywusgc6j/image/upload/v1781348139/IMG_0187_iqglu8.jpg"
          alt="SwiftKlean team at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F9EB6]/85 to-slate-900/70" />
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SwiftKlean</h1>
          <p className="text-xl md:text-2xl text-[#BFEAF0] max-w-3xl mx-auto">
            Mbarara's trusted cleaning experts since 2018
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dywusgc6j/image/upload/v1781348139/IMG_0187_iqglu8.jpg"
                alt="Modern clean home"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2018, SwiftKlean has grown to become Mbarara's most trusted cleaning service provider. We started with a simple mission: to provide professional, reliable, and affordable cleaning services to homes and businesses throughout the region.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Today, we're proud to serve over 500 satisfied clients, maintaining our commitment to excellence with every service we provide. Our team of trained professionals uses eco-friendly products and advanced cleaning techniques to deliver exceptional results.
              </p>
              <p className="text-lg text-slate-600">
                At SwiftKlean, we believe that a clean space is more than just aesthetics—it's about creating healthy, comfortable environments where people can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose SwiftKlean?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional service every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Reliable & Trustworthy",
                description: "Background-checked professionals you can trust in your home or office"
              },
              {
                icon: Star,
                title: "5-Star Quality",
                description: "Consistently high ratings from our satisfied customers"
              },
              {
                icon: Sparkles,
                title: "Professional Team",
                description: "Trained and experienced cleaning specialists"
              },
              {
                icon: Heart,
                title: "Customer-Focused",
                description: "Your satisfaction is our top priority"
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                description: "We stand behind our work with a satisfaction guarantee"
              },
              {
                icon: Users,
                title: "500+ Happy Clients",
                description: "Join hundreds of satisfied customers across Mbarara"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#BFEAF0] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#1F9EB6]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "10,000+", label: "Services Completed" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="text-5xl font-bold text-[#1F9EB6] mb-2">{stat.number}</div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1F9EB6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Excellence</h3>
              <p className="text-slate-600">
                We strive for perfection in every service, ensuring the highest standards of cleanliness and professionalism.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1F9EB6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrity</h3>
              <p className="text-slate-600">
                Honesty and transparency guide all our interactions. We treat every space as if it were our own.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1F9EB6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Care</h3>
              <p className="text-slate-600">
                We care about our clients, our team, and our environment. That's why we use eco-friendly products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1F9EB6] to-[#178A9F] rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Happy Clients
            </h2>
            <p className="text-xl mb-10 text-[#BFEAF0]">
              Experience the SwiftKlean difference today
            </p>
            <button
              onClick={() => openWhatsApp("Hi, I'd like to learn more about SwiftKlean")}
              className="bg-white text-[#1F9EB6] px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#E6F7FA] transition shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
