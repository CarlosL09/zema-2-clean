import { Link } from 'wouter'

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400">ZEMA</div>
          <Link 
            href="/signin" 
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zero Effort Mail Automation
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your email workflow with AI-powered automation. Get smart replies, 
          automated categorization, and seamless integrations.
        </p>
        <Link 
          href="/signin" 
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
        >
          Get Started Free
        </Link>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-cyan-400 text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Automation</h3>
            <p className="text-gray-300">
              Let AI handle your email sorting, replies, and task creation automatically.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-cyan-400 text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">Multi-Account Management</h3>
            <p className="text-gray-300">
              Unified inbox for Gmail, Outlook, and other providers in one dashboard.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-cyan-400 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-gray-300">
              Insights and performance tracking to optimize your email workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 ZEMA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}