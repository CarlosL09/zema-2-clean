import { Router, Route, Switch } from 'wouter'
import { useQuery } from '@tanstack/react-query'
import Landing from './pages/Landing.tsx'
import Dashboard from './pages/Dashboard.tsx'
import SignIn from './pages/SignIn.tsx'
function App() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['/api/auth/user'],
    retry: false,
  })
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto"></div>
          <p className="mt-4 text-white">Loading ZEMA...</p>
        </div>
      </div>
    )
  }
  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route path="/" component={Landing} />
            <Route path="/signin" component={SignIn} />
          </>
        ) : (
          <>
            <Route path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
          </>
        )}
        <Route>
          <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p>Page not found</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}
export default App
