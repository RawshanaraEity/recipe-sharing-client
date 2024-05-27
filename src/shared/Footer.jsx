import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-gray-400">
                    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
