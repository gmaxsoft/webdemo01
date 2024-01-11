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
    window.addEventListener('scroll',handleScroll)
  })

  let navbarClasses=['navigation'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  return (
    <div className={navbarClasses.join(" ")}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="navigation">
              <ul>
                <li className="active"><a href="index.html" className="animsition-link">Start</a></li>
                <li><a href="oferta.html" title="service">Oferta</a></li>
                <li><a href="kontakt.html" title="Contact Us" className="animsition-link">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation