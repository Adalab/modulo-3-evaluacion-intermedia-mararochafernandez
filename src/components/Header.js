import '../styles/components/Header.scss';

const Header = (props) => {
  const title = props.title ? (
    <h1 className="header__title">{props.title}</h1>
  ) : null;

  const subtitle = props.subtitle ? (
    <h2 className="header__subtitle">{props.subtitle}</h2>
  ) : null;

  return (
    <header className="header">
      <div className="header__wrapper">
        {title}
        {subtitle}
      </div>
    </header>
  );
};

export default Header;
