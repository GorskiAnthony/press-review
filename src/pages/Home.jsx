import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import { handleGetAllArticles } from "../services/handleFunction";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    handleGetAllArticles().then((resultats) => {
      setArticles(resultats);
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold my-6">Nos derniers articles</h1>
      <div className="grid grid-cols-3 gap-5">
        {articles.length > 0 ? (
          articles
            .reverse()
            .map((article, id) => (
              <Article key={id} article={article} id={id} />
            ))
        ) : (
          <p className="font-semibold text-lg whitespace-nowrap">
            Pas encore d'articles, n'hésitez pas à en{" "}
            <Link to="/add" className="text-[#F28A89]">
              créer un ici
            </Link>
            !
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
