import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Sparkles, Shirt, Leaf, User, WashingMachine, ChevronRight } from "lucide-react";
import { BLOGS } from "../constants/blogs";
import { BRAND } from "../constants/brand";

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Get unique categories for filters
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(BLOGS.map((post) => post.category)))];
  }, []);

  // Filter posts based on category
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return BLOGS;
    return BLOGS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // Featured posts are the first two posts in the list (or designated ones)
  // Let's use the first two posts as featured on the hero section
  const featuredBlogs = useMemo(() => {
    return BLOGS.slice(0, 2);
  }, []);

  // Latest blogs are the rest of the filtered blogs (excluding the featured ones if category is "All")
  const latestBlogs = useMemo(() => {
    if (activeCategory !== "All") {
      return filteredBlogs;
    }
    return BLOGS.slice(2);
  }, [filteredBlogs, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Inline styles for custom grid pattern and floating animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 9s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }
        .hero-grid-lines {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(31, 158, 182, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 158, 182, 0.08) 1px, transparent 1px);
        }
      ` }} />

      {/* ── Hero Section with Grid and Floaters ── */}
      <section className="relative bg-[#F2F6F7] pt-24 pb-40 overflow-hidden border-b border-slate-100">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 hero-grid-lines pointer-events-none" />

        {/* Floating Decorative Circles */}
        {/* Floater 1: White circle with Washing Machine icon (Left-top) */}
        <div className="absolute top-12 left-[8%] md:left-[12%] hidden sm:flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border-4 border-white animate-float-slow z-10">
          <WashingMachine className="w-6 h-6 text-[#1F9EB6]" />
        </div>

        {/* Floater 2: Yellow circle with Sparkles icon (Left-bottom) */}
        <div className="absolute bottom-20 left-[12%] md:left-[18%] hidden sm:flex items-center justify-center w-12 h-12 bg-amber-400 rounded-full shadow-lg border-4 border-white animate-float-medium z-10">
          <Sparkles className="w-5 h-5 text-white" />
        </div>

        {/* Floater 3: Orange circle with Staff/User icon (Right-top) */}
        <div className="absolute top-8 right-[15%] md:right-[22%] hidden sm:flex items-center justify-center w-14 h-14 bg-orange-400 rounded-full shadow-lg border-4 border-white animate-float-medium z-10">
          <User className="w-6 h-6 text-white" />
        </div>

        {/* Floater 4: Teal circle with Shirt icon (Right-middle) */}
        <div className="absolute top-[40%] right-[6%] md:right-[10%] hidden sm:flex items-center justify-center w-12 h-12 bg-[#1F9EB6] rounded-full shadow-lg border-4 border-white animate-float-fast z-10">
          <Shirt className="w-5 h-5 text-white" />
        </div>

        {/* Floater 5: Green circle with Leaf icon (Right-bottom) */}
        <div className="absolute bottom-16 right-[14%] md:right-[26%] hidden sm:flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-full shadow-lg border-4 border-white animate-float-slow z-10">
          <Leaf className="w-5 h-5 text-white" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center z-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1F9EB6] bg-[#BFEAF0]/50 px-3.5 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 max-w-4xl mx-auto leading-tight mb-6">
            Our ideas and insights on <span className="text-[#1F9EB6]">garment care</span>,{" "}
            <span className="text-[#1F9EB6]">fabric hygiene</span>, and{" "}
            <span className="text-[#1F9EB6]">modern living</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto">
            Practical advice, guidelines, and home care tips curated by the cleaning experts at SwiftKlean.
          </p>
        </div>
      </section>

      {/* ── Featured Articles (Overlapping the Hero) ── */}
      <section className="relative px-6 z-30 max-w-7xl mx-auto -mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredBlogs.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group h-full"
            >
              <div>
                {/* Image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#BFEAF0] text-[#178A9F] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#1F9EB6] transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1F9EB6] hover:text-[#178A9F] transition-colors mt-auto group/link"
              >
                Read More
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Latest Blogs Section ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
              Latest Articles
            </h2>
            <p className="text-slate-500 mt-2">
              Browse our complete library of cleaning tips and garment care guides.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-250 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1F9EB6] text-white shadow-md shadow-[#1F9EB6]/20"
                    : "bg-[#F2F6F7] text-slate-600 hover:bg-[#BFEAF0]/35 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-lg">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  {/* Image */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#178A9F] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#1F9EB6] transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read more */}
                <div className="px-6 pb-6 pt-0 border-t border-slate-50 mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#1F9EB6] hover:text-[#178A9F] transition-colors pt-4 group/link"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── CTA banner at bottom ── */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1F9EB6] to-[#178A9F] rounded-3xl p-10 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            {/* Subtle background graphics */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Want Professional Help?
              </h2>
              <p className="text-lg mb-8 text-[#BFEAF0] max-w-xl mx-auto">
                Let SwiftKlean handle your chores. We deliver expert laundry, upholstery, and home cleaning services straight to your door.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => window.open(`https://wa.me/${BRAND.whatsappNumber}?text=Hi,%20I'd%20like%20to%20book%20a%20cleaning%20service`)}
                  className="w-full sm:w-auto bg-white text-[#1F9EB6] px-8 py-3.5 rounded-xl font-bold hover:bg-[#E6F7FA] transition shadow-md active:scale-98"
                >
                  Book Service Now
                </button>
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-[#178A9F]/50 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
