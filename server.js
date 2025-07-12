const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API Routes
app.get('/api/auth/user', (req, res) => {
  res.json({ 
    id: 1, 
    email: 'demo@zema.com', 
    name: 'Demo User',
    status: 'authenticated' 
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'ZEMA',
    timestamp: new Date().toISOString(),
    port: PORT 
  });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 ZEMA server successfully running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api/auth/user`);
});