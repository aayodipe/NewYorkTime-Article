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
let articleName, num, sYear, eYear


search.addEventListener('click', (e) => {
    e.preventDefault();
    articleName = searchTerm.value.trim();
    num = numberOfRecords.options[numberOfRecords.selectedIndex].value;
    sYear = parseInt(startYear.value);
    eYear = parseInt(endYear.value)
})