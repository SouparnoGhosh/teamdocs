import Header from "./ui/Header";
import Button from "./ui/Button";
import Input, { InputType } from "./ui/Input";

export default function SignupPanel({
  onTogglePanel,
}: {
  onTogglePanel: () => void;
}) {
  return (
    <div className="w-full max-w-sm px-8 space-y-4 bg-white rounded-box">
      <Header
        heading="Sign up"
        subheading="Create your account and get started."
      />
      <form className="space-y-4">
        <Input
          label="Username"
          type={InputType.Text}
          placeholder="Choose a username"
        />
        <Input
          label="Email"
          type={InputType.Email}
          placeholder="Your email address"
        />
        <Input
          label="Password"
          type={InputType.Password} // Use the enum for password field
          placeholder="Create a password"
        />
        <Input
          label="Confirm Password"
          type={InputType.Password} // Use the enum for confirm password field
          placeholder="Confirm your password"
        />

        <Button text="Sign Up" />
      </form>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <button
          onClick={onTogglePanel}
          className="font-medium text-primary hover:underline"
        >
          Login
        </button>
      </div>
    </div>
  );
}
