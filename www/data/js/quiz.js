// variables aleatòries
function random_types(types) { return types[Math.floor(Math.random()*types.length)]; }
var types = ['a', 'b']; // variables pel tipus de mostra: skin / lung
function random_item1(items1) { return items1[Math.floor(Math.random()*items1.length)]; }
var items1 = ['1a', '1b', '1c']; // variables pel factor: edat
function random_item2(items2) { return items2[Math.floor(Math.random()*items2.length)]; }
var items2 = ['2a', '2b', '2c']; // variables pel factor: exposició al sol / fumador
function random_item3(items3) { return items3[Math.floor(Math.random()*items3.length)]; }
var items3 = ['3a', '3b', '3c']; // variables pel factor: protecció solar / fumador passiu
function random_item4(items4) { return items4[Math.floor(Math.random()*items4.length)]; }
var items4 = ['4a', '4b', '4c', '4d', '4e', '4f', '4g', '4h', '4i', '4j']; // variable adicional per randomitzar mostra
// variables per les mostres dels dos pacients
var a1value, a2value, a3value, a4value, b1value, b2value, b3value, b4value, resultado1, resultado2;
function sumar1(sumA1, sumA2, sumA3, sumA4) { resultado1 = sumA1 + sumA2 + sumA3 + sumA4; return resultado1; }
function sumar2(sumB1, sumB2, sumB3, sumA4) { resultado2 = sumB1 + sumB2 + sumB3 + sumA4; return resultado2; }

// funció que genera les dues mostres dels pacients a partir de les variables aleatòries
function finalitems(type) {

	var finaltype = "type-" + type;
	var finalgene = "gen-" + type;
	var finalmuta = "muta_" + type;
	var finalgeneType = "gen-type-" + type;

	var randomItemA1 = random_item1(items1);
	var randomItemA2 = random_item2(items2);
	var randomItemA3 = random_item3(items3);
	var randomItemA4 = random_item4(items4);
	var randomItemB1 = random_item1(items1);
	var randomItemB2 = random_item2(items2);
	var randomItemB3 = random_item3(items3);
	var randomItemB4 = random_item4(items4);
	var finalitem1 = finaltype + '-' + randomItemA1 + '-' + randomItemA2 + '-' + randomItemA3 + '-' + randomItemA4;
	var finalitem2 = finaltype + '-' + randomItemB1 + '-' + randomItemB2 + '-' + randomItemB3 + '-' + randomItemB4;
	var finalgene1 = finalgene + '-' + randomItemA1 + '-' + randomItemA2 + '-' + randomItemA3 + '-' + randomItemA4;
	var finalgene2 = finalgene + '-' + randomItemB1 + '-' + randomItemB2 + '-' + randomItemB3 + '-' + randomItemB4;

	// Avoid getting same samples
	if ( finalitem1 == finalitem2 ) {
		finalitems(type);
	} else {
		document.getElementById("sample-types-wrapper").innerHTML += "<ul class='type "+ finaltype +" active user1' id='"+ finalitem1 +"'><li class='sample'></li><li class='sample-"+ randomItemA1 +"'></li><li class='sample-"+ randomItemA2 +"'></li><li class='sample-"+ randomItemA3 +"'></li></ul><ul class='type "+ finaltype +" active user2' id='"+ finalitem2 +"'><li class='sample'></li><li class='sample-"+ randomItemB1 +"'></li><li class='sample-"+ randomItemB2 +"'></li><li class='sample-"+ randomItemB3 +"'></li></ul>";
		// assigna values a la variable de la suma
		if ( randomItemA1 === '1a' ) { a1value=1; } else if ( randomItemA1 === '1b' ) { a1value=2; } else if ( randomItemA1 === '1c' ) { a1value=3; }
		if ( randomItemA2 === '2a' ) { a2value=1; } else if ( randomItemA2 === '2b' ) { a2value=2; } else if ( randomItemA2 === '2c' ) { a2value=3; }
		if ( randomItemA3 === '3a' ) { a3value=1; } else if ( randomItemA3 === '3b' ) { a3value=2; } else if ( randomItemA3 === '3c' ) { a3value=3; }
		if ( randomItemA4 === '4a' ) { a4value=1; } else if ( randomItemA4 === '4b' ) { a4value=2; } else if ( randomItemA4 === '4c' ) { a4value=3; } else if ( randomItemA4 === '4d' ) { a4value=4; } else if ( randomItemA4 === '4e' ) { a4value=5; } else if ( randomItemA4 === '4f' ) { a4value=6; } else if ( randomItemA4 === '4g' ) { a4value=7; } else if ( randomItemA4 === '4h' ) { a4value=8; } else if ( randomItemA4 === '4i' ) { a4value=9; } else if ( randomItemA4 === '4j' ) { a4value=10; }

		if ( randomItemB1 === '1a' ) { b1value=1; } else if ( randomItemB1 === '1b' ) { b1value=2; } else if ( randomItemB1 === '1c' ) { b1value=3; }
		if ( randomItemB2 === '2a' ) { b2value=1; } else if ( randomItemB2 === '2b' ) { b2value=2; } else if ( randomItemB2 === '2c' ) { b2value=3; }
		if ( randomItemB3 === '3a' ) { b3value=1; } else if ( randomItemB3 === '3b' ) { b3value=2; } else if ( randomItemB3 === '3c' ) { b3value=3; }
		if ( randomItemB4 === '4a' ) { b4value=1; } else if ( randomItemB4 === '4b' ) { b4value=2; } else if ( randomItemB4 === '4c' ) { b4value=3; } else if ( randomItemB4 === '4d' ) { b4value=4; } else if ( randomItemB4 === '4e' ) { b4value=5; } else if ( randomItemB4 === '4f' ) { b4value=6; } else if ( randomItemB4 === '4g' ) { b4value=7; } else if ( randomItemB4 === '4h' ) { b4value=8; } else if ( randomItemB4 === '4i' ) { b4value=9; } else if ( randomItemB4 === '4j' ) { b4value=10; }
		
		// assigna gene type
		w3.addClass('.gen-sample-1, .gen-sample-2', finalgeneType);
		// assigna mutacions
		document.getElementsByClassName("gen-sample-1")[0].id=finalgene1;
		document.getElementsByClassName("gen-sample-2")[0].id=finalgene2;
		// Comproba si a l'html hi existeix l'ID associat a la mutació i, si es així, agafa el contingut per cada ID de l'arxiu "gens.js" i el mostra al llistat de mutacions de cada mostra
		//skin
		var typeA001 = document.getElementById( 'gen-a-1a-2a-3a-4a' ); if(typeA001) { typeA001.innerHTML += muta_a_1a_2a_3a_4a; }
		var typeA002 = document.getElementById( 'gen-a-1a-2a-3a-4b' ); if(typeA002) { typeA002.innerHTML += muta_a_1a_2a_3a_4b; }
		var typeA003 = document.getElementById( 'gen-a-1a-2a-3a-4c' ); if(typeA003) { typeA003.innerHTML += muta_a_1a_2a_3a_4c; }
		var typeA004 = document.getElementById( 'gen-a-1a-2a-3a-4d' ); if(typeA004) { typeA004.innerHTML += muta_a_1a_2a_3a_4d; }
		var typeA005 = document.getElementById( 'gen-a-1a-2a-3a-4e' ); if(typeA005) { typeA005.innerHTML += muta_a_1a_2a_3a_4e; }
		var typeA006 = document.getElementById( 'gen-a-1a-2a-3a-4f' ); if(typeA006) { typeA006.innerHTML += muta_a_1a_2a_3a_4f; }
		var typeA007 = document.getElementById( 'gen-a-1a-2a-3a-4g' ); if(typeA007) { typeA007.innerHTML += muta_a_1a_2a_3a_4g; }
		var typeA008 = document.getElementById( 'gen-a-1a-2a-3a-4h' ); if(typeA008) { typeA008.innerHTML += muta_a_1a_2a_3a_4h; }
		var typeA009 = document.getElementById( 'gen-a-1a-2a-3a-4i' ); if(typeA009) { typeA009.innerHTML += muta_a_1a_2a_3a_4i; }
		var typeA010 = document.getElementById( 'gen-a-1a-2a-3a-4j' ); if(typeA010) { typeA010.innerHTML += muta_a_1a_2a_3a_4j; }
		var typeA011 = document.getElementById( 'gen-a-1a-2a-3b-4a' ); if(typeA011) { typeA011.innerHTML += muta_a_1a_2a_3b_4a; }
		var typeA012 = document.getElementById( 'gen-a-1a-2a-3b-4b' ); if(typeA012) { typeA012.innerHTML += muta_a_1a_2a_3b_4b; }
		var typeA013 = document.getElementById( 'gen-a-1a-2a-3b-4c' ); if(typeA013) { typeA013.innerHTML += muta_a_1a_2a_3b_4c; }
		var typeA014 = document.getElementById( 'gen-a-1a-2a-3b-4d' ); if(typeA014) { typeA014.innerHTML += muta_a_1a_2a_3b_4d; }
		var typeA015 = document.getElementById( 'gen-a-1a-2a-3b-4e' ); if(typeA015) { typeA015.innerHTML += muta_a_1a_2a_3b_4e; }
		var typeA016 = document.getElementById( 'gen-a-1a-2a-3b-4f' ); if(typeA016) { typeA016.innerHTML += muta_a_1a_2a_3b_4f; }
		var typeA017 = document.getElementById( 'gen-a-1a-2a-3b-4g' ); if(typeA017) { typeA017.innerHTML += muta_a_1a_2a_3b_4g; }
		var typeA018 = document.getElementById( 'gen-a-1a-2a-3b-4h' ); if(typeA018) { typeA018.innerHTML += muta_a_1a_2a_3b_4h; }
		var typeA019 = document.getElementById( 'gen-a-1a-2a-3b-4i' ); if(typeA019) { typeA019.innerHTML += muta_a_1a_2a_3b_4i; }
		var typeA020 = document.getElementById( 'gen-a-1a-2a-3b-4j' ); if(typeA020) { typeA020.innerHTML += muta_a_1a_2a_3b_4j; }
		var typeA021 = document.getElementById( 'gen-a-1a-2a-3c-4a' ); if(typeA021) { typeA021.innerHTML += muta_a_1a_2a_3c_4a; }
		var typeA022 = document.getElementById( 'gen-a-1a-2a-3c-4b' ); if(typeA022) { typeA022.innerHTML += muta_a_1a_2a_3c_4b; }
		var typeA023 = document.getElementById( 'gen-a-1a-2a-3c-4c' ); if(typeA023) { typeA023.innerHTML += muta_a_1a_2a_3c_4c; }
		var typeA024 = document.getElementById( 'gen-a-1a-2a-3c-4d' ); if(typeA024) { typeA024.innerHTML += muta_a_1a_2a_3c_4d; }
		var typeA025 = document.getElementById( 'gen-a-1a-2a-3c-4e' ); if(typeA025) { typeA025.innerHTML += muta_a_1a_2a_3c_4e; }
		var typeA026 = document.getElementById( 'gen-a-1a-2a-3c-4f' ); if(typeA026) { typeA026.innerHTML += muta_a_1a_2a_3c_4f; }
		var typeA027 = document.getElementById( 'gen-a-1a-2a-3c-4g' ); if(typeA027) { typeA027.innerHTML += muta_a_1a_2a_3c_4g; }
		var typeA028 = document.getElementById( 'gen-a-1a-2a-3c-4h' ); if(typeA028) { typeA028.innerHTML += muta_a_1a_2a_3c_4h; }
		var typeA029 = document.getElementById( 'gen-a-1a-2a-3c-4i' ); if(typeA029) { typeA029.innerHTML += muta_a_1a_2a_3c_4i; }
		var typeA030 = document.getElementById( 'gen-a-1a-2a-3c-4j' ); if(typeA030) { typeA030.innerHTML += muta_a_1a_2a_3c_4j; }
		var typeA031 = document.getElementById( 'gen-a-1a-2b-3a-4a' ); if(typeA031) { typeA031.innerHTML += muta_a_1a_2b_3a_4a; }
		var typeA032 = document.getElementById( 'gen-a-1a-2b-3a-4b' ); if(typeA032) { typeA032.innerHTML += muta_a_1a_2b_3a_4b; }
		var typeA033 = document.getElementById( 'gen-a-1a-2b-3a-4c' ); if(typeA033) { typeA033.innerHTML += muta_a_1a_2b_3a_4c; }
		var typeA034 = document.getElementById( 'gen-a-1a-2b-3a-4d' ); if(typeA034) { typeA034.innerHTML += muta_a_1a_2b_3a_4d; }
		var typeA035 = document.getElementById( 'gen-a-1a-2b-3a-4e' ); if(typeA035) { typeA035.innerHTML += muta_a_1a_2b_3a_4e; }
		var typeA036 = document.getElementById( 'gen-a-1a-2b-3a-4f' ); if(typeA036) { typeA036.innerHTML += muta_a_1a_2b_3a_4f; }
		var typeA037 = document.getElementById( 'gen-a-1a-2b-3a-4g' ); if(typeA037) { typeA037.innerHTML += muta_a_1a_2b_3a_4g; }
		var typeA038 = document.getElementById( 'gen-a-1a-2b-3a-4h' ); if(typeA038) { typeA038.innerHTML += muta_a_1a_2b_3a_4h; }
		var typeA039 = document.getElementById( 'gen-a-1a-2b-3a-4i' ); if(typeA039) { typeA039.innerHTML += muta_a_1a_2b_3a_4i; }
		var typeA040 = document.getElementById( 'gen-a-1a-2b-3a-4j' ); if(typeA040) { typeA040.innerHTML += muta_a_1a_2b_3a_4j; }
		var typeA041 = document.getElementById( 'gen-a-1a-2b-3b-4a' ); if(typeA041) { typeA041.innerHTML += muta_a_1a_2b_3b_4a; }
		var typeA042 = document.getElementById( 'gen-a-1a-2b-3b-4b' ); if(typeA042) { typeA042.innerHTML += muta_a_1a_2b_3b_4b; }
		var typeA043 = document.getElementById( 'gen-a-1a-2b-3b-4c' ); if(typeA043) { typeA043.innerHTML += muta_a_1a_2b_3b_4c; }
		var typeA044 = document.getElementById( 'gen-a-1a-2b-3b-4d' ); if(typeA044) { typeA044.innerHTML += muta_a_1a_2b_3b_4d; }
		var typeA045 = document.getElementById( 'gen-a-1a-2b-3b-4e' ); if(typeA045) { typeA045.innerHTML += muta_a_1a_2b_3b_4e; }
		var typeA046 = document.getElementById( 'gen-a-1a-2b-3b-4f' ); if(typeA046) { typeA046.innerHTML += muta_a_1a_2b_3b_4f; }
		var typeA047 = document.getElementById( 'gen-a-1a-2b-3b-4g' ); if(typeA047) { typeA047.innerHTML += muta_a_1a_2b_3b_4g; }
		var typeA048 = document.getElementById( 'gen-a-1a-2b-3b-4h' ); if(typeA048) { typeA048.innerHTML += muta_a_1a_2b_3b_4h; }
		var typeA049 = document.getElementById( 'gen-a-1a-2b-3b-4i' ); if(typeA049) { typeA049.innerHTML += muta_a_1a_2b_3b_4i; }
		var typeA050 = document.getElementById( 'gen-a-1a-2b-3b-4j' ); if(typeA050) { typeA050.innerHTML += muta_a_1a_2b_3b_4j; }
		var typeA051 = document.getElementById( 'gen-a-1a-2b-3c-4a' ); if(typeA051) { typeA051.innerHTML += muta_a_1a_2b_3c_4a; }
		var typeA052 = document.getElementById( 'gen-a-1a-2b-3c-4b' ); if(typeA052) { typeA052.innerHTML += muta_a_1a_2b_3c_4b; }
		var typeA053 = document.getElementById( 'gen-a-1a-2b-3c-4c' ); if(typeA053) { typeA053.innerHTML += muta_a_1a_2b_3c_4c; }
		var typeA054 = document.getElementById( 'gen-a-1a-2b-3c-4d' ); if(typeA054) { typeA054.innerHTML += muta_a_1a_2b_3c_4d; }
		var typeA055 = document.getElementById( 'gen-a-1a-2b-3c-4e' ); if(typeA055) { typeA055.innerHTML += muta_a_1a_2b_3c_4e; }
		var typeA056 = document.getElementById( 'gen-a-1a-2b-3c-4f' ); if(typeA056) { typeA056.innerHTML += muta_a_1a_2b_3c_4f; }
		var typeA057 = document.getElementById( 'gen-a-1a-2b-3c-4g' ); if(typeA057) { typeA057.innerHTML += muta_a_1a_2b_3c_4g; }
		var typeA058 = document.getElementById( 'gen-a-1a-2b-3c-4h' ); if(typeA058) { typeA058.innerHTML += muta_a_1a_2b_3c_4h; }
		var typeA059 = document.getElementById( 'gen-a-1a-2b-3c-4i' ); if(typeA059) { typeA059.innerHTML += muta_a_1a_2b_3c_4i; }
		var typeA060 = document.getElementById( 'gen-a-1a-2b-3c-4j' ); if(typeA060) { typeA060.innerHTML += muta_a_1a_2b_3c_4j; }
		var typeA061 = document.getElementById( 'gen-a-1a-2c-3a-4a' ); if(typeA061) { typeA061.innerHTML += muta_a_1a_2c_3a_4a; }
		var typeA062 = document.getElementById( 'gen-a-1a-2c-3a-4b' ); if(typeA062) { typeA062.innerHTML += muta_a_1a_2c_3a_4b; }
		var typeA063 = document.getElementById( 'gen-a-1a-2c-3a-4c' ); if(typeA063) { typeA063.innerHTML += muta_a_1a_2c_3a_4c; }
		var typeA064 = document.getElementById( 'gen-a-1a-2c-3a-4d' ); if(typeA064) { typeA064.innerHTML += muta_a_1a_2c_3a_4d; }
		var typeA065 = document.getElementById( 'gen-a-1a-2c-3a-4e' ); if(typeA065) { typeA065.innerHTML += muta_a_1a_2c_3a_4e; }
		var typeA066 = document.getElementById( 'gen-a-1a-2c-3a-4f' ); if(typeA066) { typeA066.innerHTML += muta_a_1a_2c_3a_4f; }
		var typeA067 = document.getElementById( 'gen-a-1a-2c-3a-4g' ); if(typeA067) { typeA067.innerHTML += muta_a_1a_2c_3a_4g; }
		var typeA068 = document.getElementById( 'gen-a-1a-2c-3a-4h' ); if(typeA068) { typeA068.innerHTML += muta_a_1a_2c_3a_4h; }
		var typeA069 = document.getElementById( 'gen-a-1a-2c-3a-4i' ); if(typeA069) { typeA069.innerHTML += muta_a_1a_2c_3a_4i; }
		var typeA070 = document.getElementById( 'gen-a-1a-2c-3a-4j' ); if(typeA070) { typeA070.innerHTML += muta_a_1a_2c_3a_4j; }
		var typeA071 = document.getElementById( 'gen-a-1a-2c-3b-4a' ); if(typeA071) { typeA071.innerHTML += muta_a_1a_2c_3b_4a; }
		var typeA072 = document.getElementById( 'gen-a-1a-2c-3b-4b' ); if(typeA072) { typeA072.innerHTML += muta_a_1a_2c_3b_4b; }
		var typeA073 = document.getElementById( 'gen-a-1a-2c-3b-4c' ); if(typeA073) { typeA073.innerHTML += muta_a_1a_2c_3b_4c; }
		var typeA074 = document.getElementById( 'gen-a-1a-2c-3b-4d' ); if(typeA074) { typeA074.innerHTML += muta_a_1a_2c_3b_4d; }
		var typeA075 = document.getElementById( 'gen-a-1a-2c-3b-4e' ); if(typeA075) { typeA075.innerHTML += muta_a_1a_2c_3b_4e; }
		var typeA076 = document.getElementById( 'gen-a-1a-2c-3b-4f' ); if(typeA076) { typeA076.innerHTML += muta_a_1a_2c_3b_4f; }
		var typeA077 = document.getElementById( 'gen-a-1a-2c-3b-4g' ); if(typeA077) { typeA077.innerHTML += muta_a_1a_2c_3b_4g; }
		var typeA078 = document.getElementById( 'gen-a-1a-2c-3b-4h' ); if(typeA078) { typeA078.innerHTML += muta_a_1a_2c_3b_4h; }
		var typeA079 = document.getElementById( 'gen-a-1a-2c-3b-4i' ); if(typeA079) { typeA079.innerHTML += muta_a_1a_2c_3b_4i; }
		var typeA080 = document.getElementById( 'gen-a-1a-2c-3b-4j' ); if(typeA080) { typeA080.innerHTML += muta_a_1a_2c_3b_4j; }
		var typeA081 = document.getElementById( 'gen-a-1a-2c-3c-4a' ); if(typeA081) { typeA081.innerHTML += muta_a_1a_2c_3c_4a; }
		var typeA082 = document.getElementById( 'gen-a-1a-2c-3c-4b' ); if(typeA082) { typeA082.innerHTML += muta_a_1a_2c_3c_4b; }
		var typeA083 = document.getElementById( 'gen-a-1a-2c-3c-4c' ); if(typeA083) { typeA083.innerHTML += muta_a_1a_2c_3c_4c; }
		var typeA084 = document.getElementById( 'gen-a-1a-2c-3c-4d' ); if(typeA084) { typeA084.innerHTML += muta_a_1a_2c_3c_4d; }
		var typeA085 = document.getElementById( 'gen-a-1a-2c-3c-4e' ); if(typeA085) { typeA085.innerHTML += muta_a_1a_2c_3c_4e; }
		var typeA086 = document.getElementById( 'gen-a-1a-2c-3c-4f' ); if(typeA086) { typeA086.innerHTML += muta_a_1a_2c_3c_4f; }
		var typeA087 = document.getElementById( 'gen-a-1a-2c-3c-4g' ); if(typeA087) { typeA087.innerHTML += muta_a_1a_2c_3c_4g; }
		var typeA088 = document.getElementById( 'gen-a-1a-2c-3c-4h' ); if(typeA088) { typeA088.innerHTML += muta_a_1a_2c_3c_4h; }
		var typeA089 = document.getElementById( 'gen-a-1a-2c-3c-4i' ); if(typeA089) { typeA089.innerHTML += muta_a_1a_2c_3c_4i; }
		var typeA090 = document.getElementById( 'gen-a-1a-2c-3c-4j' ); if(typeA090) { typeA090.innerHTML += muta_a_1a_2c_3c_4j; }
		var typeA091 = document.getElementById( 'gen-a-1b-2a-3a-4a' ); if(typeA091) { typeA091.innerHTML += muta_a_1b_2a_3a_4a; }
		var typeA092 = document.getElementById( 'gen-a-1b-2a-3a-4b' ); if(typeA092) { typeA092.innerHTML += muta_a_1b_2a_3a_4b; }
		var typeA093 = document.getElementById( 'gen-a-1b-2a-3a-4c' ); if(typeA093) { typeA093.innerHTML += muta_a_1b_2a_3a_4c; }
		var typeA094 = document.getElementById( 'gen-a-1b-2a-3a-4d' ); if(typeA094) { typeA094.innerHTML += muta_a_1b_2a_3a_4d; }
		var typeA095 = document.getElementById( 'gen-a-1b-2a-3a-4e' ); if(typeA095) { typeA095.innerHTML += muta_a_1b_2a_3a_4e; }
		var typeA096 = document.getElementById( 'gen-a-1b-2a-3a-4f' ); if(typeA096) { typeA096.innerHTML += muta_a_1b_2a_3a_4f; }
		var typeA097 = document.getElementById( 'gen-a-1b-2a-3a-4g' ); if(typeA097) { typeA097.innerHTML += muta_a_1b_2a_3a_4g; }
		var typeA098 = document.getElementById( 'gen-a-1b-2a-3a-4h' ); if(typeA098) { typeA098.innerHTML += muta_a_1b_2a_3a_4h; }
		var typeA099 = document.getElementById( 'gen-a-1b-2a-3a-4i' ); if(typeA099) { typeA099.innerHTML += muta_a_1b_2a_3a_4i; }
		var typeA100 = document.getElementById( 'gen-a-1b-2a-3a-4j' ); if(typeA100) { typeA100.innerHTML += muta_a_1b_2a_3a_4j; }
		var typeA101 = document.getElementById( 'gen-a-1b-2a-3b-4a' ); if(typeA101) { typeA101.innerHTML += muta_a_1b_2a_3b_4a; }
		var typeA102 = document.getElementById( 'gen-a-1b-2a-3b-4b' ); if(typeA102) { typeA102.innerHTML += muta_a_1b_2a_3b_4b; }
		var typeA103 = document.getElementById( 'gen-a-1b-2a-3b-4c' ); if(typeA103) { typeA103.innerHTML += muta_a_1b_2a_3b_4c; }
		var typeA104 = document.getElementById( 'gen-a-1b-2a-3b-4d' ); if(typeA104) { typeA104.innerHTML += muta_a_1b_2a_3b_4d; }
		var typeA105 = document.getElementById( 'gen-a-1b-2a-3b-4e' ); if(typeA105) { typeA105.innerHTML += muta_a_1b_2a_3b_4e; }
		var typeA106 = document.getElementById( 'gen-a-1b-2a-3b-4f' ); if(typeA106) { typeA106.innerHTML += muta_a_1b_2a_3b_4f; }
		var typeA107 = document.getElementById( 'gen-a-1b-2a-3b-4g' ); if(typeA107) { typeA107.innerHTML += muta_a_1b_2a_3b_4g; }
		var typeA108 = document.getElementById( 'gen-a-1b-2a-3b-4h' ); if(typeA108) { typeA108.innerHTML += muta_a_1b_2a_3b_4h; }
		var typeA109 = document.getElementById( 'gen-a-1b-2a-3b-4i' ); if(typeA109) { typeA109.innerHTML += muta_a_1b_2a_3b_4i; }
		var typeA110 = document.getElementById( 'gen-a-1b-2a-3b-4j' ); if(typeA110) { typeA110.innerHTML += muta_a_1b_2a_3b_4j; }
		var typeA111 = document.getElementById( 'gen-a-1b-2a-3c-4a' ); if(typeA111) { typeA111.innerHTML += muta_a_1b_2a_3c_4a; }
		var typeA112 = document.getElementById( 'gen-a-1b-2a-3c-4b' ); if(typeA112) { typeA112.innerHTML += muta_a_1b_2a_3c_4b; }
		var typeA113 = document.getElementById( 'gen-a-1b-2a-3c-4c' ); if(typeA113) { typeA113.innerHTML += muta_a_1b_2a_3c_4c; }
		var typeA114 = document.getElementById( 'gen-a-1b-2a-3c-4d' ); if(typeA114) { typeA114.innerHTML += muta_a_1b_2a_3c_4d; }
		var typeA115 = document.getElementById( 'gen-a-1b-2a-3c-4e' ); if(typeA115) { typeA115.innerHTML += muta_a_1b_2a_3c_4e; }
		var typeA116 = document.getElementById( 'gen-a-1b-2a-3c-4f' ); if(typeA116) { typeA116.innerHTML += muta_a_1b_2a_3c_4f; }
		var typeA117 = document.getElementById( 'gen-a-1b-2a-3c-4g' ); if(typeA117) { typeA117.innerHTML += muta_a_1b_2a_3c_4g; }
		var typeA118 = document.getElementById( 'gen-a-1b-2a-3c-4h' ); if(typeA118) { typeA118.innerHTML += muta_a_1b_2a_3c_4h; }
		var typeA119 = document.getElementById( 'gen-a-1b-2a-3c-4i' ); if(typeA119) { typeA119.innerHTML += muta_a_1b_2a_3c_4i; }
		var typeA120 = document.getElementById( 'gen-a-1b-2a-3c-4j' ); if(typeA120) { typeA120.innerHTML += muta_a_1b_2a_3c_4j; }
		var typeA121 = document.getElementById( 'gen-a-1b-2b-3a-4a' ); if(typeA121) { typeA121.innerHTML += muta_a_1b_2b_3a_4a; }
		var typeA122 = document.getElementById( 'gen-a-1b-2b-3a-4b' ); if(typeA122) { typeA122.innerHTML += muta_a_1b_2b_3a_4b; }
		var typeA123 = document.getElementById( 'gen-a-1b-2b-3a-4c' ); if(typeA123) { typeA123.innerHTML += muta_a_1b_2b_3a_4c; }
		var typeA124 = document.getElementById( 'gen-a-1b-2b-3a-4d' ); if(typeA124) { typeA124.innerHTML += muta_a_1b_2b_3a_4d; }
		var typeA125 = document.getElementById( 'gen-a-1b-2b-3a-4e' ); if(typeA125) { typeA125.innerHTML += muta_a_1b_2b_3a_4e; }
		var typeA126 = document.getElementById( 'gen-a-1b-2b-3a-4f' ); if(typeA126) { typeA126.innerHTML += muta_a_1b_2b_3a_4f; }
		var typeA127 = document.getElementById( 'gen-a-1b-2b-3a-4g' ); if(typeA127) { typeA127.innerHTML += muta_a_1b_2b_3a_4g; }
		var typeA128 = document.getElementById( 'gen-a-1b-2b-3a-4h' ); if(typeA128) { typeA128.innerHTML += muta_a_1b_2b_3a_4h; }
		var typeA129 = document.getElementById( 'gen-a-1b-2b-3a-4i' ); if(typeA129) { typeA129.innerHTML += muta_a_1b_2b_3a_4i; }
		var typeA130 = document.getElementById( 'gen-a-1b-2b-3a-4j' ); if(typeA130) { typeA130.innerHTML += muta_a_1b_2b_3a_4j; }
		var typeA131 = document.getElementById( 'gen-a-1b-2b-3b-4a' ); if(typeA131) { typeA131.innerHTML += muta_a_1b_2b_3b_4a; }
		var typeA132 = document.getElementById( 'gen-a-1b-2b-3b-4b' ); if(typeA132) { typeA132.innerHTML += muta_a_1b_2b_3b_4b; }
		var typeA133 = document.getElementById( 'gen-a-1b-2b-3b-4c' ); if(typeA133) { typeA133.innerHTML += muta_a_1b_2b_3b_4c; }
		var typeA134 = document.getElementById( 'gen-a-1b-2b-3b-4d' ); if(typeA134) { typeA134.innerHTML += muta_a_1b_2b_3b_4d; }
		var typeA135 = document.getElementById( 'gen-a-1b-2b-3b-4e' ); if(typeA135) { typeA135.innerHTML += muta_a_1b_2b_3b_4e; }
		var typeA136 = document.getElementById( 'gen-a-1b-2b-3b-4f' ); if(typeA136) { typeA136.innerHTML += muta_a_1b_2b_3b_4f; }
		var typeA137 = document.getElementById( 'gen-a-1b-2b-3b-4g' ); if(typeA137) { typeA137.innerHTML += muta_a_1b_2b_3b_4g; }
		var typeA138 = document.getElementById( 'gen-a-1b-2b-3b-4h' ); if(typeA138) { typeA138.innerHTML += muta_a_1b_2b_3b_4h; }
		var typeA139 = document.getElementById( 'gen-a-1b-2b-3b-4i' ); if(typeA139) { typeA139.innerHTML += muta_a_1b_2b_3b_4i; }
		var typeA140 = document.getElementById( 'gen-a-1b-2b-3b-4j' ); if(typeA140) { typeA140.innerHTML += muta_a_1b_2b_3b_4j; }
		var typeA141 = document.getElementById( 'gen-a-1b-2b-3c-4a' ); if(typeA141) { typeA141.innerHTML += muta_a_1b_2b_3c_4a; }
		var typeA142 = document.getElementById( 'gen-a-1b-2b-3c-4b' ); if(typeA142) { typeA142.innerHTML += muta_a_1b_2b_3c_4b; }
		var typeA143 = document.getElementById( 'gen-a-1b-2b-3c-4c' ); if(typeA143) { typeA143.innerHTML += muta_a_1b_2b_3c_4c; }
		var typeA144 = document.getElementById( 'gen-a-1b-2b-3c-4d' ); if(typeA144) { typeA144.innerHTML += muta_a_1b_2b_3c_4d; }
		var typeA145 = document.getElementById( 'gen-a-1b-2b-3c-4e' ); if(typeA145) { typeA145.innerHTML += muta_a_1b_2b_3c_4e; }
		var typeA146 = document.getElementById( 'gen-a-1b-2b-3c-4f' ); if(typeA146) { typeA146.innerHTML += muta_a_1b_2b_3c_4f; }
		var typeA147 = document.getElementById( 'gen-a-1b-2b-3c-4g' ); if(typeA147) { typeA147.innerHTML += muta_a_1b_2b_3c_4g; }
		var typeA148 = document.getElementById( 'gen-a-1b-2b-3c-4h' ); if(typeA148) { typeA148.innerHTML += muta_a_1b_2b_3c_4h; }
		var typeA149 = document.getElementById( 'gen-a-1b-2b-3c-4i' ); if(typeA149) { typeA149.innerHTML += muta_a_1b_2b_3c_4i; }
		var typeA150 = document.getElementById( 'gen-a-1b-2b-3c-4j' ); if(typeA150) { typeA150.innerHTML += muta_a_1b_2b_3c_4j; }
		var typeA151 = document.getElementById( 'gen-a-1b-2c-3a-4a' ); if(typeA151) { typeA151.innerHTML += muta_a_1b_2c_3a_4a; }
		var typeA152 = document.getElementById( 'gen-a-1b-2c-3a-4b' ); if(typeA152) { typeA152.innerHTML += muta_a_1b_2c_3a_4b; }
		var typeA153 = document.getElementById( 'gen-a-1b-2c-3a-4c' ); if(typeA153) { typeA153.innerHTML += muta_a_1b_2c_3a_4c; }
		var typeA154 = document.getElementById( 'gen-a-1b-2c-3a-4d' ); if(typeA154) { typeA154.innerHTML += muta_a_1b_2c_3a_4d; }
		var typeA155 = document.getElementById( 'gen-a-1b-2c-3a-4e' ); if(typeA155) { typeA155.innerHTML += muta_a_1b_2c_3a_4e; }
		var typeA156 = document.getElementById( 'gen-a-1b-2c-3a-4f' ); if(typeA156) { typeA156.innerHTML += muta_a_1b_2c_3a_4f; }
		var typeA157 = document.getElementById( 'gen-a-1b-2c-3a-4g' ); if(typeA157) { typeA157.innerHTML += muta_a_1b_2c_3a_4g; }
		var typeA158 = document.getElementById( 'gen-a-1b-2c-3a-4h' ); if(typeA158) { typeA158.innerHTML += muta_a_1b_2c_3a_4h; }
		var typeA159 = document.getElementById( 'gen-a-1b-2c-3a-4i' ); if(typeA159) { typeA159.innerHTML += muta_a_1b_2c_3a_4i; }
		var typeA160 = document.getElementById( 'gen-a-1b-2c-3a-4j' ); if(typeA160) { typeA160.innerHTML += muta_a_1b_2c_3a_4j; }
		var typeA161 = document.getElementById( 'gen-a-1b-2c-3b-4a' ); if(typeA161) { typeA161.innerHTML += muta_a_1b_2c_3b_4a; }
		var typeA162 = document.getElementById( 'gen-a-1b-2c-3b-4b' ); if(typeA162) { typeA162.innerHTML += muta_a_1b_2c_3b_4b; }
		var typeA163 = document.getElementById( 'gen-a-1b-2c-3b-4c' ); if(typeA163) { typeA163.innerHTML += muta_a_1b_2c_3b_4c; }
		var typeA164 = document.getElementById( 'gen-a-1b-2c-3b-4d' ); if(typeA164) { typeA164.innerHTML += muta_a_1b_2c_3b_4d; }
		var typeA165 = document.getElementById( 'gen-a-1b-2c-3b-4e' ); if(typeA165) { typeA165.innerHTML += muta_a_1b_2c_3b_4e; }
		var typeA166 = document.getElementById( 'gen-a-1b-2c-3b-4f' ); if(typeA166) { typeA166.innerHTML += muta_a_1b_2c_3b_4f; }
		var typeA167 = document.getElementById( 'gen-a-1b-2c-3b-4g' ); if(typeA167) { typeA167.innerHTML += muta_a_1b_2c_3b_4g; }
		var typeA168 = document.getElementById( 'gen-a-1b-2c-3b-4h' ); if(typeA168) { typeA168.innerHTML += muta_a_1b_2c_3b_4h; }
		var typeA169 = document.getElementById( 'gen-a-1b-2c-3b-4i' ); if(typeA169) { typeA169.innerHTML += muta_a_1b_2c_3b_4i; }
		var typeA170 = document.getElementById( 'gen-a-1b-2c-3b-4j' ); if(typeA170) { typeA170.innerHTML += muta_a_1b_2c_3b_4j; }
		var typeA171 = document.getElementById( 'gen-a-1b-2c-3c-4a' ); if(typeA171) { typeA171.innerHTML += muta_a_1b_2c_3c_4a; }
		var typeA172 = document.getElementById( 'gen-a-1b-2c-3c-4b' ); if(typeA172) { typeA172.innerHTML += muta_a_1b_2c_3c_4b; }
		var typeA173 = document.getElementById( 'gen-a-1b-2c-3c-4c' ); if(typeA173) { typeA173.innerHTML += muta_a_1b_2c_3c_4c; }
		var typeA174 = document.getElementById( 'gen-a-1b-2c-3c-4d' ); if(typeA174) { typeA174.innerHTML += muta_a_1b_2c_3c_4d; }
		var typeA175 = document.getElementById( 'gen-a-1b-2c-3c-4e' ); if(typeA175) { typeA175.innerHTML += muta_a_1b_2c_3c_4e; }
		var typeA176 = document.getElementById( 'gen-a-1b-2c-3c-4f' ); if(typeA176) { typeA176.innerHTML += muta_a_1b_2c_3c_4f; }
		var typeA177 = document.getElementById( 'gen-a-1b-2c-3c-4g' ); if(typeA177) { typeA177.innerHTML += muta_a_1b_2c_3c_4g; }
		var typeA178 = document.getElementById( 'gen-a-1b-2c-3c-4h' ); if(typeA178) { typeA178.innerHTML += muta_a_1b_2c_3c_4h; }
		var typeA179 = document.getElementById( 'gen-a-1b-2c-3c-4i' ); if(typeA179) { typeA179.innerHTML += muta_a_1b_2c_3c_4i; }
		var typeA180 = document.getElementById( 'gen-a-1b-2c-3c-4j' ); if(typeA180) { typeA180.innerHTML += muta_a_1b_2c_3c_4j; }
		var typeA181 = document.getElementById( 'gen-a-1c-2a-3a-4a' ); if(typeA181) { typeA181.innerHTML += muta_a_1c_2a_3a_4a; }
		var typeA182 = document.getElementById( 'gen-a-1c-2a-3a-4b' ); if(typeA182) { typeA182.innerHTML += muta_a_1c_2a_3a_4b; }
		var typeA183 = document.getElementById( 'gen-a-1c-2a-3a-4c' ); if(typeA183) { typeA183.innerHTML += muta_a_1c_2a_3a_4c; }
		var typeA184 = document.getElementById( 'gen-a-1c-2a-3a-4d' ); if(typeA184) { typeA184.innerHTML += muta_a_1c_2a_3a_4d; }
		var typeA185 = document.getElementById( 'gen-a-1c-2a-3a-4e' ); if(typeA185) { typeA185.innerHTML += muta_a_1c_2a_3a_4e; }
		var typeA186 = document.getElementById( 'gen-a-1c-2a-3a-4f' ); if(typeA186) { typeA186.innerHTML += muta_a_1c_2a_3a_4f; }
		var typeA187 = document.getElementById( 'gen-a-1c-2a-3a-4g' ); if(typeA187) { typeA187.innerHTML += muta_a_1c_2a_3a_4g; }
		var typeA188 = document.getElementById( 'gen-a-1c-2a-3a-4h' ); if(typeA188) { typeA188.innerHTML += muta_a_1c_2a_3a_4h; }
		var typeA189 = document.getElementById( 'gen-a-1c-2a-3a-4i' ); if(typeA189) { typeA189.innerHTML += muta_a_1c_2a_3a_4i; }
		var typeA190 = document.getElementById( 'gen-a-1c-2a-3a-4j' ); if(typeA190) { typeA190.innerHTML += muta_a_1c_2a_3a_4j; }
		var typeA191 = document.getElementById( 'gen-a-1c-2a-3b-4a' ); if(typeA191) { typeA191.innerHTML += muta_a_1c_2a_3b_4a; }
		var typeA192 = document.getElementById( 'gen-a-1c-2a-3b-4b' ); if(typeA192) { typeA192.innerHTML += muta_a_1c_2a_3b_4b; }
		var typeA193 = document.getElementById( 'gen-a-1c-2a-3b-4c' ); if(typeA193) { typeA193.innerHTML += muta_a_1c_2a_3b_4c; }
		var typeA194 = document.getElementById( 'gen-a-1c-2a-3b-4d' ); if(typeA194) { typeA194.innerHTML += muta_a_1c_2a_3b_4d; }
		var typeA195 = document.getElementById( 'gen-a-1c-2a-3b-4e' ); if(typeA195) { typeA195.innerHTML += muta_a_1c_2a_3b_4e; }
		var typeA196 = document.getElementById( 'gen-a-1c-2a-3b-4f' ); if(typeA196) { typeA196.innerHTML += muta_a_1c_2a_3b_4f; }
		var typeA197 = document.getElementById( 'gen-a-1c-2a-3b-4g' ); if(typeA197) { typeA197.innerHTML += muta_a_1c_2a_3b_4g; }
		var typeA198 = document.getElementById( 'gen-a-1c-2a-3b-4h' ); if(typeA198) { typeA198.innerHTML += muta_a_1c_2a_3b_4h; }
		var typeA199 = document.getElementById( 'gen-a-1c-2a-3b-4i' ); if(typeA199) { typeA199.innerHTML += muta_a_1c_2a_3b_4i; }
		var typeA200 = document.getElementById( 'gen-a-1c-2a-3b-4j' ); if(typeA200) { typeA200.innerHTML += muta_a_1c_2a_3b_4j; }
		var typeA201 = document.getElementById( 'gen-a-1c-2a-3c-4a' ); if(typeA201) { typeA201.innerHTML += muta_a_1c_2a_3c_4a; }
		var typeA202 = document.getElementById( 'gen-a-1c-2a-3c-4b' ); if(typeA202) { typeA202.innerHTML += muta_a_1c_2a_3c_4b; }
		var typeA203 = document.getElementById( 'gen-a-1c-2a-3c-4c' ); if(typeA203) { typeA203.innerHTML += muta_a_1c_2a_3c_4c; }
		var typeA204 = document.getElementById( 'gen-a-1c-2a-3c-4d' ); if(typeA204) { typeA204.innerHTML += muta_a_1c_2a_3c_4d; }
		var typeA205 = document.getElementById( 'gen-a-1c-2a-3c-4e' ); if(typeA205) { typeA205.innerHTML += muta_a_1c_2a_3c_4e; }
		var typeA206 = document.getElementById( 'gen-a-1c-2a-3c-4f' ); if(typeA206) { typeA206.innerHTML += muta_a_1c_2a_3c_4f; }
		var typeA207 = document.getElementById( 'gen-a-1c-2a-3c-4g' ); if(typeA207) { typeA207.innerHTML += muta_a_1c_2a_3c_4g; }
		var typeA208 = document.getElementById( 'gen-a-1c-2a-3c-4h' ); if(typeA208) { typeA208.innerHTML += muta_a_1c_2a_3c_4h; }
		var typeA209 = document.getElementById( 'gen-a-1c-2a-3c-4i' ); if(typeA209) { typeA209.innerHTML += muta_a_1c_2a_3c_4i; }
		var typeA210 = document.getElementById( 'gen-a-1c-2a-3c-4j' ); if(typeA210) { typeA210.innerHTML += muta_a_1c_2a_3c_4j; }
		var typeA211 = document.getElementById( 'gen-a-1c-2b-3a-4a' ); if(typeA211) { typeA211.innerHTML += muta_a_1c_2b_3a_4a; }
		var typeA212 = document.getElementById( 'gen-a-1c-2b-3a-4b' ); if(typeA212) { typeA212.innerHTML += muta_a_1c_2b_3a_4b; }
		var typeA213 = document.getElementById( 'gen-a-1c-2b-3a-4c' ); if(typeA213) { typeA213.innerHTML += muta_a_1c_2b_3a_4c; }
		var typeA214 = document.getElementById( 'gen-a-1c-2b-3a-4d' ); if(typeA214) { typeA214.innerHTML += muta_a_1c_2b_3a_4d; }
		var typeA215 = document.getElementById( 'gen-a-1c-2b-3a-4e' ); if(typeA215) { typeA215.innerHTML += muta_a_1c_2b_3a_4e; }
		var typeA216 = document.getElementById( 'gen-a-1c-2b-3a-4f' ); if(typeA216) { typeA216.innerHTML += muta_a_1c_2b_3a_4f; }
		var typeA217 = document.getElementById( 'gen-a-1c-2b-3a-4g' ); if(typeA217) { typeA217.innerHTML += muta_a_1c_2b_3a_4g; }
		var typeA218 = document.getElementById( 'gen-a-1c-2b-3a-4h' ); if(typeA218) { typeA218.innerHTML += muta_a_1c_2b_3a_4h; }
		var typeA219 = document.getElementById( 'gen-a-1c-2b-3a-4i' ); if(typeA219) { typeA219.innerHTML += muta_a_1c_2b_3a_4i; }
		var typeA220 = document.getElementById( 'gen-a-1c-2b-3a-4j' ); if(typeA220) { typeA220.innerHTML += muta_a_1c_2b_3a_4j; }
		var typeA221 = document.getElementById( 'gen-a-1c-2b-3b-4a' ); if(typeA221) { typeA221.innerHTML += muta_a_1c_2b_3b_4a; }
		var typeA222 = document.getElementById( 'gen-a-1c-2b-3b-4b' ); if(typeA222) { typeA222.innerHTML += muta_a_1c_2b_3b_4b; }
		var typeA223 = document.getElementById( 'gen-a-1c-2b-3b-4c' ); if(typeA223) { typeA223.innerHTML += muta_a_1c_2b_3b_4c; }
		var typeA224 = document.getElementById( 'gen-a-1c-2b-3b-4d' ); if(typeA224) { typeA224.innerHTML += muta_a_1c_2b_3b_4d; }
		var typeA225 = document.getElementById( 'gen-a-1c-2b-3b-4e' ); if(typeA225) { typeA225.innerHTML += muta_a_1c_2b_3b_4e; }
		var typeA226 = document.getElementById( 'gen-a-1c-2b-3b-4f' ); if(typeA226) { typeA226.innerHTML += muta_a_1c_2b_3b_4f; }
		var typeA227 = document.getElementById( 'gen-a-1c-2b-3b-4g' ); if(typeA227) { typeA227.innerHTML += muta_a_1c_2b_3b_4g; }
		var typeA228 = document.getElementById( 'gen-a-1c-2b-3b-4h' ); if(typeA228) { typeA228.innerHTML += muta_a_1c_2b_3b_4h; }
		var typeA229 = document.getElementById( 'gen-a-1c-2b-3b-4i' ); if(typeA229) { typeA229.innerHTML += muta_a_1c_2b_3b_4i; }
		var typeA230 = document.getElementById( 'gen-a-1c-2b-3b-4j' ); if(typeA230) { typeA230.innerHTML += muta_a_1c_2b_3b_4j; }
		var typeA231 = document.getElementById( 'gen-a-1c-2b-3c-4a' ); if(typeA231) { typeA231.innerHTML += muta_a_1c_2b_3c_4a; }
		var typeA232 = document.getElementById( 'gen-a-1c-2b-3c-4b' ); if(typeA232) { typeA232.innerHTML += muta_a_1c_2b_3c_4b; }
		var typeA233 = document.getElementById( 'gen-a-1c-2b-3c-4c' ); if(typeA233) { typeA233.innerHTML += muta_a_1c_2b_3c_4c; }
		var typeA234 = document.getElementById( 'gen-a-1c-2b-3c-4d' ); if(typeA234) { typeA234.innerHTML += muta_a_1c_2b_3c_4d; }
		var typeA235 = document.getElementById( 'gen-a-1c-2b-3c-4e' ); if(typeA235) { typeA235.innerHTML += muta_a_1c_2b_3c_4e; }
		var typeA236 = document.getElementById( 'gen-a-1c-2b-3c-4f' ); if(typeA236) { typeA236.innerHTML += muta_a_1c_2b_3c_4f; }
		var typeA237 = document.getElementById( 'gen-a-1c-2b-3c-4g' ); if(typeA237) { typeA237.innerHTML += muta_a_1c_2b_3c_4g; }
		var typeA238 = document.getElementById( 'gen-a-1c-2b-3c-4h' ); if(typeA238) { typeA238.innerHTML += muta_a_1c_2b_3c_4h; }
		var typeA239 = document.getElementById( 'gen-a-1c-2b-3c-4i' ); if(typeA239) { typeA239.innerHTML += muta_a_1c_2b_3c_4i; }
		var typeA240 = document.getElementById( 'gen-a-1c-2b-3c-4j' ); if(typeA240) { typeA240.innerHTML += muta_a_1c_2b_3c_4j; }
		var typeA241 = document.getElementById( 'gen-a-1c-2c-3a-4a' ); if(typeA241) { typeA241.innerHTML += muta_a_1c_2c_3a_4a; }
		var typeA242 = document.getElementById( 'gen-a-1c-2c-3a-4b' ); if(typeA242) { typeA242.innerHTML += muta_a_1c_2c_3a_4b; }
		var typeA243 = document.getElementById( 'gen-a-1c-2c-3a-4c' ); if(typeA243) { typeA243.innerHTML += muta_a_1c_2c_3a_4c; }
		var typeA244 = document.getElementById( 'gen-a-1c-2c-3a-4d' ); if(typeA244) { typeA244.innerHTML += muta_a_1c_2c_3a_4d; }
		var typeA245 = document.getElementById( 'gen-a-1c-2c-3a-4e' ); if(typeA245) { typeA245.innerHTML += muta_a_1c_2c_3a_4e; }
		var typeA246 = document.getElementById( 'gen-a-1c-2c-3a-4f' ); if(typeA246) { typeA246.innerHTML += muta_a_1c_2c_3a_4f; }
		var typeA247 = document.getElementById( 'gen-a-1c-2c-3a-4g' ); if(typeA247) { typeA247.innerHTML += muta_a_1c_2c_3a_4g; }
		var typeA248 = document.getElementById( 'gen-a-1c-2c-3a-4h' ); if(typeA248) { typeA248.innerHTML += muta_a_1c_2c_3a_4h; }
		var typeA249 = document.getElementById( 'gen-a-1c-2c-3a-4i' ); if(typeA249) { typeA249.innerHTML += muta_a_1c_2c_3a_4i; }
		var typeA250 = document.getElementById( 'gen-a-1c-2c-3a-4j' ); if(typeA250) { typeA250.innerHTML += muta_a_1c_2c_3a_4j; }
		var typeA251 = document.getElementById( 'gen-a-1c-2c-3b-4a' ); if(typeA251) { typeA251.innerHTML += muta_a_1c_2c_3b_4a; }
		var typeA252 = document.getElementById( 'gen-a-1c-2c-3b-4b' ); if(typeA252) { typeA252.innerHTML += muta_a_1c_2c_3b_4b; }
		var typeA253 = document.getElementById( 'gen-a-1c-2c-3b-4c' ); if(typeA253) { typeA253.innerHTML += muta_a_1c_2c_3b_4c; }
		var typeA254 = document.getElementById( 'gen-a-1c-2c-3b-4d' ); if(typeA254) { typeA254.innerHTML += muta_a_1c_2c_3b_4d; }
		var typeA255 = document.getElementById( 'gen-a-1c-2c-3b-4e' ); if(typeA255) { typeA255.innerHTML += muta_a_1c_2c_3b_4e; }
		var typeA256 = document.getElementById( 'gen-a-1c-2c-3b-4f' ); if(typeA256) { typeA256.innerHTML += muta_a_1c_2c_3b_4f; }
		var typeA257 = document.getElementById( 'gen-a-1c-2c-3b-4g' ); if(typeA257) { typeA257.innerHTML += muta_a_1c_2c_3b_4g; }
		var typeA258 = document.getElementById( 'gen-a-1c-2c-3b-4h' ); if(typeA258) { typeA258.innerHTML += muta_a_1c_2c_3b_4h; }
		var typeA259 = document.getElementById( 'gen-a-1c-2c-3b-4i' ); if(typeA259) { typeA259.innerHTML += muta_a_1c_2c_3b_4i; }
		var typeA260 = document.getElementById( 'gen-a-1c-2c-3b-4j' ); if(typeA260) { typeA260.innerHTML += muta_a_1c_2c_3b_4j; }
		var typeA261 = document.getElementById( 'gen-a-1c-2c-3c-4a' ); if(typeA261) { typeA261.innerHTML += muta_a_1c_2c_3c_4a; }
		var typeA262 = document.getElementById( 'gen-a-1c-2c-3c-4b' ); if(typeA262) { typeA262.innerHTML += muta_a_1c_2c_3c_4b; }
		var typeA263 = document.getElementById( 'gen-a-1c-2c-3c-4c' ); if(typeA263) { typeA263.innerHTML += muta_a_1c_2c_3c_4c; }
		var typeA264 = document.getElementById( 'gen-a-1c-2c-3c-4d' ); if(typeA264) { typeA264.innerHTML += muta_a_1c_2c_3c_4d; }
		var typeA265 = document.getElementById( 'gen-a-1c-2c-3c-4e' ); if(typeA265) { typeA265.innerHTML += muta_a_1c_2c_3c_4e; }
		var typeA266 = document.getElementById( 'gen-a-1c-2c-3c-4f' ); if(typeA266) { typeA266.innerHTML += muta_a_1c_2c_3c_4f; }
		var typeA267 = document.getElementById( 'gen-a-1c-2c-3c-4g' ); if(typeA267) { typeA267.innerHTML += muta_a_1c_2c_3c_4g; }
		var typeA268 = document.getElementById( 'gen-a-1c-2c-3c-4h' ); if(typeA268) { typeA268.innerHTML += muta_a_1c_2c_3c_4h; }
		var typeA269 = document.getElementById( 'gen-a-1c-2c-3c-4i' ); if(typeA269) { typeA269.innerHTML += muta_a_1c_2c_3c_4i; }
		var typeA270 = document.getElementById( 'gen-a-1c-2c-3c-4j' ); if(typeA270) { typeA270.innerHTML += muta_a_1c_2c_3c_4j; }
		//lung
		var typeB001 = document.getElementById( 'gen-b-1a-2a-3a-4a' ); if(typeB001) { typeB001.innerHTML += muta_b_1a_2a_3a_4a; }
		var typeB002 = document.getElementById( 'gen-b-1a-2a-3a-4b' ); if(typeB002) { typeB002.innerHTML += muta_b_1a_2a_3a_4b; }
		var typeB003 = document.getElementById( 'gen-b-1a-2a-3a-4c' ); if(typeB003) { typeB003.innerHTML += muta_b_1a_2a_3a_4c; }
		var typeB004 = document.getElementById( 'gen-b-1a-2a-3a-4d' ); if(typeB004) { typeB004.innerHTML += muta_b_1a_2a_3a_4d; }
		var typeB005 = document.getElementById( 'gen-b-1a-2a-3a-4e' ); if(typeB005) { typeB005.innerHTML += muta_b_1a_2a_3a_4e; }
		var typeB006 = document.getElementById( 'gen-b-1a-2a-3a-4f' ); if(typeB006) { typeB006.innerHTML += muta_b_1a_2a_3a_4f; }
		var typeB007 = document.getElementById( 'gen-b-1a-2a-3a-4g' ); if(typeB007) { typeB007.innerHTML += muta_b_1a_2a_3a_4g; }
		var typeB008 = document.getElementById( 'gen-b-1a-2a-3a-4h' ); if(typeB008) { typeB008.innerHTML += muta_b_1a_2a_3a_4h; }
		var typeB009 = document.getElementById( 'gen-b-1a-2a-3a-4i' ); if(typeB009) { typeB009.innerHTML += muta_b_1a_2a_3a_4i; }
		var typeB010 = document.getElementById( 'gen-b-1a-2a-3a-4j' ); if(typeB010) { typeB010.innerHTML += muta_b_1a_2a_3a_4j; }
		var typeB011 = document.getElementById( 'gen-b-1a-2a-3b-4a' ); if(typeB011) { typeB011.innerHTML += muta_b_1a_2a_3b_4a; }
		var typeB012 = document.getElementById( 'gen-b-1a-2a-3b-4b' ); if(typeB012) { typeB012.innerHTML += muta_b_1a_2a_3b_4b; }
		var typeB013 = document.getElementById( 'gen-b-1a-2a-3b-4c' ); if(typeB013) { typeB013.innerHTML += muta_b_1a_2a_3b_4c; }
		var typeB014 = document.getElementById( 'gen-b-1a-2a-3b-4d' ); if(typeB014) { typeB014.innerHTML += muta_b_1a_2a_3b_4d; }
		var typeB015 = document.getElementById( 'gen-b-1a-2a-3b-4e' ); if(typeB015) { typeB015.innerHTML += muta_b_1a_2a_3b_4e; }
		var typeB016 = document.getElementById( 'gen-b-1a-2a-3b-4f' ); if(typeB016) { typeB016.innerHTML += muta_b_1a_2a_3b_4f; }
		var typeB017 = document.getElementById( 'gen-b-1a-2a-3b-4g' ); if(typeB017) { typeB017.innerHTML += muta_b_1a_2a_3b_4g; }
		var typeB018 = document.getElementById( 'gen-b-1a-2a-3b-4h' ); if(typeB018) { typeB018.innerHTML += muta_b_1a_2a_3b_4h; }
		var typeB019 = document.getElementById( 'gen-b-1a-2a-3b-4i' ); if(typeB019) { typeB019.innerHTML += muta_b_1a_2a_3b_4i; }
		var typeB020 = document.getElementById( 'gen-b-1a-2a-3b-4j' ); if(typeB020) { typeB020.innerHTML += muta_b_1a_2a_3b_4j; }
		var typeB021 = document.getElementById( 'gen-b-1a-2a-3c-4a' ); if(typeB021) { typeB021.innerHTML += muta_b_1a_2a_3c_4a; }
		var typeB022 = document.getElementById( 'gen-b-1a-2a-3c-4b' ); if(typeB022) { typeB022.innerHTML += muta_b_1a_2a_3c_4b; }
		var typeB023 = document.getElementById( 'gen-b-1a-2a-3c-4c' ); if(typeB023) { typeB023.innerHTML += muta_b_1a_2a_3c_4c; }
		var typeB024 = document.getElementById( 'gen-b-1a-2a-3c-4d' ); if(typeB024) { typeB024.innerHTML += muta_b_1a_2a_3c_4d; }
		var typeB025 = document.getElementById( 'gen-b-1a-2a-3c-4e' ); if(typeB025) { typeB025.innerHTML += muta_b_1a_2a_3c_4e; }
		var typeB026 = document.getElementById( 'gen-b-1a-2a-3c-4f' ); if(typeB026) { typeB026.innerHTML += muta_b_1a_2a_3c_4f; }
		var typeB027 = document.getElementById( 'gen-b-1a-2a-3c-4g' ); if(typeB027) { typeB027.innerHTML += muta_b_1a_2a_3c_4g; }
		var typeB028 = document.getElementById( 'gen-b-1a-2a-3c-4h' ); if(typeB028) { typeB028.innerHTML += muta_b_1a_2a_3c_4h; }
		var typeB029 = document.getElementById( 'gen-b-1a-2a-3c-4i' ); if(typeB029) { typeB029.innerHTML += muta_b_1a_2a_3c_4i; }
		var typeB030 = document.getElementById( 'gen-b-1a-2a-3c-4j' ); if(typeB030) { typeB030.innerHTML += muta_b_1a_2a_3c_4j; }
		var typeB031 = document.getElementById( 'gen-b-1a-2b-3a-4a' ); if(typeB031) { typeB031.innerHTML += muta_b_1a_2b_3a_4a; }
		var typeB032 = document.getElementById( 'gen-b-1a-2b-3a-4b' ); if(typeB032) { typeB032.innerHTML += muta_b_1a_2b_3a_4b; }
		var typeB033 = document.getElementById( 'gen-b-1a-2b-3a-4c' ); if(typeB033) { typeB033.innerHTML += muta_b_1a_2b_3a_4c; }
		var typeB034 = document.getElementById( 'gen-b-1a-2b-3a-4d' ); if(typeB034) { typeB034.innerHTML += muta_b_1a_2b_3a_4d; }
		var typeB035 = document.getElementById( 'gen-b-1a-2b-3a-4e' ); if(typeB035) { typeB035.innerHTML += muta_b_1a_2b_3a_4e; }
		var typeB036 = document.getElementById( 'gen-b-1a-2b-3a-4f' ); if(typeB036) { typeB036.innerHTML += muta_b_1a_2b_3a_4f; }
		var typeB037 = document.getElementById( 'gen-b-1a-2b-3a-4g' ); if(typeB037) { typeB037.innerHTML += muta_b_1a_2b_3a_4g; }
		var typeB038 = document.getElementById( 'gen-b-1a-2b-3a-4h' ); if(typeB038) { typeB038.innerHTML += muta_b_1a_2b_3a_4h; }
		var typeB039 = document.getElementById( 'gen-b-1a-2b-3a-4i' ); if(typeB039) { typeB039.innerHTML += muta_b_1a_2b_3a_4i; }
		var typeB040 = document.getElementById( 'gen-b-1a-2b-3a-4j' ); if(typeB040) { typeB040.innerHTML += muta_b_1a_2b_3a_4j; }
		var typeB041 = document.getElementById( 'gen-b-1a-2b-3b-4a' ); if(typeB041) { typeB041.innerHTML += muta_b_1a_2b_3b_4a; }
		var typeB042 = document.getElementById( 'gen-b-1a-2b-3b-4b' ); if(typeB042) { typeB042.innerHTML += muta_b_1a_2b_3b_4b; }
		var typeB043 = document.getElementById( 'gen-b-1a-2b-3b-4c' ); if(typeB043) { typeB043.innerHTML += muta_b_1a_2b_3b_4c; }
		var typeB044 = document.getElementById( 'gen-b-1a-2b-3b-4d' ); if(typeB044) { typeB044.innerHTML += muta_b_1a_2b_3b_4d; }
		var typeB045 = document.getElementById( 'gen-b-1a-2b-3b-4e' ); if(typeB045) { typeB045.innerHTML += muta_b_1a_2b_3b_4e; }
		var typeB046 = document.getElementById( 'gen-b-1a-2b-3b-4f' ); if(typeB046) { typeB046.innerHTML += muta_b_1a_2b_3b_4f; }
		var typeB047 = document.getElementById( 'gen-b-1a-2b-3b-4g' ); if(typeB047) { typeB047.innerHTML += muta_b_1a_2b_3b_4g; }
		var typeB048 = document.getElementById( 'gen-b-1a-2b-3b-4h' ); if(typeB048) { typeB048.innerHTML += muta_b_1a_2b_3b_4h; }
		var typeB049 = document.getElementById( 'gen-b-1a-2b-3b-4i' ); if(typeB049) { typeB049.innerHTML += muta_b_1a_2b_3b_4i; }
		var typeB050 = document.getElementById( 'gen-b-1a-2b-3b-4j' ); if(typeB050) { typeB050.innerHTML += muta_b_1a_2b_3b_4j; }
		var typeB051 = document.getElementById( 'gen-b-1a-2b-3c-4a' ); if(typeB051) { typeB051.innerHTML += muta_b_1a_2b_3c_4a; }
		var typeB052 = document.getElementById( 'gen-b-1a-2b-3c-4b' ); if(typeB052) { typeB052.innerHTML += muta_b_1a_2b_3c_4b; }
		var typeB053 = document.getElementById( 'gen-b-1a-2b-3c-4c' ); if(typeB053) { typeB053.innerHTML += muta_b_1a_2b_3c_4c; }
		var typeB054 = document.getElementById( 'gen-b-1a-2b-3c-4d' ); if(typeB054) { typeB054.innerHTML += muta_b_1a_2b_3c_4d; }
		var typeB055 = document.getElementById( 'gen-b-1a-2b-3c-4e' ); if(typeB055) { typeB055.innerHTML += muta_b_1a_2b_3c_4e; }
		var typeB056 = document.getElementById( 'gen-b-1a-2b-3c-4f' ); if(typeB056) { typeB056.innerHTML += muta_b_1a_2b_3c_4f; }
		var typeB057 = document.getElementById( 'gen-b-1a-2b-3c-4g' ); if(typeB057) { typeB057.innerHTML += muta_b_1a_2b_3c_4g; }
		var typeB058 = document.getElementById( 'gen-b-1a-2b-3c-4h' ); if(typeB058) { typeB058.innerHTML += muta_b_1a_2b_3c_4h; }
		var typeB059 = document.getElementById( 'gen-b-1a-2b-3c-4i' ); if(typeB059) { typeB059.innerHTML += muta_b_1a_2b_3c_4i; }
		var typeB060 = document.getElementById( 'gen-b-1a-2b-3c-4j' ); if(typeB060) { typeB060.innerHTML += muta_b_1a_2b_3c_4j; }
		var typeB061 = document.getElementById( 'gen-b-1a-2c-3a-4a' ); if(typeB061) { typeB061.innerHTML += muta_b_1a_2c_3a_4a; }
		var typeB062 = document.getElementById( 'gen-b-1a-2c-3a-4b' ); if(typeB062) { typeB062.innerHTML += muta_b_1a_2c_3a_4b; }
		var typeB063 = document.getElementById( 'gen-b-1a-2c-3a-4c' ); if(typeB063) { typeB063.innerHTML += muta_b_1a_2c_3a_4c; }
		var typeB064 = document.getElementById( 'gen-b-1a-2c-3a-4d' ); if(typeB064) { typeB064.innerHTML += muta_b_1a_2c_3a_4d; }
		var typeB065 = document.getElementById( 'gen-b-1a-2c-3a-4e' ); if(typeB065) { typeB065.innerHTML += muta_b_1a_2c_3a_4e; }
		var typeB066 = document.getElementById( 'gen-b-1a-2c-3a-4f' ); if(typeB066) { typeB066.innerHTML += muta_b_1a_2c_3a_4f; }
		var typeB067 = document.getElementById( 'gen-b-1a-2c-3a-4g' ); if(typeB067) { typeB067.innerHTML += muta_b_1a_2c_3a_4g; }
		var typeB068 = document.getElementById( 'gen-b-1a-2c-3a-4h' ); if(typeB068) { typeB068.innerHTML += muta_b_1a_2c_3a_4h; }
		var typeB069 = document.getElementById( 'gen-b-1a-2c-3a-4i' ); if(typeB069) { typeB069.innerHTML += muta_b_1a_2c_3a_4i; }
		var typeB070 = document.getElementById( 'gen-b-1a-2c-3a-4j' ); if(typeB070) { typeB070.innerHTML += muta_b_1a_2c_3a_4j; }
		var typeB071 = document.getElementById( 'gen-b-1a-2c-3b-4a' ); if(typeB071) { typeB071.innerHTML += muta_b_1a_2c_3b_4a; }
		var typeB072 = document.getElementById( 'gen-b-1a-2c-3b-4b' ); if(typeB072) { typeB072.innerHTML += muta_b_1a_2c_3b_4b; }
		var typeB073 = document.getElementById( 'gen-b-1a-2c-3b-4c' ); if(typeB073) { typeB073.innerHTML += muta_b_1a_2c_3b_4c; }
		var typeB074 = document.getElementById( 'gen-b-1a-2c-3b-4d' ); if(typeB074) { typeB074.innerHTML += muta_b_1a_2c_3b_4d; }
		var typeB075 = document.getElementById( 'gen-b-1a-2c-3b-4e' ); if(typeB075) { typeB075.innerHTML += muta_b_1a_2c_3b_4e; }
		var typeB076 = document.getElementById( 'gen-b-1a-2c-3b-4f' ); if(typeB076) { typeB076.innerHTML += muta_b_1a_2c_3b_4f; }
		var typeB077 = document.getElementById( 'gen-b-1a-2c-3b-4g' ); if(typeB077) { typeB077.innerHTML += muta_b_1a_2c_3b_4g; }
		var typeB078 = document.getElementById( 'gen-b-1a-2c-3b-4h' ); if(typeB078) { typeB078.innerHTML += muta_b_1a_2c_3b_4h; }
		var typeB079 = document.getElementById( 'gen-b-1a-2c-3b-4i' ); if(typeB079) { typeB079.innerHTML += muta_b_1a_2c_3b_4i; }
		var typeB080 = document.getElementById( 'gen-b-1a-2c-3b-4j' ); if(typeB080) { typeB080.innerHTML += muta_b_1a_2c_3b_4j; }
		var typeB081 = document.getElementById( 'gen-b-1a-2c-3c-4a' ); if(typeB081) { typeB081.innerHTML += muta_b_1a_2c_3c_4a; }
		var typeB082 = document.getElementById( 'gen-b-1a-2c-3c-4b' ); if(typeB082) { typeB082.innerHTML += muta_b_1a_2c_3c_4b; }
		var typeB083 = document.getElementById( 'gen-b-1a-2c-3c-4c' ); if(typeB083) { typeB083.innerHTML += muta_b_1a_2c_3c_4c; }
		var typeB084 = document.getElementById( 'gen-b-1a-2c-3c-4d' ); if(typeB084) { typeB084.innerHTML += muta_b_1a_2c_3c_4d; }
		var typeB085 = document.getElementById( 'gen-b-1a-2c-3c-4e' ); if(typeB085) { typeB085.innerHTML += muta_b_1a_2c_3c_4e; }
		var typeB086 = document.getElementById( 'gen-b-1a-2c-3c-4f' ); if(typeB086) { typeB086.innerHTML += muta_b_1a_2c_3c_4f; }
		var typeB087 = document.getElementById( 'gen-b-1a-2c-3c-4g' ); if(typeB087) { typeB087.innerHTML += muta_b_1a_2c_3c_4g; }
		var typeB088 = document.getElementById( 'gen-b-1a-2c-3c-4h' ); if(typeB088) { typeB088.innerHTML += muta_b_1a_2c_3c_4h; }
		var typeB089 = document.getElementById( 'gen-b-1a-2c-3c-4i' ); if(typeB089) { typeB089.innerHTML += muta_b_1a_2c_3c_4i; }
		var typeB090 = document.getElementById( 'gen-b-1a-2c-3c-4j' ); if(typeB090) { typeB090.innerHTML += muta_b_1a_2c_3c_4j; }
		var typeB091 = document.getElementById( 'gen-b-1b-2a-3a-4a' ); if(typeB091) { typeB091.innerHTML += muta_b_1b_2a_3a_4a; }
		var typeB092 = document.getElementById( 'gen-b-1b-2a-3a-4b' ); if(typeB092) { typeB092.innerHTML += muta_b_1b_2a_3a_4b; }
		var typeB093 = document.getElementById( 'gen-b-1b-2a-3a-4c' ); if(typeB093) { typeB093.innerHTML += muta_b_1b_2a_3a_4c; }
		var typeB094 = document.getElementById( 'gen-b-1b-2a-3a-4d' ); if(typeB094) { typeB094.innerHTML += muta_b_1b_2a_3a_4d; }
		var typeB095 = document.getElementById( 'gen-b-1b-2a-3a-4e' ); if(typeB095) { typeB095.innerHTML += muta_b_1b_2a_3a_4e; }
		var typeB096 = document.getElementById( 'gen-b-1b-2a-3a-4f' ); if(typeB096) { typeB096.innerHTML += muta_b_1b_2a_3a_4f; }
		var typeB097 = document.getElementById( 'gen-b-1b-2a-3a-4g' ); if(typeB097) { typeB097.innerHTML += muta_b_1b_2a_3a_4g; }
		var typeB098 = document.getElementById( 'gen-b-1b-2a-3a-4h' ); if(typeB098) { typeB098.innerHTML += muta_b_1b_2a_3a_4h; }
		var typeB099 = document.getElementById( 'gen-b-1b-2a-3a-4i' ); if(typeB099) { typeB099.innerHTML += muta_b_1b_2a_3a_4i; }
		var typeB100 = document.getElementById( 'gen-b-1b-2a-3a-4j' ); if(typeB100) { typeB100.innerHTML += muta_b_1b_2a_3a_4j; }
		var typeB101 = document.getElementById( 'gen-b-1b-2a-3b-4a' ); if(typeB101) { typeB101.innerHTML += muta_b_1b_2a_3b_4a; }
		var typeB102 = document.getElementById( 'gen-b-1b-2a-3b-4b' ); if(typeB102) { typeB102.innerHTML += muta_b_1b_2a_3b_4b; }
		var typeB103 = document.getElementById( 'gen-b-1b-2a-3b-4c' ); if(typeB103) { typeB103.innerHTML += muta_b_1b_2a_3b_4c; }
		var typeB104 = document.getElementById( 'gen-b-1b-2a-3b-4d' ); if(typeB104) { typeB104.innerHTML += muta_b_1b_2a_3b_4d; }
		var typeB105 = document.getElementById( 'gen-b-1b-2a-3b-4e' ); if(typeB105) { typeB105.innerHTML += muta_b_1b_2a_3b_4e; }
		var typeB106 = document.getElementById( 'gen-b-1b-2a-3b-4f' ); if(typeB106) { typeB106.innerHTML += muta_b_1b_2a_3b_4f; }
		var typeB107 = document.getElementById( 'gen-b-1b-2a-3b-4g' ); if(typeB107) { typeB107.innerHTML += muta_b_1b_2a_3b_4g; }
		var typeB108 = document.getElementById( 'gen-b-1b-2a-3b-4h' ); if(typeB108) { typeB108.innerHTML += muta_b_1b_2a_3b_4h; }
		var typeB109 = document.getElementById( 'gen-b-1b-2a-3b-4i' ); if(typeB109) { typeB109.innerHTML += muta_b_1b_2a_3b_4i; }
		var typeB110 = document.getElementById( 'gen-b-1b-2a-3b-4j' ); if(typeB110) { typeB110.innerHTML += muta_b_1b_2a_3b_4j; }
		var typeB111 = document.getElementById( 'gen-b-1b-2a-3c-4a' ); if(typeB111) { typeB111.innerHTML += muta_b_1b_2a_3c_4a; }
		var typeB112 = document.getElementById( 'gen-b-1b-2a-3c-4b' ); if(typeB112) { typeB112.innerHTML += muta_b_1b_2a_3c_4b; }
		var typeB113 = document.getElementById( 'gen-b-1b-2a-3c-4c' ); if(typeB113) { typeB113.innerHTML += muta_b_1b_2a_3c_4c; }
		var typeB114 = document.getElementById( 'gen-b-1b-2a-3c-4d' ); if(typeB114) { typeB114.innerHTML += muta_b_1b_2a_3c_4d; }
		var typeB115 = document.getElementById( 'gen-b-1b-2a-3c-4e' ); if(typeB115) { typeB115.innerHTML += muta_b_1b_2a_3c_4e; }
		var typeB116 = document.getElementById( 'gen-b-1b-2a-3c-4f' ); if(typeB116) { typeB116.innerHTML += muta_b_1b_2a_3c_4f; }
		var typeB117 = document.getElementById( 'gen-b-1b-2a-3c-4g' ); if(typeB117) { typeB117.innerHTML += muta_b_1b_2a_3c_4g; }
		var typeB118 = document.getElementById( 'gen-b-1b-2a-3c-4h' ); if(typeB118) { typeB118.innerHTML += muta_b_1b_2a_3c_4h; }
		var typeB119 = document.getElementById( 'gen-b-1b-2a-3c-4i' ); if(typeB119) { typeB119.innerHTML += muta_b_1b_2a_3c_4i; }
		var typeB120 = document.getElementById( 'gen-b-1b-2a-3c-4j' ); if(typeB120) { typeB120.innerHTML += muta_b_1b_2a_3c_4j; }
		var typeB121 = document.getElementById( 'gen-b-1b-2b-3a-4a' ); if(typeB121) { typeB121.innerHTML += muta_b_1b_2b_3a_4a; }
		var typeB122 = document.getElementById( 'gen-b-1b-2b-3a-4b' ); if(typeB122) { typeB122.innerHTML += muta_b_1b_2b_3a_4b; }
		var typeB123 = document.getElementById( 'gen-b-1b-2b-3a-4c' ); if(typeB123) { typeB123.innerHTML += muta_b_1b_2b_3a_4c; }
		var typeB124 = document.getElementById( 'gen-b-1b-2b-3a-4d' ); if(typeB124) { typeB124.innerHTML += muta_b_1b_2b_3a_4d; }
		var typeB125 = document.getElementById( 'gen-b-1b-2b-3a-4e' ); if(typeB125) { typeB125.innerHTML += muta_b_1b_2b_3a_4e; }
		var typeB126 = document.getElementById( 'gen-b-1b-2b-3a-4f' ); if(typeB126) { typeB126.innerHTML += muta_b_1b_2b_3a_4f; }
		var typeB127 = document.getElementById( 'gen-b-1b-2b-3a-4g' ); if(typeB127) { typeB127.innerHTML += muta_b_1b_2b_3a_4g; }
		var typeB128 = document.getElementById( 'gen-b-1b-2b-3a-4h' ); if(typeB128) { typeB128.innerHTML += muta_b_1b_2b_3a_4h; }
		var typeB129 = document.getElementById( 'gen-b-1b-2b-3a-4i' ); if(typeB129) { typeB129.innerHTML += muta_b_1b_2b_3a_4i; }
		var typeB130 = document.getElementById( 'gen-b-1b-2b-3a-4j' ); if(typeB130) { typeB130.innerHTML += muta_b_1b_2b_3a_4j; }
		var typeB131 = document.getElementById( 'gen-b-1b-2b-3b-4a' ); if(typeB131) { typeB131.innerHTML += muta_b_1b_2b_3b_4a; }
		var typeB132 = document.getElementById( 'gen-b-1b-2b-3b-4b' ); if(typeB132) { typeB132.innerHTML += muta_b_1b_2b_3b_4b; }
		var typeB133 = document.getElementById( 'gen-b-1b-2b-3b-4c' ); if(typeB133) { typeB133.innerHTML += muta_b_1b_2b_3b_4c; }
		var typeB134 = document.getElementById( 'gen-b-1b-2b-3b-4d' ); if(typeB134) { typeB134.innerHTML += muta_b_1b_2b_3b_4d; }
		var typeB135 = document.getElementById( 'gen-b-1b-2b-3b-4e' ); if(typeB135) { typeB135.innerHTML += muta_b_1b_2b_3b_4e; }
		var typeB136 = document.getElementById( 'gen-b-1b-2b-3b-4f' ); if(typeB136) { typeB136.innerHTML += muta_b_1b_2b_3b_4f; }
		var typeB137 = document.getElementById( 'gen-b-1b-2b-3b-4g' ); if(typeB137) { typeB137.innerHTML += muta_b_1b_2b_3b_4g; }
		var typeB138 = document.getElementById( 'gen-b-1b-2b-3b-4h' ); if(typeB138) { typeB138.innerHTML += muta_b_1b_2b_3b_4h; }
		var typeB139 = document.getElementById( 'gen-b-1b-2b-3b-4i' ); if(typeB139) { typeB139.innerHTML += muta_b_1b_2b_3b_4i; }
		var typeB140 = document.getElementById( 'gen-b-1b-2b-3b-4j' ); if(typeB140) { typeB140.innerHTML += muta_b_1b_2b_3b_4j; }
		var typeB141 = document.getElementById( 'gen-b-1b-2b-3c-4a' ); if(typeB141) { typeB141.innerHTML += muta_b_1b_2b_3c_4a; }
		var typeB142 = document.getElementById( 'gen-b-1b-2b-3c-4b' ); if(typeB142) { typeB142.innerHTML += muta_b_1b_2b_3c_4b; }
		var typeB143 = document.getElementById( 'gen-b-1b-2b-3c-4c' ); if(typeB143) { typeB143.innerHTML += muta_b_1b_2b_3c_4c; }
		var typeB144 = document.getElementById( 'gen-b-1b-2b-3c-4d' ); if(typeB144) { typeB144.innerHTML += muta_b_1b_2b_3c_4d; }
		var typeB145 = document.getElementById( 'gen-b-1b-2b-3c-4e' ); if(typeB145) { typeB145.innerHTML += muta_b_1b_2b_3c_4e; }
		var typeB146 = document.getElementById( 'gen-b-1b-2b-3c-4f' ); if(typeB146) { typeB146.innerHTML += muta_b_1b_2b_3c_4f; }
		var typeB147 = document.getElementById( 'gen-b-1b-2b-3c-4g' ); if(typeB147) { typeB147.innerHTML += muta_b_1b_2b_3c_4g; }
		var typeB148 = document.getElementById( 'gen-b-1b-2b-3c-4h' ); if(typeB148) { typeB148.innerHTML += muta_b_1b_2b_3c_4h; }
		var typeB149 = document.getElementById( 'gen-b-1b-2b-3c-4i' ); if(typeB149) { typeB149.innerHTML += muta_b_1b_2b_3c_4i; }
		var typeB150 = document.getElementById( 'gen-b-1b-2b-3c-4j' ); if(typeB150) { typeB150.innerHTML += muta_b_1b_2b_3c_4j; }
		var typeB151 = document.getElementById( 'gen-b-1b-2c-3a-4a' ); if(typeB151) { typeB151.innerHTML += muta_b_1b_2c_3a_4a; }
		var typeB152 = document.getElementById( 'gen-b-1b-2c-3a-4b' ); if(typeB152) { typeB152.innerHTML += muta_b_1b_2c_3a_4b; }
		var typeB153 = document.getElementById( 'gen-b-1b-2c-3a-4c' ); if(typeB153) { typeB153.innerHTML += muta_b_1b_2c_3a_4c; }
		var typeB154 = document.getElementById( 'gen-b-1b-2c-3a-4d' ); if(typeB154) { typeB154.innerHTML += muta_b_1b_2c_3a_4d; }
		var typeB155 = document.getElementById( 'gen-b-1b-2c-3a-4e' ); if(typeB155) { typeB155.innerHTML += muta_b_1b_2c_3a_4e; }
		var typeB156 = document.getElementById( 'gen-b-1b-2c-3a-4f' ); if(typeB156) { typeB156.innerHTML += muta_b_1b_2c_3a_4f; }
		var typeB157 = document.getElementById( 'gen-b-1b-2c-3a-4g' ); if(typeB157) { typeB157.innerHTML += muta_b_1b_2c_3a_4g; }
		var typeB158 = document.getElementById( 'gen-b-1b-2c-3a-4h' ); if(typeB158) { typeB158.innerHTML += muta_b_1b_2c_3a_4h; }
		var typeB159 = document.getElementById( 'gen-b-1b-2c-3a-4i' ); if(typeB159) { typeB159.innerHTML += muta_b_1b_2c_3a_4i; }
		var typeB160 = document.getElementById( 'gen-b-1b-2c-3a-4j' ); if(typeB160) { typeB160.innerHTML += muta_b_1b_2c_3a_4j; }
		var typeB161 = document.getElementById( 'gen-b-1b-2c-3b-4a' ); if(typeB161) { typeB161.innerHTML += muta_b_1b_2c_3b_4a; }
		var typeB162 = document.getElementById( 'gen-b-1b-2c-3b-4b' ); if(typeB162) { typeB162.innerHTML += muta_b_1b_2c_3b_4b; }
		var typeB163 = document.getElementById( 'gen-b-1b-2c-3b-4c' ); if(typeB163) { typeB163.innerHTML += muta_b_1b_2c_3b_4c; }
		var typeB164 = document.getElementById( 'gen-b-1b-2c-3b-4d' ); if(typeB164) { typeB164.innerHTML += muta_b_1b_2c_3b_4d; }
		var typeB165 = document.getElementById( 'gen-b-1b-2c-3b-4e' ); if(typeB165) { typeB165.innerHTML += muta_b_1b_2c_3b_4e; }
		var typeB166 = document.getElementById( 'gen-b-1b-2c-3b-4f' ); if(typeB166) { typeB166.innerHTML += muta_b_1b_2c_3b_4f; }
		var typeB167 = document.getElementById( 'gen-b-1b-2c-3b-4g' ); if(typeB167) { typeB167.innerHTML += muta_b_1b_2c_3b_4g; }
		var typeB168 = document.getElementById( 'gen-b-1b-2c-3b-4h' ); if(typeB168) { typeB168.innerHTML += muta_b_1b_2c_3b_4h; }
		var typeB169 = document.getElementById( 'gen-b-1b-2c-3b-4i' ); if(typeB169) { typeB169.innerHTML += muta_b_1b_2c_3b_4i; }
		var typeB170 = document.getElementById( 'gen-b-1b-2c-3b-4j' ); if(typeB170) { typeB170.innerHTML += muta_b_1b_2c_3b_4j; }
		var typeB171 = document.getElementById( 'gen-b-1b-2c-3c-4a' ); if(typeB171) { typeB171.innerHTML += muta_b_1b_2c_3c_4a; }
		var typeB172 = document.getElementById( 'gen-b-1b-2c-3c-4b' ); if(typeB172) { typeB172.innerHTML += muta_b_1b_2c_3c_4b; }
		var typeB173 = document.getElementById( 'gen-b-1b-2c-3c-4c' ); if(typeB173) { typeB173.innerHTML += muta_b_1b_2c_3c_4c; }
		var typeB174 = document.getElementById( 'gen-b-1b-2c-3c-4d' ); if(typeB174) { typeB174.innerHTML += muta_b_1b_2c_3c_4d; }
		var typeB175 = document.getElementById( 'gen-b-1b-2c-3c-4e' ); if(typeB175) { typeB175.innerHTML += muta_b_1b_2c_3c_4e; }
		var typeB176 = document.getElementById( 'gen-b-1b-2c-3c-4f' ); if(typeB176) { typeB176.innerHTML += muta_b_1b_2c_3c_4f; }
		var typeB177 = document.getElementById( 'gen-b-1b-2c-3c-4g' ); if(typeB177) { typeB177.innerHTML += muta_b_1b_2c_3c_4g; }
		var typeB178 = document.getElementById( 'gen-b-1b-2c-3c-4h' ); if(typeB178) { typeB178.innerHTML += muta_b_1b_2c_3c_4h; }
		var typeB179 = document.getElementById( 'gen-b-1b-2c-3c-4i' ); if(typeB179) { typeB179.innerHTML += muta_b_1b_2c_3c_4i; }
		var typeB180 = document.getElementById( 'gen-b-1b-2c-3c-4j' ); if(typeB180) { typeB180.innerHTML += muta_b_1b_2c_3c_4j; }
		var typeB181 = document.getElementById( 'gen-b-1c-2a-3a-4a' ); if(typeB181) { typeB181.innerHTML += muta_b_1c_2a_3a_4a; }
		var typeB182 = document.getElementById( 'gen-b-1c-2a-3a-4b' ); if(typeB182) { typeB182.innerHTML += muta_b_1c_2a_3a_4b; }
		var typeB183 = document.getElementById( 'gen-b-1c-2a-3a-4c' ); if(typeB183) { typeB183.innerHTML += muta_b_1c_2a_3a_4c; }
		var typeB184 = document.getElementById( 'gen-b-1c-2a-3a-4d' ); if(typeB184) { typeB184.innerHTML += muta_b_1c_2a_3a_4d; }
		var typeB185 = document.getElementById( 'gen-b-1c-2a-3a-4e' ); if(typeB185) { typeB185.innerHTML += muta_b_1c_2a_3a_4e; }
		var typeB186 = document.getElementById( 'gen-b-1c-2a-3a-4f' ); if(typeB186) { typeB186.innerHTML += muta_b_1c_2a_3a_4f; }
		var typeB187 = document.getElementById( 'gen-b-1c-2a-3a-4g' ); if(typeB187) { typeB187.innerHTML += muta_b_1c_2a_3a_4g; }
		var typeB188 = document.getElementById( 'gen-b-1c-2a-3a-4h' ); if(typeB188) { typeB188.innerHTML += muta_b_1c_2a_3a_4h; }
		var typeB189 = document.getElementById( 'gen-b-1c-2a-3a-4i' ); if(typeB189) { typeB189.innerHTML += muta_b_1c_2a_3a_4i; }
		var typeB190 = document.getElementById( 'gen-b-1c-2a-3a-4j' ); if(typeB190) { typeB190.innerHTML += muta_b_1c_2a_3a_4j; }
		var typeB191 = document.getElementById( 'gen-b-1c-2a-3b-4a' ); if(typeB191) { typeB191.innerHTML += muta_b_1c_2a_3b_4a; }
		var typeB192 = document.getElementById( 'gen-b-1c-2a-3b-4b' ); if(typeB192) { typeB192.innerHTML += muta_b_1c_2a_3b_4b; }
		var typeB193 = document.getElementById( 'gen-b-1c-2a-3b-4c' ); if(typeB193) { typeB193.innerHTML += muta_b_1c_2a_3b_4c; }
		var typeB194 = document.getElementById( 'gen-b-1c-2a-3b-4d' ); if(typeB194) { typeB194.innerHTML += muta_b_1c_2a_3b_4d; }
		var typeB195 = document.getElementById( 'gen-b-1c-2a-3b-4e' ); if(typeB195) { typeB195.innerHTML += muta_b_1c_2a_3b_4e; }
		var typeB196 = document.getElementById( 'gen-b-1c-2a-3b-4f' ); if(typeB196) { typeB196.innerHTML += muta_b_1c_2a_3b_4f; }
		var typeB197 = document.getElementById( 'gen-b-1c-2a-3b-4g' ); if(typeB197) { typeB197.innerHTML += muta_b_1c_2a_3b_4g; }
		var typeB198 = document.getElementById( 'gen-b-1c-2a-3b-4h' ); if(typeB198) { typeB198.innerHTML += muta_b_1c_2a_3b_4h; }
		var typeB199 = document.getElementById( 'gen-b-1c-2a-3b-4i' ); if(typeB199) { typeB199.innerHTML += muta_b_1c_2a_3b_4i; }
		var typeB200 = document.getElementById( 'gen-b-1c-2a-3b-4j' ); if(typeB200) { typeB200.innerHTML += muta_b_1c_2a_3b_4j; }
		var typeB201 = document.getElementById( 'gen-b-1c-2a-3c-4a' ); if(typeB201) { typeB201.innerHTML += muta_b_1c_2a_3c_4a; }
		var typeB202 = document.getElementById( 'gen-b-1c-2a-3c-4b' ); if(typeB202) { typeB202.innerHTML += muta_b_1c_2a_3c_4b; }
		var typeB203 = document.getElementById( 'gen-b-1c-2a-3c-4c' ); if(typeB203) { typeB203.innerHTML += muta_b_1c_2a_3c_4c; }
		var typeB204 = document.getElementById( 'gen-b-1c-2a-3c-4d' ); if(typeB204) { typeB204.innerHTML += muta_b_1c_2a_3c_4d; }
		var typeB205 = document.getElementById( 'gen-b-1c-2a-3c-4e' ); if(typeB205) { typeB205.innerHTML += muta_b_1c_2a_3c_4e; }
		var typeB206 = document.getElementById( 'gen-b-1c-2a-3c-4f' ); if(typeB206) { typeB206.innerHTML += muta_b_1c_2a_3c_4f; }
		var typeB207 = document.getElementById( 'gen-b-1c-2a-3c-4g' ); if(typeB207) { typeB207.innerHTML += muta_b_1c_2a_3c_4g; }
		var typeB208 = document.getElementById( 'gen-b-1c-2a-3c-4h' ); if(typeB208) { typeB208.innerHTML += muta_b_1c_2a_3c_4h; }
		var typeB209 = document.getElementById( 'gen-b-1c-2a-3c-4i' ); if(typeB209) { typeB209.innerHTML += muta_b_1c_2a_3c_4i; }
		var typeB210 = document.getElementById( 'gen-b-1c-2a-3c-4j' ); if(typeB210) { typeB210.innerHTML += muta_b_1c_2a_3c_4j; }
		var typeB211 = document.getElementById( 'gen-b-1c-2b-3a-4a' ); if(typeB211) { typeB211.innerHTML += muta_b_1c_2b_3a_4a; }
		var typeB212 = document.getElementById( 'gen-b-1c-2b-3a-4b' ); if(typeB212) { typeB212.innerHTML += muta_b_1c_2b_3a_4b; }
		var typeB213 = document.getElementById( 'gen-b-1c-2b-3a-4c' ); if(typeB213) { typeB213.innerHTML += muta_b_1c_2b_3a_4c; }
		var typeB214 = document.getElementById( 'gen-b-1c-2b-3a-4d' ); if(typeB214) { typeB214.innerHTML += muta_b_1c_2b_3a_4d; }
		var typeB215 = document.getElementById( 'gen-b-1c-2b-3a-4e' ); if(typeB215) { typeB215.innerHTML += muta_b_1c_2b_3a_4e; }
		var typeB216 = document.getElementById( 'gen-b-1c-2b-3a-4f' ); if(typeB216) { typeB216.innerHTML += muta_b_1c_2b_3a_4f; }
		var typeB217 = document.getElementById( 'gen-b-1c-2b-3a-4g' ); if(typeB217) { typeB217.innerHTML += muta_b_1c_2b_3a_4g; }
		var typeB218 = document.getElementById( 'gen-b-1c-2b-3a-4h' ); if(typeB218) { typeB218.innerHTML += muta_b_1c_2b_3a_4h; }
		var typeB219 = document.getElementById( 'gen-b-1c-2b-3a-4i' ); if(typeB219) { typeB219.innerHTML += muta_b_1c_2b_3a_4i; }
		var typeB220 = document.getElementById( 'gen-b-1c-2b-3a-4j' ); if(typeB220) { typeB220.innerHTML += muta_b_1c_2b_3a_4j; }
		var typeB221 = document.getElementById( 'gen-b-1c-2b-3b-4a' ); if(typeB221) { typeB221.innerHTML += muta_b_1c_2b_3b_4a; }
		var typeB222 = document.getElementById( 'gen-b-1c-2b-3b-4b' ); if(typeB222) { typeB222.innerHTML += muta_b_1c_2b_3b_4b; }
		var typeB223 = document.getElementById( 'gen-b-1c-2b-3b-4c' ); if(typeB223) { typeB223.innerHTML += muta_b_1c_2b_3b_4c; }
		var typeB224 = document.getElementById( 'gen-b-1c-2b-3b-4d' ); if(typeB224) { typeB224.innerHTML += muta_b_1c_2b_3b_4d; }
		var typeB225 = document.getElementById( 'gen-b-1c-2b-3b-4e' ); if(typeB225) { typeB225.innerHTML += muta_b_1c_2b_3b_4e; }
		var typeB226 = document.getElementById( 'gen-b-1c-2b-3b-4f' ); if(typeB226) { typeB226.innerHTML += muta_b_1c_2b_3b_4f; }
		var typeB227 = document.getElementById( 'gen-b-1c-2b-3b-4g' ); if(typeB227) { typeB227.innerHTML += muta_b_1c_2b_3b_4g; }
		var typeB228 = document.getElementById( 'gen-b-1c-2b-3b-4h' ); if(typeB228) { typeB228.innerHTML += muta_b_1c_2b_3b_4h; }
		var typeB229 = document.getElementById( 'gen-b-1c-2b-3b-4i' ); if(typeB229) { typeB229.innerHTML += muta_b_1c_2b_3b_4i; }
		var typeB230 = document.getElementById( 'gen-b-1c-2b-3b-4j' ); if(typeB230) { typeB230.innerHTML += muta_b_1c_2b_3b_4j; }
		var typeB231 = document.getElementById( 'gen-b-1c-2b-3c-4a' ); if(typeB231) { typeB231.innerHTML += muta_b_1c_2b_3c_4a; }
		var typeB232 = document.getElementById( 'gen-b-1c-2b-3c-4b' ); if(typeB232) { typeB232.innerHTML += muta_b_1c_2b_3c_4b; }
		var typeB233 = document.getElementById( 'gen-b-1c-2b-3c-4c' ); if(typeB233) { typeB233.innerHTML += muta_b_1c_2b_3c_4c; }
		var typeB234 = document.getElementById( 'gen-b-1c-2b-3c-4d' ); if(typeB234) { typeB234.innerHTML += muta_b_1c_2b_3c_4d; }
		var typeB235 = document.getElementById( 'gen-b-1c-2b-3c-4e' ); if(typeB235) { typeB235.innerHTML += muta_b_1c_2b_3c_4e; }
		var typeB236 = document.getElementById( 'gen-b-1c-2b-3c-4f' ); if(typeB236) { typeB236.innerHTML += muta_b_1c_2b_3c_4f; }
		var typeB237 = document.getElementById( 'gen-b-1c-2b-3c-4g' ); if(typeB237) { typeB237.innerHTML += muta_b_1c_2b_3c_4g; }
		var typeB238 = document.getElementById( 'gen-b-1c-2b-3c-4h' ); if(typeB238) { typeB238.innerHTML += muta_b_1c_2b_3c_4h; }
		var typeB239 = document.getElementById( 'gen-b-1c-2b-3c-4i' ); if(typeB239) { typeB239.innerHTML += muta_b_1c_2b_3c_4i; }
		var typeB240 = document.getElementById( 'gen-b-1c-2b-3c-4j' ); if(typeB240) { typeB240.innerHTML += muta_b_1c_2b_3c_4j; }
		var typeB241 = document.getElementById( 'gen-b-1c-2c-3a-4a' ); if(typeB241) { typeB241.innerHTML += muta_b_1c_2c_3a_4a; }
		var typeB242 = document.getElementById( 'gen-b-1c-2c-3a-4b' ); if(typeB242) { typeB242.innerHTML += muta_b_1c_2c_3a_4b; }
		var typeB243 = document.getElementById( 'gen-b-1c-2c-3a-4c' ); if(typeB243) { typeB243.innerHTML += muta_b_1c_2c_3a_4c; }
		var typeB244 = document.getElementById( 'gen-b-1c-2c-3a-4d' ); if(typeB244) { typeB244.innerHTML += muta_b_1c_2c_3a_4d; }
		var typeB245 = document.getElementById( 'gen-b-1c-2c-3a-4e' ); if(typeB245) { typeB245.innerHTML += muta_b_1c_2c_3a_4e; }
		var typeB246 = document.getElementById( 'gen-b-1c-2c-3a-4f' ); if(typeB246) { typeB246.innerHTML += muta_b_1c_2c_3a_4f; }
		var typeB247 = document.getElementById( 'gen-b-1c-2c-3a-4g' ); if(typeB247) { typeB247.innerHTML += muta_b_1c_2c_3a_4g; }
		var typeB248 = document.getElementById( 'gen-b-1c-2c-3a-4h' ); if(typeB248) { typeB248.innerHTML += muta_b_1c_2c_3a_4h; }
		var typeB249 = document.getElementById( 'gen-b-1c-2c-3a-4i' ); if(typeB249) { typeB249.innerHTML += muta_b_1c_2c_3a_4i; }
		var typeB250 = document.getElementById( 'gen-b-1c-2c-3a-4j' ); if(typeB250) { typeB250.innerHTML += muta_b_1c_2c_3a_4j; }
		var typeB251 = document.getElementById( 'gen-b-1c-2c-3b-4a' ); if(typeB251) { typeB251.innerHTML += muta_b_1c_2c_3b_4a; }
		var typeB252 = document.getElementById( 'gen-b-1c-2c-3b-4b' ); if(typeB252) { typeB252.innerHTML += muta_b_1c_2c_3b_4b; }
		var typeB253 = document.getElementById( 'gen-b-1c-2c-3b-4c' ); if(typeB253) { typeB253.innerHTML += muta_b_1c_2c_3b_4c; }
		var typeB254 = document.getElementById( 'gen-b-1c-2c-3b-4d' ); if(typeB254) { typeB254.innerHTML += muta_b_1c_2c_3b_4d; }
		var typeB255 = document.getElementById( 'gen-b-1c-2c-3b-4e' ); if(typeB255) { typeB255.innerHTML += muta_b_1c_2c_3b_4e; }
		var typeB256 = document.getElementById( 'gen-b-1c-2c-3b-4f' ); if(typeB256) { typeB256.innerHTML += muta_b_1c_2c_3b_4f; }
		var typeB257 = document.getElementById( 'gen-b-1c-2c-3b-4g' ); if(typeB257) { typeB257.innerHTML += muta_b_1c_2c_3b_4g; }
		var typeB258 = document.getElementById( 'gen-b-1c-2c-3b-4h' ); if(typeB258) { typeB258.innerHTML += muta_b_1c_2c_3b_4h; }
		var typeB259 = document.getElementById( 'gen-b-1c-2c-3b-4i' ); if(typeB259) { typeB259.innerHTML += muta_b_1c_2c_3b_4i; }
		var typeB260 = document.getElementById( 'gen-b-1c-2c-3b-4j' ); if(typeB260) { typeB260.innerHTML += muta_b_1c_2c_3b_4j; }
		var typeB261 = document.getElementById( 'gen-b-1c-2c-3c-4a' ); if(typeB261) { typeB261.innerHTML += muta_b_1c_2c_3c_4a; }
		var typeB262 = document.getElementById( 'gen-b-1c-2c-3c-4b' ); if(typeB262) { typeB262.innerHTML += muta_b_1c_2c_3c_4b; }
		var typeB263 = document.getElementById( 'gen-b-1c-2c-3c-4c' ); if(typeB263) { typeB263.innerHTML += muta_b_1c_2c_3c_4c; }
		var typeB264 = document.getElementById( 'gen-b-1c-2c-3c-4d' ); if(typeB264) { typeB264.innerHTML += muta_b_1c_2c_3c_4d; }
		var typeB265 = document.getElementById( 'gen-b-1c-2c-3c-4e' ); if(typeB265) { typeB265.innerHTML += muta_b_1c_2c_3c_4e; }
		var typeB266 = document.getElementById( 'gen-b-1c-2c-3c-4f' ); if(typeB266) { typeB266.innerHTML += muta_b_1c_2c_3c_4f; }
		var typeB267 = document.getElementById( 'gen-b-1c-2c-3c-4g' ); if(typeB267) { typeB267.innerHTML += muta_b_1c_2c_3c_4g; }
		var typeB268 = document.getElementById( 'gen-b-1c-2c-3c-4h' ); if(typeB268) { typeB268.innerHTML += muta_b_1c_2c_3c_4h; }
		var typeB269 = document.getElementById( 'gen-b-1c-2c-3c-4i' ); if(typeB269) { typeB269.innerHTML += muta_b_1c_2c_3c_4i; }
		var typeB270 = document.getElementById( 'gen-b-1c-2c-3c-4j' ); if(typeB270) { typeB270.innerHTML += muta_b_1c_2c_3c_4j; }

	}
}


// Accions del botó 0 "Rebre les mostres"
document.getElementById('quiz-00-00-1').addEventListener('click', function clickEvent0000 () {
	finalitems("a");
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

document.getElementById('quiz-00-00-2').addEventListener('click', function clickEvent0000 () {
	finalitems("b");
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
	//alert("suma 1 = "+ sumar1(a1value, a2value, a3value, a4value) +" i suma 2 = "+ sumar2(b1value, b2value, b3value, b4value) );

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
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('quiz-01-04').addEventListener('click', function clickEvent0104() {
		document.getElementById('quiz-01-04-wrapper').classList.add('hide');
		document.getElementById('quiz-section-02').classList.add('active');
		scroll.update();
		scroll.scrollTo('#quiz-section-02');
	});
});


// Veure accions dels botons de l'slider "Com funcionen els factors de risc del càncer" al document "analysis-slider.js"

/* 
// Test slider
	document.getElementById('quiz-01-04').classList.add('hide');
	document.getElementById('quiz-section-02').classList.add('active');
	scroll.update();
	scroll.scrollTo('#quiz-section-02');
*/