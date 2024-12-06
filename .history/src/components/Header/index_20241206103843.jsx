import { Theme } from "../Theme";

export const Header = (props) => {
  const { logo, navList } = props;
  const [logoSrc, setLogoSrc] = useState(logo.imageWhite);

  return (
    <header className="header" id="header">
      <nav className="container nav">
        <a href="#" className="nav__logo">
          <img src={logoSrc} alt="logo" id="logo" className="nav__logo-img" />
          {logo.name}
        </a>
        <ul className="nav__list">
          {navList.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`} className="nav__link">
                {item}
              </a>
            </li>
          ))}
          <li>
            <Theme setLogoSrc={setLogoSrc} logo={logo} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
