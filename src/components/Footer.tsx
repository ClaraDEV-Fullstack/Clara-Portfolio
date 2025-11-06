import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Clara Portfolio</h2>
                        <p className="text-gray-400">
                            Frontend Developer & UI Designer creating beautiful, functional web experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {['github', 'linkedin', 'twitter', 'dribbble'].map((platform) => (
                                <a
                                    key={platform}
                                    href={`https://${platform}.com/in/yourusername`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={platform}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                        <span className="font-bold">{platform.charAt(0).toUpperCase()}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">hello@claraportfolio.com</p>
                        <p className="text-gray-400 mt-2">San Francisco, CA</p>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Clara Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}