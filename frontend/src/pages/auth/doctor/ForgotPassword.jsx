import React, { useState } from "react"
import { Link } from "react-router-dom"
import { KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const DoctorForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle forgot password logic here
    toast({
      title: "Reset Email Sent",
      description: "If your email exists in our system, you'll receive a reset link.",
    })
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-100 p-4">
      <Card className="w-full max-w-md shadow-xl border-teal-200">
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
          {!isSubmitted ? (
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
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Send Reset OTP
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="rounded-md bg-teal-50 p-4 text-sm text-teal-600">
                We've sent an OTP to your email address. Please check your inbox and enter the code on the next screen.
              </div>
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={() => (window.location.href = "/doctor/verify-otp")}
              >
                Enter OTP
              </Button>
            </div>
          )}
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