import "./style.css";
export const Footer = (props) => {
  const { navList, footerCopy } = props;
  return (
    <footer className="footer" id="footer">
      <div className="container grid footer__container">
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">
              {navList[0]}
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              {navList[1]}
            </a>
          </li>
          <li>
            <a href="#my info" className="footer__link">
              {navList[2]}
            </a>
          </li>
        </ul>
        <span className="footer__copy">{footerCopy}</span>
      </div>
    </footer>
  );
};
