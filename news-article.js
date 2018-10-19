class NewsArticle extends HTMLElement {

    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
    }

    set article(article) {
        this.root.innerHTML = `
            <style>
                a{
                    text-align: center;
                    text-decoration: none;
                }
                a:visited {
                    color: purple;
                }
                p {
                    color:black;
                    width:50%;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                }
                img {
                    width: 40%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                hr {
                    width: 20%;
                }
            </style>            
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage || ''}">
            </a>
            <p>${article.description || ''}</p>
            <hr/>`
    }

}

customElements.define('news-article', NewsArticle)