import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    TechHaven
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Cart</Link>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/auth" className="btn btn-secondary">
                            Log in
                        </Link>
                        <Link to="/auth" className="btn btn-primary">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}