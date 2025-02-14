import "./ChallengesInput.scss";

const ChallengesInput = ({ value, onChange, error }) => {
  return (
    <div className="input__container">
      <label className="input__title">
        What challenges is your business facing?
      </label>
      <p className="input__subtitle">Any additional copy</p>
      <textarea
        placeholder="Please enter the challenges your business is facing."
        name="pain-points"
        value={value}
        onChange={onChange}
        className="input__input-textarea"
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ChallengesInput;
