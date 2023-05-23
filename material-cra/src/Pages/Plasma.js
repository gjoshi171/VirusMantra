import Header from "../Components/Header";
import React, { useState } from "react";
import UserType from "../Components/Plasma//UserType";
import RegisterDonor from "../Components/Plasma//RegisterDonor";
import GetDonor from "../Components/Plasma/GetDonors";
//import GetDonor from "../Pages/SignIn";

function Plasma() {
  const [userStage, setUserStage] = useState(0);

  const setStageHandler = (stage) => {
    setUserStage(stage);
  };

  const getAppStage = () => {
    switch (userStage) {
      case 0:
        return <UserType onUserStage={setStageHandler} />;
      case 1:
        return <RegisterDonor onUserStage={setStageHandler} />;
      case 2:
        return <GetDonor onUserStage={setStageHandler} />;
      case 3:
        return <UserType onUserStage={setStageHandler} />;
      default:
        return <UserType onUserStage={setStageHandler} />;
    }
  };
  return (
    <div className="App">
      <Header title="Virus Mantra" />
      {getAppStage()}
    </div>
  );
}

export default Plasma;
