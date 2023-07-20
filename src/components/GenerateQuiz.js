import React, { useState } from "react";
import "../styles/generate-quiz.css";
import data from "../data/category.json";

const GenerateQuiz = () => {
  const [choices, setChoices] = useState({
    amount: "",
    category: "",
    difficulty: "",
    type: "",
  });

  const [activeDifficulty, setActiveDifficulty] = useState("");
  const [activeType, setActiveType] = useState("");

  const handleAmountChange = (event) => {
    const change = { ...choices, [event.target.name]: event.target.value };
    setChoices(change);
  };

  const handleCategoryChange = (event) => {
    const categories = data.trivia_categories;

    const category = categories.filter(
      (item) => item.name === event.target.value,
    );

    const change = { ...choices, [event.target.name]: category[0].id };
    setChoices(change);
  };

  const handleActiveDifficulty = (difficulty) => {
    setActiveDifficulty(difficulty);
    const change = { ...choices, difficulty };
    setChoices(change);
  };

  const handleActiveType = (type) => {
    setActiveType(type);
    const change = { ...choices, type };
    setChoices(change);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(choices);
  };

  return (
    <form>
      <div className="generate-quiz">
        <h1>Generate Quiz</h1>
        <div className="description">
          <span>Select number of questions and category</span>
        </div>
        <div className="container-one">
          <label htmlFor="num-of-questions">
            <input
              className="number"
              min="1"
              max="50"
              id="amount"
              name="amount"
              type="number"
              placeholder="No. of questions"
              onChange={handleAmountChange}
            />
          </label>
          <label htmlFor="category">
            <select
              className="category"
              id="category"
              name="category"
              onChange={handleCategoryChange}
            >
              <option>Select a category</option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Entertainment: Books">Entertainment: Books</option>
              <option value="Entertainment: Film">Entertainment: Film</option>
              <option value="Entertainment: Music">Entertainment: Music</option>
              <option value="Entertainment: Musicals & Theatres">
                Entertainment: Musicals & Theatres
              </option>
              <option value="Entertainment: Television">
                Entertainment: Television
              </option>
              <option value="Entertainment: Video Games">
                Entertainment: Video Games
              </option>
              <option value="Entertainment: Board Games">
                Entertainment: Board Games
              </option>
              <option value="Science & Nature">Science & Nature</option>
              <option value="Science: Computers">Science: Computers</option>
              <option value="Science: Mathematics">Science: Mathematics</option>
              <option value="Mythology">Mythology</option>
              <option value="Sports">Sports</option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Politics">Politics</option>
              <option value="Art">Art</option>
              <option value="Celebrities">Celebrities</option>
              <option value="Animals">Animals</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Entertainment: Comics">
                Entertainment: Comics
              </option>
              <option value="Science: Gadgets">Science: Gadgets</option>
              <option value="Entertainment: Japanese Anime & Manga">
                Entertainment: Japanese Anime & Manga
              </option>
              <option value="Entertainment: Cartoon & Animations">
                Entertainment: Cartoon & Animations
              </option>
            </select>
          </label>
        </div>
        <div className="description">
          <span>Select level of difficulty</span>
        </div>
        <div className="container-two">
          <div>
            <button
              className={
                activeDifficulty === "easy"
                  ? "choice-button-active"
                  : "choice-button"
              }
              type="button"
              name="difficulty"
              onClick={() => handleActiveDifficulty("easy")}
            >
              Easy
            </button>
          </div>
          <div>
            <button
              className={
                activeDifficulty === "medium"
                  ? "choice-button-active"
                  : "choice-button"
              }
              type="button"
              onClick={() => handleActiveDifficulty("medium")}
            >
              Medium
            </button>
          </div>
          <div>
            <button
              className={
                activeDifficulty === "hard"
                  ? "choice-button-active"
                  : "choice-button"
              }
              type="button"
              onClick={() => handleActiveDifficulty("hard")}
            >
              Hard
            </button>
          </div>
        </div>
        <div className="description">
          <span>Select type</span>
        </div>
        <div className="container-three">
          <div>
            <button
              className={
                activeType === "multiple"
                  ? "choice-button-active"
                  : "choice-button"
              }
              type="button"
              onClick={() => handleActiveType("multiple")}
            >
              Multiple Choice
            </button>
          </div>
          <div>
            <button
              className={
                activeType === "boolean"
                  ? "choice-button-active"
                  : "choice-button"
              }
              type="button"
              onClick={() => handleActiveType("boolean")}
            >
              True or False
            </button>
          </div>
        </div>
        <div className="container-four">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default GenerateQuiz;
