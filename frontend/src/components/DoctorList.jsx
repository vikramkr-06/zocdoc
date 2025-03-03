import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "../data/doctorData.js";
import docImg from "../assets/doc.jpg" 

const DoctorList = () => {
  const [sortBy, setSortBy] = useState("recommended");
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Available Doctors</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Highest Rated</option>
            <option value="experience">Most Experienced</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={docImg}
                    alt={doctor.name}
                    className="w-full object-cover rounded-md"
                  />
                </div>
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.specialty}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground ml-1">
                      ({doctor.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-sm mb-2">
                    <span className="mx-2">•</span>
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link to={`/user/doctor/page/${doctor.id}`} className="w-full">
                      <Button variant="outline" className="w-full cursor-pointer">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default DoctorList;