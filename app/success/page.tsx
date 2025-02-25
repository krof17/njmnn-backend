export default function Success() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Purchase Successful!</h1>
          <p>Thanks for your order. You’ll receive a confirmation soon.</p>
          <a href="/products" className="mt-6 inline-block px-6 py-2 bg-orange-500 rounded hover:bg-orange-600">
            Back to Products
          </a>
        </div>
      </div>
    );
  }