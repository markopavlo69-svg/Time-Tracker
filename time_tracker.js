//Get Elements

const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal")
const submitBtn = document.querySelector(".submit-btn")
const cancelBtn = document.querySelector(".cancel-btn")
const cardContainer = document.querySelector(".card-container")
const itemName = document.querySelector(".item-name")
const itemCat = document.querySelector(".item.category")
const itemDesc = document.querySelector(".item-desc")

//Vars
let cards = [];
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

function  createCard (){
    let id = 0

 const newCard = {
    id: id++,
    name : itemName.value,
    category : itemCat.value,
    description : itemDesc.value
 }
 cards.push(newCard);
 console.log(cards);

};