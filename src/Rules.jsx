import { Link } from 'react-router-dom'
import './Home.css'

function Rules() {

  return (
    <div className='container'>
        <div className="heading">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className='goHome inc'>
                    <h1>75 Hard</h1>
                    <h5>Follow these 5 simple rules every day.</h5>
                </button>
            </Link>            
        </div>
        <ol className='list'>
            <li className='rule'>Drink one gallon of water.</li>
            <li>Read 10 pages of a nonfiction self-improvement book.</li>
            <li>Take one progress photo.</li>
            <li>Choose a diet. Stick to it.</li>
            <li>Do two 45-minute workouts; one has to be outdoors.</li>
        </ol>
    </div>
  )
}

export default Rules