import GooglerMap from '@/components/GooglerMap'

export default function Kontakt() {
  return (
    <>
    <section className="py-lg-7 py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-12 col-12">
            <div className="text-center mb-lg-6 mb-5">
              <h2 className="mb-3">Kontakt</h2>
              <p className="mb-0">We are able to carry out repairs on most of kitchen appliances, including
                washing machines, tumble dryers, dishwashers, gas and electric cookers, fridge freezers
                and freezers etc...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GooglerMap />
    </>
  )
}
