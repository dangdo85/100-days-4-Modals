// VARIABLES
const modalOne = document.querySelector(".modal-one"),
  modalContentOne = document.querySelector(".modal-content-one"),
  btnOne = document.querySelector(".btn-one"),
  closeOne = document.querySelector(".close-one");

const modalTwo = document.querySelector(".modal-two"),
  modalContentTwo = document.querySelector(".modal-content-two"),
  btnTwo = document.querySelector(".btn-two"),
  closeTwo = document.querySelector(".close-two");

const modalThree = document.querySelector(".modal-three"),
  modalContentThree = document.querySelector(".modal-content-three"),
  btnThree = document.querySelector(".btn-three"),
  submitBtn = document.querySelector(".submit"),
  closeThree = document.querySelector(".close-three");



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
  modalContentThree.classList.add("slide-up");
  document.getElementById('input-text1').value = ''
  document.getElementById('input-text2').value = ''
  
  setTimeout(() => {
    modalThree.style.display = "none";
    modalContentThree.classList.remove("slide-up");
  }, 500);
}