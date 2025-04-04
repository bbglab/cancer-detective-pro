/* Smooth scrolling */
const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	//
	//smooth: true,
	smooth: false,
	tablet: { smooth: false },
	smartphone: { smooth: false },
	//
	getSpeed: true,
	getDirection: true,
	//scrollFromAnywhere: true,
	reloadOnContextChange:true
});

/* Menu anchors mark function */
function anchorsMark() {
	scroll.on('call', (obj) => {
		const toggleClass = (id, className) => {
			const element = document.getElementById(id);
			if (element) element.classList.toggle(className);
		};

		// Check if the object corresponds to a menu
		if (obj.startsWith('menu')) {
			const menuNumber = parseInt(obj.replace('menu', '')); // Extract the number from 'menuX'
			toggleClass(`menu${menuNumber}`, 'active');

			// Handle section check and toggling 'active2'
			const currentSection = document.getElementById(`section${menuNumber - 1}`);
			if (currentSection && currentSection.classList.contains('is-inview')) {
				toggleClass(`menu${menuNumber - 1}`, 'active2');
			}
		} else if (obj === 'cell2') {
			cell2.play();
		}
	});
}

window.addEventListener("load", function(event) {
	imagesLoaded('body', { background: true }, function () { 

		scroll.update();

		/* Menu anchors mark call */
		anchorsMark();
		
		/* Loader */
		var loader = document.querySelector('#loader');
        function fadeOut(el) {
            var opacity = 1;
            var interval = setInterval(function() {
               if (opacity > 0) {
                  opacity -= 0.1;
                  el.style.opacity = opacity;
               } else {
                  clearInterval(interval);
                  el.style.display = 'none';
               }
            }, 50);
         }
		function fadeOutOk(){ fadeOut(loader); }
		setTimeout(fadeOutOk, 500);
		
	});	
});

/* If menu opens change container width */
const menuContainer = document.getElementById('menu');
const checkboxMenu = document.getElementById('menu-check');
const checkboxContainer = document.getElementById('content-container');
const buttonUp = document.getElementById('button-up');
const header = document.getElementById('header');
const content = document.getElementById('content');

var firstScroll = false;

function openMenuActions() {
	checkboxContainer.classList.add('menu-opened');
	buttonUp.classList.add('menu-opened');
	header.classList.add('menu-opened');
	menuContainer.classList.add('menu-opened');
}

function closeMenuActions() {
	checkboxContainer.classList.remove('menu-opened');
	buttonUp.classList.remove('menu-opened');
	header.classList.remove('menu-opened');
	menuContainer.classList.remove('menu-opened');
}

if (checkboxMenu.checked) { openMenuActions(); } else { closeMenuActions(); }
checkboxMenu.addEventListener('change', (event) => {
	if (event.currentTarget.checked) { openMenuActions(); } else { closeMenuActions(); }
});

/* Open menu on load */
function check() { checkboxMenu.checked = true; }
function openMenu(minWidth1200) {
  if (minWidth1200.matches) {
	  check();
	  openMenuActions();
  }
}
var minWidth1200 = window.matchMedia("(min-width:881px)");
openMenu(minWidth1200);
minWidth1200.addListener(openMenu);

/* When scrolling change header properties */
scroll.on('scroll', func => {
    var scroll_pos = 0;
  	scroll_pos = scroll.scroll.instance.scroll.y;
	/*
	if ( firstScroll == false ) {
      	header.classList.remove('header-inicio');
  	}
	if(scroll_pos > 50) {
		firstScroll = true;
  	}
	*/
  	if(scroll_pos > 50) {
		header.classList.add('header-show');
		buttonUp.classList.add('opacity-100');
		//
		header.classList.remove('header-top');
		header.classList.add('header-scroll');
		menu.classList.remove('menu-top');
		menu.classList.add('menu-scroll');
		//
		content.classList.remove('content-top');
		content.classList.add('content-scroll');
  	} else {
		header.classList.remove('header-show');
		buttonUp.classList.remove('opacity-100');
		//
		header.classList.add('header-top');
		header.classList.remove('header-scroll');
		menu.classList.add('menu-top');
		menu.classList.remove('menu-scroll');
		//
		content.classList.add('content-top');
		content.classList.remove('content-scroll');
  	}
});

/* Page transition */
window.transitionToPage = function(href) {
	document.getElementById('unloader').classList.add('visible');
	setTimeout(function() { 
        window.location.href = href;
		setTimeout(function() { 
			document.getElementById('unloader').classList.remove('visible');
		}, 500);
    }, 500);
};

function getGenes(elements) {
	const elementsSelected = [];
	elements.forEach(element => {
		const parent = element.parentElement;
		const parentClasses = parent.className;
		const gene = parentClasses.split(' ')[0];
		elementsSelected.push(gene);
	});
	return elementsSelected;
}

function getAfterElement(elements) {
	const elementsSelected = [];
	elements.forEach(element => {
		const afterElement = window.getComputedStyle(element, "::after").content;
		const cleanElement = afterElement.replace(/['"]/g, "");
		elementsSelected.push(cleanElement);
	});
	return elementsSelected;
}

function produceTable(elementId, tableHTML){
	const elementsgenAll = document.querySelectorAll(elementId + ' .gen1');
	const allGenes = getGenes(elementsgenAll);

	const elementsprotAll = document.querySelectorAll(elementId + ' .gen2');
	const allProteins = getAfterElement(elementsprotAll);

	const elementsmutAll = document.querySelectorAll(elementId + ' .gen3');
	const allMutation = getAfterElement(elementsmutAll);

	const elementstherapyAll = document.querySelectorAll(elementId + ' .gen4');
	const allTherapy = getAfterElement(elementstherapyAll);

	for (let i = 0; i < allGenes.length; i++) {
		tableHTML += `
  		  <tr>
  		    <td>${allGenes[i]}</td>
  		    <td>${allProteins[i]}</td>
  		    <td>${allMutation[i]}</td>
  		    <td>${allTherapy[i]}</td>
  		  </tr>
		`
	}

	return tableHTML;
}

function constructTable() {

	let tableHTML = `<table>
  		  <tr>
  		    <th colspan="4" align="center"><b>Pacient 1</b></th>
  		  </tr>
  		  <tr>
  		    <th>Gen</th>
  		    <th>Proteína</th>
  		    <th>Mutació</th>
  		    <th>Tractament</th>
  		  </tr>
	`

	let elementId = `.gen-sample-1`;

	tableHTML = produceTable(elementId, tableHTML);

	tableHTML += `
  		  <tr>
  		  </tr>
  		  <tr>
  		    <th colspan="4" align="center"><b>Pacient 2</b></th>
  		  </tr>
  		  <tr>
  		    <th>Gen</th>
  		    <th>Proteína</th>
  		    <th>Mutació</th>
  		    <th>Tractament</th>
  		  </tr>
	`

	elementId = `.gen-sample-2`;
	tableHTML = produceTable(elementId, tableHTML);

	tableHTML += `</table>`
	return tableHTML;
}

/* Download sheet */
downloadSheet = function() {

	const tableSimulation = constructTable();

	const blob = new Blob([tableSimulation], { type: 'application/vnd.ms-excel' });

	const link = document.createElement('a');
	if (link.download !== undefined) {
		const url = URL.createObjectURL(blob);
		link.setAttribute('href', url);
		link.setAttribute('download', 'data-simulation.xls');
		link.style.visibility = 'hidden';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
};

/* Anchor transition */
window.transitionToAnchor = function() {
	document.getElementById('unloader').classList.add('visible');
	setTimeout(function() { 
		window.location.replace('../analysis/?redo=true');
    }, 500);
};

/* activa cell */
var cell2 = bodymovin.loadAnimation({ container: document.getElementById('cell-2'), renderer: 'svg', loop: true, autoplay: false, path: '../data/grafs/js/cell-2.json' });
cell2.setSpeed(0.35);

/* Close menú on click menu */
const menuClick = () => {
	if (matchMedia('only screen and (max-width:750px)').matches) {
		document.querySelector(".left-menu-toggler").checked = false;
		closeMenuActions();
	}
};

document.addEventListener("DOMContentLoaded", function() {
	const elem0 = document.getElementById('menu0');
	const elem1 = document.getElementById('menu1');
	const elem2 = document.getElementById('menu2');
	const elem3 = document.getElementById('menu3');
	const elem4 = document.getElementById('menu4');
	const elem5 = document.getElementById('menu5');
	const elem6 = document.getElementById('menu6');
	const elem7 = document.getElementById('menu7');
	const elem8 = document.getElementById('menu8');

	function menuClick() {
		console.log("Menu clicked");
	}

	elem0?.addEventListener('click', menuClick);
	elem1?.addEventListener('click', menuClick);
	elem2?.addEventListener('click', menuClick);
	elem3?.addEventListener('click', menuClick);
	elem4?.addEventListener('click', menuClick);
	elem5?.addEventListener('click', menuClick);
	elem6?.addEventListener('click', menuClick);
	elem7?.addEventListener('click', menuClick);
	elem8?.addEventListener('click', menuClick);
});
