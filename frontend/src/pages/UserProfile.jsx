import React, { useState } from "react"
import { Bell, Edit, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Vikram Kumar",
    email: "vikram@gmail.com",
    phone: "+91 8789148605",
    avatar: "/placeholder.svg?height=100&width=100",
    appointments: [
      {
        id: 1,
        doctor: "Dr. Priya Patel",
        specialty: "Cardiologist",
        date: "2023-10-15",
        time: "10:00 AM",
        status: "completed",
      },
      {
        id: 2,
        doctor: "Dr. Amit Kumar",
        specialty: "Dermatologist",
        date: "2023-11-05",
        time: "3:30 PM",
        status: "upcoming",
      },
      {
        id: 3,
        doctor: "Dr. Neha Singh",
        specialty: "Neurologist",
        date: "2023-11-20",
        time: "1:15 PM",
        status: "upcoming",
      },
    ],
    medicalHistory: [
      { condition: "Hypertension", diagnosedYear: 2020, medications: ["Amlodipine", "Losartan"] },
      { condition: "Allergies", diagnosedYear: 2018, medications: ["Cetirizine"] },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          <div className="md:col-span-1">
            <Card className="sticky top-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24 border-4 cursor-pointer border-primary/10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-2xl">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 text-center">
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-sm text-muted-foreground">{user.phone}</p>
                  </div>
                  <Button className="w-full gap-2 cursor-pointer" variant="outline">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full cursor-pointer justify-start gap-2">
                    <User className="h-4 w-4" />
                    Personal Information
                  </Button>
                  <Button variant="ghost" className="w-full cursor-pointer justify-start gap-2">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start cursor-pointer gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="appointments" className="cursor-pointer">Appointments</TabsTrigger>
                <TabsTrigger value="medical-history" className="cursor-pointer">Medical History</TabsTrigger>
                <TabsTrigger value="settings" className="cursor-pointer">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="appointments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>View and manage your scheduled appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.appointments
                        .filter((app) => app.status === "upcoming")
                        .map((appointment) => (
                          <div
                            key={appointment.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                          >
                            <div className="space-y-1 mb-2 sm:mb-0">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{appointment.doctor}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {appointment.specialty}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {new Date(appointment.date).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}{" "}
                                at {appointment.time}
                              </p>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                              <Button size="sm" variant="outline" className="flex-1 cursor-pointer sm:flex-initial">
                                Reschedule
                              </Button>
                              <Button size="sm" variant="destructive" className="flex-1 cursor-pointer sm:flex-initial">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Past Appointments</CardTitle>
                    <CardDescription>Review your previous appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.appointments
                        .filter((app) => app.status === "completed")
                        .map((appointment) => (
                          <div
                            key={appointment.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border bg-muted/50"
                          >
                            <div className="space-y-1 mb-2 sm:mb-0">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{appointment.doctor}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {appointment.specialty}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {new Date(appointment.date).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}{" "}
                                at {appointment.time}
                              </p>
                            </div>
                            <Button size="sm" variant="secondary" className="cursor-pointer">
                              View Details
                            </Button>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="medical-history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Conditions</CardTitle>
                    <CardDescription>Your diagnosed medical conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.medicalHistory.map((item, index) => (
                        <div key={index} className="p-4 rounded-lg border">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{item.condition}</h4>
                              <p className="text-sm text-muted-foreground">Diagnosed in {item.diagnosedYear}</p>
                            </div>
                            <Button size="sm" variant="ghost" className="cursor-pointer">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                          {item.medications.length > 0 && (
                            <div className="mt-2">
                              <p className="text-sm font-medium">Current Medications:</p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {item.medications.map((med, idx) => (
                                  <Badge key={idx} variant="secondary">
                                    {med}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Add Medical Information</CardTitle>
                    <CardDescription>Update your medical history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full cursor-pointer">Add New Condition</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Manage your account settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <input
                            type="text"
                            value={user.name}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <input
                            type="email"
                            value={user.email}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone Number</label>
                          <input
                            type="tel"
                            value={user.phone}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Date of Birth</label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <Button className="w-full sm:w-auto cursor-pointer">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile