function Increment({ index, score, incrementScore }) {
  return (
    <div>
      <button onClick={() => incrementScore(index)}>+ 1</button>
      <span>{score}</span>
    </div>
  )
}

function MyApp() {
  const [scoreArray, setScore] = React.useState([0, 0, 0]);
  const createCounter = () => {
    console.log(scoreArray);
    return scoreArray.map((score, index) =>
      <Increment key={index.toString()} index={index} score={score} incrementScore={incrementScore} />)
  }
  const incrementScore = (index) => {
    setScore((prevState) => {
      const newArray = [...prevState];
      newArray[index] += 1;
      return newArray
    })
  }
  const incrementAll = () => {
    setScore((prevState) => {
      return prevState.map((score) => score += 1)
    })
  }

  return (
    <div>
      <button onClick={() => incrementAll()}>All + 1</button>
      {createCounter()}
      <button onClick={() => setScore(prevState => [...prevState, 0])}>Add a Counter</button>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
