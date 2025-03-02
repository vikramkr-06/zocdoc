import { useState } from "react"
import { BadgeCheck, Calendar, ChevronRight, Clock, FileText, MapPin, MessageSquare, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr. Vikram Mehta",
    specialty: "Cardiologist",
    qualification: "MBBS, MD (Cardiology)",
    experience: 12,
    avatar: "/placeholder.svg?height=150&width=150",
    verified: true,
    rating: 4.8,
    reviews: 124,
    patients: 1500,
    about:
      "Dr. Vikram Mehta is a highly skilled cardiologist with over 12 years of experience in treating various heart conditions. He specializes in interventional cardiology and has performed over 1000 successful procedures.",
    education: [
      { degree: "MBBS", institution: "All India Institute of Medical Sciences, Delhi", year: "2005-2011" },
      {
        degree: "MD (Cardiology)",
        institution: "Post Graduate Institute of Medical Education and Research, Chandigarh",
        year: "2011-2014",
      },
      {
        degree: "Fellowship in Interventional Cardiology",
        institution: "Apollo Hospitals, Chennai",
        year: "2014-2016",
      },
    ],
    clinics: [
      {
        name: "Heart Care Clinic",
        address: "123, Park Street, Connaught Place, New Delhi",
        timings: "Mon, Wed, Fri: 9:00 AM - 1:00 PM",
      },
      { name: "City Hospital", address: "456, MG Road, Gurugram", timings: "Tue, Thu: 5:00 PM - 8:00 PM" },
    ],
    registrations: [
      { council: "Medical Council of India", regNumber: "MCI-12345", year: "2011" },
      { council: "Delhi Medical Council", regNumber: "DMC-67890", year: "2011" },
    ],
    kycStatus: {
      identity: "verified",
      medicalDegree: "verified",
      registrationCertificate: "verified",
      addressProof: "pending",
    },
    appointments: [
      { id: 1, patient: "Amit Kumar", date: "2023-10-15", time: "10:00 AM", status: "completed" },
      { id: 2, patient: "Priya Singh", date: "2023-11-05", time: "3:30 PM", status: "upcoming" },
      { id: 3, patient: "Rahul Sharma", date: "2023-11-05", time: "4:00 PM", status: "upcoming" },
      { id: 4, patient: "Neha Gupta", date: "2023-11-06", time: "11:15 AM", status: "upcoming" },
    ],
  })

  const getKycStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "text-green-500"
      case "pending":
        return "text-amber-500"
      case "rejected":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden border-none shadow-lg">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          <CardContent className="relative pt-0">
            <div className="flex flex-col md:flex-row gap-6 -mt-12">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background shadow-md">
                <AvatarImage src={doctor.avatar} alt={doctor.name} />
                <AvatarFallback className="text-2xl">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2 pt-4 md:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold">{doctor.name}</h1>
                      {doctor.verified && <BadgeCheck className="h-5 w-5 text-blue-500" />}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>{doctor.specialty}</span>
                      <span>•</span>
                      <span>{doctor.qualification}</span>
                      <span>•</span>
                      <span>{doctor.experience} years exp.</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="hidden sm:inline">Message</span>
                    </Button>
                    <Button className="gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="hidden sm:inline">Book Appointment</span>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>{doctor.patients}+ patients</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{doctor.about}</p>
              </CardContent>
            </Card>

            {/* Clinic Information */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Clinic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctor.clinics.map((clinic, index) => (
                  <div key={index} className="space-y-2 pb-4 last:pb-0 last:border-0 border-b last:border-b-0">
                    <h3 className="font-medium">{clinic.name}</h3>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{clinic.timings}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* KYC Status */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>KYC Status</CardTitle>
                <CardDescription>Verification status of your documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Overall Completion</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Identity Proof</span>
                    <span className={`text-sm font-medium ${getKycStatusColor(doctor.kycStatus.identity)}`}>
                      {doctor.kycStatus.identity.charAt(0).toUpperCase() + doctor.kycStatus.identity.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Medical Degree</span>
                    <span className={`text-sm font-medium ${getKycStatusColor(doctor.kycStatus.medicalDegree)}`}>
                      {doctor.kycStatus.medicalDegree.charAt(0).toUpperCase() + doctor.kycStatus.medicalDegree.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Registration Certificate</span>
                    <span
                      className={`text-sm font-medium ${getKycStatusColor(doctor.kycStatus.registrationCertificate)}`}
                    >
                      {doctor.kycStatus.registrationCertificate.charAt(0).toUpperCase() +
                        doctor.kycStatus.registrationCertificate.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Address Proof</span>
                    <span className={`text-sm font-medium ${getKycStatusColor(doctor.kycStatus.addressProof)}`}>
                      {doctor.kycStatus.addressProof.charAt(0).toUpperCase() + doctor.kycStatus.addressProof.slice(1)}
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Upload Pending Documents
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="registrations">Registrations</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Appointments Tab */}
              <TabsContent value="appointments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Manage your scheduled appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {doctor.appointments
                        .filter((app) => app.status === "upcoming")
                        .map((appointment) => (
                          <div
                            key={appointment.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                          >
                            <div className="space-y-1 mb-2 sm:mb-0">
                              <h4 className="font-medium">{appointment.patient}</h4>
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
                              <Button size="sm" variant="outline" className="flex-1 sm:flex-initial">
                                Reschedule
                              </Button>
                              <Button size="sm" className="flex-1 sm:flex-initial">
                                Start Consultation
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Past Appointments</CardTitle>
                      <CardDescription>Review your previous appointments</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      View All <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {doctor.appointments
                        .filter((app) => app.status === "completed")
                        .map((appointment) => (
                          <div
                            key={appointment.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border bg-muted/50"
                          >
                            <div className="space-y-1 mb-2 sm:mb-0">
                              <h4 className="font-medium">{appointment.patient}</h4>
                              <p className="text-sm text-muted-foreground">
                                {new Date(appointment.date).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}{" "}
                                at {appointment.time}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                View Notes
                              </Button>
                              <Button size="sm" variant="secondary">
                                Follow Up
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Educational Qualifications</CardTitle>
                    <CardDescription>Your academic and professional qualifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {doctor.education.map((edu, index) => (
                        <div
                          key={index}
                          className="relative pl-6 pb-6 last:pb-0 border-l border-muted-foreground/20 last:border-l-transparent"
                        >
                          <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                          <div className="space-y-1">
                            <h4 className="font-medium">{edu.degree}</h4>
                            <p className="text-sm">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" className="gap-1">
                        <FileText className="h-4 w-4" />
                        Add Qualification
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Registrations Tab */}
              <TabsContent value="registrations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Registrations</CardTitle>
                    <CardDescription>Your medical council registrations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {doctor.registrations.map((reg, index) => (
                        <div key={index} className="p-4 rounded-lg border">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <h4 className="font-medium">{reg.council}</h4>
                              <p className="text-sm">Registration No: {reg.regNumber}</p>
                              <p className="text-sm text-muted-foreground">Year: {reg.year}</p>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                            >
                              Verified
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" className="gap-1">
                        <FileText className="h-4 w-4" />
                        Add Registration
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
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
                            value={doctor.name}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Specialty</label>
                          <input
                            type="text"
                            value={doctor.specialty}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Qualification</label>
                          <input
                            type="text"
                            value={doctor.qualification}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Years of Experience</label>
                          <input
                            type="number"
                            value={doctor.experience}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">About</label>
                        <textarea
                          rows={4}
                          value={doctor.about}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <Button className="w-full sm:w-auto">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Consultation Fees</CardTitle>
                    <CardDescription>Set your consultation fees for different services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">In-person Consultation</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-muted-foreground">
                              ₹
                            </span>
                            <input
                              type="number"
                              defaultValue={800}
                              className="w-full px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Video Consultation</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-muted-foreground">
                              ₹
                            </span>
                            <input
                              type="number"
                              defaultValue={600}
                              className="w-full px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Follow-up Consultation</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-muted-foreground">
                              ₹
                            </span>
                            <input
                              type="number"
                              defaultValue={400}
                              className="w-full px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <Button className="w-full sm:w-auto">Update Fees</Button>
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

export default DoctorProfile