"use client";
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export default function ThemeSwitcher() {

    const themeValues = [
        "light", "dark", "cupcake",
        "bumblebee", "emerald", "corporate",
        "synthwave", "retro", "cyberpunk",
        "valentine", "halloween", "garden",
        "forest", "aqua", "lofi", "pastel",
        "fantasy", "wireframe", "black",
        "luxury", "dracula", "cmyk",
        "autumn", "business", "acid",
        "lemonade", "night", "coffee",
        "winter"
    ];

    useEffect(() => {
        themeChange(false);
    });

    return (
        <div title='Change Theme' className="dropdown dropdown-end">
            <div tabIndex="0" className="btn gap-1 normal-case transition ease-in-out hover:scale-105">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current tablet:h-6 tablet:w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                    </path>
                </svg>
                <span className="hidden lg:inline">
                    Theme
                </span>
                <svg width="12px" height="12px" className="ml-1 hidden h-3 w-3 fill-current opacity-60 mobile:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z">
                    </path>
                </svg>
            </div>
            <ul tabIndex="0" className="dropdown-content menu z-[1] p-2 mt-4 shadow bg-base-100 max-h-96 h-64 overflow-y-scroll rounded-box w-52">
                <div className="grid grid-cols-1 gap-3 p-3 z-[1]" tabIndex="0">
                    {
                        themeValues.map((theme, index) => {
                            return (
                                <div key={index} className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline transition ease-in-out hover:scale-105" data-set-theme={theme} data-act-classname="outline">
                                    <div data-theme={theme} className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">
                                                    {theme}
                                                </div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    )
}