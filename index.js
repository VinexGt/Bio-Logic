boxmenu = document.querySelector(".boxmenu-navbar");
boxmenuIcon = document.querySelector('.boxmenu-navbar i');
boxmenu.onclick = function () {
    boxDown = document.querySelector(".box-navbar");
        boxDown.classList.toggle("open");
        const boxOpen = boxDown.classList.contains("open")
            
        boxmenuIcon.classList = boxOpen
        ? ('bx bx-x')
        : ('bx bx-menu')
    }


let slideImages = document.querySelectorAll('.slides div');
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let dots = document.querySelectorAll('.dot')

var counter = 0;

next.addEventListener('click', slideNext);
	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
	}

prev.addEventListener('click', slidePrev);
	function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	indicators();
	}
