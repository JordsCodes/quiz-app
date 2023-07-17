import React from 'react'
import '../styles/generate-quiz.css'

const GenerateQuiz = () => {
  return (
    <div className='generate-quiz'> <h1>Generate Quiz</h1>
    <div className='container-one'>
          <label htmlFor="num-of-questions">
            <input className='input'
              id="num"
              type="number"
              placeholder="1 - 50"
            />
          </label>
          <label htmlFor="category">
            
            <select className='category' id="category" name="category" >
              <option >Select a category</option>
              <option value="general-knowledge">General Knowledge</option>
              <option value="entertainment-books">Entertainment: Books</option>
              <option value="entertainment-film">Entertainment: Film</option>
              <option value="entertainment-music">Entertainment: Music</option>
              <option value="entertainment-musicals-theatres">Entertainment: Musicals & Theatres</option>
              <option value="entertainment-television">Entertainment: Television</option>
              <option value="entertainment-videogames">Entertainment: Video Games</option>
              <option value="entertainment-boardgames">Entertainment: Board Games</option>
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
              <option value="entertainment-comics">Entertainment: Comics</option>
              <option value="science-gadgets">Science: Gadgets</option>
              <option value="entertainment-jap-anime-manga">Entertainment: Japanese Anime & Manga</option>
              <option value="entertainment-cartoon-animations">Entertainment: Cartoon & Animations</option>
            </select>
          </label>
          </div>
    </div>

  )
}

export default GenerateQuiz