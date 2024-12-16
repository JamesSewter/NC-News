import axios from "axios"

const api = axios.create({
    baseURL: "https://northcoders-news-api-7cgk.onrender.com/api"
})

export const getArticles = () => {
    return api.get("/articles").then(({data}) => {
        return data.articles
    })
}