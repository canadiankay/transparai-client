import { useState } from "react";
import axios from "axios";
import ChallengesInput from "../ChallengesInput/ChallengesInput";
import ResponseWindow from "../ResponseWindow/ResponseWindow";
import "./Form.scss";
import ProductsList from "../ProductsList/ProductsList";
import IndustryDropdown from "../IndustryDropdown/IndustryDropdown";

const API_URL = import.meta.env.VITE_API_URL;

const Form = () => {
  const [formData, setFormData] = useState({
    industry: "",
    tools: [],
    painPoints: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    industry: "",
    tools: "",
    painPoints: "",
  });

  console.log(formData);

  const [apiState, setApiState] = useState({
    response: "",
    loading: false,
    error: null,
  });

  const validateForm = () => {
    const errors = {
      industry: "",
      tools: "",
      painPoints: "",
    };
    let isValid = true;

    if (!formData.industry.trim()) {
      errors.industry = "Please select an industry";
      isValid = false;
    }

    if (formData.tools.length === 0) {
      errors.tools = "Please select at least one tool";
      isValid = false;
    }

    if (!formData.painPoints.trim()) {
      errors.painPoints = "Please describe your challenges";
      isValid = false;
    } else if (formData.painPoints.length < 10) {
      errors.painPoints = "Please provide more detail about your challenges";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleChallengesChange = (event) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      painPoints: value,
    }));

    if (value.trim()) {
      setValidationErrors((prev) => ({
        ...prev,
        painPoints: "",
      }));
    }
  };

  const handleIndustryChange = (industry) => {
    setFormData((prev) => ({
      ...prev,
      industry,
    }));

    if (industry) {
      setValidationErrors((prev) => ({
        ...prev,
        industry: "",
      }));
    }
  };

  const handleToolsChange = (tools) => {
    setFormData((prev) => ({
      ...prev,
      tools,
    }));

    if (tools.length > 0) {
      setValidationErrors((prev) => ({
        ...prev,
        tools: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setApiState((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }));

    try {
      const response = await axios.post(`${API_URL}/api/openai`, formData);

      setApiState((prev) => ({
        ...prev,
        loading: false,
        response: response.data.recommendations,
      }));
    } catch (error) {
      console.error("API Error:", error);

      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "An unexpected error occurred";

      setApiState((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <IndustryDropdown
        selectedIndustry={formData.industry}
        onChange={handleIndustryChange}
        error={validationErrors.industry}
      />

      <ProductsList
        selectedTools={formData.tools}
        onChange={handleToolsChange}
        error={validationErrors.tools}
      />
      {validationErrors.tools && (
        <div className="form__error-message">{validationErrors.tools}</div>
      )}
      <div className="inputs">
        <ChallengesInput
          value={formData.painPoints}
          onChange={handleChallengesChange}
          error={validationErrors.painPoints}
        />
        {validationErrors.painPoints && (
          <div className="form__error-message">
            {validationErrors.painPoints}
          </div>
        )}

        <ResponseWindow className="response-window"
          response={apiState.response}
          loading={apiState.loading}
        />

        {apiState.error && (
          <div className="form__error-message form__error-message--api">
            An error occurred: {apiState.error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={apiState.loading}
          className="form__submit-button"
        >
          {apiState.loading ? "Generating..." : "Get Recommendations"}
        </button>
      </div>
    </form>
  );
};

export default Form;
