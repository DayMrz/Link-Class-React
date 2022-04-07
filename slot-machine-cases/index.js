// class App extends React.Component {
//   state = {
//     slots: 2
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="title">Slot Machine!</h1>

//         <input
//           type="number"
//           onChange={(event) => {
//             console.log(event)
//             this.setState(() => {
//               let slots = parseInt(event.target.value)

//               if (slots < 2) {
//                 slots = 2
//               } else if (slots > 10) {
//                 slots = 10
//               }

//               return {
//                 slots,
//               }
//             })
//           }}
//           value={this.state.slots}
//         />

//         <Machine slots={this.state.slots} />
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     machines: []
//   }

//   addMachine = () => {
//     this.setState(currentState => {
//       return {
//         machines: [...currentState.machines, new Date().getTime()]
//       }
//     })
//   }

//   removeMachine = (machineId) => {
//     this.setState(currentState => {
//       return {
//         machines: currentState.machines.filter(currentMachineId => currentMachineId !== machineId)
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="title">Slot Machine!</h1>

//         {this.state.machines.map((machineId, index) => {
//           return <div key={machineId} style={{ padding: 10 }}>
//             <Machine slots={index + 2} />

//             <button
//               type="button"
//               onClick={
//                 () => this.removeMachine(machineId)
//               }
//             >
//               Delete machine
//             </button>
//           </div>
//         })}

//         <button type="button" onClick={() => this.addMachine()}>Add machine</button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  state = {
    machines: [],
    slotInput: 2,
  }

  addMachine = () => {
    this.setState(currentState => {
      return {
        machines: [
          ...currentState.machines,
          {
            id: new Date().getTime(),
            slots: currentState.slotInput
          }
        ]
      }
    })
  }

  removeMachine = (machineId) => {
    this.setState(currentState => {
      return {
        machines: currentState.machines.filter((currentMachine) => currentMachine.id !== machineId)
      }
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">Slot Machine!</h1>

        <input
          type="number"
          onChange={({ target: { value }}) => {
            this.setState(() => {
              let slots = parseInt(value)

              if (slots < 2) {
                slots = 2
              } else if (slots > 10) {
                slots = 10
              }

              return {
                slotInput: slots,
              }
            })
          }}
          value={this.state.slotInput}
        />

        {this.state.machines.map(({ id, slots }) => {
          return <Machine key={id} slots={slots} onDelete={() => this.removeMachine(id)} />
        })}

        <button type="button" onClick={() => this.addMachine()}>Add machine</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))