import './news-article.js'
import { topHeadlinesURL } from './newsApi.js'

window.addEventListener('load', () => {
    fetchNews()
})

async function fetchNews() {
    const res = await fetch(topHeadlinesURL)
    const json = await res.json()

    const main = document.querySelector('main')

    console.log(json.articles)

    json.articles.forEach(article => {
        const el = document.createElement('news-article')
        el.article = article
        main.appendChild(el)
    })
}