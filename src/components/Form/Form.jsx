import { useState } from "react";
import axios from "axios";
import ChallengesInput from "../ChallengesInput/ChallengesInput";
import ResponseWindow from "../ResponseWindow/ResponseWindow";
import "./Form.scss";

const API_URL = import.meta.env.VITE_API_URL;

const Form = () => {
  const [formData, setFormData] = useState({
    industry: "",
    tools: [],
    painPoints: ""
  });

  const [apiState, setApiState] = useState({
    response: "",
    loading: false,
    error: null
  });

  const handleChallengesChange = (event) => {
    setFormData(prev => ({
      ...prev,
      painPoints: event.target.value
    }));
  };

  const handleIndustryChange = (industry) => {
    setFormData(prev => ({
      ...prev,
      industry
    }));
  };

  const handleToolsChange = (tools) => {
    setFormData(prev => ({
      ...prev,
      tools
    }));
  };

  const handleSubmit = async () => {
    setApiState(prev => ({
      ...prev,
      loading: true,
      error: null
    }));

    try {
      const response = await axios.post(`${API_URL}/api/openai`, formData);
      
      setApiState(prev => ({
        ...prev,
        loading: false,
        response: response.data
      }));
    } catch (error) {
      console.error("API Error:", error);
      setApiState(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }));
    }
  };

  return (
    <section className="form">
      {/* Industry component will go here */}
      {/* Tools component will go here */}
      <ChallengesInput 
        value={formData.painPoints}
        onChange={handleChallengesChange}
      />
      <ResponseWindow 
        response={apiState.response}
        loading={apiState.loading}
      />
      <button 
        onClick={handleSubmit}
        disabled={apiState.loading}
        className="form__submit-button"
      >
        {apiState.loading ? "Generating..." : "Get Recommendations"}
      </button>
    </section>
  );
};

export default Form;
