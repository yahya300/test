tp=document.getElementsByClassName("total");
tp[0].innerHTML = "Total: " + total;
up=document.getElementsByClassName("unit-price");
heart=document.getElementsByClassName("fas fa-heart");
plus = document.querySelector('fas fa-plus-circle');
min = document.querySelector('fas fa-minus-circle');
function updateTotal() {
  total = 0;
  for (let i = 0; i < up.length; i++) {
    let price = parseFloat(up[i].innerHTML);
    let quantity = parseInt(document.getElementsByClassName("quantity")[i].value);
    total += price * quantity;
  }
  tp[0].innerHTML = "Total: " + total.toFixed(2) + " DT";
}
document.addEventListener("DOMContentLoaded", function() {
  let quantityInputs = document.getElementsByClassName("quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", updateTotal);
  }
  updateTotal();
});
document.addEventListener("DOMContentLoaded", function() { 
  let heartIcons = document.getElementsByClassName("fas fa-heart");
  for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function() {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        this.style.color = "red";
      } else {
        this.style.color = "black";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  let plusIcons = document.querySelectorAll('.fas.fa-plus-circle');
  let minusIcons = document.querySelectorAll('.fas.fa-minus-circle');
  for (let i = 0; i < plusIcons.length; i++) {
    plusIcons[i].addEventListener("click", function() {
      let quantityInput = document.getElementsByClassName("quantity")[i];
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateTotal();
    });
    minusIcons[i].addEventListener("click", function() {
      let quantityInput = document.getElementsByClassName("quantity")[i];
      if (parseInt(quantityInput.value) > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotal();
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {  
  let deleteIcons = document.querySelectorAll('.fa-trash-alt');
  for (let i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener("click", function() {
      let row = this.closest('tr');
      row.parentNode.removeChild(row);
      updateTotal();
    });
  }
});
let total = 0;
let tp = document.getElementsByClassName("total");
tp[0].innerHTML = "Total: " + total.toFixed(2) + " DT";
let up = document.getElementsByClassName("unit-price");
let heart = document.getElementsByClassName("fas fa-heart");
let plus = document.querySelectorAll('.fas.fa-plus-circle');
let min = document.querySelectorAll('.fas.fa-minus-circle');
let deleteIcons = document.querySelectorAll('.fa-trash-alt');
let quantityInputs = document.getElementsByClassName("quantity");
