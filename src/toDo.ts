export interface ToDo {
    userId: string
    id: string
    title: string
    completed: boolean
}
export let ToDoResponce: ToDo[]

export const getTodosByCount = (count: number) => {
    const API = 'https://jsonplaceholder.typicode.com/todos'

    return fetch(API)

        .then((response) => {
            return response.text()
        })
        .then<typeof ToDoResponce>((responseText) => {
            return (JSON.parse(responseText)).slice(0, count)
        })
        .then((data) => {
            console.table(data)
        })
}