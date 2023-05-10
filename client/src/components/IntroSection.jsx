import React from "react";
import { FaRegMoneyBillAlt, FaBalanceScale, FaStethoscope } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Link to="/">
        <div className="card">
          <FaRegMoneyBillAlt className="icon" />
          <h3 className="card-title">Finance</h3>
          <p className="card-text">Manage your finances with ease using our cutting-edge AI technology.</p>
        </div>
      </Link>
      <Link to="/">
        <div className="card">
          <FaBalanceScale className="icon" />
          <h3 className="card-title">Law</h3>
          <p className="card-text">Get instant legal advice and stay informed with the latest regulations.</p>
        </div>
      </Link>
      <Link to="/">
        <div className="card">
          <FaStethoscope className="icon" />
          <h3 className="card-title">Healthcare</h3>
          <p className="card-text">Access reliable healthcare information and resources with just a few clicks.</p>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
