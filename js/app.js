// require('dotenv').config()
const divSelector = (e) => {
        return document.querySelector(e)
    }
    // -- -- -- Declearing Variables------
const searchTerm = divSelector('#search-term')
const numberOfRecords = divSelector('#number-of-Records')
const startYear = divSelector('#start-year')
const endYear = divSelector('#end-year')
const search = divSelector('.search')
const clear = divSelector('.clear')
const results = divSelector('.articles')
const key = config.key
const demoDiv = divSelector('.demo')
const demoText = divSelector('.demo-text')
let lineBreak = document.createElement('hr')

// _______Create New Element for results
let articleName, num, sYear, eYear
const newElement = (e, el, t) => {
    let newItem = document.createElement(e);
    newItem.setAttribute('class', el);
    newItem.innerHTML = t
    return newItem;

}
search.addEventListener(('click'), (e) => {

    e.preventDefault();
    articleName = searchTerm.value.trim();
    num = numberOfRecords.options[numberOfRecords.selectedIndex].value;
    sYear = parseInt(startYear.value);
    eYear = parseInt(endYear.value)
        // -- -- -- -- - get API----------
    let URL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleName + '& begin_date = ' + sYear + '& end_date = ' +
        eYear + ' & api - key =' + key + ''

    fetch(URL.replace(/\s/g, '')).then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let res = myJson.response.docs
            demoDiv.removeChild(demoText);

            res.forEach(element => {

                let article = newElement('article', 'row p-4', '')
                let aside = newElement('aside', 'col-sm-12 col-md-2', '')
                let articleDate = newElement('date', 'light', moment(element.pub_date).format("MMM Do YYYY"))
                let contentDiv = newElement('div', 'col-sm-12 col-md-10', '')
                let articleTitle = newElement('span', 'mb-3 headline', element.headline.main)
                let articleHeader = newElement('h5', 'mb-3 headline', '')
                let story = newElement('p', 'story', element.lead_paragraph)
                let author = newElement('cite', 'light', element.byline.original)
                let articleLink = document.createElement('a')

                articleLink.setAttribute('href', element.web_url)
                articleLink.innerHTML = element.headline.main
                articleHeader.appendChild(articleLink)
                article.appendChild(aside)
                article.appendChild(contentDiv)
                article.appendChild(lineBreak)
                aside.appendChild(articleDate)
                contentDiv.appendChild(articleHeader)
                contentDiv.appendChild(story)
                contentDiv.appendChild(author)
                article.appendChild(lineBreak)
                results.appendChild(article)
            });
        });
})