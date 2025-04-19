import React, { useState } from 'react';
import Logo from '../assets/PhonePe.svg';
import { Link } from 'react-router-dom';

export default function Appbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <div className="shadow flex justify-between items-center h-16 px-6 bg-white">
            <div className="w-[175px]">
                <img src={Logo} alt="PhonePe_Logo" className="h-10" />
            </div>

            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="flex items-center text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-300"
                >
                    <span className="sr-only">User Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-9"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                </button>

                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-xl z-50">
                        <div className="px-4 py-3">
                            <p className="text-sm font-medium text-gray-900">
                                satyam.mishra
                            </p>
                            <p className="text-sm text-gray-500">
                                satyam.mishra@gmail.com
                            </p>
                        </div>
                        <ul className="py-1">
                            <li>
                                <Link
                                    to={'/'}
                                    className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100"
                                >
                                    <button>Home</button>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/'}
                                    className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100"
                                >
                                    <button>Balance</button>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/'}
                                    className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100"
                                >
                                    <button>Logout</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
