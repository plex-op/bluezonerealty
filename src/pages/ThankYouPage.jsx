export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Your message has been successfully sent. Our team will get back to you
          shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-rose-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-rose-600 transition-all shadow-md hover:shadow-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
