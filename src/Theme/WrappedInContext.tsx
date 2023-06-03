import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const WrappedInContext = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            You are watching the power of primary
        </div>
    );
}