// import { useState } from "react";

/* const getQuestion = async (choices, { setGetQuestions }) => {
  const [getQuestions, setGetQuestions] = useState([]);
  
  await axios 
    .post(`https://opentdb.com/api.php?`, null, { params: choices })
    .then((response) => {
      setGetQuestions(response.data.results);
      console.log(response.data.results);
      // console.log(getQuestions);
    });
};

export default getQuestion; 


  const getQuestion = async (choices) => {
    try {
      const response = await axios.post(`https://opentdb.com/api.php?`, null, {
        params: choices,
      });
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching questions:", error);
      return [];
    }
  }; */
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
    console.error("Error fetching questions:", error);
    return [];
  }
};

/*   console.log(response.data.results);
    return response.data.results;
 
  
    return axios
      .post(`https://opentdb.com/api.php?`, null, { params: choices, })
      .then((response) => {
        const questionsData = response.data.results;
        console.log("results=", questionsData);
      });
  }; */

export default getQuestion;
