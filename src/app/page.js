import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Head>
        <title>CleverRank</title>
        <meta
          name="description"
          content="AI-powered research paper recommendation platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-lg py-6 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/assets/cleverank_logo.png"
              alt="CleverRank Logo"
              className="h-24 md:h-28 mr-3"
            />
          </div>
          <nav className="space-x-6 text-lg font-medium">
            <a
              href="#features"
              className="text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Features
            </a>
            <a
              href="#technology"
              className="text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Technology
            </a>
            <a
              href="#benefits"
              className="text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Benefits
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-indigo-700 text-white py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-semibold leading-tight">
              Reignite Your Passion for Research
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              An AI-powered platform to explore, understand, and showcase
              research papers with ease.
            </p>
            <button className="mt-8 bg-white text-indigo-700 font-bold py-3 px-6 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out">
              <Link href={"/login"}>Get Started</Link>
            </button>
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-semibold text-gray-800">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  Personalized Recommendations
                </h4>
                <p className="mt-4 text-gray-600">
                  AI-powered recommendations based on your interests and skill
                  level.
                </p>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  Comprehension Assessments
                </h4>
                <p className="mt-4 text-gray-600">
                  Real-time assessments to verify your understanding.
                </p>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  Gamified Learning
                </h4>
                <p className="mt-4 text-gray-600">
                  Earn badges and rankings to showcase your expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="bg-gray-100 py-24">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-semibold text-gray-800">
              Technology Stack
            </h3>
            <p className="mt-6 text-lg text-gray-600">
              Leveraging cutting-edge AI and NLP for research engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  AI-Based Recommendations
                </h4>
                <p className="mt-4 text-gray-600">
                  Collaborative and content-based filtering for personalized
                  results.
                </p>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  NLP for Assessments
                </h4>
                <p className="mt-4 text-gray-600">
                  Advanced language models evaluate understanding and relevance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-semibold text-gray-800">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  For Students
                </h4>
                <p className="mt-4 text-gray-600">
                  Structured paths to engage with high-quality research.
                </p>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  For Recruiters
                </h4>
                <p className="mt-4 text-gray-600">
                  Assess intellectual capacity and research engagement.
                </p>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-xl transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold text-indigo-600">
                  For Society
                </h4>
                <p className="mt-4 text-gray-600">
                  Promote dissemination of research knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CleverRank. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
