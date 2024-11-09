import React, { useEffect, useRef, useState } from "react";
import { Bar, logo } from "../../pictures/pictures";
import "./Navbar.css";

const Navbar = () => {
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const contentRef = useRef(null);




  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (sectionId, event = undefined) => {
    if (event) {
      event.preventDefault();
    }
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    const yOffset = -100;
    const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navItems = [
    { id: "Home", label: "Home" },
    { id: "Feature", label: "Profile" },
    { id: "Overview", label: "Products" },
    { id: "Brochure", label: "Brochure" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <>
      <section className="CusBoxShadow">
        <div className="container ps-0 pe-0">
          <div className="row">
            <div className="col-12">
              <div className="CusLapHeader">
                <div className={`header-container ${isHeaderSticky ? "sticky" : "nonsticky"}`}>
                  <header className="d-flex flex-wrap justify-content-center align-items-center">
                    <div className="me-auto">
                      <img src={logo} className="logo" alt="Logo" />
                    </div>

                    <ul className="nav nav-pills navHeader">
                      {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                          <a className={activeSection === item.id ? "active" : ""} onClick={(event) => handleSectionClick(item.id, event)}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </header>
                </div>
              </div>
              <div className="MobileSection">
                <div className={`header-container ${isHeaderSticky ? "sticky" : "nonsticky"}`}>
                  <header className="d-flex flex-wrap justify-content-center align-items-center">
                    <div className="me-auto">
                      <img src={logo} className="logo" alt="Logo" />
                    </div>

                    <div className="text-end me-2 barIcondiv">
                      {!isOpen ? (
                        <img
                          src={Bar}
                          className={`bars hamburger-icon ${isOpen ? "rotate-out" : "rotate-in"}`}
                          alt="Hamburger Icon"
                          onClick={toggleMenu}
                        />
                      ) : (
                        <button
                          className={`cross-btnLanding ${isOpen ? "rotate-out" : "rotate-in"}`}
                          onClick={toggleMenu}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    <div className={`mobilenav ${isOpen ? "open" : ""}`}>
                      <div className={`mob-nav-content ${isOpen ? "slide-up" : "slide-down"}`}>
                        <ul>
                          {navItems.map((item) => (
                            <li className="nav-item" key={item.id}>
                              <a
                                className={activeSection === item.id ? "active nav-content-bttn open-font" : "nav-content-bttn open-font"}
                                onClick={(event) => handleSectionClick(item.id, event)}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
