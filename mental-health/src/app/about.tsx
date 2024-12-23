import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About MindfulMe</CardTitle>
      </CardHeader>
      <CardContent>
        <p>MindfulMe is a mental health app designed to support your emotional wellbeing. Our mission is to provide accessible tools and resources to help you navigate life's challenges and cultivate mindfulness.</p>
        <p className="mt-4">Founded by a team of mental health professionals and tech experts, we strive to create a safe, supportive space for personal growth and self-discovery.</p>
      </CardContent>
    </Card>
  )
}