import axios from "axios"
import { useEffect, useState } from "react"

type Titlezed = {
    title: string
}

export const CallingApi = () => {
    const [posts, setPosts] = useState<Titlezed[]>([])
    const [post, setPost] = useState<Titlezed>()
    const [id, setId] = useState<number>(0)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <input onChange={(e: any) => setId(e.target.value)} type="text" />
            <div>
                {post?.title}
            </div>
            <ul>
                {posts.map(x => {
                    return (
                        <li>{x?.title}</li>
                    )
                })}
            </ul>
        </div>
    )    
}