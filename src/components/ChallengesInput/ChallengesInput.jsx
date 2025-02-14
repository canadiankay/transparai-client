import { useState } from "react";
import "./ChallengesInput.scss";

const ChallengesInput = () => {
  const [challenges, setChallenges] = useState("");

  //handle change for challenges input
  const handleChallengesChange = (event) => {
    setChallenges(event.target.value);
  };

  return (
    <div className="input__container">
      <label className="input__title">What challenges is your business facing?</label>
      <p className="input__subtitle">Any additional copy</p>
      <textarea
        placeholder="Please enter the challenges your business is facing."
        name="pain-points"
        value={challenges}
        onChange={handleChallengesChange}
        className="input__input-textarea"
      />
    </div>
  );
};

export default ChallengesInput;
