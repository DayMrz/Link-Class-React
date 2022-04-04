function pickFruit() {
  const fruit = ['🍇', '🍊', '🍒']
  return fruit[Math.floor(Math.random() * fruit.length)]
}

class App extends React.Component {
  render() {

    return ( 
      <div>
        <h1 className="title"> Slot Machine!</h1>

        <Machine />
        <Machine slots={[pickFruit()]} />
        <Machine 
          slots={[pickFruit(), pickFruit()]}
        />
        <Machine 
          slots={[pickFruit(), pickFruit(), pickFruit(), pickFruit(), pickFruit()]}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))