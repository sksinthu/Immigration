import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">Latest News & Updates</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the latest immigration news, visa updates, and success stories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:shadow-md transition-shadow">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3 block">
                                {post.date}
                            </span>
                            <h2 className="text-xl font-bold text-[var(--primary)] mb-4 leading-tight hover:text-[var(--accent-blue)] transition-colors">
                                <Link to={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                                {post.excerpt}
                            </p>
                            <div className="text-right mt-auto">
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-[var(--accent-blue)] font-bold text-sm hover:text-[var(--primary)] transition-colors"
                                >
                                    Read Post »
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center items-center space-x-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[var(--accent-blue)] text-white font-bold shadow-sm">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-600 font-medium hover:bg-gray-100 border border-gray-200 transition-colors">
                        2
                    </button>
                    <span className="px-2 text-gray-400">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-600 font-medium hover:bg-gray-100 border border-gray-200 transition-colors">
                        5
                    </button>
                    <button className="px-4 h-10 flex items-center justify-center rounded-md bg-white text-[var(--accent-blue)] font-bold hover:bg-gray-50 border border-gray-200 transition-colors ml-2">
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
