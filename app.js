const images =[
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg'
]


let count = 0;
const imgId = document.getElementById('img');
setInterval(()=>{
    if(count>=images.length){
        count=0;
    }

    const imgCount = images[count];
    imgId.setAttribute('src', imgCount);
    
    
    count++
},1500)