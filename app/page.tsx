import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-0">
        <section className="min-h-screen bg-black relative overflow-hidden">
          {/* Geometric Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-500 rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-green-500 rotate-12"></div>
            <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-red-500 -rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-green-500 rotate-45"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Main Headline */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-6">
                Turning Market Insights Into Measurable Growth
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                Շուկայական գիտելիքները վերածում ենք չափելի աճի
              </p>
              <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                We develop marketing solutions that respond to market demands and innovations, delivering clear results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-6 border border-gray-800 rounded-lg hover:border-red-500 transition-colors">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mission</h3>
                <p className="text-gray-400">
                  Empowering businesses through data-driven marketing strategies that deliver measurable results.
                </p>
              </div>

              <div className="text-center p-6 border border-gray-800 rounded-lg hover:border-green-500 transition-colors">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Approach</h3>
                <p className="text-gray-400">
                  Strategic analysis combined with creative execution to maximize your marketing ROI.
                </p>
              </div>

              <div className="text-center p-6 border border-gray-800 rounded-lg hover:border-red-500 transition-colors">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Results</h3>
                <p className="text-gray-400">
                  Proven track record of increasing brand visibility and driving sustainable growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">150+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
                Get Started Today
              </button>
              <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
