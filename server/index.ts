import express from 'express'
import { createServer } from 'http'
import session from 'express-session'
import { storage } from './storage'
import bcrypt from 'bcrypt'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'development-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}))

// Auth middleware
const requireAuth = (req: any, res: any, next: any) => {
  if (!req.session?.userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }

    const user = await storage.getUserByEmail(email)
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isValid = await bcrypt.compare(password, user.passwordHash)
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    req.session.userId = user.id
    res.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true })
  })
})

app.get('/api/auth/user', requireAuth, async (req: any, res) => {
  try {
    const user = await storage.getUserById(req.session.userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    
    const { passwordHash, ...userWithoutPassword } = user
    res.json(userWithoutPassword)
  } catch (error) {
    console.error('Get user error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    app: 'ZEMA Clean'
  })
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist/public'))
  
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/public' })
  })
} else {
  // Development server
  const { setupVite } = await import('./vite')
  await setupVite(app)
}

const server = createServer(app)

server.listen(PORT, () => {
  console.log(`🚀 ZEMA Clean server running on port ${PORT}`)
})