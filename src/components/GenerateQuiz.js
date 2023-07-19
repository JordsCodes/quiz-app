import React, { useState } from "react";
// import axios from 'axios';
import "../styles/generate-quiz.css";

const GenerateQuiz = () => {
  /* const initialState = {
    fields: {
      number: '1',
      category: '',
      difficulty: '',
      type: ''
    },
  };

  const [fields, setFields] = useState(initialState.fields);


    axios
    .post(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`, fields)
      .then = (response) => {
        console.log(response);
    }

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }; */

  /* const [activeButton, setActiveButton] = useState(""); */
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActiveButton(event.target.id);
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
              id="number"
              name="number"
              type="number"
              placeholder="No. of questions"
              // value={fields.number}
              // onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="category">
            <select className="category" id="category" name="category">
              <option>Select a category</option>
              <option value="general-knowledge">General Knowledge</option>
              <option value="entertainment-books">Entertainment: Books</option>
              <option value="entertainment-film">Entertainment: Film</option>
              <option value="entertainment-music">Entertainment: Music</option>
              <option value="entertainment-musicals-theatres">
                Entertainment: Musicals & Theatres
              </option>
              <option value="entertainment-television">
                Entertainment: Television
              </option>
              <option value="entertainment-videogames">
                Entertainment: Video Games
              </option>
              <option value="entertainment-boardgames">
                Entertainment: Board Games
              </option>
              <option value="science-nature">Science & Nature</option>
              <option value="science-computers">Science: Computers</option>
              <option value="science-mathematics">Science: Mathematics</option>
              <option value="mythology">Mythology</option>
              <option value="sports">Sports</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
              <option value="art">Art</option>
              <option value="celebrities">Celebrities</option>
              <option value="animals">Animals</option>
              <option value="vehicles">Vehicles</option>
              <option value="entertainment-comics">
                Entertainment: Comics
              </option>
              <option value="science-gadgets">Science: Gadgets</option>
              <option value="entertainment-jap-anime-manga">
                Entertainment: Japanese Anime & Manga
              </option>
              <option value="entertainment-cartoon-animations">
                Entertainment: Cartoon & Animations
              </option>
            </select>
          </label>
        </div>
        <div className="description">
          <span>Select level of difficulty</span>
        </div>
        <div className="container-two">
          <button
            key={1}
            className={active === "1" ? "active" : undefined}
            id={"1"}
            onClick={handleClick}
          >
            Easy
          </button>
          <div className={`choice ${activeButton === 1 ? "active" : ""}`}>
            <button
              className="choice-button"
              label={activeButton === 1 ? "ACTIVE" : "inactive"}
              type="button"
              onClick={() => setActiveButton(1)}
            >
              {/* {active ? "ACTIVE" : "inactive"} */}
              Easy
            </button>
          </div>
          <div className={`choice ${activeButton === 1 ? "active" : ""}`}>
            <button
              className="choice-button"
              label={activeButton === 1 ? "ACTIVE" : "inactive"}
              type="button"
              onClick={() => setActiveButton(1)}
            >
              {/*  {active ? "ACTIVE" : "inactive"} */}
              Medium
            </button>
          </div>
          <div className={`choice ${activeButton === 2 ? "active" : ""}`}>
            <button
              className="choice-button"
              label={activeButton === 2 ? "ACTIVE" : "inactive"}
              type="button"
              onClick={() => setActiveButton(2)}
            >
              {/* {active ? "ACTIVE" : "inactive"} */}
              Hard
            </button>
          </div>
        </div>
        <div className="description">
          <span>Select type</span>
        </div>
        <div className="container-three">
          <div className={`choice ${activeButton === 0 ? "active" : ""}`}>
            <button
              className="choice-button"
              label={activeButton === 0 ? "ACTIVE" : "inactive"}
              type="button"
              onClick={() => setActiveButton(0)}
            >
              {/* {active ? "ACTIVE" : "inactive"} */}
              Multiple Choice
            </button>
          </div>
          <div className={`choice ${activeButton === 1 ? "active" : ""}`}>
            <button
              className="choice-button"
              label={activeButton === 1 ? "ACTIVE" : "inactive"}
              type="button"
              onClick={() => setActiveButton(1)}
            >
              {/* {active ? "ACTIVE" : "inactive"} */}
              True or False
            </button>
          </div>
        </div>
        <div className="container-four">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default GenerateQuiz;
