import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



const Nav = () => {
  return (
    <h1>Ultimate Heat Fan Quiz</h1>
  )
}

function App() {
  const testBank = [
    {
      question: 'Click the next arrow to begin :)', 
      answer: 'click next to begin (click the card to display the answer).'
    }
    ,
    {
      question: 'What year did the Miami Heat win their first championship?',
      answer: '2006'
    }, 
    {
      question: 'Who did the Heat lose to in the 2011 NBA Finals?',
      answer: 'Dallas Mavericks'
    }, 
    {
      question: 'Who was the NBA finals MVP in 2006?',
      answer: 'Dwyane Wade'
    }, 
    {
      question: 'Who won the 3-point contest in 2011?',
      answer: 'James Jones'
    }, 
    {
      question: "The Miami Heat retired 'this player's' number, despite him never playing a game in a heat jersey.",
      answer: 'Michael Jordan'
    }, 
    {
      question: 'Who was the NBA Finals MVP in 2012?',
      answer: 'Lebron James'
    }, 
    {
      question: 'The "Big 3" in Miami was composed of which players?',
      answer: 'Lebron James, Dwyane Wade and Chris Bosh'
    }, 
    {
      question: 'What is the name of the Miami Heat mascot?',
      answer: 'Burnie'
    }, 
    {
      question: 'Who was the first Heat player to win league MVP?',
      answer: 'Lebron'
    }, 
    {
      question: 'What is the name of the current head coach for the Heat?',
      answer: 'Erik Spoelstra'
    }, 

   

  ]

  const [questions, setQuestions] = useState(0);
  let [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState('')
  let [correct, setCorrect] = useState('')
  const[streak, setStreak] = useState(0) 
  const [max, setMax] = useState(0)

  const handleFlipped = () => {
    setFlipped(flipped = !flipped)
  }


const handleNextQuestion =  () => { 
  if(!testBank[questions + 1]){
    return 
  }
  setCorrect('')
  setAnswer('')
  setFlipped(flipped = false)
  setQuestions(questions + 1)

}
const handlePrevQuestion = () => { 
  if(!testBank[questions - 1]){
    return 
  }
setCorrect('')
setAnswer('')

  setQuestions(questions - 1)
}

const handleShuffle = () => {
  setQuestions(Math.floor(Math.random() * testBank.length)) 
}

const handleAnswer = (e) => {

setAnswer(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault(); 



  if (testBank[questions].answer.toLowerCase().includes(answer.toLowerCase())){
    setCorrect('CORRECT')
    setStreak(streak + 1)
    streak + 1 > max ? setMax(streak + 1) : setMax(max)
  } else if(answer === ''){
    return
  }else{

    setCorrect('WRONG')
    setStreak(0)
  }

}



  return (
    <div className="App">
      <Nav/> 
      <p>Test your fandom with these flashcards!</p>
      <p className='test'>{testBank.length - 1} cards.</p>
      <p>Current Streak: {streak} Max Streak: {max}</p>
      <div className="card" onClick={handleFlipped}>
        <div className='card-content'>
          {!flipped ? testBank[questions].question : testBank[questions].answer}
          {/* <p className={answer === '' ? '' : `${correct}`}></p> */}
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>

      answer: <input value={answer} type="text" onChange={handleAnswer} className={`${correct}`} />
      <button type='submit' className='checkAnswerBtn'>check answer</button>
      </form>
      <div className="btn-container">

      <button onClick={handlePrevQuestion}>⬅️</button>
      <button onClick={handleNextQuestion}>➡️</button>
      <button onClick={handleShuffle}>Shuffle Cards</button>
      </div>
    </div>
  )
}

export default App
