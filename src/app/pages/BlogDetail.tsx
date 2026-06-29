import { useMemo } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ChevronRight, Calendar, Clock, Share2, MessageCircle } from "lucide-react";
import { BLOGS } from "../constants/blogs";
import { BRAND } from "../constants/brand";

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find current blog post
  const post = useMemo(() => {
    return BLOGS.find((b) => b.slug === slug);
  }, [slug]);

  // Find 2 related blog posts (same category, or other latest if not enough)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    
    // Filter out current post
    const filtered = BLOGS.filter((b) => b.slug !== post.slug);
    
    // Try to find posts with the same category
    const sameCategory = filtered.filter((b) => b.category === post.category);
    
    if (sameCategory.length >= 2) {
      return sameCategory.slice(0, 2);
    }
    
    // If not enough in the same category, fill with remaining posts
    const combined = [...sameCategory, ...filtered.filter((b) => b.category !== post.category)];
    return combined.slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md">
          The article you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-[#1F9EB6] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#178A9F] transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback: Copy link
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── Main Content Area ── */}
      <article className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        {/* Navigation / Back link */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#1F9EB6] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
          
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1F9EB6] hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 transition cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share Post
          </button>
        </div>

        {/* Post Heading */}
        <header className="mb-10 text-center md:text-left">
          <span className="inline-block bg-[#BFEAF0] text-[#178A9F] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author and Metadata Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-y border-slate-100 py-6">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#BFEAF0]"
              />
              <div className="text-left">
                <div className="text-slate-800 font-bold text-sm">
                  {post.author.name}
                </div>
                <div className="text-slate-400 text-xs font-medium">
                  {post.author.role} at SwiftKlean
                </div>
              </div>
            </div>

            {/* Date & Read time */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg aspect-[21/9] w-full mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto prose prose-slate md:prose-lg">
          {post.content.map((paragraph, index) => {
            // Format text helper: **bold** -> <strong>bold</strong>, *italic* -> <em>italic</em>
            const formatText = (text: string) => {
              return text
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>");
            };

            const trimmed = paragraph.trim();

            // Headings
            if (trimmed.startsWith("### ")) {
              return (
                <h3 
                  key={index}
                  className="text-xl md:text-2xl font-bold text-slate-800 mt-8 mb-4"
                  dangerouslySetInnerHTML={{ __html: formatText(trimmed.replace("### ", "")) }}
                />
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2 
                  key={index}
                  className="text-2xl md:text-3xl font-bold text-slate-800 mt-10 mb-4"
                  dangerouslySetInnerHTML={{ __html: formatText(trimmed.replace("## ", "")) }}
                />
              );
            }
            if (trimmed.startsWith("# ")) {
              return (
                <h1 
                  key={index}
                  className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-12 mb-6"
                  dangerouslySetInnerHTML={{ __html: formatText(trimmed.replace("# ", "")) }}
                />
              );
            }

            // Unordered Lists (if block has lines starting with list markers)
            const lines = trimmed.split("\n");
            const isUnorderedList = lines.every((line) => {
              const lt = line.trim();
              return lt.startsWith("* ") || lt.startsWith("- ") || lt.startsWith("✓ ") || lt.startsWith("• ");
            });
            if (isUnorderedList && lines.length > 0) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2.5 my-5 text-slate-600 text-base md:text-lg pl-5">
                  {lines.map((line, i) => {
                    const cleanLine = line.trim().replace(/^[\*\-\✓\•]\s*/, "");
                    return (
                      <li 
                        key={i} 
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatText(cleanLine) }}
                      />
                    );
                  })}
                </ul>
              );
            }

            // Ordered Lists (lines starting with "1. ", "2. ", etc.)
            const isOrderedList = lines.every((line) => {
              const lt = line.trim();
              return /^\d+\.\s+/.test(lt);
            });
            if (isOrderedList && lines.length > 0) {
              return (
                <ol key={index} className="list-decimal list-inside space-y-2.5 my-5 text-slate-600 text-base md:text-lg pl-5">
                  {lines.map((line, i) => {
                    const cleanLine = line.trim().replace(/^\d+\.\s+/, "");
                    return (
                      <li 
                        key={i} 
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatText(cleanLine) }}
                      />
                    );
                  })}
                </ol>
              );
            }

            // Standard Paragraph
            if (index === 0) {
              return (
                <p 
                  key={index} 
                  className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-6 border-l-4 border-[#1F9EB6] pl-4"
                  dangerouslySetInnerHTML={{ __html: formatText(trimmed) }}
                />
              );
            }
            return (
              <p 
                key={index} 
                className="text-slate-600 text-base md:text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: formatText(trimmed) }}
              />
            );
          })}
        </div>
      </article>

      {/* ── Related Articles Section ── */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10 text-center md:text-left">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <div
                key={related.slug}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1F9EB6] mb-2 block">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-slate-800 group-hover:text-[#1F9EB6] transition-colors line-clamp-2 mb-2">
                    <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
                    {related.excerpt}
                  </p>
                </div>
                <Link
                  to={`/blog/${related.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1F9EB6] hover:text-[#178A9F] transition-colors mt-auto group/link"
                >
                  Read Article
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking / Contact Banner CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1F9EB6] to-[#178A9F] rounded-3xl p-10 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-[#BFEAF0] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Did this help? Let us take care of it!
              </h2>
              <p className="text-lg mb-8 text-[#BFEAF0]">
                If you need help with stubborn stains, deep fabric cleaning, or home chores, our professional team is just a message away.
              </p>
              <button
                onClick={() => openWhatsApp(`Hi, I read your article "${post.title}" and would like to learn more about your professional cleaning services.`)}
                className="bg-white text-[#1F9EB6] px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#E6F7FA] transition shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-98"
              >
                Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
