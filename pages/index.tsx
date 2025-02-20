import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  console.log('Rendering Home page')
  
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Luxe Wallpapers - Premium Wall Coverings</title>
        <meta name="description" content="Discover our premium collection of luxury wallpapers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Luxe Wallpapers
        </h1>
        <p className="text-center text-xl text-gray-600">
          Discover our premium collection of luxury wallpapers
        </p>
      </main>
    </div>
  )
}

export default Home
