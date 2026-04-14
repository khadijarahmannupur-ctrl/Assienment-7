import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-16">
            <div className="max-w-6xl mx-auto px-4 py-12 text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold">KeenKeeper</h2>

                {/* Subtitle */}
                <p className="text-sm md:text-base text-gray-200 mt-3 max-w-xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links */}
                <p className="mt-6 text-sm font-medium">Social Links</p>

                <div className="flex justify-center gap-4 mt-3">
                    <div className="w-9 h-9 bg-white text-[#244D3F] flex items-center justify-center rounded-full cursor-pointer">
                        <FaYoutube size={14} />
                    </div>
                    <div className="w-9 h-9 bg-white text-[#244D3F] flex items-center justify-center rounded-full cursor-pointer">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="w-9 h-9 bg-white text-[#244D3F] flex items-center justify-center rounded-full cursor-pointer">
                        <FaTwitter size={14} />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-400 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200 gap-3">

                    {/* Left */}
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    {/* Right */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Cookies</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;