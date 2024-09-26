import React from "react"; // Ensure React is in scope when using JSX
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
import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

interface LoginPanelProps {
  onTogglePanel: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onTogglePanel }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission, e.g., validate inputs, call API
  };

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Login</CardTitle>
          <CardDescription className="text-muted">
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-foreground">UserName</Label>
            <Input
              id="username"
              type="text"
              placeholder="YourUsername"
              required
              className="bg-input border border-border"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="bg-input border border-border"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-hoverPrimary hover:text-hoverPrimary-foreground hover:border-border border border-transparent">
            Login
          </Button>
          <Separator className="my-1 border-border" />
          <Button variant="outline" className="w-full bg-primary text-primary-foreground hover:bg-hoverPrimary hover:text-hoverPrimary-foreground hover:border-border border border-transparent" type="button">
            <FaGithub className="inline-block mr-2 mt-1" size="1.25em" />
            Login with GitHub
          </Button>
          <div className="mt-4 text-center text-sm text-muted">
            Don't have an account?{" "}
            <button onClick={onTogglePanel} className="underline text-primary hover:text-hoverMuted" type="button">
              Sign up
            </button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default LoginPanel;