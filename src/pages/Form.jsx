import React from "react";

const Form = () => {
  return (
    <div className="w-full min-h-screen">
      <h1 className="text-4xl font-bold my-6">Ajouter un article</h1>
      <iframe
        title={"form"}
        src="https://docs.google.com/forms/d/e/1FAIpQLSdb0SHpKF0j_midhA-R4Ur52wDUa8xEvYPf4KwuQKGJ485L1A/viewform?embedded=true"
        className="min-h-screen"
        width="700"
      >
        Chargement…
      </iframe>
    </div>
  );
};

export default Form;
