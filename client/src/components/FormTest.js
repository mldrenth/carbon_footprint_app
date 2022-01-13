import { useState } from "react";

const FormInputTest = (addFootprine) => {
  const [carbonItemOne, setCarbonItemOne] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return <form className="add-form" onSubmit={onSubmit}></form>;
};

export default FormInputTest;