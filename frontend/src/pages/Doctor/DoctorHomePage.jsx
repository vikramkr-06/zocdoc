import { useState } from "react"
import { Calendar, Clock, Users, Award, Star, Phone, Mail, MapPin, ArrowRight, Menu, X, ChevronDown, ChevronLeft, ChevronRight, } from "lucide-react"
import doctorImage from "../../assets/doctor.jpg"
import docImg from "../../assets/doc.jpg"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const DoctorHomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "This platform has revolutionized my practice. I can now manage appointments efficiently and focus more on patient care.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The scheduling system is intuitive and has reduced no-shows by 40%. My patients love the reminders and easy rescheduling options.",
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      specialty: "Dermatologist",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I've been able to grow my practice significantly since joining this platform. The patient management tools are exceptional.",
    },
  ]

  const specialties = [
    { name: "Cardiology", icon: "❤️" },
    { name: "Pediatrics", icon: "👶" },
    { name: "Dermatology", icon: "🧴" },
    { name: "Orthopedics", icon: "🦴" },
    { name: "Neurology", icon: "🧠" },
    { name: "Ophthalmology", icon: "👁️" },
    { name: "Dentistry", icon: "🦷" },
    { name: "General Medicine", icon: "⚕️" },
  ]

  const features = [
    {
      title: "Smart Scheduling",
      description: "AI-powered scheduling that optimizes your calendar and reduces gaps between appointments.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
    {
      title: "Patient Management",
      description: "Comprehensive patient profiles with medical history, notes, and communication logs.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Automated Reminders",
      description: "Reduce no-shows with automated SMS and email reminders to patients.",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Professional Profile",
      description: "Showcase your expertise with a customizable professional profile that builds patient trust.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
  ]

  const stats = [
    { value: "30k+", label: "Registered Doctors" },
    { value: "2M+", label: "Patient Appointments" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "50+", label: "Medical Specialties" },
  ]

  const faqs = [
    {
      question: "How do I set up my availability?",
      answer:
        "You can easily set up your availability in the dashboard. Navigate to 'Schedule' and use our intuitive calendar interface to mark your available times. You can set recurring schedules and block off vacation time in advance.",
    },
    {
      question: "Can patients book appointments directly?",
      answer:
        "Yes, patients can book appointments based on your availability. You can set up approval requirements for new patients or specific appointment types if needed.",
    },
    {
      question: "How are cancellations handled?",
      answer:
        "You can set your own cancellation policy, including cancellation windows and fees. The system automatically notifies you of cancellations and can be configured to fill open slots from a waitlist.",
    },
    {
      question: "Is my medical practice data secure?",
      answer:
        "Absolutely. We implement bank-level security measures and are fully HIPAA compliant. All patient data is encrypted and we perform regular security audits.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Streamline Your Practice, <span className="text-primary">Focus on Patients</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Our appointment booking platform helps doctors manage their schedule efficiently, reduce no-shows, and
                provide better patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 cursor-pointer py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-lg font-medium">
                  Get Started
                </button>
                <button className="px-6 cursor-pointer py-3 text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors text-lg font-medium">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={doctorImage}
                alt="Doctor using appointment system"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Medical Specialties Supported</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform caters to doctors across all medical specialties, providing customized solutions for each
                field.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-white cursor-pointer p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-3xl mb-3">{specialty.icon}</div>
                  <h3 className="font-medium text-lg">{specialty.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Medical Professionals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is designed specifically for healthcare providers, with tools that streamline your practice
                management.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white cursor-pointer p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img
                  src={doctorImage}
                  alt="Doctor dashboard interface"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Doctors Choose Us</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-1">Time-Saving Automation</h3>
                      <p className="text-gray-600">
                        Reduce administrative work by up to 70% with our smart scheduling and patient management tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-1">Increased Revenue</h3>
                      <p className="text-gray-600">
                        Fill schedule gaps and reduce no-shows, leading to an average 15% increase in revenue for our
                        doctors.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-1">Enhanced Patient Experience</h3>
                      <p className="text-gray-600">
                        Provide a seamless booking experience that patients appreciate, improving satisfaction and
                        retention.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
                        4
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-1">HIPAA Compliant</h3>
                      <p className="text-gray-600">
                        Rest easy knowing all patient data and communications are secure and compliant with healthcare
                        regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Doctors Say About Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied healthcare professionals who have transformed their practice with our
                platform.
              </p>
            </div>
            <div className="max-w-4xl mx-auto relative">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
                <div className="flex items-center mb-6">
                  <img
                    src={docImg}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-gray-600">{testimonials[activeTestimonial].specialty}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="flex justify-between">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 w-2 rounded-full cursor-pointer ${index === activeTestimonial ? "bg-primary" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join thousands of healthcare professionals who have streamlined their practice and improved patient care
              with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 cursor-pointer bg-white text-primary rounded-md hover:bg-gray-100 transition-colors text-lg font-medium">
                Start Free Trial
              </button>
              <button className="px-8 py-3 cursor-pointer border-2 border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors text-lg font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our platform and how it can benefit your medical practice.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <ChevronDown className="h-5 w-5 text-primary mr-2" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or need assistance? Our team is here to help you get started.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Dr. Vikram Kumar"
                      />
                    </div>
                    <div>
                      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                        Specialty
                      </label>
                      <input
                        type="text"
                        id="specialty"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Cardiology"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="doctor@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="+91 8789148605"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Tell us about your practice and how we can help..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-lg font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="text-gray-600">+91 8789148605</p>
                      <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-gray-600">support@gmail.com</p>
                      <p className="text-gray-600">connect@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Office</h3>
                      <p className="text-gray-600">123 Medical Plaza, Suite 456</p>
                      <p className="text-gray-600">San Francisco, CA 94107</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Link
                        to="#"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaFacebook />
                      </Link>
                      <Link
                        to="#"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaTwitter />
                      </Link>
                      <Link
                        to="#"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        to="#"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DoctorHomePage