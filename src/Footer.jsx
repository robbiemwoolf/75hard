import { Link } from "react-router-dom"

function Footer() {
    return (
        <Link to={`rules`} className='navRulePage' style={{ textDecoration: 'none' }}><button className="rulePage">Rules</button></Link>
    )
}

export default Footer