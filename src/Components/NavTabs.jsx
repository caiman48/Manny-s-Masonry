const NavTabs = ({ currentPage, handlePageChange }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#hero"
          onClick={() => handlePageChange("Hero")}
          className={currentPage === "Hero" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
};

export default NavTabs;
