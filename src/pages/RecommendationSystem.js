// RecommendationSystem.jsx

import React from "react";
import "./recommendation.css";

import home1 from "./photos/home1.png";
import home2 from "./photos/home2.png";
import login from "./photos/login.png";
import buy1 from "./photos/buy1.png";
import search from "./photos/search.png";
import searchres from "./photos/searchres.png";
import orderconfirmed from "./photos/orderconfirmed.png";

const RecommendationSystem = () => {

  const screenshots = [
    {
      img: login,
      title: "Login Page",
      desc: "Secure login system for customers.",
    },
    {
      img: home1,
      title: "Homepage",
      desc: "Main homepage with recommended products.",
    },
    {
      img: home2,
      title: "Products Section",
      desc: "Browse products and personalized suggestions.",
    },
    {
      img: search,
      title: "Search System",
      desc: "Search products with intelligent recommendations.",
    },
    {
      img: searchres,
      title: "Search Results",
      desc: "Relevant product recommendations based on queries.",
    },
    {
      img: buy1,
      title: "Purchase Page",
      desc: "Product ordering and buying workflow.",
    },
    {
      img: orderconfirmed,
      title: "Order Confirmation",
      desc: "Successful order placement confirmation page.",
    },
  ];

  return (
    <div className="recommend-page">

      <div className="recommend-container">

        <h1>🛍️ Recommendation System</h1>

        <p className="recommend-desc">
          Intelligent product recommendation system developed using
          Machine Learning algorithms and association rule mining
          techniques for personalized suggestions.
        </p>

        {/* Tech Stack */}
        <div className="recommend-tech">
          <span>Flask</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>AI/ML</span>
          <span>KNN</span>
          <span>K-Means</span>
          <span>FP-Growth</span>
        </div>

        {/* Screenshots */}
        <div className="recommend-gallery">

          {screenshots.map((item, index) => (
            <div className="recommend-card" key={index}>

              <img src={item.img} alt={item.title} />

              <div className="recommend-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="recommend-footer">
          <p>
            ⚠️ Live deployment unavailable because ML backend exceeds
            free hosting resource limits. Screenshots are provided
            for demonstration purposes.
          </p>
        </div>

      </div>

    </div>
  );
};

export default RecommendationSystem;