import { useEffect, useState } from "react"

function MouseEventHolder() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePositionX = (e: any) => {
        setX(e.clientX)
    }
    const logMousePositionY = (e: any) => {
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePositionX)
        return () => {
            window.removeEventListener('mousemove', logMousePositionX)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('mousemove', logMousePositionY)
        return () => {
            window.removeEventListener('mousemove', logMousePositionY)
        }
    }, [])

    return (
        <div>
            <div>X: {x}</div>
            <div>Y: {y}</div>
        </div>
    )
}

export default MouseEventHolder