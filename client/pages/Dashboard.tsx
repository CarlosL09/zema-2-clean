import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'wouter'

export default function Dashboard() {
  const [, setLocation] = useLocation()
  const queryClient = useQueryClient()

  const { data: user } = useQuery({
    queryKey: ['/api/auth/user'],
    retry: false,
  })

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] })
    setLocation('/')
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400">ZEMA</div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">Manage your email automation</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-cyan-400">1,234</div>
            <div className="text-gray-300">Emails Processed</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-green-400">15</div>
            <div className="text-gray-300">Active Rules</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-blue-400">89%</div>
            <div className="text-gray-300">Automation Rate</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-purple-400">12h</div>
            <div className="text-gray-300">Time Saved</div>
          </div>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Email Accounts</h3>
            <p className="text-gray-300 mb-4">Connect your email accounts to start automating</p>
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors text-white">
              Add Account
            </button>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Automation Rules</h3>
            <p className="text-gray-300 mb-4">Create rules to automate your email workflow</p>
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors text-white">
              Create Rule
            </button>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Analytics</h3>
            <p className="text-gray-300 mb-4">View insights about your email patterns</p>
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors text-white">
              View Analytics
            </button>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">AI Assistant</h3>
            <p className="text-gray-300 mb-4">Get AI-powered email suggestions and insights</p>
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors text-white">
              Open Assistant
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}