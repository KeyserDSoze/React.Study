import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type AuthenticationManagerProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType<ProfileProps>
}

export const AuthenticationManager = ({ isLoggedIn, Component }: AuthenticationManagerProps) => {
    if (isLoggedIn)
        return <Component name="Keyser D. Soze" />
    else
        return <Login />
}