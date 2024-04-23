// variables aleatòries
function random_types(types) { return types[Math.floor(Math.random()*types.length)]; }
var types = ['a', 'b']; // variables pel tipus de mostra: skin / lung
function random_item1(items1) { return items1[Math.floor(Math.random()*items1.length)]; }
var items1 = ['1a', '1b', '1c']; // variables pel factor: edat
function random_item2(items2) { return items2[Math.floor(Math.random()*items2.length)]; }
var items2 = ['2a', '2b', '2c']; // variables pel factor: exposició al sol / fumador
function random_item3(items3) { return items3[Math.floor(Math.random()*items3.length)]; }
var items3 = ['3a', '3b', '3c']; // variables pel factor: protecció solar / fumador passiu
// variables per les mostres dels dos pacients
var a1value, a2value, a3value, b1value, b2value, b3value, resultado1, resultado2;
function sumar1(sumA1, sumA2, sumA3) { resultado1 = sumA1 + sumA2 + sumA3; return resultado1; }
function sumar2(sumB1, sumB2, sumB3) { resultado2 = sumB1 + sumB2 + sumB3; return resultado2; }

// funció que genera les dues mostres dels pacients a partir de les variables aleatòries
function finalitems() {
	var randomTypeVariable = random_types(types);
	//
	var finaltype = "type-" + randomTypeVariable;
	var finalgene = "gen-" + randomTypeVariable;
	var finalmuta = "muta_" + randomTypeVariable;
	var finalgeneType = "gen-type-" + randomTypeVariable;
	//
	var randomItemA1 = random_item1(items1);
	var randomItemA2 = random_item2(items2);
	var randomItemA3 = random_item3(items3);
	var randomItemB1 = random_item1(items1);
	var randomItemB2 = random_item2(items2);
	var randomItemB3 = random_item3(items3);
	var finalitem1 = finaltype + '-' + randomItemA1 + '-' + randomItemA2 + '-' + randomItemA3;
	var finalitem2 = finaltype + '-' + randomItemB1 + '-' + randomItemB2 + '-' + randomItemB3;
	var finalgene1 = finalgene + '-' + randomItemA1 + '-' + randomItemA2 + '-' + randomItemA3;
	var finalgene2 = finalgene + '-' + randomItemB1 + '-' + randomItemB2 + '-' + randomItemB3;
	//
	var mutacions1 = finalmuta + '_' + randomItemA1 + '_' + randomItemA2 + '_' + randomItemA3;
	var mutacions2 = finalmuta + '_' + randomItemB1 + '_' + randomItemB2 + '_' + randomItemB3;
	if ( finalitem1 == finalitem2 ) {
		finalitems();
	} else {
		document.getElementById("sample-types-wrapper").innerHTML += "<ul class='type "+ finaltype +" active user1' id='"+ finalitem1 +"'><li class='sample'></li><li class='sample-"+ randomItemA1 +"'></li><li class='sample-"+ randomItemA2 +"'></li><li class='sample-"+ randomItemA3 +"'></li></ul><ul class='type "+ finaltype +" active user2' id='"+ finalitem2 +"'><li class='sample'></li><li class='sample-"+ randomItemB1 +"'></li><li class='sample-"+ randomItemB2 +"'></li><li class='sample-"+ randomItemB3 +"'></li></ul>";
		// assigna values a la variable de la suma
		if ( randomItemA1 === '1a' ) { a1value=1; } else if ( randomItemA1 === '1b' ) { a1value=2; } else if ( randomItemA1 === '1c' ) { a1value=3; }
		if ( randomItemA2 === '2a' ) { a2value=1; } else if ( randomItemA2 === '2b' ) { a2value=2; } else if ( randomItemA2 === '2c' ) { a2value=3; }
		if ( randomItemA3 === '3a' ) { a3value=1; } else if ( randomItemA3 === '3b' ) { a3value=2; } else if ( randomItemA3 === '3c' ) { a3value=3; }
		if ( randomItemB1 === '1a' ) { b1value=1; } else if ( randomItemB1 === '1b' ) { b1value=2; } else if ( randomItemB1 === '1c' ) { b1value=3; }
		if ( randomItemB2 === '2a' ) { b2value=1; } else if ( randomItemB2 === '2b' ) { b2value=2; } else if ( randomItemB2 === '2c' ) { b2value=3; }
		if ( randomItemB3 === '3a' ) { b3value=1; } else if ( randomItemB3 === '3b' ) { b3value=2; } else if ( randomItemB3 === '3c' ) { b3value=3; }
		// assigna gene type
		w3.addClass('.gen-sample-1, .gen-sample-2',finalgeneType);
		// assigna mutacions
		document.getElementsByClassName("gen-sample-1")[0].id=finalgene1;
		document.getElementsByClassName("gen-sample-2")[0].id=finalgene2;
		// Comproba si a l'html hi existeix l'ID associat a la mutació i, si es així, agafa el contingut per cada ID de l'arxiu "gens.js" i el mostra al llistat de mutacions de cada mostra
		var typeA01 = document.getElementById( 'gen-a-1a-2a-3a' ); if(typeA01) { typeA01.innerHTML += muta_a_1a_2a_3a; }
		var typeA02 = document.getElementById( 'gen-a-1a-2a-3b' ); if(typeA02) { typeA02.innerHTML += muta_a_1a_2a_3b; }
		var typeA03 = document.getElementById( 'gen-a-1a-2a-3c' ); if(typeA03) { typeA03.innerHTML += muta_a_1a_2a_3c; }
		var typeA04 = document.getElementById( 'gen-a-1a-2b-3a' ); if(typeA04) { typeA04.innerHTML += muta_a_1a_2b_3a; }
		var typeA05 = document.getElementById( 'gen-a-1a-2b-3b' ); if(typeA05) { typeA05.innerHTML += muta_a_1a_2b_3b; }
		var typeA06 = document.getElementById( 'gen-a-1a-2b-3c' ); if(typeA06) { typeA06.innerHTML += muta_a_1a_2b_3c; }
		var typeA07 = document.getElementById( 'gen-a-1a-2c-3a' ); if(typeA07) { typeA07.innerHTML += muta_a_1a_2c_3a; }
		var typeA08 = document.getElementById( 'gen-a-1a-2c-3b' ); if(typeA08) { typeA08.innerHTML += muta_a_1a_2c_3b; }
		var typeA09 = document.getElementById( 'gen-a-1a-2c-3c' ); if(typeA09) { typeA09.innerHTML += muta_a_1a_2c_3c; }
		var typeA10 = document.getElementById( 'gen-a-1b-2a-3a' ); if(typeA10) { typeA10.innerHTML += muta_a_1b_2a_3a; }
		var typeA11 = document.getElementById( 'gen-a-1b-2a-3b' ); if(typeA11) { typeA11.innerHTML += muta_a_1b_2a_3b; }
		var typeA12 = document.getElementById( 'gen-a-1b-2a-3c' ); if(typeA12) { typeA12.innerHTML += muta_a_1b_2a_3c; }
		var typeA13 = document.getElementById( 'gen-a-1b-2b-3a' ); if(typeA13) { typeA13.innerHTML += muta_a_1b_2b_3a; }
		var typeA14 = document.getElementById( 'gen-a-1b-2b-3b' ); if(typeA14) { typeA14.innerHTML += muta_a_1b_2b_3b; }
		var typeA15 = document.getElementById( 'gen-a-1b-2b-3c' ); if(typeA15) { typeA15.innerHTML += muta_a_1b_2b_3c; }
		var typeA16 = document.getElementById( 'gen-a-1b-2c-3a' ); if(typeA16) { typeA16.innerHTML += muta_a_1b_2c_3a; }
		var typeA17 = document.getElementById( 'gen-a-1b-2c-3b' ); if(typeA17) { typeA17.innerHTML += muta_a_1b_2c_3b; }
		var typeA18 = document.getElementById( 'gen-a-1b-2c-3c' ); if(typeA18) { typeA18.innerHTML += muta_a_1b_2c_3c; }
		var typeA19 = document.getElementById( 'gen-a-1c-2a-3a' ); if(typeA19) { typeA19.innerHTML += muta_a_1c_2a_3a; }
		var typeA20 = document.getElementById( 'gen-a-1c-2a-3b' ); if(typeA20) { typeA20.innerHTML += muta_a_1c_2a_3b; }
		var typeA21 = document.getElementById( 'gen-a-1c-2a-3c' ); if(typeA21) { typeA21.innerHTML += muta_a_1c_2a_3c; }
		var typeA22 = document.getElementById( 'gen-a-1c-2b-3a' ); if(typeA22) { typeA22.innerHTML += muta_a_1c_2b_3a; }
		var typeA23 = document.getElementById( 'gen-a-1c-2b-3b' ); if(typeA23) { typeA23.innerHTML += muta_a_1c_2b_3b; }
		var typeA24 = document.getElementById( 'gen-a-1c-2b-3c' ); if(typeA24) { typeA24.innerHTML += muta_a_1c_2b_3c; }
		var typeA25 = document.getElementById( 'gen-a-1c-2c-3a' ); if(typeA25) { typeA25.innerHTML += muta_a_1c_2c_3a; }
		var typeA26 = document.getElementById( 'gen-a-1c-2c-3b' ); if(typeA26) { typeA26.innerHTML += muta_a_1c_2c_3b; }
		var typeA27 = document.getElementById( 'gen-a-1c-2c-3c' ); if(typeA27) { typeA27.innerHTML += muta_a_1c_2c_3c; }
		//
		var typeB01 = document.getElementById( 'gen-b-1a-2a-3a' ); if(typeB01) { typeB01.innerHTML += muta_b_1a_2a_3a; }
		var typeB02 = document.getElementById( 'gen-b-1a-2a-3b' ); if(typeB02) { typeB02.innerHTML += muta_b_1a_2a_3b; }
		var typeB03 = document.getElementById( 'gen-b-1a-2a-3c' ); if(typeB03) { typeB03.innerHTML += muta_b_1a_2a_3c; }
		var typeB04 = document.getElementById( 'gen-b-1a-2b-3a' ); if(typeB04) { typeB04.innerHTML += muta_b_1a_2b_3a; }
		var typeB05 = document.getElementById( 'gen-b-1a-2b-3b' ); if(typeB05) { typeB05.innerHTML += muta_b_1a_2b_3b; }
		var typeB06 = document.getElementById( 'gen-b-1a-2b-3c' ); if(typeB06) { typeB06.innerHTML += muta_b_1a_2b_3c; }
		var typeB07 = document.getElementById( 'gen-b-1a-2c-3a' ); if(typeB07) { typeB07.innerHTML += muta_b_1a_2c_3a; }
		var typeB08 = document.getElementById( 'gen-b-1a-2c-3b' ); if(typeB08) { typeB08.innerHTML += muta_b_1a_2c_3b; }
		var typeB09 = document.getElementById( 'gen-b-1a-2c-3c' ); if(typeB09) { typeB09.innerHTML += muta_b_1a_2c_3c; }
		var typeB10 = document.getElementById( 'gen-b-1b-2a-3a' ); if(typeB10) { typeB10.innerHTML += muta_b_1b_2a_3a; }
		var typeB11 = document.getElementById( 'gen-b-1b-2a-3b' ); if(typeB11) { typeB11.innerHTML += muta_b_1b_2a_3b; }
		var typeB12 = document.getElementById( 'gen-b-1b-2a-3c' ); if(typeB12) { typeB12.innerHTML += muta_b_1b_2a_3c; }
		var typeB13 = document.getElementById( 'gen-b-1b-2b-3a' ); if(typeB13) { typeB13.innerHTML += muta_b_1b_2b_3a; }
		var typeB14 = document.getElementById( 'gen-b-1b-2b-3b' ); if(typeB14) { typeB14.innerHTML += muta_b_1b_2b_3b; }
		var typeB15 = document.getElementById( 'gen-b-1b-2b-3c' ); if(typeB15) { typeB15.innerHTML += muta_b_1b_2b_3c; }
		var typeB16 = document.getElementById( 'gen-b-1b-2c-3a' ); if(typeB16) { typeB16.innerHTML += muta_b_1b_2c_3a; }
		var typeB17 = document.getElementById( 'gen-b-1b-2c-3b' ); if(typeB17) { typeB17.innerHTML += muta_b_1b_2c_3b; }
		var typeB18 = document.getElementById( 'gen-b-1b-2c-3c' ); if(typeB18) { typeB18.innerHTML += muta_b_1b_2c_3c; }
		var typeB19 = document.getElementById( 'gen-b-1c-2a-3a' ); if(typeB19) { typeB19.innerHTML += muta_b_1c_2a_3a; }
		var typeB20 = document.getElementById( 'gen-b-1c-2a-3b' ); if(typeB20) { typeB20.innerHTML += muta_b_1c_2a_3b; }
		var typeB21 = document.getElementById( 'gen-b-1c-2a-3c' ); if(typeB21) { typeB21.innerHTML += muta_b_1c_2a_3c; }
		var typeB22 = document.getElementById( 'gen-b-1c-2b-3a' ); if(typeB22) { typeB22.innerHTML += muta_b_1c_2b_3a; }
		var typeB23 = document.getElementById( 'gen-b-1c-2b-3b' ); if(typeB23) { typeB23.innerHTML += muta_b_1c_2b_3b; }
		var typeB24 = document.getElementById( 'gen-b-1c-2b-3c' ); if(typeB24) { typeB24.innerHTML += muta_b_1c_2b_3c; }
		var typeB25 = document.getElementById( 'gen-b-1c-2c-3a' ); if(typeB25) { typeB25.innerHTML += muta_b_1c_2c_3a; }
		var typeB26 = document.getElementById( 'gen-b-1c-2c-3b' ); if(typeB26) { typeB26.innerHTML += muta_b_1c_2c_3b; }
		var typeB27 = document.getElementById( 'gen-b-1c-2c-3c' ); if(typeB27) { typeB27.innerHTML += muta_b_1c_2c_3c; }
		//	
	}
}
finalitems();

// Accions del botó 0 "Rebre les mostres"
document.getElementById('quiz-00-00').addEventListener('click', function clickEvent0000 () {
	document.getElementById('quiz-button').classList.add('opacity-00');
	document.getElementById('quiz-loader').classList.remove('opacity-00');
	document.getElementById('quiz-loader').classList.add('opacity-25');
	const myTimeout = setTimeout( function(){
		document.getElementById('quiz-loader').classList.remove('opacity-25');
		document.getElementById('quiz-loader').classList.add('opacity-00');
		const myTimeout = setTimeout( function(){
			document.getElementById('quiz-section-00').classList.add('active');
			document.getElementById('quiz-section-button').classList.add('hide');
			scroll.update();
			scroll.scrollTo('#section2');
			const myTimeout = setTimeout( function(){
				document.getElementById('quiz-section-00').classList.remove('opacity-00');
			}, 500);
		}, 500);
	}, 1500);
});

// Accions dels botons per la opció "Quin dels dos pacients creus que presentarà més mutacions?"
const buttons = document.getElementById("quiz-00").getElementsByTagName("button");
const buttonPressed = e => {
	// mostra botó seleccionat
	document.getElementById("quiz-00").classList.add('clicked');
	w3.removeClass('#quiz-00 .button','selected');
	w3.removeClass('.quiz-00-result','active');
	const myTimeout = setTimeout( function(){
		document.getElementById(e.target.id).classList.add('selected');
		if ( document.getElementById('quiz-00-01').classList.contains('selected')) {
			document.getElementById("quiz-00-result-01").classList.add('active');
		} else if ( document.getElementById('quiz-00-02').classList.contains('selected')) {
			document.getElementById("quiz-00-result-02").classList.add('active');
		} else if ( document.getElementById('quiz-00-03').classList.contains('selected')) {
			document.getElementById("quiz-00-result-03").classList.add('active');
		}
		document.getElementById("quiz-00-result").classList.remove('quiz-00-01');
		document.getElementById("quiz-00-result").classList.remove('quiz-00-02');
		document.getElementById("quiz-00-result").classList.remove('quiz-00-03');
		document.getElementById("quiz-00-result").classList.add('selected');
		document.getElementById("quiz-00-result").classList.add( e.target.id );
		scroll.scrollTo('#quiz-section-00-01');
	}, 100);
	
	// mostra la suma
	// alert("suma 1 = "+ sumar1(a1value, a2value, a3value) +" i suma 2 = "+ sumar2(b1value, b2value, b3value) );
	
	document.getElementById('quiz-section-01').classList.add('active');
	scroll.update();
}
for (let button of buttons) {
	button.addEventListener("click", buttonPressed);
}

// Accions del botó 1 "Identifica els gens mutats i els canvis a la proteïna"
document.getElementById('quiz-01-01').addEventListener('click', function clickEvent0101 () {
	scroll.scrollTo('#quiz-section-01');
	document.getElementById('quiz-section-01-subtitle').classList.add('opacity-00');
	document.getElementById('quiz-01-01-wrapper').classList.add('scale-00');
	document.getElementById('quiz-secuenciador-00').classList.add('move-right');
	document.getElementById('quiz-secuenciador-01').classList.add('opacity-00');
	document.getElementById('quiz-secuenciador-02').classList.add('scale-00');
	document.getElementById('quiz-secuenciador-03').classList.remove('opacity-00');
	const myTimeout = setTimeout( function(){
		document.getElementById('quiz-01-01-wrapper').classList.add('hide');
		document.getElementById('quiz-01-02-wrapper').classList.remove('hide');
		document.getElementById('quiz-secuenciador-00').classList.remove('opacity-00');
		const myTimeout = setTimeout( function(){
			document.getElementById('quiz-secuenciador-00').classList.add('opacity-00');
			document.getElementById('quiz-secuenciador-01').classList.remove('opacity-00');
			document.getElementById('quiz-secuenciador-01').classList.add('opacity-25');
			document.getElementById('quiz-secuenciador-04').classList.remove('scale-00');
			document.getElementById('quiz-secuenciador-03').classList.add('opacity-00');
			w3.addClass('.gen2','active');
			const myTimeout = setTimeout( function(){
				document.getElementById('quiz-secuenciador-00').classList.add('opacity-00');
				const myTimeout = setTimeout( function(){
					document.getElementById('quiz-secuenciador-00').classList.remove('move-right');
					document.getElementById('quiz-secuenciador-00').classList.add('move-up');
					document.getElementById('quiz-secuenciador').classList.add('opacity-00');
					const myTimeout = setTimeout( function(){
						document.getElementById('quiz-section-01-subtitle').classList.add('analisis-01');
						document.getElementById('quiz-secuenciador').classList.add('hide');
						document.getElementById('quiz-results').classList.remove('hide');
						scroll.update();
						const myTimeout = setTimeout( function(){
							document.getElementById('quiz-section-01-subtitle').classList.remove('opacity-00');
							document.getElementById('quiz-01-02-wrapper').classList.remove('scale-00');
							document.getElementById('quiz-results').classList.remove('opacity-00');
							scroll.scrollTo('#quiz-section-01');
						}, 100);
					}, 500);			
				}, 500);
			}, 1500);
		}, 1500);
	}, 500);
});

// Desfà Accions del botó 1 "Identifica els gens mutats i els canvis a la proteïna" (Tornar enrera)
document.getElementById('quiz-01-02-back').addEventListener('click', function clickEvent0102back () {
	scroll.scrollTo('#quiz-section-01');
	document.getElementById('quiz-section-01-subtitle').classList.remove('opacity-00');
	document.getElementById('quiz-section-01-subtitle').classList.remove('analisis-01');
	document.getElementById('quiz-01-01-wrapper').classList.remove('scale-00');
	document.getElementById('quiz-01-01-wrapper').classList.remove('hide');
	document.getElementById('quiz-secuenciador-00').classList.remove('move-up');
	document.getElementById('quiz-secuenciador-00').classList.add('opacity-00');
	document.getElementById('quiz-secuenciador-01').classList.remove('opacity-25');
	document.getElementById('quiz-secuenciador-02').classList.remove('scale-00');
	document.getElementById('quiz-secuenciador-04').classList.add('scale-00');
	document.getElementById('quiz-01-02-wrapper').classList.add('hide');
	document.getElementById('quiz-01-02-wrapper').classList.add('scale-00');
	//
	document.getElementById('quiz-secuenciador').classList.remove('opacity-00');
	document.getElementById('quiz-secuenciador').classList.remove('hide');
	document.getElementById('quiz-results').classList.add('hide');
	document.getElementById('quiz-results').classList.add('opacity-00');
	//
	w3.removeClass('.gen2','active');
	scroll.update();
});

// Accions del botó 2 "Identifica les mutacions que son impulsores"
document.getElementById('quiz-01-02').addEventListener('click', function clickEvent0102 () {
	scroll.scrollTo('#quiz-section-01');
	document.getElementById('quiz-section-01-subtitle').classList.add('opacity-00');
	document.getElementById('quiz-01-02-wrapper').classList.add('scale-00');
	document.getElementById('quiz-results').classList.add('opacity-00');
	document.getElementById('quiz-computer-02a').classList.add('opacity-00'); //
	document.getElementById('quiz-computer-02b').classList.remove('opacity-00');
	const myTimeout = setTimeout( function(){
		scroll.update();
		document.getElementById('quiz-results').classList.add('hide');
		document.getElementById('quiz-secuenciador').classList.remove('hide');
		document.getElementById('quiz-secuenciador-01').classList.remove('opacity-25');
		document.getElementById('quiz-secuenciador-01').classList.add('opacity-00');
		document.getElementById('quiz-secuenciador-01').classList.add('right-100');
		document.getElementById('quiz-secuenciador-04').classList.remove('opacity-100');
		document.getElementById('quiz-secuenciador-04').classList.add('opacity-00');
		document.getElementById('quiz-computer-01').classList.remove('opacity-00');
		document.getElementById('quiz-computer-01').classList.remove('left-100');
		document.getElementById('quiz-computer-01').classList.add('opacity-100');
		const myTimeout = setTimeout( function(){
			document.getElementById('quiz-secuenciador').classList.remove('opacity-00');
			document.getElementById('quiz-secuenciador-00').classList.remove('opacity-00');
			document.getElementById('quiz-01-02-wrapper').classList.add('hide');
			document.getElementById('quiz-01-03-wrapper').classList.remove('hide');
			w3.addClass('.gen3','active');
			const myTimeout = setTimeout( function(){
				document.getElementById('quiz-secuenciador-00').classList.add('opacity-00');
				const myTimeout = setTimeout( function(){
					const myTimeout = setTimeout( function(){
						document.getElementById('quiz-secuenciador').classList.add('opacity-00');
						const myTimeout = setTimeout( function(){
							document.getElementById('quiz-section-01-subtitle').classList.remove('analisis-01');
							document.getElementById('quiz-section-01-subtitle').classList.add('analisis-02');
							document.getElementById('quiz-secuenciador').classList.add('hide');
							document.getElementById('quiz-results').classList.remove('hide');
							scroll.update();
							const myTimeout = setTimeout( function(){
								document.getElementById('quiz-section-01-subtitle').classList.remove('opacity-00');
								document.getElementById('quiz-01-03-wrapper').classList.remove('scale-00');
								document.getElementById('quiz-results').classList.remove('opacity-00');
								scroll.scrollTo('#quiz-section-01');
							}, 100);
						}, 500);
					}, 500);
				}, 500);
			}, 2000);
			//
		}, 500);
	}, 500);
});

// Desfà Accions del botó 2 "Identifica les mutacions que son impulsores" (Tornar enrera)
document.getElementById('quiz-01-03-back').addEventListener('click', function clickEvent0103back () {
	scroll.scrollTo('#quiz-section-01');
	document.getElementById('quiz-section-01-subtitle').classList.remove('opacity-00');
	document.getElementById('quiz-section-01-subtitle').classList.add('analisis-01');
	document.getElementById('quiz-section-01-subtitle').classList.remove('analisis-02');
	document.getElementById('quiz-01-02-wrapper').classList.remove('hide');
	document.getElementById('quiz-01-02-wrapper').classList.remove('scale-00');
	document.getElementById('quiz-computer-02b').classList.add('opacity-00');
	document.getElementById('quiz-secuenciador-01').classList.add('opacity-25');
	document.getElementById('quiz-secuenciador-01').classList.remove('opacity-00');
	document.getElementById('quiz-secuenciador-01').classList.remove('right-100');
	document.getElementById('quiz-01-03-wrapper').classList.add('scale-00');
	document.getElementById('quiz-01-03-wrapper').classList.add('hide');
	document.getElementById('quiz-secuenciador-04').classList.add('opacity-100');
	document.getElementById('quiz-secuenciador-04').classList.remove('opacity-00');
	document.getElementById('quiz-computer-01').classList.add('left-100');
	document.getElementById('quiz-computer-01').classList.add('opacity-00');
	document.getElementById('quiz-computer-01').classList.remove('opacity-100');
	//
	document.getElementById('quiz-secuenciador').classList.add('opacity-00');
	document.getElementById('quiz-secuenciador').classList.add('hide');
	document.getElementById('quiz-results').classList.remove('hide');
	document.getElementById('quiz-results').classList.remove('opacity-00');
	//
	w3.removeClass('.gen3','active');
	scroll.update();
});

// Accions del botó 3 "Cerca si hi ha teràpia per la mutació"
document.getElementById('quiz-01-03').addEventListener('click', function clickEvent0103 () {
	scroll.scrollTo('#quiz-section-01');
	document.getElementById('quiz-section-01-subtitle').classList.add('opacity-00');
	document.getElementById('quiz-01-03-wrapper').classList.add('scale-00');
	document.getElementById('quiz-results').classList.add('opacity-00');
	document.getElementById('quiz-computer-02b').classList.add('opacity-00');
	document.getElementById('quiz-computer-02c').classList.remove('opacity-00');
	const myTimeout = setTimeout( function(){
		scroll.update();
		document.getElementById('quiz-results').classList.add('hide');
		document.getElementById('quiz-secuenciador').classList.remove('hide');
		const myTimeout = setTimeout( function(){
			document.getElementById('quiz-secuenciador').classList.remove('opacity-00');
			document.getElementById('quiz-secuenciador-00').classList.remove('opacity-00');
			document.getElementById('quiz-01-03-wrapper').classList.add('hide');
			document.getElementById('quiz-01-04-wrapper').classList.remove('hide');
			w3.addClass('.gen4','active');
			const myTimeout = setTimeout( function(){
				document.getElementById('quiz-secuenciador-00').classList.add('opacity-00');
				const myTimeout = setTimeout( function(){
					document.getElementById('quiz-secuenciador').classList.add('opacity-00');
					const myTimeout = setTimeout( function(){
						document.getElementById('quiz-section-01-subtitle').classList.remove('analisis-02');
						document.getElementById('quiz-section-01-subtitle').classList.add('analisis-03');
						const myTimeout = setTimeout( function(){
							document.getElementById('quiz-secuenciador').classList.add('hide');
							document.getElementById('quiz-results').classList.remove('hide');
							scroll.update();
							const myTimeout = setTimeout( function(){
								document.getElementById('quiz-section-01-subtitle').classList.remove('opacity-00');
								document.getElementById('quiz-01-04-wrapper').classList.remove('scale-00');
								document.getElementById('quiz-results').classList.remove('opacity-00');
								scroll.scrollTo('#quiz-section-01');
							}, 100);
						}, 500);
					}, 500);
				}, 500);
			}, 2000);
			//
		}, 500);
	}, 500);
});

// Desfà Accions del botó 3 "Cerca si hi ha teràpia per la mutació" (Tornar enrera)
document.getElementById('quiz-01-04-back').addEventListener('click', function clickEvent0104back () {
	scroll.scrollTo('#quiz-section-01');
	document.getElementById('quiz-section-01-subtitle').classList.remove('opacity-00');
	document.getElementById('quiz-section-01-subtitle').classList.add('analisis-02');
	document.getElementById('quiz-section-01-subtitle').classList.remove('analisis-03');
	document.getElementById('quiz-01-03-wrapper').classList.remove('scale-00');
	document.getElementById('quiz-01-03-wrapper').classList.remove('hide');
	document.getElementById('quiz-01-04-wrapper').classList.add('hide');
	document.getElementById('quiz-01-04-wrapper').classList.add('scale-00');
	document.getElementById('quiz-computer-02b').classList.remove('opacity-00');
	document.getElementById('quiz-computer-02c').classList.add('opacity-00');
	document.getElementById('quiz-secuenciador-00').classList.remove('opacity-00');
	//
	document.getElementById('quiz-secuenciador').classList.add('opacity-00');
	document.getElementById('quiz-secuenciador').classList.add('hide');
	document.getElementById('quiz-results').classList.remove('hide');
	document.getElementById('quiz-results').classList.remove('opacity-00');
	//
	// Oculta aplicatiu "Com funcionen els factors de risc del càncer"
	document.getElementById('quiz-01-04').classList.remove('hide');
	document.getElementById('quiz-section-02').classList.remove('active');
	// Neteja totes les accions de l'aplicatiu "Com funcionen els factors de risc del càncer"
	actualitzaVar();
	//
	w3.removeClass('.sample-selection','active');
	w3.removeClass('#slide-0','go-right');
	w3.addClass('#slide-0','active');
	//
	w3.removeClass('.gen4','active');
	scroll.update();
});

// Accions del botó 4 "Com funcionen els factors de risc del càncer"
document.getElementById('quiz-01-04').addEventListener('click', function clickEvent0104 () {
	document.getElementById('quiz-01-04').classList.add('hide');
	document.getElementById('quiz-section-02').classList.add('active');
	scroll.update();
	scroll.scrollTo('#quiz-section-02');
	const myTimeout = setTimeout( function(){
		document.getElementById('quiz-01-05-wrapper').classList.remove('hide');
		const myTimeout = setTimeout( function(){				
		}, 500);
	}, 500);
});

// Veure accions dels botons de l'slider "Com funcionen els factors de risc del càncer" al document "analysis-slider.js"

/* 
// Test slider
	document.getElementById('quiz-01-04').classList.add('hide');
	document.getElementById('quiz-section-02').classList.add('active');
	scroll.update();
	scroll.scrollTo('#quiz-section-02');
*/