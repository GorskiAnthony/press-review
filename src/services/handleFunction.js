import axios from "axios";
import papa from "papaparse";

const { REACT_APP_ENDPOINT, REACT_APP_SESSION_WCS } = process.env;

const SESSION = REACT_APP_SESSION_WCS;

const handleGetAllArticles = async () => {
  try {
    const response = await axios.get(REACT_APP_ENDPOINT);
    const data = await papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const getWeek = async () => {
  try {
    const response = await axios.get(REACT_APP_ENDPOINT);
    const data = await papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });
    const week = data.data
      .map((item) => item.week - SESSION)
      .filter(onlyUnique);
    return week;
  } catch (error) {
    console.error(error);
  }
};

const getArticlesByWeek = async (week) => {
  week = parseInt(week) + SESSION;
  try {
    const response = await axios.get(REACT_APP_ENDPOINT);
    const data = await papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });
    const articles = data.data.filter((item) => parseInt(item.week) === week);
    return articles;
  } catch (error) {
    console.error(error);
  }
};

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export { handleGetAllArticles, getWeek, getArticlesByWeek };
