const info=[{titel:"fa-twitter",id:0}
    ,{titel:"fa-twitter",id:0}
    ,{titel:"fa-meta",id:0}
    ,{titel:"fa-meta",id:0}
    ,{titel:"fa-google",id:0}
    ,{titel:"fa-google",id:0}
    ,{titel:"fa-instagram",id:0}
    ,{titel:"fa-instagram",id:0}
    ,{titel:"fa-telegram",id:0}
    ,{titel:"fa-telegram",id:0}
    ,{titel:"fa-whatsapp",id:0}
    ,{titel:"fa-whatsapp",id:0}
    ,{titel:"fa-facebook",id:0}
    ,{titel:"fa-facebook",id:0}
    ,{titel:"fa-github",id:0},
    {titel:"fa-github",id:0}];
const root=document.body.querySelector('.main')
function randomList(){
    const numList=[]
    const renderIcon=[]
    info.map((item)=>{
        let random=Math.floor(Math.random() * info.length);
        if(!numList.includes(random)){
            item.id=random
            numList.push(random)
            renderIcon[random]=item
        }
        else{
            while(true){
                let random=Math.floor(Math.random() * 16)
                if(!numList.includes(random)){
                    item.id=random
                    numList.push(random)
                    renderIcon[random]=item
                    break
                }
            }
        }
    })
    return renderIcon
}
const newInfo=randomList()
function render(){
    const section=newInfo.map((item)=>{
        return `<div class="box"><i class="fab ${item.titel}"></i></div>`
    }).join("")
    root.innerHTML=section
}
render()
const boxes=document.querySelectorAll('.box')
const selectBox=[]
let finish=0
setTimeout(function (){
    for (const i of boxes) {
        i.classList.add('hidden')
    }
},1000)
for (const i of boxes) {
    i.addEventListener('click',function (event){
        if(selectBox.length===0){
            event.target.classList.remove('hidden')
            selectBox.push(event.target)
        }else{
            event.target.classList.remove('hidden')
            selectBox.push(event.target)
            if(selectBox[0].innerHTML===selectBox[1].innerHTML){
                selectBox[0].classList.add('freez');
                selectBox[1].classList.add('freez');
                selectBox.length=0;
                finish+=1;
            }else{
                freezAll()
                setTimeout(function (){
                    selectBox[0].classList.add('hidden')
                    selectBox[1].classList.add('hidden')
                    selectBox.length=0
                    unfreezAll()
                },1000)
            }
        }
        if(finish===8){
            setTimeout(()=>{
                document.body.innerHTML+=`
                    <div class="win">
                        <p>You Win !</p>
                    </div>
                `
            },1000)
        }
    })
}
function freezAll(){
    for (const i of boxes) {
        i.classList.add('freez')
    }
}
function unfreezAll(){
    for (const i of boxes) {
        i.classList.remove('freez')
    }
}