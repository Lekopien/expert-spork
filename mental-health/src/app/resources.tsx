import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Phone, MessageCircle, Video } from 'lucide-react'

export default function Resources() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Helplines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <Phone className="mr-2 h-4 w-4" />
            Crisis Hotline: 1-800-273-8255
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <MessageCircle className="mr-2 h-4 w-4" />
            Text Support: Text HOME to 741741
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Self-Help Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" />
            Mental Health Articles
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Video className="mr-2 h-4 w-4" />
            Guided Meditation Videos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}