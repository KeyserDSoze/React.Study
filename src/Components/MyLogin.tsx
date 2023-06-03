import { useState } from 'react'
import { AppUser } from '../Models/User'

export const UserHandler = () => {
    const [user, setUser] = useState<AppUser | null>(null);
    const handleLogin = () => {
        setUser({
            username: "Maurizia",
            policies: "reader"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username is {user?.username}</div>
            <div>Policies are {user?.policies}</div>
        </div>
    )
}