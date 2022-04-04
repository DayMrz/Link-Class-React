class Machine extends React.Component {
  render() {
    const { slots } = this.props

    if (slots.length <= 1) {
      return null
    }
    
    // let winner = true

    // 1
    // for (let i = 1; i < slots.length; i++) {
    //   if (slots[i] !== slots[0]) {
    //     winner = false
    //   }
    // }

    // 2
    // slots.forEach((currentSlot) => {
    //   if (currentSlot !== slots[0]) {
    //     winner = false
    //   }
    // })

    // 3
    // map [1,2,3] => [1,2,3]
    // filter [1,2,3] => [] || [1] || [1,2] || [1,2,3]
    // every [1,2,3] => boolean
    // some [1,2,3] => boolean
    // reduce [1,2,3] => any

    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    // const result = words.filter(word => word.length > 6);
    // expected output: Array ["exuberant", "destruction", "present"]

    const winner = slots.every((currentSlot) => currentSlot === slots[0])

    return (
    <div className="Machine">
      <ul    
      style={{display:'flex', listStyle: 'none'}}
      className="list">
        {slots.map((slot, index) => {
          return <li key={index}>{slot}</li>
        })}
      </ul>
      <p 
        className={winner ? 'winner' : 'looser'}
        style={{fontSize:'2em'}}>
          {winner ? 'You Win!' : 'You Lose!'} 
      </p>
    </div>
    )
  }
}

Machine.defaultProps = {
  slots: []
}
