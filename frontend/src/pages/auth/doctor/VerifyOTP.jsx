import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const DoctorVerifyOTP = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(["", "", "", ""])
  const { toast } = useToast()

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 3) {
      const nextInput = document.getElementById(`doctor-otp-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const otpValue = otp.join("")
    toast({
      title: "OTP Verification",
      description: "Verification functionality would be implemented here.",
    })
    navigate("/doctor/update/password")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-100 p-4">
      <Card className="w-full max-w-sm shadow-xl border-teal-200">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Verify OTP</CardTitle>
          <CardDescription className="text-center">Enter the one-time password sent to your email</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col items-center px-8">
                <Label htmlFor="doctor-otp-0">One-Time Password</Label>
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`doctor-otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      className="text-center text-xl border-teal-200 focus-visible:ring-teal-500"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      required
                    />
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700">
                Verify OTP
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Didn't receive the code?{" "}
            <Link to="/doctor/forgot/password" className="text-teal-600 hover:underline">
              Resend OTP
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DoctorVerifyOTP