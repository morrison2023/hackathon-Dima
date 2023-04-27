const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popupContainer = document.getElementById("popup-container");

openPopupButton.addEventListener("click", () => {
  popupContainer.style.display = "flex";
});

closePopupButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

const openPopupButton1 = document.getElementById("open-popup1");
const closePopupButton1 = document.getElementById("close-popup1");
const popupContainer1 = document.getElementById("popup-container1");

openPopupButton1.addEventListener("click", () => {
  popupContainer1.style.display = "flex";
});

closePopupButton1.addEventListener("click", () => {
  popupContainer1.style.display = "none";
});

popupContainer1.addEventListener("click", (event) => {
  if (event.target === popupContainer1) {
    popupContainer1.style.display = "none";
  }
});

const openPopupButton2 = document.getElementById("open-popup2");
const closePopupButton2 = document.getElementById("close-popup2");
const popupContainer2 = document.getElementById("popup-container2");

openPopupButton2.addEventListener("click", () => {
  popupContainer2.style.display = "flex";
});

closePopupButton2.addEventListener("click", () => {
  popupContainer2.style.display = "none";
});

popupContainer2.addEventListener("click", (event) => {
  if (event.target === popupContainer2) {
    popupContainer2.style.display = "none";
  }
});

$(document).ready(function () {
  $("#button_form").on("click", function () {
    $(".button_form_class").html("<p>Отправлено!</p>");
    $(".button_form_class").css("background-color", "#63ff47");
    $(".button_form_class").css("border", "1px", "solid", "#63ff47");
  });
});
$(document).ready(function () {
  $("#button_form").mousedown(function () {
    $(".button_form_class").removeClass("hover");
  });
});
