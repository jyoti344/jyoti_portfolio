import React, { useState } from "react";
import "./brainTumor.css";

const BrainTumor = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [model, setModel] = useState("");
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://portfolio-backend-xqr0.onrender.com/predict";

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setFileName(selected ? selected.name : "No file chosen");
  };

  const handleReset = () => {
    setFile(null);
    setFileName("No file chosen");
    setModel("");
    setPrediction("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !model) {
      alert("Please upload file and select model");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", "brain");
    formData.append("model", model);

    try {
      setLoading(true);
      setPrediction("");
      setError("");

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setPrediction(data.prediction);

    } catch (err) {
      console.error(err);

      if (err.name === "AbortError") {
        setError("⏳ Server took too long. Try again.");
      } else {
        setError("⚠️ Server not responding. Please retry.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="brain-page">
      <div className="brain-container">

        <h1>🧠 Brain Tumor Detection</h1>
        <p>Upload your MRI scan and choose a model for prediction.</p>

        <form onSubmit={handleSubmit}>

          {/* Upload */}
          <div className="brain-file-upload">
            <label htmlFor="file">Choose MRI Image</label>
            <input
              key={fileName}
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <span>{fileName}</span>
          </div>

          {/* Model */}
          <div className="brain-model-selection">
            <label>Select Model:</label><br />

            <input
              type="radio"
              name="model"
              value="svc"
              checked={model === "svc"}
              onChange={(e) => setModel(e.target.value)}
            /> SVC

            <input
              type="radio"
              name="model"
              value="logistic"
              checked={model === "logistic"}
              onChange={(e) => setModel(e.target.value)}
            /> Logistic Regression
          </div>

          {/* Buttons */}
          <div className="brain-btn-group">
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Execute"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="brain-reset-btn"
              disabled={loading}
            >
              Reset
            </button>
          </div>

        </form>

        {/* Loading */}
        {loading && (
          <p className="brain-loading">
            ⏳ Server is on free tier… may take 20–40 seconds.
          </p>
        )}

        {/* Error */}
        {error && (
          <div className="brain-error">
            <p>{error}</p>
            <button onClick={handleSubmit} className="brain-retry-btn">
              Retry
            </button>
          </div>
        )}

        {/* Result */}
        {prediction && !loading && (
          <div className="brain-prediction">
            <h2>Prediction Result:</h2>
            <p>{prediction}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default BrainTumor;