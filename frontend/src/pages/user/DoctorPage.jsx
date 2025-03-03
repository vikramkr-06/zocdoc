import React, { useState } from "react";
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import DoctorList from "../../components/DoctorList"

const DoctorPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Find the Right Doctor for You</h1>

      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search doctors by name, specialty, or location" className="pl-10 py-6" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative">
          <div className="hidden md:block w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
            <h2 className="font-semibold text-xl text-gray-800 mb-5">Filter Doctors</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Specialty</h3>
                <div className="space-y-2">
                  {["Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Orthopedic"].map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <input type="checkbox" id={specialty} className="accent-primary" />
                      <label htmlFor={specialty} className="text-gray-600">{specialty}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Experience</h3>
                <div className="space-y-2">
                  {["0-5 years", "5-10 years", "10+ years"].map((exp) => (
                    <div key={exp} className="flex items-center space-x-2">
                      <input type="checkbox" id={exp} className="accent-primary" />
                      <label htmlFor={exp} className="text-gray-600">{exp}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Rating</h3>
                <div className="space-y-2">
                  {["4+ stars", "3+ stars", "All ratings"].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <input type="radio" name="rating" id={rating} className="accent-primary" />
                      <label htmlFor={rating} className="text-gray-600">{rating}</label>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full bg-primary cursor-pointer text-white font-medium py-2 rounded-lg hover:bg-primary-dark transition">
                Apply Filters
              </button>
            </div>
          </div>


          <div className="md:hidden flex justify-end mb-4">
            <Button variant="outline" onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter
            </Button>
          </div>
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="w-64 bg-white shadow-lg h-full p-4">
                <button
                  className="mb-4 text-red-500 font-semibold"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Close ✖
                </button>
                <h2 className="font-semibold text-lg mb-4">Filter Doctors</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Specialty</h3>
                    <div className="space-y-2">
                      {["Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Orthopedic"].map((specialty) => (
                        <div key={specialty} className="flex items-center">
                          <input type="checkbox" id={specialty} className="mr-2" />
                          <label htmlFor={specialty}>{specialty}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Experience</h3>
                    <div className="space-y-2">
                      {["0-5 years", "5-10 years", "10+ years"].map((exp) => (
                        <div key={exp} className="flex items-center">
                          <input type="checkbox" id={exp} className="mr-2" />
                          <label htmlFor={exp}>{exp}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Rating</h3>
                    <div className="space-y-2">
                      {["4+ stars", "3+ stars", "All ratings"].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input type="radio" name="rating" id={rating} className="mr-2" />
                          <label htmlFor={rating}>{rating}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full ml-10 md:w-3/4">
          <DoctorList />
        </div>
      </div>
    </main>
  )
}

export default DoctorPage
