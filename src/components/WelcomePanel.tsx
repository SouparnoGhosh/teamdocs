function WelcomePanel() {
  return (
    <div className="w-1/2 flex items-center justify-center p-8 bg-background">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-foreground text-left">
          Join TeamDocs Today
        </h2>
        <p className="mt-4 max-w-sm text-lg text-muted-foreground text-left">
          Start your journey with us and enhance your document collaboration.
          Experience seamless teamwork and communication.
        </p>
        <p className="mt-2 max-w-sm text-lg text-muted-foreground text-left">
          Join us now and transform the way you work, making every project a
          success.
        </p>
      </div>
    </div>
  );
}

export default WelcomePanel;
