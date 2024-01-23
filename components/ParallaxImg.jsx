
"use client"

import { Parallax } from 'react-parallax';
import Image from 'next/image'

const ParallaxImg = () => {
  return (
    <section className="py-lg-7 py-5 d-none d-md-block">
      <Parallax blur={0} bgImage="/assets/images/parallax/bg2.webp" bgImageAlt="Tło AGD" strength={200}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default ParallaxImg