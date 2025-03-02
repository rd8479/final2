function renderImage(dom){
    const images=['./public/memory game.png','./public/library.png','./public/todo.png','./public/shop.png','./public/battery.png']
    num=Math.floor(Math.random()*5)
    while(num===images.indexOf(`./public/${dom.innerText}.png`)){
        num=Math.floor(Math.random()*5)
    }
    images.splice(num,1)
    const image=images.map((item,index)=>{
        let img=document.querySelector(`#img${index+1}`)
        img.setAttribute('src',`${item}`)
        return item
    })
    localStorage.setItem('images',JSON.stringify(image))
}
function firstTimeImage(){
    const data=JSON.parse(localStorage.getItem('images'))
    const images=data||['./public/memory game.png','./public/library.png','./public/todo.png','./public/shop.png']
    console.log(images)
    images.map((item,index)=>{
        let img=document.querySelector(`#img${index+1}`)
        img.setAttribute('src',`${item}`)
    })
}
firstTimeImage()
