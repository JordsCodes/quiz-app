import { useState } from "react";
import axios from "axios";

const GetQuestion = () => {
  const initialState = {
    choices: {
      amount: 2,
      category: "",
      difficulty: "",
      type: "",
    },
  };

  const [choices, setChoices] = useState(initialState.choices);
  axios
    .post(`https://opentdb.com/api.php?`, null, { params: { ...choices } })
    .then((response) => {
      setChoices(response.data.results[0]);
      console.log(response.data.results);
    });
};
export default GetQuestion;
