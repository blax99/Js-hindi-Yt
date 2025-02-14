fetchData();

async function fetchData(){
    try {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      
      if(!response.ok){
        throw new Error('response failed!')
      }

    const data = await response.json();
    const pokemonImg = data.sprites.front_default;
    const img = document.getElementById('img')
    img.src = pokemonImg;
    img.style.visibility = 'visible';
    } 

    catch (error) {
        console.error(error);
    }
}