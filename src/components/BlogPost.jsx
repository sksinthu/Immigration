import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { User, Calendar, Tag } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <div className="container mx-auto px-4 py-20 text-center">Post not found</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* 1. Header Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex justify-center items-center space-x-6 text-gray-500 text-sm font-medium uppercase tracking-wide">
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-[var(--accent-blue)]" />
                            <span>{post.author || 'Admin'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-[var(--accent-blue)]" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>

                {/* 2. Introduction Section */}
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                        {post.excerpt}
                    </p>
                    <div className="text-center">
                        <Link to="/contact" className="inline-block bg-[var(--accent-blue)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary)] transition-all shadow-lg shadow-blue-500/30">
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>

                {/* 3. Detailed Content Section (Static Bullets) */}
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 mb-12 prose prose-lg max-w-none text-gray-700">
                    <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Visa Categories & Details</h3>
                    <ul className="space-y-4 list-disc pl-5 marker:text-[var(--accent-blue)]">
                        <li><strong>Skilled Independent Visa (Subclass 189)</strong> – Points-tested stream for skilled workers who are not sponsored by an employer or family member.</li>
                        <li><strong>Skilled Nominated Visa (Subclass 190)</strong> – Points-tested visa for skilled workers nominated by a state or territory government agency.</li>
                        <li><strong>Skilled Regional (Provisional) Visa (Subclass 489)</strong> – Allows skilled workers to live and work in specified regional areas of Australia for up to 4 years.</li>
                        <li><strong>Skilled Regional Visa (Subclass 887)</strong> – A permanent visa for people who have lived and worked in specified regional areas of Australia.</li>
                        <li><strong>Employer Nomination (Subclass 186)</strong> – A permanent residence visa for skilled workers nominated by an employer.</li>
                        <li><strong>Regional Sponsored Migration (Subclass 187)</strong> – A permanent residence visa for skilled workers who want to work in regional Australia.</li>
                        <li><strong>Partner Visa (309, 100)</strong> – Allows the partner or spouse of an Australian citizen, permanent resident, or eligible New Zealand citizen to live in Australia.</li>
                        <li><strong>Prospective Marriage Visa (Subclass 300)</strong> – Allows people to come to Australia to marry their prospective spouse.</li>
                        <li><strong>Parent Visas (103, 804)</strong> – Permanent visas for parents of a settled Australian citizen, permanent resident, or eligible New Zealand citizen.</li>
                        <li><strong>Contributory Parent Visa (143)</strong> – A permanent visa for parents with higher application fees but faster processing times.</li>
                        <li><strong>Aged Dependent Relative Visa (114)</strong> – For older people who rely on an eligible relative in Australia for financial support.</li>
                        <li><strong>Child Visa (101)</strong> – Allows a child to stay in Australia permanently with their parents.</li>
                        <li><strong>Remaining Relative Visa (115)</strong> – For people whose only near relatives are living in Australia.</li>
                        <li><strong>Business Innovation & Investment (888)</strong> – Permanent visa for people who hold a provisional Business Innovation and Investment visa.</li>
                        <li><strong>Business Talent Visa (132)</strong> – For high-calibre business owners or people who have obtained funding from an Australian venture capital firm.</li>
                        <li><strong>Business Owner Visa (890)</strong> – For people who own and manage a business in Australia.</li>
                        <li><strong>Investor Visa (891)</strong> – For people who have held a designated investment in Australia for 4 years.</li>
                    </ul>
                </div>

                {/* 4. Related Posts Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 border-l-4 border-[var(--accent-blue)] pl-4">Related Posts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <h4 className="font-bold text-lg mb-2 hover:text-[var(--accent-blue)] transition-colors"><Link to="/blog/hello-world">Hello world!</Link></h4>
                            <p className="text-sm text-gray-500">February 1, 2025 / Blog</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <h4 className="font-bold text-lg mb-2 hover:text-[var(--accent-blue)] transition-colors"><Link to="/blog/visa-rejection-appeals">Australia Visa Rejection Appeals</Link></h4>
                            <p className="text-sm text-gray-500">February 5, 2025 / Blog</p>
                        </div>
                    </div>
                </div>

                {/* 5. Leave a Comment Form */}
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-[var(--primary)] mb-8">Leave a Comment</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32"
                                placeholder="Your comment here..."
                                required
                            ></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Website"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="save-info" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="save-info" className="text-sm text-gray-600">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button type="submit" className="bg-[var(--accent-blue)] text-white font-bold px-8 py-4 rounded-lg hover:bg-[var(--primary)] transition-colors shadow-lg">
                            POST COMMENT
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;
