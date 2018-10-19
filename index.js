import './news-article.js'
import { topHeadlinesURL } from './newsApi.js'

window.addEventListener('load', () => {
    fetchNews()
    registerSW()
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

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js')
        } catch (e) {
            console.log('SW registration failed')
        }
    }
}
