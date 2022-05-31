import axios from "axios";
import papa from "papaparse";

const handleGetAllArticles = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_ENDPOINT);
    const data = await papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export { handleGetAllArticles };
