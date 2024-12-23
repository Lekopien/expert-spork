'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { BookOpen, Phone, MessageCircle, Moon, Sun, Home, Info, Dumbbell, BarChart2, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import AboutUs from './about'
import Resources from './resources'
import Exercises from './exercises'
import ProgressTracker from './progress'
import AIChat from './chat'

export default function MentalHealthApp() {
  const [mood, setMood] = useState<number | null>(null)
  const [journalEntry, setJournalEntry] = useState('')
  const [currentPage, setCurrentPage] = useState('home')
  const { theme, setTheme } = useTheme()

  const moodEmojis = ['😢', '😕', '😐', '🙂', '😄']

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />
      case 'resources':
        return <Resources />
      case 'exercises':
        return <Exercises />
      case 'progress':
        return <ProgressTracker />
      case 'chat':
        return <AIChat />
      default:
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>How are you feeling today?</CardTitle>
                <CardDescription>Track your mood over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  {moodEmojis.map((emoji, index) => (
                    <Button
                      key={index}
                      variant={mood === index ? "default" : "outline"}
                      className="text-2xl"
                      onClick={() => setMood(index)}
                    >
                      {emoji}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Journal</CardTitle>
                <CardDescription>Write about your thoughts and feelings</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Start writing here..."
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  rows={5}
                />
              </CardContent>
              <CardFooter>
                <Button>Save Entry</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Resources</CardTitle>
                <CardDescription>Get help when you need it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Crisis Hotline
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Self-Help Guides
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Community Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-blue-600 dark:text-blue-400">MindfulMe</Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle dark mode"
              />
              <Moon className="h-4 w-4" />
            </div>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-center space-x-4">
          <Button variant="ghost" onClick={() => setCurrentPage('home')}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" onClick={() => setCurrentPage('about')}>
            <Info className="mr-2 h-4 w-4" />
            About Us
          </Button>
          <Button variant="ghost" onClick={() => setCurrentPage('resources')}>
            <BookOpen className="mr-2 h-4 w-4" />
            Resources
          </Button>
          <Button variant="ghost" onClick={() => setCurrentPage('exercises')}>
            <Dumbbell className="mr-2 h-4 w-4" />
            Exercises
          </Button>
          <Button variant="ghost" onClick={() => setCurrentPage('progress')}>
            <BarChart2 className="mr-2 h-4 w-4" />
            Progress
          </Button>
          <Button variant="ghost" onClick={() => setCurrentPage('chat')}>
            <MessageSquare className="mr-2 h-4 w-4" />
            AI Chat
          </Button>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Remember, you're not alone. Reach out if you need help.
        </div>
      </footer>
    </div>
  )
}