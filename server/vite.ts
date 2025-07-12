import { createServer as createViteServer } from 'vite'
import type { Express } from 'express'

export async function setupVite(app: Express) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    root: 'client'
  })

  app.use(vite.ssrFixStacktrace)
  app.use(vite.middlewares)
}