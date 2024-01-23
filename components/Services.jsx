"use client"

import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <>
      <section className="py-lg-7 py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-12 col-12">
              <div className="text-center mb-lg-6 mb-5">
                <h2 className="mb-3">Nasza Oferta</h2>
                <p className="mb-0">Zajmujemy się naprawą pralek, zmywarek, szuszarek i ekspresów do kawy. Nasza oferta to między innymi: diagnozowanie usterki, naprawa programatorów i silników, wymiana filtra, łożysk i wszystkich innych uszkodzonych części.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card h-100 border-0 card-lift shadow-sms">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-1.webp"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Naprawa pralek</a>
                  </h3>
                  <p className="">Naprawa pralek różnych producentów między innymi: Beko, Bosch, Candy, Whirlpool, Ariston, Indesit oraz wielu innych.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card border-0 h-100 card-lift shadow-sms">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-2.webp"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Naprawa zmywarek</a>
                  </h3>
                  <p>Naprawa zmywarek - diagnozujemy i naprawiamy zmywarki niezależnie od producenta i rodzaju usterki na miejscu u klienta.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card border-0 h-100 card-lift shadow-sms">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-3.webp"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Naprawa suszarek do prania</a>
                  </h3>
                  <p>Jeśli potrzebujesz pomocy przy naprawie swojej suszarki do ubrań, skontaktuj się z nami.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="card  border-0 h-100 card-lift shadow-sms">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-4.webp"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Naprawa ekspresów do kawy</a>
                  </h3>
                  <p>Naprawiamy i serwisujemy ekspresy do kawy. Przyjmujemy do naprawy oraz naprawiamy ekspresy w domu lub firmie.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
              <div className="card  border-0 h-100 card-lift shadow-sms">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-5.webp"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Naprawa programatorów</a>
                  </h3>
                  <p>Naprawiamy moduły elektroniczne, programatory, sterowniki dla pralek i pralko-suszarek.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card h-100 border-0 card-lift shadow-sms">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-6.webp"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Wymiana łożysk w pralkach</a>
                  </h3>
                  <p>Wymieniamy łożyska w pralkach. Naprawiamy wszystkie typy pralek z zastosowaniem markowych certyfikowanych łożysk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services