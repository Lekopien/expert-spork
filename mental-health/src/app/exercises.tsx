import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Exercises() {
  const [gratitudeEntries, setGratitudeEntries] = useState(['', '', ''])

  const handleGratitudeChange = (index: number, value: string) => {
    const newEntries = [...gratitudeEntries]
    newEntries[index] = value
    setGratitudeEntries(newEntries)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Breathing Exercise</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Practice deep breathing to reduce stress and anxiety:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Breathe in slowly through your nose for 4 seconds</li>
            <li>Hold your breath for 4 seconds</li>
            <li>Exhale slowly through your mouth for 4 seconds</li>
            <li>Repeat for 5 minutes</li>
          </ol>
          <Button className="mt-4">Start Guided Breathing</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Gratitude Journal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Write down three things you're grateful for today:</p>
          {gratitudeEntries.map((entry, index) => (
            <Textarea
              key={index}
              placeholder={`I'm grateful for...`}
              value={entry}
              onChange={(e) => handleGratitudeChange(index, e.target.value)}
              className="mb-2"
            />
          ))}
          <Button className="mt-2">Save Entries</Button>
        </CardContent>
      </Card>
    </div>
  )
}