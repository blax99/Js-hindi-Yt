const qrInput = document.getElementById('qr-input')
const qrButton = document.getElementById('qr-btn')
const qrImg = document.getElementById('qr-img')

qrButton.addEventListener('click',() =>{
    const qrValue = qrInput.value
    console.log(qrValue);

    if(!qrValue){
        alert('Enter valid url')
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
        qrImg.alt = `Qr code for = ${qrValue}`
    }
})

