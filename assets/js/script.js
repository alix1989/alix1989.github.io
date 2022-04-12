
var currentSlide = 1;

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}

//Get the button
var mybutton = document.getElementById("myTornaSu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function darkMode() {
  document.getElementById('light').style.display = 'inline-block';
  document.getElementById('dark').style.display = 'none'

  document.body.style.backgroundColor="#111";
  document.getElementById('work').style.opacity = '0.6'
  document.getElementById('contact').style.opacity = '0.6'
  document.getElementById('myFooter').style.backgroundColor = "#000";
  document.getElementById('myFooter').style.color = "#777";
  document.getElementById('myFooter').style.border = "3px solid #444";
  document.getElementById('myTornaSu').style.color = "#777";
  


  let texts = document.getElementsByClassName('myText');
  let links = document.getElementsByTagName('a');
  // cambio colore dei link
  for(let o=0; o<links.length; o++) {
    links[o].style.color = '#2b004a';
  }
  // cambio colore dei testi
	for(let i = 0; i < texts.length; i++){
		texts[i].style.backgroundColor = "#222";
    texts[i].style.color = "#999";
    texts[i].style.borderTop = '5px dashed #000';
	}
  //altre funzioni
  onTitoli()
  onViolet()
  onLightViolet()
  onImages()
}

function onTitoli() {
  let titles = document.getElementsByClassName('myTitle');
  for(let i = 0; i < titles.length; i++){
    titles[i].style.color = "#2b004a";
	}
}

function onViolet() {
  let violet = document.getElementsByClassName('bg-violet');
  for(let i = 0; i < violet.length; i++){
    violet[i].style.backgroundColor = "#333";
    violet[i].style.border= '5px dashed black'
	}
}

function onLightViolet() {
  let lightViolet = document.getElementsByClassName('bg-lightViolet');
  let myWave = document.getElementsByClassName('myWave');
  for(let i = 0; i<lightViolet.length; i++) {
    lightViolet[i].style.backgroundColor = '#938C9F'
  }
  for(let i = 0; i<myWave.length; i++) {
    myWave[i].style.opacity = '0.6'
  }
}

function onImages() {
  let disegni = document.getElementsByClassName('disegno');
  for(let i = 0; i < disegni.length; i++) {
    disegni[i].style.opacity = '0.8'
  }
}



//prova collapsible about me
function queryCollapse(x) {
  if (x.matches) { // If media query matches
    document.getElementById('collasso').classList.add('myCollassabile');
    document.getElementById('collasso').style.cursor = "pointer";
    document.getElementById('collasso').append(' ~ click')
  } else {
    return 
  }
}

var x = window.matchMedia("(max-width: 780px)")
queryCollapse(x) // Call listener function at run time
x.addListener(queryCollapse) // Attach listener function on state changes

let coll = document.getElementsByClassName("myCollassabile");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

$(() => {
  $('#lang').on('click', function() {
      $('.ita').addClass('myHidden');
      $('.eng').removeClass('myHidden');
      $('#lang').addClass('myHidden');
      $('#langIta').removeClass('myHidden');
  });
  $('#langIta').on('click', function() {
      $('.eng').addClass('myHidden');
      $('.ita').removeClass('myHidden');
      $('#langIta').addClass('myHidden');
      $('#lang').removeClass('myHidden');
  });

})
