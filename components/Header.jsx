"use client"

import Image from 'next/image'

const header = () => {
    return (
        <header class="bg-white py-4 border-top">
            <div class="container px-md-0">
                <div class="row d-flex align-items-center ">
                    <div class="col-lg-5 col-md-4 col-12">
                        <div class="text-center text-md-start">
                            <a href="/" className='logo'>
                                <Image
                                    className=""
                                    src="/assets/images/logo/logo.webp"
                                    alt="Serwis Agd Logo"
                                    width={364}
                                    height={87}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '364px'
                                    }}
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1 col-md-8 col-12 d-none d-md-block">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-none d-lg-block">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock text-primary" viewbox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                        </svg>
                                    </div>
                                    <div class="ms-3">
                                        <h6 class="mb-1 text-body">Godziny otwarcia</h6>
                                        <span class="fw-semibold">pn-pt: 09:00 do 17:00<br />
                                        sb: 09:00 do 13:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-clock text-primary" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" /><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                                    </div>
                                    <div class="ms-3">
                                        <h6 class="mb-1 text-body">Adres</h6>
                                        <span class="fw-semibold">66-200 Świebodzin, Wałowa 56</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone text-primary" viewbox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                        </svg>
                                    </div>
                                    <div class="ms-3">
                                        <h6 class="mb-1 text-body">Telefon</h6>
                                        <span class="fw-semibold"><a href="tel:+48600641862">(+48) 600 641 862</a><br />
                                        &nbsp;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header