const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
    {
      id: 6,
      name: "Casio Quartz MQ24 ",
      img: "https://m.media-amazon.com/images/I/516s1Ljzp6L._AC_SY679_.jpg",
      price: 14,
      cat: "Dress",
    },
    {
      id: 7,
      name: "G-Shock Quartz ",
      img: "https://m.media-amazon.com/images/I/71PfWEjZEUL._AC_SX679_.jpg",
      price: 65,
      cat: "Casual",
    },
    {
      id: 8,
      name: "Orient Watch",
      img: "https://m.media-amazon.com/images/I/61MNFxoctfL._AC_SX679_.jpg",
      price: 244,
      cat: "Luxury",
    },
  ];


const productContainer = document.querySelector('.products')
const priceRange = document.querySelector('.priceRange')
const priceValue = document.querySelector('.itemPrice')
const catogeryContainer = document.querySelector('.cats')
const searchBox = document.querySelector('.searchBox')


const displayProduct = (filtered)=>{
    productContainer.innerHTML = filtered
    .map(item =>
        `
        <div class="product">
                    <div class="image">
                        <img src=${item.img} alt="" srcset="">
                    </div>
                    <div class="details">
                        <p>${item.name}</p>
                        <h3>$${item.price}</h3>
                    </div>
                </div>
        `
    ).join("")
}
displayProduct(data)

searchBox.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase()

    if(value){
        displayProduct(data
            .filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    }
    else{
        displayProduct(data)
    }
})

const setCategory = () => {
    const allCats = data.map(item => item.cat)
    const filteredCats = ["All", ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i
    })]
    catogeryContainer.innerHTML = filteredCats.map(item => 
        `
         <span class="cat">${item}</span>
        `
    ).join("")

    catogeryContainer.addEventListener('click', (e)=>{
      const selectedItem = e.target.textContent
      selectedItem === 'All' ? 
      displayProduct(data) : 
      displayProduct(data.filter(item => item.cat === selectedItem))
    })
}
setCategory()

const setPrice = ()=>{
  const allPrice = data.map(item => item.price)
  const maxPrice = Math.max(...allPrice)
  const minPrice = Math.min(...allPrice)

  priceRange.max = maxPrice
  priceRange.min = minPrice
  priceRange.value = maxPrice
  priceValue.textContent = '$' + maxPrice;
  
  priceRange.addEventListener('input', (e)=>{
    priceValue.textContent = '$' + e.target.value
    displayProduct(data.filter(item => item.price <= e.target.value))
  })
  
}
setPrice()

