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

export default getQuestion;

/* const fetchQuestions = async (url) => {
  let amount = url.match(/amount=(\d*)/);
  amount[1] = amount[1] > 50 ? 50 : amount[1];

  setLoading(true);
  setWaiting(false);

  let response = await axios(url).catch((err) => console.log(err));
  if (response) {
    let data = response.data.results;

    while (data.length === 0) {
      amount[1] -= 1;
      url = url.replace(/amount=[0-9]  *//* g, `amount=${amount[1]}`);
      response = await axios(url);
      data = response.data.results;
    }

    setQuestions(data);
    setLoading(false);
    setWaiting(false);
    setError(false);
  } else {
    setWaiting(true);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { amount, category, difficulty } = quiz;

  const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
  fetchQuestions(url);
}; */