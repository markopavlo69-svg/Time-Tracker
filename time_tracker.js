//Get Elements

const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal")
const submitBtn = document.querySelector(".submit-btn")
const cancelBtn = document.querySelector(".cancel-btn")
//Event Listener

addBtn.addEventListener("click", showModal);
submitBtn.addEventListener("click", createCard);
cancelBtn.addEventListener("click", hideModal);



//functions

function showModal(){
    modal.style.display = "block";
}

function hideModal(){
    modal.style.display = "none";
}
