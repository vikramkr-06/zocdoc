export const doctors = [
  ...Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Dr. ${['Rajesh', 'Priya', 'Arun', 'Meera', 'Vikram', 'Neha', 'Suresh', 'Anjali', 'Rahul', 'Amit'][index % 10]} ${['Sharma', 'Patel', 'Kumar', 'Reddy', 'Singh', 'Verma', 'Chopra', 'Dutta', 'Ghosh', 'Bajpai'][index % 10]}`,
    specialty: ['Cardiologist', 'Dermatologist', 'Orthopedic Surgeon', 'Pediatrician', 'Neurologist', 'General Physician', 'ENT Specialist', 'Oncologist', 'Psychiatrist', 'Endocrinologist'][index % 10],
    image: "/placeholder.svg?height=300&width=300",
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1),
    reviewCount: Math.floor(Math.random() * (250 - 50) + 50),
    location: `${['Apollo', 'Fortis', 'AIIMS', 'Medanta', 'Max', 'Columbia Asia', 'Rainbow', 'KIMS', 'Narayana', 'Manipal'][index % 10]} Hospital, ${['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Gurgaon', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur'][index % 10]}`,
    experience: Math.floor(Math.random() * (30 - 5) + 5),
    specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3'],
    bio: `Dr. ${['Rajesh', 'Priya', 'Arun', 'Meera', 'Vikram'][index % 5]} is an experienced ${['Cardiologist', 'Dermatologist', 'Orthopedic Surgeon', 'Pediatrician', 'Neurologist'][index % 5]} known for their expertise and patient care.`,
    education: [
      `MBBS - ${['AIIMS', 'Grant Medical College', 'St. John\'s Medical College', 'Osmania Medical College', 'Maulana Azad Medical College'][index % 5]}, ${['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Gurgaon'][index % 5]}`,
      `MD (${['Cardiology', 'Dermatology', 'Orthopedics', 'Pediatrics', 'Neurology'][index % 5]}) - ${['PGIMER', 'KEM Hospital', 'JIPMER', 'NIMHANS', 'AIIMS'][index % 5]}, ${['Chandigarh', 'Mumbai', 'Puducherry', 'Bangalore', 'Delhi'][index % 5]}`
    ],
    languages: ['English', 'Hindi', 'Regional Language'],
    consultationFee: `₹${Math.floor(Math.random() * (3000 - 500) + 500)}`,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    availableTimeSlots: ['10:00 AM - 1:00 PM', '5:00 PM - 8:00 PM'],
  }))
];