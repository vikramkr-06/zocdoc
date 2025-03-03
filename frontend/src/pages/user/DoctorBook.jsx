import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { doctors } from "../../data/doctorData.js"
import { useParams } from "react-router-dom"
import docImg from "../../assets/doc.jpg"
import UserNavbar from "../../components/UserNavbar.jsx"

const BookAppointment = () => {
  const { id } = useParams();
  const doctorId = Number.parseInt(id);
  const doctor = doctors.find((d) => d.id === doctorId);
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
  const [appointmentType, setAppointmentType] = useState("in-person")

  if (!doctor) {
    return <div className="container mx-auto px-4 py-8 text-center">Doctor not found</div>
  }
  const availableDates = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
    if (doctor.availableDays.includes(dayName)) {
      availableDates.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Appointment booked successfully! You will receive a confirmation email shortly.")
  }

  return (
    <main>
      <UserNavbar />
      <div className="container mx-auto px-4 py-8">
        <Link to={`/user/doctor/page/${doctor.id}`} className="flex items-center text-sm mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to doctor profile
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
                <CardDescription>Schedule a consultation with {doctor.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="appointment-type" className="text-base">
                        Appointment Type
                      </Label>
                      <RadioGroup
                        id="appointment-type"
                        value={appointmentType}
                        onValueChange={setAppointmentType}
                        className="flex flex-col space-y-2 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="in-person" />
                          <Label htmlFor="in-person">In-person Consultation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="video" id="video" />
                          <Label htmlFor="video">Video Consultation</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="appointment-date" className="text-base">
                          Select Date
                        </Label>
                        <Select value={selectedDate} onValueChange={setSelectedDate}>
                          <SelectTrigger id="appointment-date" className="w-full">
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableDates.map((date) => (
                              <SelectItem key={date.value} value={date.value}>
                                {date.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="appointment-time" className="text-base">
                          Select Time Slot
                        </Label>
                        <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                          <SelectTrigger id="appointment-time" className="w-full">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {doctor.availableTimeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-first-name" className="text-base">
                          Patient First Name
                        </Label>
                        <Input id="patient-first-name" placeholder="Enter first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patient-last-name" className="text-base">
                          Patient Last Name
                        </Label>
                        <Input id="patient-last-name" placeholder="Enter last name" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-phone" className="text-base">
                          Phone Number
                        </Label>
                        <Input id="patient-phone" placeholder="Enter phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patient-email" className="text-base">
                          Email Address
                        </Label>
                        <Input id="patient-email" type="email" placeholder="Enter email address" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reason" className="text-base">
                        Reason for Visit
                      </Label>
                      <Textarea
                        id="reason"
                        placeholder="Briefly describe your symptoms or reason for consultation"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full cursor-pointer">
                  Confirm Appointment
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src={docImg}
                    alt={doctor.name}
                    className="w-16 h-16 object-cover border-2 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    <p className="text-sm text-muted-foreground">{doctor.location}</p>
                  </div>
                </div>
                {selectedDate && (
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <span>
                      {new Date(selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}
                {selectedTimeSlot && (
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <span>{selectedTimeSlot}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  <span>Consultation Fee: {doctor.consultationFee}</span>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Important Information:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Please arrive 15 minutes before your appointment time.</li>
                    <li>• Bring your ID and insurance card (if applicable).</li>
                    <li>• Bring any relevant medical records or test results.</li>
                    <li>• You can cancel or reschedule up to 24 hours before your appointment.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BookAppointment