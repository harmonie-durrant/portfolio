export default function Footer() {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover" href="/projects">Projects</a>
                <a className="link link-hover" href="/about">About Me</a>
                <a className="link link-hover" href="https://www.canva.com/design/DAGKkS0IV8o/dGJ_4CPAH5uQKSCxBZTbug/view?utm_content=DAGKkS0IV8o&utm_campaign=designshare&utm_medium=link&utm_source=editor">My CV</a>
                <a className="link link-hover" href="links.harmoniedurrant.com">More links</a>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Harmonie Durrant</p>
            </aside>
        </footer>
    )
}