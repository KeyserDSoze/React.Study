import { useState } from 'react'
import { AppUser } from '../Models/User'

const defaultUser: AppUser = { username : "", policies: null }

export const UserHandler2 = () => {
    const [user, setUser] = useState<AppUser>({} as AppUser);
    const handleLogin = () => {
        setUser({
            username: "Maurizia",
            policies: "reader"
        })
    }
    const handleLogout = () => {
        setUser(defaultUser)
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