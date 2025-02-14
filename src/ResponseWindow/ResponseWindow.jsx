import { useState } from "react";
import axios from "axios";
import "./ResponseWindow.scss";

export default function ResponseWindow() {
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    products: "MS Teams",
    industry: "automotive",
    painPoints: "data management",
  });

  const generateResponse = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/openai",
        formData
      );
      console.log(response.data);
      setAiResponse(response.data || "No response received.");
    } catch (err) {
      console.error("Error generating response:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="response-section">
      <div className="response">
        <button onClick={generateResponse} disabled={loading}>
          {loading ? "Generating..." : "Generate Response"}
        </button>
        <textarea
          className="response__box"
          readOnly
          placeholder="AI response will appear here..."
          value={aiResponse}
        />
      </div>
    </section>
  );
}
