import { Link } from "react-router-dom"

function Footer() {
    return (
        <Link to={`rules`} style={{ textDecoration: 'none' }}><button className="footer">Rules</button></Link>
    )
}

export default Footer