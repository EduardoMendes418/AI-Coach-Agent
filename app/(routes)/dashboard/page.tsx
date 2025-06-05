import React from "react";
import WelcomeBanner from "./_components/Welcome/WelcomeBanner";
import AITools from "./_components/Tools/AITools";
import AIHistory from "./_components/History/AIHistory";

function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
      <AITools/>
      <AIHistory/>
    </div>
  );
}

export default Dashboard;
