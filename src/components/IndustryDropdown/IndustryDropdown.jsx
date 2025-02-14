import React from 'react';
import "./IndustryDropdown.scss";
const IndustryDropdown = ({ selectedIndustry, onChange, error }) => {
  const industries = [
    { value: "Healthcare", label: "Healthcare" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "Retail", label: "Retail" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Education", label: "Education" },
    { value: "Government", label: "Government" },
    { value: "Energy", label: "Energy" },
    { value: "Telecommunications", label: "Telecommunications" },
    { value: "Media and Communications", label: "Media and Communications" },
    { value: "Automotive", label: "Automotive" }
  ];
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className="industry-dropdown">
      <h2 className="industry-dropdown__header">Select your industry</h2>
      <p className="industry-dropdown__copy">Any additional copy</p>
      <select
        className={`industry-dropdown__field ${error ? 'industry-dropdown__field--error' : ''}`}
        value={selectedIndustry}
        onChange={handleChange}
      >
        <option value="">Choose your industry</option>
        {industries.map(industry => (
          <option key={industry.value} value={industry.value}>
            {industry.label}
          </option>
        ))}
      </select>
      {error && <div className="industry-dropdown__error">{error}</div>}
    </div>
  );
};
export default IndustryDropdown;