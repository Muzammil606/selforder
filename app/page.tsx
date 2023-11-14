import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ position: 'relative', width: '100vw', height: '200px' }}>
        <Image
          src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg"
          alt="Banner"
          sizes="100vw"
          fill
          style={{
            objectFit: 'cover',
            borderBottomLeftRadius: '30px',
            borderBottomRightRadius: '30px'
          }}
        />
      </div>
    </main>
  )
}
