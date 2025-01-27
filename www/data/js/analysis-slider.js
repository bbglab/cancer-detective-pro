
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
	// countVarSlideTest1 = 2; // Modificar
	countVarSlide4 = 2;
	countVarSlide5 = 2;
	countVarSlide6 = 2;
	// countVarSlide7 = 2;
	// countVarSlide8 = 2;
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

// xxx

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
function sampleSlide7ok() {
	w3.addClass('#popup-slide-7','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-7, #popup-slide-7 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

//

function sampleSlide8ok() {
	w3.addClass('#popup-slide-8','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-8, #popup-slide-8 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
}

////////////////////////////////////////////////////////////////////////////////////////// Functions

// Functions Slide End // Afegir una variable per slide X 2 // Modificar
// function addEnd(addEnd1, addEnd2, addEnd3, addEndTest1, addEnd4) { resultEnd = addEnd1 + addEnd2 + addEnd3 + addEndTest1 + addEnd4; return resultEnd; }
function addEnd(addEnd1, addEnd2, addEnd3, addEnd4, addEnd5, addEnd6, addEnd7, addEnd8) { resultEnd = addEnd1 + addEnd2 + addEnd3 + addEnd4 + addEnd5 + addEnd6; return resultEnd; }

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

// Buttons slide-test-1 // Modificar
/*
document.getElementById("slidetest1-option1").addEventListener('click', function(){
	if ( countVarSlideTest1 == 2 ) { countVarSlideTest1 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
document.getElementById("slidetest1-option2").addEventListener('click', function(){
	if ( countVarSlideTest1 == 2 ) { countVarSlideTest1 = 1; }
	//
	w3.addClass('#popup-slide-test-1','visible');
	setTimeout(function() { 
		w3.addClass('#popup-slide-test-1, #popup-slide-test-1 div','active');
		scroll.scrollTo('#quiz-section-02');
	}, 10);
});
document.getElementById("slidetest1-option3").addEventListener('click', function(){
	if ( countVarSlideTest1 == 2 ) { countVarSlideTest1 = 0; }
	activaPopupError();
	scroll.scrollTo('#quiz-section-02');
});
*/

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
	// w3.addClass('#slide-test-1','active'); // Modificar
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
	// w3.addClass('#slide-test-1','active'); // Modificar
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

// Buttons Popup Encert slide-test-1 (next slide) // Modificar
/*
document.getElementById("popup-slide-test-1-close").addEventListener('click', function(){
	popupClose();
	w3.removeClass('#slide-test-1','active');
	w3.addClass('#slide-test-1','go-right');
	//
	w3.addClass('#slide-4','active');
});
*/

// Buttons Popup Encert Slide 6 (next slide)
document.getElementById("popup-slide-6-close").addEventListener('click', function(){
	// Counter // Afegir una variable per slide // Modificar
	// document.getElementById("sample-end-var").innerHTML += addEnd(countVarSlide1, countVarSlide2, countVarSlide3, countVarSlideTest1, countVarSlide4);
	document.getElementById("sample-end-var").innerHTML += addEnd(countVarSlide1, countVarSlide2, countVarSlide3, countVarSlide4, countVarSlide5, countVarSlide6);
	//
	popupClose();
	w3.removeClass('#slide-6','active');
	w3.addClass('#slide-6','go-right');
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

////////////////////////////////////////////////////////////////////////////////////////// End Buttons
