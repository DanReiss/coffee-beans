const navButton = document.querySelector(".nav-button");
const navClose = document.querySelector(".nav-button-close")
const navList = document.querySelector(".nav-list-toogle");

navButton.addEventListener("click", ()=> {
  navList.classList.remove("hidden");
})

navClose.addEventListener("click", ()=>{
  setTimeout(()=>{
    navList.classList.add("hidden");
  }, 1000)
})