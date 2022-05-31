import React from "react";

const Form = () => {
  return (
    <div className="w-full min-h-screen">
      <h1 className="text-4xl font-bold my-6">Ajouter un article</h1>
      <iframe
        title={"form"}
        src="https://docs.google.com/forms/d/e/1FAIpQLSdbMc07CA6EE4c2bXvz7LLHClumfKGuPavqFgIUArCCO7_Spg/viewform?embedded=true"
        className="min-h-screen"
        width="700"
      >
        Chargement…
      </iframe>
    </div>
  );
};

export default Form;
