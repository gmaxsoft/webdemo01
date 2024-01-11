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
                <p className="mb-0">We are able to carry out repairs on most of kitchen appliances, including
                  washing machines, tumble dryers, dishwashers, gas and electric cookers, fridge freezers
                  and freezers etc...</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div>
                  <a href="#">

                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-1.jpg"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />

                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Washing Machine Repair</a>
                  </h3>
                  <p className="">Our engineers are fully trained and our fixed price washing machine repairs
                    include
                    diagnosis parts.</p>
                  <a href="#" className="link-primary border-bottom border-primary fw-semibold border-2">Read
                    More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card border-0 h-100 shadow-sm">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-2.jpg"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Dishwasher Repair</a>
                  </h3>
                  <p>If your dishwasher is dead or expensive to repair, we repair all type of demaged
                    dishwasher.</p>
                  <a href="#" className="link-primary border-bottom border-primary fw-semibold border-2">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card  border-0 h-100 shadow-sm">
                <div>
                  <a href="#">
                    <Image
                      className="img-fluid w-100 rounded-top"
                      src="/assets/images/service/service-3.jpg"
                      alt="Serwis Agd Logo"
                      width={358}
                      height={210}
                      priority
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="mb-3">
                    <a href="#" className="text-reset">Fridge Repair</a>
                  </h3>
                  <p>If the refrigerator isn’t functioning effectively, it could really disrupt the way
                    your home functions.</p>
                  <a href="#" className="link-primary border-bottom border-primary fw-semibold border-2">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="card  border-0 h-100 shadow-sm">
                <div>
                <a href="#">
                  <Image
                    className="img-fluid w-100 rounded-top"
                    src="/assets/images/service/service-4.jpg"
                    alt="Serwis Agd Logo"
                    width={358}
                    height={210}
                    priority
                  />
                </a>
              </div>
              <div className="card-body">
                <h3 className="mb-3">
                  <a href="#" className="text-reset">Extractor Hood Repair</a>
                </h3>
                <p>Extractor hood repair is generally a quick and simple process, and our team of fully
                  trained engineers can carry out work.</p>
                <a href="#" className="link-primary border-bottom border-primary fw-semibold border-2">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
            <div className="card  border-0 h-100 shadow-sm">
              <div>
                <a href="#">
                  <Image
                    className="img-fluid w-100 rounded-top"
                    src="/assets/images/service/service-5.jpg"
                    alt="Serwis Agd Logo"
                    width={358}
                    height={210}
                    priority
                  />
                </a>
              </div>
              <div className="card-body">
                <h3 className="mb-3">
                  <a href="#" className="text-reset">Oven Repair</a>
                </h3>
                <p>Having trouble with your oven, stove top, or range? Work with the experts! Contact us
                  today for appliance repair.</p>
                <a href="#" className="link-primary border-bottom border-primary fw-semibold border-2">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 border-0 shadow-sm">
              <div>
                <a href="#">
                  <Image
                    className="img-fluid w-100 rounded-top"
                    src="/assets/images/service/service-6.jpg"
                    alt="Serwis Agd Logo"
                    width={358}
                    height={210}
                    priority
                  />
                </a>
              </div>
              <div className="card-body">
                <h3 className="mb-3">
                  <a href="#" className="text-reset">Cooker Repair</a>
                </h3>
                <p>We are now one of the leading domestic cooker repair companies in the A’bad trusted
                  by
                  hundreds of customers.</p>
                <a href="#" className="link-primary border-bottom border-primary fw-semibold border-2">Read More</a>
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