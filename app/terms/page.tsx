import Link from "next/link";

// src/pages/GuidePage.jsx
const page = () => {
    return (
        <div className="container flex items-center justify-center p-6 text-center">
            <div className="w-2/3 text-justify shadow-md rounded-lg p-8 space-y-6">
                <h1 className="text-4xl font-bold text-center text-white">
                    Welcome to NUNA
                </h1>
                <p className="text-[#8C8998] text-lg leading-relaxed">
                    Our platform isn’t just another social media app. It’s a space built for authentic expression, deeper connections, and real-time engagement. Whether you're here to share your story, connect with like-minded people, or simply stay in touch with friends and family, we’ve got you covered.
                </p>
                <p className="text-[#8C8998] text-lg leading-relaxed">
                    At [Your App Name], we believe social media should be meaningful, not just mindless scrolling. That’s why we’ve created features that empower you to be your real self. Post updates, photos, videos, and stories with full control over who sees them. Discover trending content, explore communities based on your interests, and engage in conversations that matter.
                </p>
                <p className="text-[#8C8998] text-lg leading-relaxed">
                    We also care about <span className="font-semibold">your privacy and safety</span>. Our app includes advanced privacy settings, real-time moderation, and tools to help you control your experience. Block or report users, manage your followers, and choose how and when you want to be visible online.
                </p>
                <p className="text-[#8C8998] text-lg leading-relaxed">
                    Built for both creators and casual users, you can grow your following with content that resonates. Share your creative work, promote your small business, or just document life as it happens — all from one app.
                </p>
                <p className="text-[#8C8998] text-lg leading-relaxed">
                    Logging in unlocks your personalized feed, direct messages, notifications, and access to exclusive features. Not a member yet? Signing up is quick and free — and the sooner you join, the sooner you can start building your community.
                </p>
                <p className="text-[#8C8998] text-lg leading-relaxed">
                    So what are you waiting for? Log in now and take your social life to the next level.
                </p>

                <div className="text-center">
                    <Link
                        href="/login"
                        className="inline-block bg-[#0C8CE9] hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
                    >
                        Go to Login
                    </Link>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Need help? Contact us at{" "}
                    <a
                        href="mailto:support@yourapp.com"
                        className="text-blue-500 hover:underline"
                    >
                        support@yourapp.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default page