import LoginPanel from "@/components/LoginPanel";
import SignupPanel from "@/components/SignupPanel";
import WelcomePanel from "@/components/WelcomePanel";
import { useState } from "react";

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);

  const togglePanel = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex">
      <WelcomePanel />
      <div className="w-1/2 flex items-center justify-center bg-gray-800">
        <div className="w-full max-w-sm p-8 space-y-4 bg-white rounded-box">
          {/* <SignupPanel /> */}
          {isLogin ? (
            <LoginPanel onTogglePanel={togglePanel} />
          ) : (
            <SignupPanel onTogglePanel={togglePanel} />
          )}
        </div>
      </div>
    </div>
  );
}
