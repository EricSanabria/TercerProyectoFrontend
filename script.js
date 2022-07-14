const buttonList = document.querySelector('#buttonList')
const container = document.querySelector('#container')

buttonList.addEventListener('click', ()=>{
    container.classList.toggle('active')
}
)

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
   $('video', this).get(0).play(); 
}

function hideVideo(e) {
   $('video', this).get(0).pause(); 
}

