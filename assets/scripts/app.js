let categoryOption = document.getElementById("category");
let playBtn = document.getElementById("play");

// add an event listener to set the category to local storage
playBtn.addEventListener('click', () =>{
    JSON.stringify(localStorage.setItem('category', categoryOption.value));
})