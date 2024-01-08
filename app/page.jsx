import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <p>
          Get started by editing&nbsp;
          <code className="">app/page.js</code>
        </p>
      </div>
      <div className="">
        <Image
          className=""
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  )
}
