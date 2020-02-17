// require('dotenv').config()
const divSelector = (e) => {
    return document.querySelector(e)
}

const searchTerm = divSelector('#search-term')
const numberOfRecords = divSelector('#number-of-Records')
const startYear = divSelector('#start-year')
const endYear = divSelector('#end-year')
const search = divSelector('.search')
const clear = divSelector('.clear')
const results = divSelector('.articles')
const key = config.key

let articleName, num, sYear, eYear


search.addEventListener('click', (e) => {

    e.preventDefault();
    articleName = searchTerm.value.trim();
    num = numberOfRecords.options[numberOfRecords.selectedIndex].value;
    sYear = parseInt(startYear.value);
    eYear = parseInt(endYear.value)
    let URL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleName + '& begin_date = ' + sYear + '& end_date = ' +
        eYear + ' & api - key =' + key + ''

    fetch(URL.replace(/\s/g, '')).then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
})