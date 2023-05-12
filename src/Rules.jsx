import { Link } from 'react-router-dom'
import './main.css'

function Rules() {
    const goals = [{id: 'one', description: "Drink one gallon of water."}, {id: 'two', description: "Read 10 pages of a nonfiction self-improvement book."}, {id: 'three', description: "Take one progress photo."}, {id: 'four', description: "Choose a diet. Stick to it. No alcohol."}, {id: 'five', description: "Do one OUTDOOR 45-minute workout."}, {id: 'six', description: "Do another 45-minute workout."}]
    const list = goals.map((goal) => {
        return (
            <p className='listedRule' key={goal.id}>{goal.description}</p>
        )
    })

  return (
    <>
        {list}
    </>
  )
}

export default Rules