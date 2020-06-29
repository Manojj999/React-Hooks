import React, { useState } from "react";

function HooksCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name,lastName: e.target.value })}
        />
        <h2>Your First Name is : {name.firstName}</h2>
        <h2>Your Lat Name is : {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HooksCounterThree;
