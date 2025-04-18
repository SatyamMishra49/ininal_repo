import Logo from '../assets/PhonePe.svg';
import BannerImage from '../assets/PhonePe_Banner.webp';

export default function Homepage() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
                <div className="w-[150px]">
                    <img src={Logo} alt="Logo"></img>
                </div>
                <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                    <li>OUR SOLUTIONS</li>
                    <li>PRESS</li>
                    <li>CAREERS</li>
                    <li>ABOUT US</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                    <li>TRUST & SAFETY</li>
                </ul>
            </nav>

            <div className="flex flex-col md:flex-row flex-1 justify-center bg-cyan-100">
                <img src={BannerImage} alt="BannerImage"></img>
            </div>
        </div>
    );
}
