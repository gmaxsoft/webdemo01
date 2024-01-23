import Link from "next/link";
import Image from 'next/image'

const Brands = ({ className }) => {
    return (
        <>
        <section className={`py-5 ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                        <div className="text-center mb-lg-6 mb-5 mt-5">
                            <h2 className="mb-3">Marki które obsługujemy</h2>
                            <p>Obsługujemy wszystkie marki i ich modele. Poniżej znajdziesz tylko kilka marek, które ostatnio obsługiwaliśmy.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/amica/" title="Amica">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-1.webp"
                                        alt="Amica"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/aeg/" title="AEG">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-2.webp"
                                        alt="AEG"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/bosch/" title="BOSCH">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-3.webp"
                                        alt="BOSCH"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/electrolux/" title="ELECTROLUX">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-4.webp"
                                        alt="ELECTROLUX"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/miele/" title="MIELE">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-5.webp"
                                        alt="MIELE"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/samsung/" title="SAMSUNG">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-6.webp"
                                        alt="SAMSUNG"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/siemens/" title="SIEMENS">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-7.webp"
                                        alt="SIEMENS"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/whirlpool/" title="Whirlpool">
                                    <Image
                                        className="img-fluid"
                                        src="/assets/images/png/brand-logo-8.webp"
                                        alt="Whirlpool"
                                        width={284}
                                        height={180}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="card text-center rounded-0 card-lift">
                            <div className="card-body">
                                <Link href="/indesit/" title="INDESIT">
                                <Image
                                    className="img-fluid"
                                    src="/assets/images/png/brand-logo-9.webp"
                                    alt="INDESIT"
                                    width={284}
                                    height={180}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="card text-center rounded-0 card-lift">
                        <div className="card-body">
                            <Link href="/ariston/" title="Ariston">
                                <Image
                                    className="img-fluid"
                                    src="/assets/images/png/brand-logo-10.webp"
                                    alt="Ariston"
                                    width={284}
                                    height={180}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="card text-center rounded-0 card-lift">
                        <div className="card-body">
                            <Link href="/beko/" title="BEKO">
                                <Image
                                    className="img-fluid"
                                    src="/assets/images/png/brand-logo-11.webp"
                                    alt="BEKO"
                                    width={284}
                                    height={180}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="card text-center rounded-0 card-lift">
                        <div className="card-body">
                            <Link href="/candy/" title="CANDY">
                                <Image
                                    className="img-fluid"
                                    src="/assets/images/png/brand-logo-12.webp"
                                    alt="CANDY"
                                    width={284}
                                    height={180}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section >
        </>
    )
}

export default Brands