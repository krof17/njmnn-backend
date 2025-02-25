import Head from 'next/head';

export default function Products() {
  // Placeholder data until backend
  const rashguards = [
    { id: 1, name: 'NJMNN Peak', price: 49.99, color: 'Black/White' },
    { id: 2, name: 'NJMNN Ridge', price: 54.99, color: 'Green' },
    { id: 3, name: 'NJMNN Slash', price: 52.99, color: 'Gray/Orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>NJMNN | Products</title>
      </Head>
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">NJMNN Products</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rashguards.map((item) => (
            <div key={item.id} className="p-4 bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-300">${item.price}</p>
              <p className="text-gray-400">{item.color}</p>
              <button className="mt-3 px-4 py-2 bg-orange-500 rounded hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}