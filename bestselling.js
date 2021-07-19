// const main1 = document.querySelector('main1');

// window.addEventListener('load' , e => {
//     // updateNews();
//     updateSources();
// })

// async function updateSources(){
//     const res = await fetch(`https://faucet.unifi-i.com/data/categories/bestselling.json`);
//     console.log(res)
//     const json = await res.json();

//     main1.innerHTML = json.map(createSinglepage).join('\n');
// }

// function createSinglepage(article1){
//     return `
//     <div class = "article">
//     <a href = "${article1.name}">
//     <h2>${article1.description}</h2>
//     <img src="${article1.image}">
//     </a>
//     <div>
    
//     `;
    
// }
// // createSinglepage()