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
            <li>
                <a href="https://links.harmoniedurrant.com">More Links</a>
            </li>
            <li className="block sm:hidden">
                <a href="https://www.canva.com/design/DAGKkS0IV8o/dGJ_4CPAH5uQKSCxBZTbug/view?utm_content=DAGKkS0IV8o&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                    My CV
                </a>
            </li>
            <li className="block sm:hidden">
                <a href="https://github.com/harmonie-durrant">
                    GitHub
                </a>
            </li>
        </>
    )
}

export default function NavBar() {
    return (
        <div className="navbar bg-base-100 absolute">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks />
                    </ul>
                </div>
                <a className="btn text-xl ml-2" href="/">
                    Harmonie <span className="hidden sm:block">Durrant</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLinks />
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mx-2 hidden sm:inline-flex" href="https://www.canva.com/design/DAGKkS0IV8o/dGJ_4CPAH5uQKSCxBZTbug/view?utm_content=DAGKkS0IV8o&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                    See my CV
                </a>
                <a className="btn mx-2 hidden sm:inline-flex" href="https://github.com/harmonie-durrant">
                    GitHub
                </a>
                <div className="mx-2">
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}