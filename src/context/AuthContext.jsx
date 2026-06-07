/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const email = localStorage.getItem("currentUserEmail");
        if (email) {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const matchedUser = users.find((u) => u.email === email);
            return matchedUser ? { email: matchedUser.email, username: matchedUser.username } : { email };
        }
        return null;
    });

    function signUp(email, password, username) {
        const users = JSON.parse(localStorage.getItem('users') || "[]")

        if (users.find(u => u.email === email)) {
            return { success: false, error: "Email already exists" };
        }
        const newUser = { email, password, username }
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email)

        setUser({ email, username });

        return { success: true };
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        const matchedUser = users.find((u) => u.email === email && u.password === password);

        if (!matchedUser) {
            return { success: false, error: "Invalid email or password" }
        }
        localStorage.setItem("currentUserEmail", email);
        setUser({ email, username: matchedUser.username });
        return { success: true };
    }

    function logout() {
        localStorage.removeItem("currentUserEmail");
        setUser(null);
    }

    return <AuthContext.Provider value={{ signUp, login, user, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context;
}