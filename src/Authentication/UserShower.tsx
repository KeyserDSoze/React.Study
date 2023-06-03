import { useContext } from "react"
import { UserContext } from "./UserContextProvider"

export const UserShower = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        userContext?.setUser({
            name: "Charlotte",
            email: "charlotte@gmail.com"
        })
    }
    const handleLogout = () => {
        userContext?.setUser(null)
    }
    return (
        <div>
            <div>My name is {userContext?.user?.name}</div>
            <div>My email is {userContext?.user?.email}</div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}