import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgressTracker() {
  // This is a placeholder for actual progress data
  const moodData = [3, 4, 2, 5, 3, 4, 4]
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Weekly Mood Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between">
          {moodData.map((mood, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="bg-blue-500 dark:bg-blue-400 rounded-t"
                style={{ height: `${mood * 20}%`, width: '20px' }}
              ></div>
              <span className="mt-2 text-sm">{daysOfWeek[index]}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center">Your average mood this week: 3.6 / 5</p>
      </CardContent>
    </Card>
  )
}