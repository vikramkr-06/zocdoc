import { Link } from "react-router-dom"
import { ArrowLeft, Star, MapPin, Calendar, Clock, Award, Languages, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { doctors } from "../../data/doctorData.js"
import { useParams } from "react-router-dom"
import docImg from "../../assets/doc.jpg"
import UserNavbar from "../../components/UserNavbar.jsx"

const DoctorProfile = () => {

  const { id } = useParams();
  const doctorId = Number.parseInt(id);
  const doctor = doctors.find((d) => d.id === doctorId);
  if (!doctor) {
    return <div className="container mx-auto px-4 py-8 text-center">Doctor not found</div>
  }

  return (
    <main>
      <UserNavbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/user/doctor/page" className="flex items-center text-sm mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to doctors list
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={docImg}
                    alt={doctor.name}
                    className="w-48 h-48 object-cover rounded-full border-2 mb-4"
                  />
                  <h1 className="text-2xl font-bold">{doctor.name}</h1>
                  <p className="text-muted-foreground mb-2">{doctor.specialty}</p>

                  <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground ml-1">({doctor.reviewCount} reviews)</span>
                  </div>

                  <div className="flex items-center text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{doctor.location}</span>
                  </div>

                  <Link to={`/user/doctor/page/${doctor.id}/book`} className="w-full">
                    <Button className="w-full cursor-pointer">Book Appointment</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about" className="cursor-pointer">About</TabsTrigger>
                <TabsTrigger value="experience" className="cursor-pointer">Experience</TabsTrigger>
                <TabsTrigger value="reviews" className="cursor-pointer">Reviews</TabsTrigger>
                <TabsTrigger value="faqs" className="cursor-pointer">FAQs</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">About {doctor.name}</h2>
                    <p className="mb-6">{doctor.bio}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold flex items-center mb-3">
                          <Award className="h-5 w-5 mr-2 text-primary" />
                          Specializations
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {doctor.specializations.map((spec) => (
                            <Badge key={spec} variant="secondary">
                              {spec}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="font-semibold flex items-center mb-3">
                          <Languages className="h-5 w-5 mr-2 text-primary" />
                          Languages
                        </h3>
                        <p className="mb-6">{doctor.languages.join(", ")}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold flex items-center mb-3">
                          <Calendar className="h-5 w-5 mr-2 text-primary" />
                          Available Days
                        </h3>
                        <p className="mb-6">{doctor.availableDays.join(", ")}</p>

                        <h3 className="font-semibold flex items-center mb-3">
                          <Clock className="h-5 w-5 mr-2 text-primary" />
                          Available Time Slots
                        </h3>
                        <p className="mb-6">{doctor.availableTimeSlots.join(", ")}</p>

                        <h3 className="font-semibold flex items-center mb-3">
                          <CreditCard className="h-5 w-5 mr-2 text-primary" />
                          Consultation Fee
                        </h3>
                        <p>{doctor.consultationFee}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Education & Experience</h2>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Education</h3>
                      <ul className="space-y-2">
                        {doctor.education.map((edu, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Work Experience</h3>
                      <p className="flex items-center">
                        <span className="font-medium mr-2">Total Experience:</span>
                        {doctor.experience} years
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Patient Reviews</h2>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center">
                          <span className="text-3xl font-bold mr-2">{doctor.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(doctor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Based on {doctor.reviewCount} reviews</p>
                      </div>

                      <Button variant="outline" className="cursor-pointer">Write a Review</Button>
                    </div>

                    <div className="space-y-4">
                      {/* Sample reviews */}
                      <div className="border-b pb-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-medium">Amit Verma</h3>
                            <p className="text-sm text-muted-foreground">2 weeks ago</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p>
                          Dr. {doctor.name.split(" ")[1]} is an excellent doctor. Very thorough and caring. Took time to
                          answer all my questions and explained everything clearly.
                        </p>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-medium">Priya Singh</h3>
                            <p className="text-sm text-muted-foreground">1 month ago</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p>
                          Very professional and knowledgeable. The clinic staff was also very helpful. Would definitely
                          recommend.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-medium">Rahul Gupta</h3>
                            <p className="text-sm text-muted-foreground">2 months ago</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p>
                          One of the best doctors I've ever consulted. Very patient and attentive. The treatment was
                          effective and I recovered quickly.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faqs" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">
                          What insurance plans does Dr. {doctor.name.split(" ")[1]} accept?
                        </h3>
                        <p className="text-muted-foreground">
                          Dr. {doctor.name.split(" ")[1]} accepts most major insurance plans including CGHS, Mediclaim,
                          and corporate insurance policies. Please contact the clinic for specific details.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">How can I reschedule my appointment?</h3>
                        <p className="text-muted-foreground">
                          You can reschedule your appointment by calling the clinic at least 24 hours before your
                          scheduled appointment time. You can also reschedule through our online portal.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">What should I bring to my first appointment?</h3>
                        <p className="text-muted-foreground">
                          Please bring your ID, insurance card (if applicable), list of current medications, and any
                          relevant medical records or test results from previous treatments.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">
                          Does Dr. {doctor.name.split(" ")[1]} offer telemedicine consultations?
                        </h3>
                        <p className="text-muted-foreground">
                          Yes, Dr. {doctor.name.split(" ")[1]} offers telemedicine consultations for follow-up
                          appointments and certain conditions. Please call the clinic to determine if your case is
                          suitable for a virtual visit.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DoctorProfile