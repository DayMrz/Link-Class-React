function pickFruit() {
  const fruit = ['🍇', '🍊', '🍒']
  return fruit[Math.floor(Math.random() * fruit.length)]
}

function generateSlots(slotsCount) {
  return [...(new Array(slotsCount))].map(() => pickFruit())
}

class Machine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      slots: generateSlots(props.slots)
    }
  }

  play = () => {
    this.setState((currentState) => {
      return {
        slots: currentState.slots.map(() => pickFruit())
      }
    })
  }

  static getDerivedStateFromProps = (props, state) => {
    return props.slots !== state.slots.length ? { slots: generateSlots(props.slots) } : null
  }

  render() {
    const { slots } = this.state
    const { play } = this
    const { onDelete } = this.props

    if (slots.length <= 1) {
      return null
    }

    const winner = slots.every((currentSlot) => currentSlot === slots[0])

    return (
      <div className="Machine">
        <ul
          style={{ display: 'flex', listStyle: 'none' }}
          className="list">
          {slots.map((slot, index) => {
            return <li key={index}>{slot}</li>
          })}
        </ul>
        <p
          className={winner ? 'winner' : 'looser'}
          style={{ fontSize: '2em' }}
        >
          {winner ? 'You Win!' : 'You Lose!'}
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={play}>Play</button>
          <button
            type="button"
            onClick={onDelete}
          >
            Delete machine
          </button>
        </div>
      </div>
    )
  }
}

// class Machine extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       slots: generateSlots(props.slots)
//     }
//   }

//   play = () =>  {
//     this.setState((currentState) => {
//       return {
//         slots: currentState.slots.map(() => pickFruit())
//       }
//     })
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate')
//   }

//   static getDerivedStateFromProps = (props, state) => {
//     console.log('getDerivedStateFromProps', { props, state})

//     return {
//       slots: generateSlots(props.slots)
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate', { nextProps, nextState })
//     return true
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('getSnapshotBeforeUpdate', {
//       prevProps,
//       prevState,
//       state: this.state,
//       props: this.props
//     })

//     return null
//   }

//   componentWillUnmount = () => {
//     console.log('Component will unmount')
//   }

//   render() {
//     const { slots } = this.state
//     const { play } = this

//     if (slots.length <= 1) {
//       return null
//     }

//     const winner = slots.every((currentSlot) => currentSlot === slots[0])

//     return (
//       <div className="Machine">
//         <ul
//           style={{ display: 'flex', listStyle: 'none' }}
//           className="list">
//           {slots.map((slot, index) => {
//             return <li key={index}>{slot}</li>
//           })}
//         </ul>
//         <p
//           className={winner ? 'winner' : 'looser'}
//           style={{ fontSize: '2em' }}
//         >
//           {winner ? 'You Win!' : 'You Lose!'}
//         </p>
//         <button onClick={play}>Play</button>
//       </div>
//     )
//   }
// }

Machine.defaultProps = {
  slots: []
}
