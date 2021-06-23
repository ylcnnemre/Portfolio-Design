const navMenu=document.querySelector("#nav-menu")
const navToggle=document.querySelector("#nav-toggle")
const navClose=document.querySelector("#nav-close")
const navLink=document.querySelectorAll(".nav__link")

if(navToggle)
{
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose)
{
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}

function linkAction(){
    
    navMenu.classList.remove("show-menu")
}

navLink.forEach((n)=>{
    n.addEventListener("click",()=>{
        linkAction()
    })
})


/* const skillsContent=document.getElementsByClassName("skills__content")
const skillsHeader=document.querySelectorAll(".skills__header")

function toggleSkills()
{
    let itemClass=this.parentNode.className

    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className="skills__content skills__close"
    }
    if(itemClass==="skills__content skills__close")
    {
        this.parentNode.className="skills__content skills__open"
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener("click",toggleSkills)
}) */

const skillsHeader=document.querySelectorAll(".skills__header")
const skillsContent=document.querySelectorAll(".skills__content")
/* skillsHeader.forEach((el)=>{
    el.addEventListener("click",()=>{
        let itemClass=this.parentNode.className
        console.log(itemClass)
    })
}) */

function toggle()
{
    let itemClass=this.parentNode.className
    console.log(itemClass)
}

skillsHeader.forEach((el)=>{
    el.addEventListener("click",function(){
        let classname=this.parentNode.className
        console.log(classname)

        if(classname==="skills__content skills__close")
        {
            this.parentNode.classList.remove("skills__close")
            this.parentNode.classList.add("skills__open")
        }
        else if(classname=="skills__content skills__open") 
        {
            this.parentNode.classList.remove("skills__open")
            this.parentNode.classList.add("skills__close")
        }
    })
})

const tabs=document.querySelectorAll("[data-target]")
,tabContents=document.querySelectorAll("[data-content]")


tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabcontent=>{
            tabcontent.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")
        tabs.forEach(tab=>{
            tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")
    })
}) 


/* const qualbutton=document.querySelectorAll(".qualification__button")

const qualContent=document.querySelectorAll(".qualification__content")
const cont=document.querySelectorAll("[data-content]")
const tar=document.querySelectorAll("[data-target]")
console.log(tar)
qualbutton.forEach((el)=>{
    el.addEventListener("click",function(){
        
       let target=document.querySelector(el.dataset.target)
       
       cont.forEach((el)=>{
           el.classList.remove("qualification__active")
       })

       target.classList.add("qualification__active")

    })
}) */


 const modalViews=document.querySelectorAll(".services__modal"),
    modalBtns=document.querySelectorAll(".services__button"),
    modalCloses=document.querySelectorAll(".services__modal-close")


let modal=function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener("click",()=>{
        console.log(i)
        modal(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click",()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove("active-modal")
        })
    })
}) 



  var swiper = new Swiper(".swiper-container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  
  });