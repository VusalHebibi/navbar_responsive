let inner = document.querySelector(".inner");
let dropDown = document.querySelector(".inner_dropdown");
let aa = 0;

inner.addEventListener("click", function () {
  aa++;
  if (aa % 2 == 0) {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
});

//-------------------------------------------------------------

let gamburger = document.querySelector(".gamburger");
let gamburgerMenu = document.querySelector(".gamburger_nav_menu");
let bb = 0;

gamburger.addEventListener("click", function () {
  bb++;
  if (bb % 2 == 0) {
    gamburgerMenu.style.height = "0px";
  } else {
    gamburgerMenu.style.height = "initial";
  }
});

//----------------------------------------------------------------

let plus = document.querySelector(".dd");
let minus = document.querySelector(".ss");
let ul = document.querySelector(".ul");

plus.addEventListener("click", function () {
  plus.style.display = "none";
  minus.style.display = "block";
  ul.style.height = "initial";
});
minus.addEventListener("click", function () {
  plus.style.display = "block";
  minus.style.display = "none";
  ul.style.height = "0px";
});

// ----------------------------------------------------------

let plus1 = document.querySelector(".uu");
let minus1 = document.querySelector(".ff");

plus1.addEventListener("click", function () {
  plus1.style.display = "none";
  minus1.style.display = "block";
  // ul.style.height = "112.5px";
});
minus1.addEventListener("click", function () {
  plus1.style.display = "block";
  minus1.style.display = "none";
  // ul.style.height = "0px";
});

// ------------------------------------------------------

let plus2 = document.querySelector(".kk");
let minus2 = document.querySelector(".mm");

plus2.addEventListener("click", function () {
  plus2.style.display = "none";
  minus2.style.display = "block";
  // ul.style.height = "112.5px";
});
minus2.addEventListener("click", function () {
  plus2.style.display = "block";
  minus2.style.display = "none";
  // ul.style.height = "0px";
});

// -------------------------------------\
let menuBtn = document.querySelector(".gamburger");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
