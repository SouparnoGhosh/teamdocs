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
    <Card className="w-full max-w-sm bg-card text-card-foreground">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Sign Up</CardTitle>
          <CardDescription className="text-muted">
            Create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-input border border-border"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password" className="text-foreground">
              Password
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Password"
              required
              className="bg-input border border-border"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password" className="text-foreground">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
              className="bg-input border border-border"
            />
          </div>
          <Button
            type="submit"
            className="w-full border-border bg-primary text-primary-foreground hover:bg-hoverPrimary hover:text-hoverPrimary-foreground  hover:border-border border border-transparent"
          >
            Sign Up
          </Button>
          <Separator className="my-1 border-border" />
          <Button
            variant="outline"
            className="w-full border-border bg-primary text-primary-foreground hover:bg-hoverPrimary hover:text-hoverPrimary-foreground  hover:border-border border border-transparent"
            type="button"
          >
            <FaGithub className="inline-block mr-2 mt-1" size="1.25em" />
            Login with GitHub
          </Button>
          <div className="mt-4 text-center text-sm text-muted">
            Already have an account?{" "}
            <button
              onClick={onTogglePanel}
              className="underline text-primary hover:text-hoverMuted"
              type="button"
            >
              Login
            </button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default SignupPanel;
