"use client"
import Link from "next/link";
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
 
        <span className="text-white fw-semibold d-block d-lg-none">Menu</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Włącz menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Link href="/" title="Start" className="nav-link">Start</Link></li>
            <li className="nav-item"><Link href="/oferta/" title="Oferta" className="nav-link">Oferta</Link></li>
            <li className="nav-item"><Link href="/kontakt/" title="Kontakt" className="nav-link">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      </nav>
    </>
  )
}

export default Navigation