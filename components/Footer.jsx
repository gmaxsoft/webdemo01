"use client"
import Image from 'next/image'

const footer = () => {
    return (
        <>
        <div className="footer-components">
            <div className="footer section-space80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget mb20">
                                <h3 className="footer-title mb30">Serwis AGD Chodkiewicz</h3>
                                <p className="text-justify">Zajmujemy się naprawą pralek, zmywarek, szuszarek i ekspresów do kawy w Świebodzinie, Sulechowie, Międzyrzeczu, Torzymiu, Trzcielu, Łagowie Lubuskim i innych okolicach gminy Świebodzin - wolnostojące i w zabudowie (zmywarki, pralki itp.). Przywozimy także używany sprzęt AGD z Niemiec.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-3">
                            <div className="footer-widget mb20">
                                <h3 className="footer-title mb30">Dane kontaktowe</h3>
                                <ul className="listnone">
                                    <li>
                                        <address>
                                            Naprawa pralek i zmywarek - Chodkiewicz<br />
                                            66-200 Świebodzin, Wałowa 56
                                        </address>
                                    </li>
                                    <li className="mb10">Pn-Pt: 09:00 do 17:00</li>
                                    <li className="mb10">Sb: 09:00-13:00</li>
                                    <li className="mb10">Tel: <a href="tel:+48600641862">(+48) 600 641 862</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="footer-widget mb20">
                                <div className="newsletter-widget">
                                    <h3 className="footer-title mb30">Tagi</h3>
                                    <p className="text-justify">Naprawa pralek, Świebodzin, Naprawa zmywarek, Sulechów, Naprawa ekspresów do kawy, Międzyrzecz, Naprawa suszarek, Lubrza, Części do pralek, Trzciel, Chodkiewicz, Torzym, AGD, Jordanowo, Serwis, Łagów Lubuski, Sulęcin, Zielona Góra, Krosno Odrzańskie</p>
                                    
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
        </>
    )
}

export default footer