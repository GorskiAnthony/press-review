import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByWeek } from "../services/handleFunction";
import Article from "../components/Article";

const Week = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByWeek(id).then((res) => {
      setArticles(res);
    });
  }, [id]);

  return (
    <div>
      <h1 className="text-4xl font-bold my-6">
        Tous nos articles pour la semaine {id}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {articles.length > 0 ? (
          articles.map((article, id) => (
            <Article key={id} article={article} id={id} />
          ))
        ) : (
          <p>Aucun article pour cette semaine</p>
        )}
      </div>
    </div>
  );
};

export default Week;
