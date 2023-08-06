import axios from "axios";

const getQuestion = (choices) => {
  try {
    return axios
      .post(`https://opentdb.com/api.php?`, null, { params: choices })
      .then((response) => {
        const questionsData = response.data.results;
        return questionsData;
      });
  } catch (error) {
    return [];
  }
};

export default getQuestion;
