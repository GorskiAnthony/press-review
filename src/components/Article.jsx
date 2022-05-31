import React from "react";

const Article = ({ article, id }) => {
  return (
    <article>
      <img src={`https://picsum.photos/250?random=${id}`} alt="img" />
      <h2 className="font-semibold text-3xl">
        {article.title} - {article.theme}
      </h2>
      <div>
        Proposé par <span className="text-[#F28A89]">{article.fullname}</span>
      </div>
      <p className="text-gray-500 truncate hover:block">
        {article.description}
      </p>
      <footer className="text-gray-400">
        Proposé le{" "}
        <span className="italic">{article.Horodateur.split(" ")[0]}</span>
      </footer>
      <button
        type="button"
        className="inline-flex items-center mt-2 px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#F28A89] hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F28A89]"
      >
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Voir le lien
        </a>
      </button>
    </article>
  );
};

export default Article;
