import "../styles/Header.scss";

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <ul className="flex">
        <li className="flex-item" style={{width:'40%'}}>
          <h2>Dashboard</h2>
          <p>Payment updates</p>
        </li>
        <li className="flex-item">
          <form onSubmit={handleSubmit} method="get" autoComplete="off">
            <div className="input-wrapper">
              <input type="search" name="k" placeholder="Search ( / )" required />
              <i className="fi fi-rs-search"></i>
            </div>
          </form>
        </li>
        <li className="flex-item">
          <ul className="menu">
            <li>
              <a href="#!" title="Events">
                <i className="fi fi-rs-calendar"></i>
              </a>
            </li>
            <li>
              <a href="#!" title="Notifications">
                <i className="fi fi-rs-bell"></i>
              </a>
            </li>
            <li>
              <a href="#!" title="My Profile">
                <div className="avatar">&nbsp;</div>
                <i className="fi fi-rs-angle-small-down"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
