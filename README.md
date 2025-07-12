# ZEMA 2 - Clean Version

A streamlined version of the ZEMA (Zero Effort Mail Automation) SaaS platform.

## Features

- 🔐 **Authentication System** - Email/password login with session management
- 📊 **Dashboard** - Clean, modern interface showing key metrics
- 🎨 **Modern UI** - Dark theme with cyan accents using Tailwind CSS
- 🚀 **Fast Development** - Hot reloading with Vite
- 📱 **Responsive Design** - Works on desktop and mobile

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Demo Credentials

- **Email**: demo@zema.com
- **Password**: demo123

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js + TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query
- **Storage**: In-memory (easily upgradeable to PostgreSQL)
- **Authentication**: Session-based with bcrypt

## Project Structure

```
zema-2-clean/
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── storage.ts       # Data storage layer
│   └── vite.ts          # Vite integration
├── shared/              # Shared types/schemas
└── package.json
```

## Development

The application uses:
- **In-memory storage** for demo purposes
- **Session-based authentication** with secure cookies
- **Hot reloading** for fast development
- **TypeScript** for type safety
- **Clean architecture** with separation of concerns

## Production Deployment

Ready for deployment to:
- Railway
- Vercel
- Heroku
- Any Node.js hosting platform

## Next Steps

This clean version provides a solid foundation for:
- Adding database integration
- Implementing email automation features
- Adding AI-powered functionality
- Building team collaboration tools
- Integrating with email providers

---

**ZEMA 2** - A clean, modern email automation SaaS platform.