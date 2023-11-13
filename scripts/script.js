const navButton = document.querySelector(".nav-button");
const navClose = document.querySelector(".nav-button-close");
const navList = document.querySelector(".nav-list-mobile");

navButton.addEventListener("click", ()=> {
  console.log(navList)
  navList.classList.remove("hidden");
})

navClose.addEventListener("click", ()=>{
  console.log(navList)
  setTimeout(()=>{
    navList.classList.add("hidden");
  }, 1000)
})