import ThemeSwitcher from "./ThemeSwitcher";

function NavLinks() {
    return (
        <>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/about">About Me</a>
            </li>
        </>
    )
}

export default function NavBar() {
    return (
        <div class="navbar bg-base-100 absolute">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks />
                    </ul>
                </div>
                <a class="btn text-xl ml-2" href="/">
                    Harmonie Durrant
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <NavLinks />
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn mx-2" href="https://github.com/harmonie-durrant">
                    GitHub
                </a>
                <div className="mx-2 hidden md:block">
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}