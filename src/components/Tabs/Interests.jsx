import React from "react";

const Interests = ({ interests }) => {
  return <div>
    <ul>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </div>;
};

export default Interests;
