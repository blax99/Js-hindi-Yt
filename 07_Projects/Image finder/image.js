const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const formEl = document.querySelector('form')
const searchResultsEl = document.querySelector('.search-results')
const apiKey = "0It4P2y3W4vfn-YKMl1O9TJA5iAOSzQeGQth2mYQ7uk";
const seeMoreButtton = document.getElementById('see-more')
let page = 1 ;
let searchItem = '';

async function searchImage(){
    searchItem = searchInput.value
    
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchItem}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results
    
    if(page === 1){
        searchResultsEl.innerHTML = '';
    }

    results.map((elements)=>{
        const imageDiv = document.createElement('div')
        imageDiv.classList.add('search-card')

        const image = document.createElement('img')
        image.src = elements.urls.small_s3;        
        
        const imageLinks = document.createElement('a')
        imageLinks.textContent = elements.alt_description;
        imageLinks.href = elements.links.html;
        imageLinks.target = "_blank";

        imageDiv.appendChild(image)
        imageDiv.appendChild(imageLinks)
        searchResultsEl.appendChild(imageDiv)
    })

    page++;

    if(page > 1){
        seeMoreButtton.style.display = 'block';
    }
         
}

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    page = 1;
    searchImage();
})


seeMoreButtton.addEventListener('click', (event) => {
    event.preventDefault();
    searchImage();
})