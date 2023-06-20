import React from "react";
import "../css/ToggleButtonLanguage.css";

const ToggleButtonLanguage = ({
  handleToggleButtonLanguage,
  toggleButtonLanguage,
}) => {
  console.log(toggleButtonLanguage);
  return (
    <div className="toggle-bckg" onClick={handleToggleButtonLanguage}>
      {toggleButtonLanguage ? (
        <p className="language">🌍 FR</p>
      ) : (
        <p className="language">🌍 EN</p>
      )}
    </div>
  );
};

export default ToggleButtonLanguage;
