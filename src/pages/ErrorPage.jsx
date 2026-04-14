import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F7F6] px-4">

            <div className="text-center max-w-xl">

                {/* 404 Number */}
                <h1 className="text-[100px] md:text-[140px] font-extrabold text-[#244D3F] leading-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                    Oops! Page not found
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 mt-3 text-sm md:text-base">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mt-6 bg-[#244D3F] text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
                >
                    <FaArrowLeft />
                    Back to Home
                </Link>

                {/* Decorative Line */}
                <div className="w-16 h-[2px] bg-[#244D3F] mx-auto mt-8"></div>

            </div>
        </div>
    );
};

export default ErrorPage;