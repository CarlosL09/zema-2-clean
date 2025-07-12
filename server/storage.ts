import { User } from '../shared/schema'

export interface IStorage {
  getUserById(id: string): Promise<User | undefined>
  getUserByEmail(email: string): Promise<User | undefined>
  createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User>
}

class MemoryStorage implements IStorage {
  private users: User[] = []

  async getUserById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id)
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email)
  }

  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const user: User = {
      id: Math.random().toString(36).substring(2, 15),
      ...userData,
      createdAt: new Date()
    }
    this.users.push(user)
    return user
  }
}

export const storage = new MemoryStorage()

// Create demo user
import bcrypt from 'bcrypt'

async function createDemoUser() {
  const existingUser = await storage.getUserByEmail('demo@zema.com')
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash('demo123', 10)
    await storage.createUser({
      email: 'demo@zema.com',
      passwordHash: hashedPassword,
      firstName: 'Demo',
      lastName: 'User'
    })
    console.log('✅ Demo user created: demo@zema.com / demo123')
  }
}

createDemoUser().catch(console.error)