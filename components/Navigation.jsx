"use client"

import { useEffect, useState } from "react"

const Navigation = () => {

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['navbar navbar-expand-lg navbar-dark navbar-default'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")}>
      <div className="container px-md-0">
 
        <span class="text-white fw-semibold d-block d-lg-none">Menu</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className="nav-item"><a href="/" title="Start" className="nav-link">Start</a></li>
            <li className="nav-item"><a href="/oferta" title="Oferta" className="nav-link">Oferta</a></li>
            <li className="nav-item"><a href="/kontakt" title="Kontakt" className="nav-link">Kontakt</a></li>
          </ul>
        </div>
      </div>
      </nav>
    </>
  )
}

export default Navigation