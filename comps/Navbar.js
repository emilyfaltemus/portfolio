import Link from "next/link";

const Navbar = () => {
    return (
        <nav aria-label="Main sections" className="view nav section">
            <div className="nav__group">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/work">
                    <a>Work</a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
