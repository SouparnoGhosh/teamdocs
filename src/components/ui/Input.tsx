// Input.tsx
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export enum InputType {
  Text = "text",
  Password = "password",
  Email = "email",
  PasswordWithForget = "passwordWithForget",
}

interface InputProps {
  label: string;
  type: InputType;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder }) => {
  const isPasswordWithForget = type === InputType.PasswordWithForget;
  const inputType = isPasswordWithForget ? InputType.Password : type;

  return (
    <div>
      <label
        htmlFor={label.toLowerCase()}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type={inputType}
        required
        className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-box shadow-sm placeholder-muted text-sm focus:outline-none focus:ring-primary focus:border-primary"
        placeholder={placeholder}
      />
      {isPasswordWithForget && (
        <div className="text-left">
          <Link
            to="/forgot-password"
            className="text-xs text-muted hover:text-foreground hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
      )}
    </div>
  );
};

export default Input;
