import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogs } from "@/data/blogs";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
    title: "AxoSoul Blog | Insights on Web Development & Digital Marketing",
    description: "Read our latest articles on cutting-edge Web Development, Mobile Apps trends, and high-ROI Digital Marketing strategies.",
    keywords: ["Blog", "Web Development", "Mobile Apps", "Digital Marketing", "SEO strategies"],
};

export default function BlogListing() {
    return (
        <main className="relative min-h-screen bg-void w-full">
            <Navigation />

            <section className="pt-40 pb-24 px-[max(24px,4vw)] max-w-[1440px] mx-auto relative z-10 w-full">

                {/* Header Sub-Text */}
                <div className="text-center mb-16">
                    <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.15em] mb-4">
                        &lt; INSIGHTS & STRATEGIES /&gt;
                    </div>
                    <h1 className="font-syne font-extrabold text-h1 text-white mb-6 leading-tight">
                        The <span className="text-gradient">Knowledge Base</span>
                    </h1>
                    <p className="font-sans text-body-lg text-text-secondary max-w-[600px] mx-auto">
                        In-depth articles, expert insights, and the latest trends in Digital Marketing, Mobile Apps, and Enterprise Web Development.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            href={`/blog/${blog.slug}`}
                            key={blog.slug}
                            className="glass-1 rounded-[24px] overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-white/5 flex flex-col h-full"
                        >
                            <div className="relative w-full h-[240px] overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-void/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-mono text-[10px] text-pulse-cyan uppercase tracking-wider">
                                    {blog.category}
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-text-tertiary font-mono text-[11px] uppercase tracking-wider mb-4">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span>{blog.readTime}</span>
                                </div>
                                <h2 className="font-syne font-bold text-[22px] text-white leading-snug mb-3 group-hover:text-pulse-cyan transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="font-sans text-[15px] text-text-secondary leading-relaxed line-clamp-3 mb-6 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <div className="font-sans font-medium text-[14px] text-white flex items-center gap-2 mt-auto group-hover:text-pulse-cyan transition-colors">
                                    Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>

            <Footer />
        </main>
    );
}
