import React, { useState } from "react";

const MultipleReturn = () => {
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(true);

  if (loading) {
    return <h3>loading...</h3>;
  }

  return <h3>conditional rendering</h3>;
};

export default MultipleReturn;
