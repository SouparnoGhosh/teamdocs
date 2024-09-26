import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";

interface SignupPanelProps {
  onTogglePanel: () => void;
}

const SignupPanel: React.FC<SignupPanelProps> = ({ onTogglePanel }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission for signup, e.g., validate inputs, call API
  };

  return (
    <Card className="w-full max-w-sm">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">Password</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Separator className="my-1" />
          <Button variant="outline" className="w-full" type="button">
            <FaGithub className="inline-block mr-2 mt-1" size="1.25em" />
            Login with GitHub
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <button onClick={onTogglePanel} className="underline" type="button">
              Sign in
            </button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default SignupPanel;
