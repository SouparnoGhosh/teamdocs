import LoginPanel from "@/components/layout/LoginPanel";
import SignupPanel from "@/components/layout/SignupPanel";
import { useState } from "react";

export default function LandingPage() {
  // const togglePanel = () => setIsLogin(!isLogin);
  const [isLogin, setIsLogin] = useState(true);

  const onTogglePanel = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full max-w-sm p-8 mt-8 mx-auto space-y-4 bg-white rounded-box">
        {isLogin ? (
          <LoginPanel onTogglePanel={onTogglePanel} />
        ) : (
          <SignupPanel onTogglePanel={onTogglePanel} />
        )}
      </div>
    </div>
  );
}
