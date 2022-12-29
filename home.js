let intro = document.querySelector('.intro');
let name = document.querySelector('.name-header');
let nameSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded',()=>{
        setTimeout(()=>{
                nameSpan.forEach((span,idx)=>{
                        setTimeout(()=>{
                                span.classList.add('active');
                                setTimeout(()=>{
                                },300)
                        },(idx+1)*400)
                })
        });

        setTimeout(()=>{
                nameSpan.forEach((span,idx)=>{
                        setTimeout(()=>{
                                setTimeout(()=>{

                                        span.classList.remove('active');
                                        span.classList.add('fade');
                                },300)
                        },(idx+1)*400)
                })
        },2000);

        setTimeout(()=>{
                intro.style.top= '-100vh';
        },4000);
});

function abtToggle(){

	elmnt = document.querySelector("#about")
	if(elmnt.style.display === "none"){
		elmnt.style.display="flex";
	}else{
		elmnt.style.display="none";
	};
};
function portToggle(){

	elmnt = document.querySelector("#port")
	if(elmnt.style.display === "none"){
		elmnt.style.display="flex";
	}else{
		elmnt.style.display="none";
	};
};
function servToggle(){
	elmnt = document.querySelector("#service")
	if(elmnt.style.display === "none"){
		elmnt.style.display="flex";
	}else{
		elmnt.style.display="none";
	};

}
function contToggle(){
	elmnt = document.querySelector("#contact")
	if(elmnt.style.display === "none"){
		elmnt.style.display="flex";
	}else{
		elmnt.style.display="none";
	};

}
document.querySelector("#abouticon").addEventListener("click",()=>{
	abtToggle();
});
document.querySelector("#porticon").addEventListener("click",()=>{
	portToggle();
});
document.querySelector("#serviceicon").addEventListener("click",()=>{
	servToggle();
});
document.querySelector("#contacticon").addEventListener("click",()=>{
	contToggle();
});
document.querySelector("#abtclose").addEventListener("click",()=>{
	abtToggle();
});
document.querySelector("#prtclose").addEventListener("click",()=>{
	portToggle();
});
document.querySelector("#svclose").addEventListener("click",()=>{
	servToggle();
});
document.querySelector("#ctclose").addEventListener("click",()=>{
	contToggle();
});

dragElement(document.querySelector("#about"));
dragElement(document.querySelector("#port"));
dragElement(document.querySelector("#service"));
dragElement(document.querySelector("#contact"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
