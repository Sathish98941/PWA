// const apiKey = '5ec9d2b7405e4662a5e5eec6500170a2';
const main = document.querySelector('main');
const main1 = document.querySelector('main1');
const sourceSelector = document.querySelector('#sourceSelector');

window.addEventListener('load' , e => {
    updateNews();
    // updateSources();
})

async function updateSources(){
    const res = await fetch(`https://faucet.unifi-i.com/data/categories/bestselling.json`);
    console.log(res)
    const json = await res.json();

    // sourceSelector.innerHTML = json.sources
    // .map(src => `<option value ="${src.id}">${src.name}</option>`)
    // .join('\n');
    main1.innerHTML = json.map(createSinglepage).join('\n');
    // location.replace("https://www.w3schools.com")
    // location.href = '/index.html';
}

async function updateNews(){
    const res = await fetch(`https://faucet.altiussolution.com/rest/V1/admin/brandlist/`)
    console.log(res)
    const json = await res.json();

    main.innerHTML = json.map(createArticle).join('\n');   
    
    // (click) = onclick="updateSources()"
    // <button onclick="updateSources()">Click me</button> 
}
 

if('serviceWorker' in navigator) {
    try {
        navigator.serviceWorker.register('sw.js');
        console.log(`SW is registered`)
    } catch (error) {
        console.log(`SW reg failed`)
    }
}
 
// <button onclick="updateSources()">Click me</button>

function createArticle(article){
    return `
    <div class = "article">
    <a href = "https://faucet.unifi-i.com/data/categories/bestselling.json">
    <h2>${article.name}</h2>
    <img src="${article.image}">
    <button type="button" onclick="updateSources()">Click me</button>
    </a>
    <div>
    
    `;
    
}

function createSinglepage(article1){
    return `
    <div class = "article">
    <a href = "${article1.name}">
    <h2>${article1.description}</h2>
    <img src="${article1.image}">
    </a>
    <div>
    
    `;
    
}