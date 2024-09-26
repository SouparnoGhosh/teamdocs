import LoginPanel from "@/components/layout/LoginPanel";
import SignupPanel from "@/components/layout/SignupPanel";
import { useState } from "react";

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);

  const onTogglePanel = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen mx-auto flex items-start pt-8 justify-center bg-background text-foreground">
      {/* <div className="w-full max-w-sm p-8 mx-auto space-y-4 border-2 border-black bg-card text-card-foreground"> */}
        {isLogin ? (
          <LoginPanel onTogglePanel={onTogglePanel} />
        ) : (
          <SignupPanel onTogglePanel={onTogglePanel} />
        )}
      {/* </div> */}
    </div>
  );
}