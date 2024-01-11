import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <section className="py-lg-7 py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="text-center mb-lg-6 mb-5">
                <h2 className="mb-4 ">Błąd 404</h2>
                <p className="mb-0"><b>Nie znaleziono wyszukiwanej strony!.</b></p>
                <p></p>
                <Link href="/" className='btn btn-danger'>Powrót do Strony głównej</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}