"use client"
import Image from 'next/image'

const footer = () => {
    return (
        <div className="footer-components">
            <div className="footer section-space80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget mb20">
                                <h3 className="footer-title mb30">About Fixit Repairs</h3>
                                <p>We are the appliance repair experts and our engineers have already successfully repaired kitchen appliances for more than 1 million households nationwide.</p>
                                <ul className="listnone">
                                    <li>
                                        <address>
                                            2255 Hummingbird Way,<br />
                                                Salina, KS 67401
                                        </address>
                                    </li>
                                    <li className="mb10">+ 91  123 467 8912</li>
                                    <li className="mb10">info@fixitrepair.com</li>
                                </ul>
                                <div className="footer-social"> <a href="#"></a></div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-3">
                            <div className="footer-widget mb20">
                                <h3 className="footer-title mb30">Services</h3>
                                <ul className="listnone bullet bullet-arrow-right">
                                    <li><a href="#">Washing Machine</a></li>
                                    <li><a href="#">Tumble Dryer</a></li>
                                    <li><a href="#">Oven Repair</a></li>
                                    <li><a href="#">Fridge</a></li>
                                    <li><a href="#">Dishwasher</a></li>
                                    <li><a href="#">Extractor</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="footer-widget mb20">
                                <div className="newsletter-widget">
                                    <h3 className="footer-title mb30">Subscribe our newsletter</h3>
                                    <p>Keep up with the latest news, special offers and other discount information.</p>
                                    <div className="newsletter-form">
                                        <form className="row" method="post" action="newsletter.php">
                                            <div className="col-md-12">
                                    
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-primary">Subscribe now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="tiny-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <small>SerwisAgd &copy; <span id="copyright"> 2024</span> Wszystkie prawa zastrzeżone. Realizacja <a href="https://www.maxsoft.pl">Maxsoft</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer