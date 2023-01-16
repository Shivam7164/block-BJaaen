let user = document.querySelector(".userIcon")
let computer = document.querySelector(".computerIcon")
let uH = document.querySelector(".uH")
let cH = document.querySelector(".cH")
let result = document.querySelector(".win")

let data =[ 
  {
  Name : "rock" ,
  beats : "scissors" 
},
{
  Name : "paper" ,
  beats : "rock" 
},
{
  Name : "scissors" ,
  beats : "paper" 
}
];
function handClickbtn(uS,cS){
 if(uS.Name===cS.Name){
   result.innerText = "tie"
   uH.innerText=0
   cH.innerText=0
 }
 if(uS.beats===cS.Name){
  result.innerText='you win'
  uH.innerText = 1
  cH.innerText=0
 }else{
  result.innerText='computer win'
  uH.innerText=0
  cH.innerText = `you - ${1}`
 }
 

}
function randon(max=3){
  return Math.floor(Math.random()*max)
}
function userIcon(){
  user.innerText=''
  data.forEach((ele)=>{
    let icon = document.createElement('i')
    icon.className=`fa fa-hand-${ele.Name}`
    user.append(icon)
    icon.addEventListener("click" , function(event){
      let userSelected = ele
      computerSelected = data[randon()]
      userIcon()
      computerIcon()
      handClickbtn(userSelected,computerSelected)
      console.log(userSelected)
      console.log(computerSelected)
    })
  })
}
function computerIcon(){
  computer.innerText=''
  data.forEach((ele)=>{
    let icon = document.createElement('i')
    icon.className=`fa fa-hand-${ele.Name}`
    computer.append(icon)
  })
}
userIcon()
computerIcon()

// icon.forEach((ele)=>{
//     ele.addEventListener("click" , handClickbtn )
// })

// function handClickbtn(event){
//   (event.target)
// }