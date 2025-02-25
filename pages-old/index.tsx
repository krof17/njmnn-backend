import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Head>
        <title>NJMNN | BJJ Rashguards</title>
        <meta name="description" content="Peak-inspired BJJ gear" />
      </Head>
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">NJMNN</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Built for the Mat, Inspired by the Peak</h2>
        <p className="text-lg">Rashguards crafted for BJJ warriors.</p>
        <a href="/products" className="mt-6 px-6 py-2 bg-orange-500 rounded hover:bg-orange-600">
          Shop Now
        </a>
      </main>
      <footer className="p-4 text-center border-t border-gray-700">
        <p>© 2025 NJMNN</p>
      </footer>
    </div>
  );
}