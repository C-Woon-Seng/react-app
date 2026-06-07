import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function NavBar() {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    TechHaven
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                    <Link to="/checkout" className="navbar-link">
                        Cart
                    </Link>
                </div>
                <div className="navbar-auth">
                    {!user ? (
                        <div className="navbar-auth-links">
                            <Link to="/auth" className="btn btn-secondary">
                                Log in
                            </Link>
                            <Link to="/auth" className="btn btn-primary">
                                Sign Up
                            </Link>
                        </div> 
                    ) : (
                        <div className="navbar-user">
                            <span>Hello, {user.username || user.email}</span>
                            <button className="btn btn-secondary" onClick={logout}>Log out</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}