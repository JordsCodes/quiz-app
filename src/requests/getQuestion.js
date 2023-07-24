import axios from "axios";

const getQuestion = async (choices) => {
  try {
    const response = await axios.post(`https://opentdb.com/api.php?`, null, {
      params: choices,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export default getQuestion;
