// import { Link } from "react-router-dom";
import Header from "./my-ui/Header";
import Button from "./my-ui/MyButton";
import Input, { InputType } from "./my-ui/MyInput"; // Import InputType for proper type usage

export default function LoginPanel({
  onTogglePanel,
}: {
  onTogglePanel: () => void;
}) {
  return (
    <div className="w-full px-8 space-y-4 bg-white rounded-box">
      <Header
        heading="Login"
        subheading="Enter username and password to login."
      />
      <form className="space-y-4">
        <Input
          label="Username"
          type={InputType.Text}
          placeholder="Your username"
        />
        <Input
          label="Password"
          type={InputType.PasswordWithForget} // Use the enum for password with forget option
          placeholder="Your password"
        />

        <Button text="Login" />
      </form>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <button
          onClick={onTogglePanel}
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
