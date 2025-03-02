import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const AdminForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Reset Email Sent",
      description: "If your email exists in our system, you'll receive a reset link.",
    })
    navigate("/verify/otp")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100 p-4">
      <Card className="w-full max-w-sm shadow-xl border-purple-200">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <KeyRound className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Admin Password Reset</CardTitle>
          <CardDescription className="text-center">
            Enter your admin email address and we'll send you an OTP to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-purple-200 focus-visible:ring-purple-500"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Send Reset OTP
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Remember your password?{" "}
            <Link to="/admin/login" className="text-purple-600 hover:underline">
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AdminForgotPassword