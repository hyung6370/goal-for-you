import Link from "next/link"


const HomeNavbar = () => {

    return (
        <div>
            <nav className="flex flex-wrap items-center justify-center text-base font-bold font_local md:ml-auto">
                <Link legacyBehavior href="/calendar">
                    <a>
                        <span className="nav_menu_bar font_here">
                            Calendar
                        </span>
                    </a>
                </Link>
                <Link legacyBehavior href="/ongoing">
                    <a>
                        <span className="nav_menu_bar font_here">
                            On Going
                        </span>
                    </a>
                </Link>
                <Link legacyBehavior href="/community">
                    <a>
                        <span className="nav_menu_bar font_here">
                            Community
                        </span>
                    </a>
                </Link>
                <Link legacyBehavior href="/mypage">
                    <a>
                        <span className="nav_menu_bar font_here">
                            My Page
                        </span>
                    </a>
                </Link>

            </nav>
        </div>
    )
}

export default HomeNavbar;