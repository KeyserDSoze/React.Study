export type AppUser = {
    username: string,
    policies: null | "reader" | "writer" | "deleter"
}