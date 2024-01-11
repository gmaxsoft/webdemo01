import Image from 'next/image'

const Brands = ({ className }) => {
    return (
        <section className={`py-5 ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                        <div className="text-center mb-lg-6 mb-5 mt-5">
                            <h2 className="mb-3">Marki które obsługujemy</h2>
                            <p>We service all makes and models, and all brands. Below you will see just a <strong className="text-dark fw-bold">fwe of the brands</strong> we have serviced recently.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-1.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-2.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-3.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-4.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-5.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-6.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-7.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <a href="#">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-8.png"
                                        alt="Serwis Agd Logo"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands