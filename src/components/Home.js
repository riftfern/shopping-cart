import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <button className="shopBtn" onClick={() => navigate("/shop")}>
        shop
      </button>
    </div>
  );
}
