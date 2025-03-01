const tesimonials = [""," This could be as simple as pulling a powerful quote from a longer testimonial.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", "However, many companies don’t allow their employees to publicly endorse products or services. ", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, aperiam."]
const authorName = ['','John Watson', 'Mary Jnae', 'Elly Pearl', 'Harry Kane']
const image = document.getElementById('image')
const testimonial = document.getElementById('text')
const author = document.getElementById('author')
let count = 1;

setInterval(()=>{
    image.src = `./images/${count}.webp`;
    testimonial.textContent = tesimonials[count];
    author.textContent = authorName[count];
    count++;
    if (count >= authorName.length) {
        count = 1;
    }
}, 3000)