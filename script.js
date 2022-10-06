// VARIABLES
const modalOne = document.querySelector(".modal-one"),
  modalContentOne = document.querySelector(".modal-content-one"),
  btnOne = document.querySelector(".btn-one"),
  closeOne = document.querySelector(".close");

const modalTwo = document.querySelector(".modal-two"),
  modalContentTwo = document.querySelector(".modal-content-two"),
  btnTwo = document.querySelector(".btn-two"),
  closeTwo = document.querySelector(".close");

const modalThree = document.querySelector(".modal-three"),
  modalContentThree = document.querySelector(".modal-content-three"),
  btnThree = document.querySelector(".btn-three"),
  closeThree = document.querySelector(".close"),
  submitBtn = document.querySelector(".submit");



btnOne.addEventListener("click", openModalOne);
closeOne.addEventListener("click", closeModalOne);
modalOne.addEventListener("click", closeModalOne);


// OPEN MODAL ONE
function openModalOne(e) {
  e.preventDefault();
  modalOne.style.display = "block";
}

// CLOSE MODAL ONE
function closeModalOne() {
  modalContentOne.classList.add("slide-up");
  
  setTimeout(() => {
    modalOne.style.display = "none";
    modalContentOne.classList.remove("slide-up");
  }, 500);
}


btnTwo.addEventListener("click", openModalTwo);
closeTwo.addEventListener("click", closeModalTwo);
modalTwo.addEventListener("click", closeModalTwo);

// OPEN MODAL TWO
function openModalTwo(e) {
  e.preventDefault();
  modalTwo.style.display = "block";
}

// CLOSE MODAL TWO
function closeModalTwo() {
  modalContentTwo.classList.add("slide-up");
  
  setTimeout(() => {
    modalTwo.style.display = "none";
    modalContentTwo.classList.remove("slide-up");
  }, 500);
}


btnThree.addEventListener("click", openModalThree);
closeThree.addEventListener("click", closeModalThree);
submitBtn.addEventListener("click", closeModalThree);

// OPEN MODAL THREE
function openModalThree(e) {
  e.preventDefault();
  modalThree.style.display = "block";
}

// CLOSE MODAL THREE
function closeModalThree() {
  Text.innerHTML = 'none'
  modalContentThree.classList.add("slide-up");
  
  setTimeout(() => {
    modalThree.style.display = "none";
    modalContentThree.classList.remove("slide-up");
  }, 500);
}