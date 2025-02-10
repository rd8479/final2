// const boxes=document.querySelectorAll('.box')
// const selectBox=[]
// setTimeout(function (){
//     for (const i of boxes) {
//         i.classList.add('hidden')
//     }
// },1000)
// for (const i of boxes) {
//     i.addEventListener('click',function (event){
//         if(selectBox.length===0){
//             event.target.classList.remove('hidden')
//             selectBox.push(event.target)
//         }else{
//             event.target.classList.remove('hidden')
//             selectBox.push(event.target)
//             if(selectBox[0].innerHTML===selectBox[1].innerHTML){
//                 selectBox[0].classList.add('freez')
//                 selectBox[1].classList.add('freez')
//                 selectBox.length=0
//             }else{
//                 freezAll()
//                 setTimeout(function (){
//                     selectBox[0].classList.add('hidden')
//                     selectBox[1].classList.add('hidden')
//                     selectBox.length=0
//                     unfreezAll()
//                 },1000)
//             }
//         }
//     })
// }
// function freezAll(){
//     for (const i of boxes) {
//         i.classList.add('freez')
//     }
// }
// function unfreezAll(){
//     for (const i of boxes) {
//         i.classList.remove('freez')
//     }
// }
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
const con=document.body.querySelector('.main')
function randomNum(){
    const numList=[]
    const renderIcon=[]
    info.map((item)=>{
        let random=Math.floor(Math.random() * 16);
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
