import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { blogs } from "@/data/blogs";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogs.find((blog) => blog.slug === params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | AxoSoul Blog`,
        description: post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
        }
    };
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogs.find((blog) => blog.slug === params.slug);

    if (!post) {
        return notFound();
    }

    // A simple Markdown component mapper for beautiful typography without complex libraries
    const MarkdownComponents = {
        h2: ({ node, ...props }: any) => <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mt-12 mb-6" {...props} />,
        h3: ({ node, ...props }: any) => <h3 className="font-syne font-semibold text-xl md:text-2xl text-pulse-cyan mt-10 mb-4" {...props} />,
        p: ({ node, ...props }: any) => <p className="font-sans text-lg text-text-secondary leading-relaxed mb-6" {...props} />,
        strong: ({ node, ...props }: any) => <strong className="font-bold text-white" {...props} />
    };

    return (
        <main className="relative min-h-screen bg-void w-full pb-24">
            <Navigation />

            {/* Header / Hero Image Section */}
            <header className="relative w-full h-[60vh] min-h-[500px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={`Cover image for ${post.title}`}
                        fill
                        priority
                        className="object-cover opacity-60"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[900px] mx-auto h-full flex flex-col justify-end pt-[140px] pb-16 px-6">
                    <div className="flex flex-wrap items-center gap-4 text-pulse-cyan font-mono text-[12px] uppercase tracking-widest mb-6">
                        <span className="bg-pulse-cyan/10 px-4 py-2 rounded-full border border-pulse-cyan/30 backdrop-blur-md">
                            {post.category}
                        </span>
                        <span className="text-white/40">•</span>
                        <span>{post.date}</span>
                        <span className="text-white/40">•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="font-syne font-extrabold text-h1 text-white mb-6 leading-tight max-w-[800px]">
                        {post.title}
                    </h1>
                </div>
            </header>

            {/* Content Section */}
            <article className="max-w-[800px] mx-auto px-6 relative z-10 mt-12">
                <div className="font-sans text-xl text-text-primary leading-relaxed font-medium mb-12 border-l-4 border-pulse-cyan pl-6 bg-pulse-cyan/5 py-4 px-6 rounded-r-2xl">
                    {post.excerpt}
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-syne prose-p:font-sans prose-p:text-text-secondary">
                    {/* Render Content */}
                    <div className="mb-16">
                        {/* We parse Markdown mapping to custom Tailwind styles */}
                        <ReactMarkdown components={MarkdownComponents}>
                            {post.content as string}
                        </ReactMarkdown>
                    </div>

                    {/* FAQs specific to blog post (Great for SEO/Schema) */}
                    {post.faqs && post.faqs.length > 0 && (
                        <div className="mt-16 glass-1 p-8 rounded-3xl border border-white/5">
                            <h2 className="font-syne font-bold text-3xl text-gradient mb-8 border-b border-white/10 pb-6">Frequently Asked Questions</h2>
                            <div className="space-y-8">
                                {post.faqs.map((faq, index) => (
                                    <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                        <h3 itemProp="name" className="font-syne font-semibold text-xl text-white mb-3 flex items-start gap-4">
                                            <span className="text-pulse-cyan text-sm mt-1">Q.</span>
                                            {faq.question}
                                        </h3>
                                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                            <p itemProp="text" className="font-sans text-md text-text-secondary leading-relaxed pl-8">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Section of Article */}
                <div className="mt-24 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-axo-gradient flex items-center justify-center font-syne font-bold text-white text-xl">
                            A
                        </div>
                        <div>
                            <p className="font-mono text-xs text-text-tertiary uppercase tracking-widest">Written By</p>
                            <p className="font-syne font-bold text-white text-lg">{post.author}</p>
                        </div>
                    </div>
                    <Link href="/blog" className="px-8 py-4 rounded-full border border-pulse-cyan/30 text-white font-sans font-medium text-sm hover:bg-pulse-cyan/10 hover:border-pulse-cyan transition-all duration-300">
                        ← Back to All Posts
                    </Link>
                </div>
            </article>

            <div className="mt-32">
                <Footer />
            </div>
        </main>
    );
}
