import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import doctorImage from "../assets/doctor.jpg"
import insuranceImg from "../assets/insurance.avif"

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <main className="flex-grow px-5 md:px-16">
        <section className=" py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pl-12">
                <img
                  src={doctorImage}
                  alt="Doctor with patient"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">
                  Find local doctors who take your insurance
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Book appointments, video visits, and more for free. We'll help you find doctors who take your
                  insurance.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center border-b border-gray-200 pb-4">
                      <IoSearch className="text-gray-400 mr-2" size={20} />
                      <input
                        type="text"
                        placeholder="Search for doctors, specialties, conditions..."
                        className="border-none focus:ring-0 focus:outline-0 w-full text-lg"
                      />
                    </div>
                    <div className="flex items-center">
                      <LuMapPin className="text-gray-400 mr-2" size={20} />
                      <input type="text" placeholder="New York, NY" className="border-none focus:ring-0 w-full focus:outline-0 text-lg" />
                    </div>
                    <button className="bg-[#00beb6] hover:bg-[#00a59e] text-white text-xl cursor-pointer font-medium py-3 rounded-lg">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Popular specialties</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Primary Care", icon: "🩺" },
                { name: "Dentist", icon: "🦷" },
                { name: "Dermatologist", icon: "👨‍⚕️" },
                { name: "Psychiatrist", icon: "🧠" },
                { name: "OB-GYN", icon: "👩‍⚕️" },
                { name: "Ophthalmologist", icon: "👁️" },
                { name: "Orthopedic Surgeon", icon: "🦴" },
                { name: "ENT", icon: "👂" },
                { name: "Cardiologist", icon: "❤️" },
                { name: "Neurologist", icon: "🔬" },
                { name: "Pediatrician", icon: "👶" },
                { name: "Urologist", icon: "🧪" },
              ].map((specialty, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-2">{specialty.icon}</span>
                  <span className="text-gray-800 font-medium text-center">{specialty.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 rounded-lg bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">How ZocDoc works</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We make it easy to find doctors you love and book appointments instantly.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg cursor-pointer shadow-md">
                <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                  <IoSearch className="text-[#00beb6]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Search for doctors</h3>
                <p className="text-gray-600">
                  Find doctors near you, read real patient reviews, and book appointments online.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg cursor-pointer shadow-md">
                <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                  <FaCalendarCheck className="text-[#00beb6]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Book appointments</h3>
                <p className="text-gray-600">
                  Book appointments online, 24/7, even when the doctor's office is closed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg cursor-pointer shadow-md">
                <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                  <FaStar className="text-[#00beb6]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get care</h3>
                <p className="text-gray-600">Visit your doctor, leave a review, and build your health care team.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">What patients are saying</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Real reviews from real patients</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 cursor-pointer rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "I was able to book an appointment with a great doctor the same day. The process was so easy and
                    convenient!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      VK
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Sarah J.</p>
                      <p className="text-sm text-gray-500">New York, NY</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 rounded-lg bg-[#00beb6]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to find your doctor?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join millions of patients who found the right doctor through ZocDoc
            </p>
            <button className="bg-white text-[#00beb6] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg cursor-pointer">
              Find doctors near me
            </button>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              We accept most major insurance plans
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-center justify-center p-4">
                  <div className="w-full h-12 bg-gray-200 rounded flex items-center cursor-pointer justify-center">
                    <img src={insuranceImg} alt="insurance" className="rounded-xl" />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-gray-600">
              Don't see your insurance?{" "}
              <Link href="#" className="text-[#00beb6] font-medium">
                Check all insurance options
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home