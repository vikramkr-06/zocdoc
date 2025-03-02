import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const DoctorForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Reset Email Sent",
      description: "If your email exists in our system, you'll receive a reset link.",
    })
    navigate("/doctor/verify/otp")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-100 p-4">
      <Card className="w-full max-w-sm shadow-xl border-teal-200">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
              <KeyRound className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
          <CardDescription className="text-center">
            Enter your email address and we'll send you an OTP to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-teal-200 focus-visible:ring-teal-500"
                />
              </div>
              <Button type="submit" className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700">
                Send Reset OTP
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Remember your password?{" "}
            <Link to="/doctor/login" className="text-teal-600 hover:underline">
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DoctorForgotPassword