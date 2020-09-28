import React from "react";
import "./styles.css";
import UserCards from "./components/organisms/userCards/userCards";

export default function App() {
  // console.log("APP function");
  return (
    <div className="App">
      <p>User Lists </p>
      <UserCards />
    </div>
  );
}
