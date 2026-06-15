import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { BRAND } from '../constants/brand';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
    openWhatsApp(message);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1F9EB6] to-[#178A9F] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-[#BFEAF0] max-w-3xl mx-auto">
            Get in touch with our team for a free quote or any questions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#BFEAF0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1F9EB6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">{BRAND.phone}</p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#BFEAF0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1F9EB6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">{BRAND.email}</p>
                    <p className="text-sm text-slate-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#BFEAF0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1F9EB6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">{BRAND.address}</p>
                    <p className="text-sm text-slate-500 mt-1">{BRAND.addressDetail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#BFEAF0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1F9EB6]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-slate-900">Chat on WhatsApp</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Get instant responses to your questions. Our team is available on WhatsApp for quick support.
                </p>
                <button
                  onClick={() => openWhatsApp("Hi, I'd like to know more about your services")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F9EB6] focus:ring-2 focus:ring-[#BFEAF0] outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F9EB6] focus:ring-2 focus:ring-[#BFEAF0] outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F9EB6] focus:ring-2 focus:ring-[#BFEAF0] outline-none transition"
                      placeholder="+256 700 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F9EB6] focus:ring-2 focus:ring-[#BFEAF0] outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="Laundry Services">Laundry Services</option>
                      <option value="Residential Cleaning">Residential Cleaning</option>
                      <option value="Carpet & Sofa Cleaning">Carpet & Sofa Cleaning</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F9EB6] focus:ring-2 focus:ring-[#BFEAF0] outline-none transition resize-none"
                      placeholder="Tell us about your cleaning needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1F9EB6] hover:bg-[#178A9F] text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
                  >
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-slate-600">
              Located in the heart of Mbarara at East Gate Complex
            </p>
          </div>
          <div className="bg-slate-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-semibold">{BRAND.address}</p>
              <p className="text-slate-500">{BRAND.addressDetail}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
