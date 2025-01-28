
////////////////////////////////////////////////////////////////////////////////////////// Variables

// Counter // Afegir una variable per slide
var countVarSlide1;
var countVarSlide2;
var countVarSlide3;
// var countVarSlideTest1; // Modificar
var countVarSlide4;
var countVarSlide5;
// var countVarSlide6;
var countVarSlide7;
// var countVarSlide8;

function actualitzaVar() {
	sampleVar = 0;
	countVarSlide1 = 2;
	countVarSlide2 = 2;
	countVarSlide3 = 2;
	countVarSlide4 = 2;
	countVarSlide5 = 2;
	countVarSlide6 = 2;
	countVarSlide7 = 2;
	countVarSlide8 = 2;
}

var sampleVar;
var resultEnd;
actualitzaVar();

// Functions Slide 4 (count all mutations) xxx

var mutationsWinner;
var sample1mutations;
var sample2mutations;

function mutationsCount() {
	sample1mutations = document.querySelectorAll('.gen-sample-1 .gen3').length;
	sample2mutations = document.querySelectorAll('.gen-sample-2 .gen3').length;
	if ( sample1mutations > sample2mutations ) {
		mutationsWinner=1;
		w3.addClass('#mutations-1','active');
	} else if ( sample1mutations < sample2mutations ) {
		mutationsWinner=2;
		w3.addClass('#mutations-2','active');
	} else if ( sample1mutations == sample2mutations ) {
		mutationsWinner=0;
		w3.addClass('#mutations-3','active');
	}
}
function sampleSlide4ok() {
	w3.addClass('#popup-slide-4','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-4, #popup-slide-4 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

// Functions Slide 5 (add class "driver" to all driver mutations)

var sampleWinner;
var sample1driver;
var sample2driver;

function driverCount() {
	w3.addClass('.BRAF.V600E .gen3, .BRAF.V600K .gen3, .CDKN2A.P81L .gen3, .EGFR.L858R .gen3, .EGFR.L861Q .gen3, .HRAS.G12V .gen3, .KEAP1.C23Y .gen3, .KEAP1.V155F .gen3, .KRAS.G12C .gen3, .KRAS.G12D .gen3, .NF1.R1276P .gen3, .NFE2L2.G31R .gen3, .NRAS.Q61H .gen3, .NRAS.Q61K .gen3, .PTEN.D162G .gen3, .TP53.L145R .gen3, .TP53.P151S .gen3, .TP53.R248G .gen3, .TP53.R273H .gen3, .TP53.Y220C .gen3','driver');	
	sample1driver = document.querySelectorAll('.gen-sample-1 .driver').length;
	sample2driver = document.querySelectorAll('.gen-sample-2 .driver').length;
	if ( sample1driver > sample2driver ) {
		sampleWinner=1;
		w3.addClass('#driver-1','active');
	} else if ( sample1driver < sample2driver ) {
		sampleWinner=2;
		w3.addClass('#driver-2','active');
	} else if ( sample1driver == sample2driver ) {
		sampleWinner=0;
		w3.addClass('#driver-3','active');
	}
}
function sampleSlide5ok() {
	w3.addClass('#popup-slide-5','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-5, #popup-slide-5 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

//

function sampleSlide6ok() {
	w3.addClass('#popup-slide-6','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-6, #popup-slide-6 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

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

function getTwoRandomElements(arr) {
	if (arr.length < 2) {
		throw new Error("Array must contain at least two elements");
	}

	const firstIndex = Math.floor(Math.random() * arr.length);

	let secondIndex;
	do {
		secondIndex = Math.floor(Math.random() * arr.length);
	} while (secondIndex === firstIndex);

	return [arr[firstIndex], arr[secondIndex]];
}

var driverSample1Winner;
var driverSample2Winner;

function driverSample(sample) {
	const elementId = `.gen-sample-${sample}`;
	const elements = document.querySelectorAll( elementId + ' .driver');
	const elementsAll = document.querySelectorAll(elementId + ' .gen1');

	const driverGenes = getGenes(elements);
	const allGenes = getGenes(elementsAll);
	const passengerGenes = allGenes.filter(gene => !driverGenes.includes(gene));

	const driverSelected = driverGenes[Math.floor(Math.random() * driverGenes.length)];
	const [passenger1, passenger2] = getTwoRandomElements(passengerGenes);

	const indices = [0, 1, 2];
	const shuffledIndices = indices.sort(() => Math.random() - 0.5);
	indices.forEach((i) => {
		let elementId ;
		if ( sample == 1 ) {
			elementId = `slide7-option${i+1}`;
		} else if ( sample == 2 ) {
			elementId = `slide8-option${i+1}`;
		}

		const element = document.getElementById(elementId);

		if (element) {
			const span = element.querySelector("span");
			const par = element.querySelector("p");
			if (span && par) {
				if ( shuffledIndices[i] == 0 ) {
					if ( sample == 1 ) {
						w3.addClass('#driver-gen-1','active');
						const elementDriver = document.getElementById("driver-gen-1");
						elementDriver.innerHTML = "El gen " + driverSelected + " del pacient 1 és un gen impulsor";
						driverSample1Winner = i;
					} else if ( sample == 2 ) {
						w3.addClass('#driver-gen-2','active');
						const elementDriver = document.getElementById("driver-gen-2");
						elementDriver.innerHTML = "El gen " + driverSelected + " del pacient 2 és un gen impulsor";
						driverSample2Winner = i;
					}
					span.innerHTML = "<strong>" + driverSelected + "</strong>";
					par.innerHTML = "<strong>" + driverSelected + "</strong>";
				} else if ( shuffledIndices[i] == 1) {
					span.innerHTML = "<strong>" + passenger1 + "</strong>";
					par.innerHTML = "<strong>" + passenger1 + "</strong>";
				} else if (shuffledIndices[i] == 2) {
					span.innerHTML = "<strong>" + passenger2 + "</strong>";
					par.innerHTML = "<strong>" + passenger2 + "</strong>";
				}
			}
		}
	});
}

function sampleSlide7ok() {
	w3.addClass('#popup-slide-7','visible');
	setTimeout(function() {
		w3.addClass('#popup-slide-7, #popup-slide-7 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

function sampleSlide8ok() {
	w3.addClass('#popup-slide-8','visible');
	setTimeout(function() {
		w3.addClass('#popup-slide-8, #popup-slide-8 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

var therapyWinner;
var sample1therapy;
var sample2therapy;

function therapyCount() {
	w3.addClass('.BRAF.V600E .gen4, .BRAF.V600K .gen4, .EGFR.L858R .gen4, .EGFR.L861Q .gen4','therapy');
	sample1therapy = document.querySelectorAll('.gen-sample-1 .therapy').length;
	sample2therapy = document.querySelectorAll('.gen-sample-2 .therapy').length;
	if ( sample1therapy > sample2therapy ) {
		therapyWinner=1;
		w3.addClass('#therapy-1','active');
	} else if ( sample1therapy < sample2therapy ) {
		therapyWinner=2;
		w3.addClass('#therapy-2','active');
	} else if ( sample1therapy == sample2therapy ) {
		therapyWinner=0;
		w3.addClass('#therapy-3','active');
	}
}

////////////////////////////////////////////////////////////////////////////////////////// Functions

// Functions Slide End // Afegir una variable per slide X 2 // Modificar
// function addEnd(addEnd1, addEnd2, addEnd3, addEndTest1, addEnd4) { resultEnd = addEnd1 + addEnd2 + addEnd3 + addEndTest1 + addEnd4; return resultEnd; }
//function addEnd(addEnd1, addEnd2, addEnd3, addEnd4, addEnd5, addEnd6, addEnd7, addEnd8) { resultEnd = addEnd1 + addEnd2 + addEnd3 + addEnd4 + addEnd5 + addEnd6; return resultEnd; }

// Functions Close Popup
function popupClose() {
    w3.removeClass('.popup, .popup div','active');
	setTimeout(function() { 
		w3.removeClass('.popup','visible');
    }, 600);
}
function activaPopupError() {
    w3.addClass('#popup-error','visible');
	setTimeout(function() { 
		w3.addClass('#popup-error, #popup-error div','active');
	}, 10);
}

////////////////////////////////////////////////////////////////////////////////////////// Buttons Slides

// Buttons Slide Inici (choose sample)
document.getElementById("sample-1").addEventListener('click', function(){
	sampleVar = 1;
	w3.removeClass('#slide-0','active');
	w3.addClass('#slide-0','go-right');
	w3.addClass('#slide-1-skin, #sample-header-1','active');
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("sample-2").addEventListener('click', function(){
	sampleVar = 2;
	w3.removeClass('#slide-0','active');
	w3.addClass('#slide-0','go-right');
	w3.addClass('#slide-1-lung, #sample-header-2','active');
	scroll.scrollTo('#quiz-section-02');
});

// Buttons Skin Slide 1
document.getElementById("slide1-skin-option1").addEventListener('click', function(){
	if ( countVarSlide1 == 2 ) { countVarSlide1 = 0; }
	//
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide1-skin-option2").addEventListener('click', function(){
	if ( countVarSlide1 == 2 ) { countVarSlide1 = 0; }
	//
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide1-skin-option3").addEventListener('click', function(){
	if ( countVarSlide1 == 2 ) { countVarSlide1 = 1; }
	//
	w3.addClass('#popup-slide-1-skin','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-1-skin, #popup-slide-1-skin div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
});

// Buttons Skin Slide 2
document.getElementById("slide2-skin-option1").addEventListener('click', function(){
	if ( countVarSlide2 == 2 ) { countVarSlide2 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide2-skin-option2").addEventListener('click', function(){
	if ( countVarSlide2 == 2 ) { countVarSlide2 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide2-skin-option3").addEventListener('click', function(){
	if ( countVarSlide2 == 2 ) { countVarSlide2 = 1; }
	//
	w3.addClass('#popup-slide-2-skin','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-2-skin, #popup-slide-2-skin div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
});

// Buttons Skin Slide 3
document.getElementById("slide3-skin-option1").addEventListener('click', function(){
	if ( countVarSlide3 == 2 ) { countVarSlide3 = 1; }
	//
	w3.addClass('#popup-slide-3-skin','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-3-skin, #popup-slide-3-skin div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
	
});
document.getElementById("slide3-skin-option2").addEventListener('click', function(){
	if ( countVarSlide3 == 2 ) { countVarSlide3 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide3-skin-option3").addEventListener('click', function(){
	if ( countVarSlide3 == 2 ) { countVarSlide3 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});

// Buttons Lung Slide 1
document.getElementById("slide1-lung-option1").addEventListener('click', function(){
	if ( countVarSlide1 == 2 ) { countVarSlide1 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide1-lung-option2").addEventListener('click', function(){
	if ( countVarSlide1 == 2 ) { countVarSlide1 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide1-lung-option3").addEventListener('click', function(){
	if ( countVarSlide1 == 2 ) { countVarSlide1 = 1; }
	scroll.scrollTo('#quiz-section-02');
	//
	w3.addClass('#popup-slide-1-lung','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-1-lung, #popup-slide-1-lung div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
});

// Buttons Lung Slide 2
document.getElementById("slide2-lung-option1").addEventListener('click', function(){
	if ( countVarSlide2 == 2 ) { countVarSlide2 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide2-lung-option2").addEventListener('click', function(){
	if ( countVarSlide2 == 2 ) { countVarSlide2 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide2-lung-option3").addEventListener('click', function(){
	if ( countVarSlide2 == 2 ) { countVarSlide2 = 1; }
	//
	w3.addClass('#popup-slide-2-lung','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-2-lung, #popup-slide-2-lung div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
});

// Buttons Lung Slide 3
document.getElementById("slide3-lung-option1").addEventListener('click', function(){
	if ( countVarSlide3 == 2 ) { countVarSlide3 = 1; }
	//
	w3.addClass('#popup-slide-3-lung','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-3-lung, #popup-slide-3-lung div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
});
document.getElementById("slide3-lung-option2").addEventListener('click', function(){
	if ( countVarSlide3 == 2 ) { countVarSlide3 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slide3-lung-option3").addEventListener('click', function(){
	if ( countVarSlide3 == 2 ) { countVarSlide3 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});

// Buttons Slide 4 functions
document.getElementById("slide4-option1").addEventListener('click', function(){
	mutationsCount();
	if ( mutationsWinner == 1 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 1; }
		sampleSlide4ok();
	} else if ( mutationsWinner == 2 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( mutationsWinner == 0 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide4-option2").addEventListener('click', function(){
	mutationsCount();
	if ( mutationsWinner == 1 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( mutationsWinner == 2 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 1; }
		sampleSlide4ok();
	} else if ( mutationsWinner == 0 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide4-option3").addEventListener('click', function(){
	mutationsCount();
	if ( mutationsWinner == 1 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( mutationsWinner == 2 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( mutationsWinner == 0 ) {
		if ( countVarSlide4 == 2 ) { countVarSlide4 = 1; }
		sampleSlide4ok();
	}
});

// Buttons Slide 5 functions
document.getElementById("slide5-option1").addEventListener('click', function(){
	driverCount();
	if ( sampleWinner == 1 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 1; }
		sampleSlide5ok();
	} else if ( sampleWinner == 2 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( sampleWinner == 0 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide5-option2").addEventListener('click', function(){
	driverCount();
	if ( sampleWinner == 1 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( sampleWinner == 2 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 1; }
		sampleSlide5ok();
	} else if ( sampleWinner == 0 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide5-option3").addEventListener('click', function(){
	driverCount();
	if ( sampleWinner == 1 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( sampleWinner == 2 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( sampleWinner == 0 ) {
		if ( countVarSlide5 == 2 ) { countVarSlide5 = 1; }
		sampleSlide5ok();
	}
});

// Buttons Slide 6 functions
document.getElementById("slide6-option1").addEventListener('click', function(){
	therapyCount();
	if ( therapyWinner == 1 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 1; }
		sampleSlide6ok();
	} else if ( therapyWinner == 2 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( therapyWinner == 0 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide6-option2").addEventListener('click', function(){
	therapyCount();
	if ( therapyWinner == 1 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( therapyWinner == 2 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 1; }
		sampleSlide6ok();
	} else if ( therapyWinner == 0 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide6-option3").addEventListener('click', function(){
	therapyCount();
	if ( therapyWinner == 1 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( therapyWinner == 2 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	} else if ( therapyWinner == 0 ) {
		if ( countVarSlide6 == 2 ) { countVarSlide6 = 1; }
		sampleSlide6ok();
	}
});


// Buttons Slide 7 functions
document.getElementById("slide7-option1").addEventListener('click', function(){
	if ( driverSample1Winner == 0 ) {
		if ( countVarSlide7 == 2 ) { countVarSlide7 = 1; }
		sampleSlide7ok();
	} else {
		if ( countVarSlide7 == 2 ) { countVarSlide7 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide7-option2").addEventListener('click', function(){
	 if ( driverSample1Winner == 1 ) {
		if ( countVarSlide7 == 2 ) { countVarSlide7 = 1; }
		sampleSlide7ok();
	} else {
		if ( countVarSlide7 == 2 ) { countVarSlide7 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide7-option3").addEventListener('click', function(){
	if ( driverSample1Winner == 2 ) {
		if ( countVarSlide7 == 2 ) { countVarSlide7 = 1; }
		sampleSlide7ok();
	} else {
		if ( countVarSlide7 == 2 ) { countVarSlide7 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});

// Buttons Slide 8 functions
document.getElementById("slide8-option1").addEventListener('click', function(){
	if ( driverSample2Winner == 0 ) {
		if ( countVarSlide8 == 2 ) { countVarSlide8 = 1; }
		sampleSlide8ok();
	} else {
		if ( countVarSlide8 == 2 ) { countVarSlide8 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide8-option2").addEventListener('click', function(){
	if ( driverSample2Winner == 1 ) {
		if ( countVarSlide8 == 2 ) { countVarSlide8 = 1; }
		sampleSlide8ok();
	} else {
		if ( countVarSlide8 == 2 ) { countVarSlide8 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
document.getElementById("slide8-option3").addEventListener('click', function(){
	if ( driverSample2Winner == 2 ) {
		if ( countVarSlide8 == 2 ) { countVarSlide8 = 1; }
		sampleSlide8ok();
	} else {
		if ( countVarSlide8 == 2 ) { countVarSlide8 = 0; }
		activaPopupError();
		scroll.scrollTo('#quiz-section-02');
	}
});
////////////////////////////////////////////////////////////////////////////////////////// Buttons Popups

// Buttons Popup Error (close popup)
document.getElementById("popup-close").addEventListener('click', function(){
	popupClose();
});

// Buttons Popup Encert Skin (next slide)
document.getElementById("popup-slide-1-skin-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-1-skin','active');
	w3.addClass('#slide-1-skin','go-right');
	w3.addClass('#slide-2-skin','active');
});
document.getElementById("popup-slide-2-skin-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-2-skin','active');
	w3.addClass('#slide-2-skin','go-right');
	w3.addClass('#slide-3-skin','active');
});
document.getElementById("popup-slide-3-skin-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-3-skin','active');
	w3.addClass('#slide-3-skin','go-right');
	w3.addClass('#slide-4','active');
});

// Buttons Popup Encert Lung (next slide)
document.getElementById("popup-slide-1-lung-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-1-lung','active');
	w3.addClass('#slide-1-lung','go-right');
	w3.addClass('#slide-2-lung','active');
});
document.getElementById("popup-slide-2-lung-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-2-lung','active');
	w3.addClass('#slide-2-lung','go-right');
	w3.addClass('#slide-3-lung','active');
});
document.getElementById("popup-slide-3-lung-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-3-lung','active');
	w3.addClass('#slide-3-lung','go-right');
	w3.addClass('#slide-4','active');
});

// Buttons Popup Encert Comuns (next slide)
document.getElementById("popup-slide-4-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-4','active');
	w3.addClass('#slide-4','go-right');
	w3.addClass('#slide-5','active');
});
document.getElementById("popup-slide-5-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-5','active');
	w3.addClass('#slide-5','go-right');
	w3.addClass('#slide-6','active');
});

document.getElementById("popup-slide-6-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-6','active');
	w3.addClass('#slide-6','go-right');
	w3.addClass('#slide-7','active');
	driverSample(1)
});

document.getElementById("popup-slide-7-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-7','active');
	w3.addClass('#slide-7','go-right');
	w3.addClass('#slide-8','active');
	driverSample(2)
});

// Buttons Popup Encert Slide 7 (next slide)
document.getElementById("popup-slide-8-close").addEventListener('click', function(){

	document.getElementById("sample-end-var").innerHTML +=
		[countVarSlide1, countVarSlide2, countVarSlide3, countVarSlide4,
			countVarSlide5, countVarSlide6, countVarSlide7, countVarSlide8]
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	//
	popupClose();
	w3.removeClass('#slide-8','active');
	w3.addClass('#slide-8','go-right');
	w3.addClass('#sample-end','active');
	//
	// Només quan va a l'últim slide
	w3.addClass('#sample-analysis','new-height');
	scroll.update();
});

////////////////////////////////////////////////////////////////////////////////////////// Buttons Retrocedir Slider

document.getElementById("slide1-skin-back").addEventListener('click', function(){
	actualitzaVar();
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-0','go-right');
	w3.addClass('#slide-0','active');
});

document.getElementById("slide2-skin-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-1-skin','go-right');
	w3.addClass('#slide-1-skin','active');
});

document.getElementById("slide3-skin-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-2-skin','go-right');
	w3.addClass('#slide-2-skin','active');
});

document.getElementById("slide1-lung-back").addEventListener('click', function(){
	actualitzaVar();
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-0','go-right');
	w3.addClass('#slide-0','active');
});

document.getElementById("slide2-lung-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-1-lung','go-right');
	w3.addClass('#slide-1-lung','active');
});

document.getElementById("slide3-lung-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-2-lung','go-right');
	w3.addClass('#slide-2-lung','active');
});

// Buttons slide-test-1 Back // Modificar
/*
document.getElementById("slidetest1-back").addEventListener('click', function(){
	// ...
});
*/

document.getElementById("slide4-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	if ( sampleVar == 1 ) { // Si és Skin
		w3.removeClass('#slide-3-skin','go-right');
		w3.addClass('#slide-3-skin','active');
	} else if ( sampleVar == 2 ) { // Si és Lung
		w3.removeClass('#slide-3-lung','go-right');
		w3.addClass('#slide-3-lung','active');
	}
});

document.getElementById("slide5-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-4','go-right');
	w3.addClass('#slide-4','active');
});

document.getElementById("slide6-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-5','go-right');
	w3.addClass('#slide-5','active');
});

document.getElementById("slide7-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-6','go-right');
	w3.addClass('#slide-6','active');
});

document.getElementById("slide8-back").addEventListener('click', function(){
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-7','go-right');
	w3.addClass('#slide-7','active');
});
////////////////////////////////////////////////////////////////////////////////////////// End Buttons
