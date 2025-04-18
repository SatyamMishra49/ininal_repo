import Logo from '../assets/PhonePe.svg';
import BannerImage from '../assets/PhonePe_Banner.webp';

export default function Homepage() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="flex items-center justify-between px-12 py-4 shadow-sm">
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
                <div className="absolute inset-0 flex flex-col justify-center items-start md:pl-20 text-left"></div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 py-8">
                    <div className="border rounded-lg p-6 flex flex-col items-center shadow hover:shadow-md transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                        >
                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>

                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-lg font-semibold text-purple-800">
                                Insurance
                            </h3>
                            <span className="text-purple-700 text-xl">
                                &#8594;
                            </span>
                        </div>
                    </div>

                    <div className="border rounded-lg p-6 flex flex-col items-center shadow hover:shadow-md transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-lg font-semibold text-purple-800">
                                Investments
                            </h3>
                            <span className="text-purple-700 text-xl">
                                &#8594;
                            </span>
                        </div>
                    </div>

                    <div className="border rounded-lg p-6 flex flex-col items-center shadow hover:shadow-md transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-lg font-semibold text-purple-800">
                                Lending
                            </h3>
                            <span className="text-purple-700 text-xl">
                                &#8594;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
