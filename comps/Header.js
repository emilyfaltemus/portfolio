const Header = () => {
    return (
        <header className="view header section">
            <div className="view__in section__in">
                <svg class="sigil header__sigil">
                    <use href="#sigil"></use>
                </svg>
                <div>Emme Altemus</div>
                <div className="divider-line">
                    <h1 className="divider-line__text">Welcome</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
