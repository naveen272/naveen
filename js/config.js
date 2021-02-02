var localURL = "http://localhost/microsite/";
var apiURL="https://plsuat.europassistance.in/api/";
var payUAPI="http://13.235.3.131/api/payumoney/pay";
//for testing
var googleApi="https://maps.googleapis.com/maps/api/js?key=AIzaSyAP8r76dTUNFtejkwPtBv49YmDNfO8fQPs&libraries=places&language=en";
//for live 
//var googleApi="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHE63tfw3AxMsCuRYUF6oqXd8Feu-cXts&libraries=places&language=en"
var micrositeId = '';
function getProviderName(schemetype) {
	var providername = schemetype;
	if (schemetype == 'ROENRTL' || schemetype == 'RoyalSundaramRSA' || schemetype == 'ROENRSA') {
		//providername = 'RoyalEnfield';
		providername = 'MSiteRe';
	} else if (schemetype == 'MHDRRERSA') {
		providername = 'MahindraReva';
	} else if (schemetype == 'MHDRVERSA') {
		providername = 'Mahindra';
	} else if (schemetype == 'Hero' || schemetype == 'HeroRetail') { 
		providername = 'Hero';
	} else if (schemetype == 'vw' || schemetype == 'VOLKSWAGEN_RETAIL') {
		providername = 'VOLKSWAGEN';
	} else if(schemetype == 'SKODA'){
		providername = 'SKODA';	
	} else if (schemetype == 'FGIRSA') { 
		providername = 'DecisionMatrixFW';
	} else if(schemetype == 'DUCATIRSA'){
		providername = 'All';
	} else if(schemetype == 'GODRSA'){
		providername = 'DecisionMatrixFW'; 
	} else if(schemetype == 'HDFCErgo'){
		providername = 'DecisionMatrixFW'; 
	} else if(schemetype == 'AUDI'|| schemetype == 'AUDI_RETAIL'){
		providername = 'AUDI'; 
	} else if(schemetype == 'PORSCHE'|| schemetype == 'PORSCHE_RETAIL'){
		providername = 'PORSCHE'; 
	} else if(schemetype == 'HONDACARS_RETAIL'){
		providername = 'HONDACARS'; 
	} else if(schemetype == 'AtherEnergyRSA'){
		providername = 'AtherEnergyRSA'; 
	} else if(schemetype == 'ORIXRSA'){
		providername = 'DecisionMatrixFW'; 
	} else if(schemetype == 'IFFCOTOKIO'){
		providername = 'DecisionMatrixFW'; 
	} else if (schemetype == 'FIATRSA') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'PIGORSA') {
		providername = 'PIGORSA';
	} else if (schemetype == 'KTM' || schemetype == 'KTM_INCLUSION') {
		providername = 'KTM';
	} else if (schemetype == 'MAGMAHDI') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'LIBERTY-2Wheelers' || schemetype == 'LIBERTY-4Wheelers') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'BPATYRSA') {
		providername = 'BENEINDRSA';
	} else if (schemetype == 'HYUNDAIRSA') {
		providername = 'All';
	} else if (schemetype == 'BEHUECRSA') {
		providername = 'All';
	} else if (schemetype == 'DSKBRSA') {
		providername = 'BENEINDRSA';
	} else if (schemetype == 'BENEINDRSA') {
		providername = 'BENEINDRSA';
	} else if (schemetype == 'BAXARSA') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'CHOLA-2Wheelers' || schemetype == 'CHOLA-4Wheelers') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'NAGIRSA') {
		providername = 'All';
	} else if (schemetype == 'INDIANMOTORCYCLESRSA') {
		providername = 'INDIANMOTORCYCLESRSA';
	} else if (schemetype == 'KWSIRSA') {
		providername = 'KWSIRSA';
	} else if (schemetype == 'LETSTRACK_2W') {
		providername = 'All';
	} else if (schemetype == 'L&T-FinanceRSA') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'MahindraFirstChoice') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'MotoRoyale') {
		providername = 'MotoRoyale';
	} else if (schemetype == 'OnDemandRSA') {
		providername = 'All';
	} else if (schemetype == 'OASSRSA') {
		providername = 'DecisionMatrixFW';
	} else if (schemetype == 'TRIUMPHRSA') {
		providername = 'TRIUMPHRSA';
	} else if (schemetype == 'YMHARSA') {
		providername = 'YMHARSA';
	}
	return providername;
	
}
function getSchemeName(brand) {
	var schemeName = '';
	if (brand == 're') {
		schemeName = "Royal Enfield";
	} else if (brand == 'vw') {
		schemeName = 'VOLKSWAGEN';
	}else if (brand == 'hero') {
		schemeName = 'Hero';		
	}else if (brand == 'honda') {
		schemeName = 'HONDACARS_RETAIL';
	}else if(brand == 'skoda'){
			schemeName = 'SKODA';
	}else if(brand == 'ducati'){
		schemeName = 'DUCATI RSA';
	}else if(brand == 'hdfcergo'){
			schemeName = 'HDFC Ergo';
	}else if(brand == 'godigit'){
			schemeName = 'GO-DIGIT RSA';
	}else if(brand == 'audi'){
			schemeName = 'AUDI' ;
	}else if(brand == 'porsche'){
			schemeName = 'PORSCHE';
	}else if(brand == 'fgi'){
			schemeName = 'FGI RSA';
	}else if(brand == 'atherenergy'){
			schemeName = 'AtherEnergyRSA';
	}else if(brand == 'orixrsa'){
			schemeName = 'ORIX RSA';
	}else if(brand == 'iffcotokio'){
			schemeName = 'IFFCO TOKIO';
	}else if(brand == 'mahindraverito'){
			schemeName = 'Mahindra Verito RSA';
	}else if(brand == 'fiatrsa'){
			schemeName = 'Fiat RSA';
	}else if(brand == 'piaggiorsa'){
			schemeName = 'Piaggio RSA';
	}else if(brand == 'ktmrsa'){
			schemeName = 'KTM';
	}else if(brand == 'magmahdirsa'){
			schemeName = 'MAGMA HDI';
	}else if(brand == 'libertytwowheeler'){
			schemeName = 'LIBERTY-2Wheelers';
	}else if(brand == 'libertyfourwheeler'){
			schemeName = 'LIBERTY-4Wheelers';
	}else if(brand == 'benelliPremiumrsa'){
			schemeName = 'BENELLIPreAuto2Y';
	}else if(brand == 'adityabirlarsa'){
			schemeName = 'AB-Hyundai RSA';
	}else if(brand == 'beinghumanrsa'){
			schemeName = 'Being Human E-Cycle RSA';
	}else if(brand == 'dskbenellirsa'){
			schemeName = 'DSK Benelli RSA';
	}else if(brand == 'benelliindiarsa'){
			schemeName = 'Benelli India RSA';
	}else if(brand == 'bhartiaxarsa'){
			schemeName = 'Bharti AXA RSA';
	}else if(brand == 'cholatwowheeler'){
			schemeName = 'CHOLA-2Wheelers';
	}else if(brand == 'cholafourwheeler'){
			schemeName = 'CHOLA-4Wheelers';
	}else if(brand == 'navigeneralrsa'){
			schemeName = 'NAVI General Insurance RSA';
	}else if(brand == 'indianmotorcycle'){
			schemeName = 'INDIANMOTORCYCLESRSA';
	}else if(brand == 'kawasaki'){
			schemeName = 'Kawasaki RSA';
	}else if(brand == 'ktminclusion'){
			schemeName = 'KTM_INCLUSION';
	}else if(brand == 'letstrackrrsa'){
			schemeName = 'LETSTRACK_2W';
	}else if(brand == 'lntfinancersa'){
			schemeName = 'L&T-FinanceRSA';
	}else if(brand == 'mahindrafcrsa'){
			schemeName = 'MahindraFirstChoice';
	}else if(brand == 'motoroyalersa'){
			schemeName = 'Moto Royale';
	}else if(brand == 'ondemandrsa'){
			schemeName = 'OnDemandRSA';
	}else if(brand == 'oneassistrsa'){
			schemeName = 'One Assist RSA';
	}else if(brand == 'triumphrsa'){
			schemeName = 'TRIUMPHRSA';
	}else if(brand == 'yamaharsa'){
			schemeName = 'Yamaha RSA';
	}else if(brand == 'mahindrareva'){
		    schemeName = 'Mahindra Reva RSA';
	}
	return schemeName;
}

function getServiceSubtype(schemeName) {
	console.log("schemeName123" + schemeName);
	var serviceSunType = "";
	if (schemeName == "ROENRSA" || schemeName == "ROENRTL" || schemeName == "Hero" || schemeName == "AtherEnergyRSA" || schemeName == "KTM" || schemeName == "LIBERTY-2Wheelers" || schemeName == "BPATYRSA" || schemeName == "HYUNDAIRSA" || schemeName == "BEHUECRSA" ||  schemeName == 'DSKBRSA' || schemeName == 'BENEINDRSA' || schemeName == 'BAXARSA' || schemeName == 'CHOLA-2Wheelers' || schemeName == 'NAGIRSA' || schemeName == 'INDIANMOTORCYCLESRSA' || schemeName == 'KWSIRSA' || schemeName == 'KTM_INCLUSION' || schemeName == 'LETSTRACK_2W' || schemeName == 'L&T-FinanceRSA' || schemeName == 'MahindraFirstChoice' || schemeName == 'MotoRoyale' || schemeName == 'OnDemandRSA' ||  schemeName == 'OASSRSA' || schemeName == 'PIGORSA' || schemeName == 'TRIUMPHRSA' || schemeName == 'YMHARSA') {
		serviceSunType = "two_wheeler";
	} else if (schemeName == "HONDACARS_RETAIL" || schemeName == "VOLKSWAGEN" || schemeName == "FGI RSA" || schemeName == "SKODA"|| schemeName == "HDFC Ergo"|| schemeName == "GO-DIGIT RSA" || schemeName == "AUDI"|| schemeName == "PORSCHE" || schemeName == "ORIXRSA" || schemeName == "IFFCO TOKIO"  || schemeName == "Mahindra Verito RSA" || schemeName == "Fiat RSA" || schemeName == "Piaggio RSA" || schemeName == "MAGMAHDI" || schemeName == "LIBERTY-4Wheelers" || schemeName == "BPATYRSA" || schemeName == "HYUNDAIRSA" || schemeName == 'BAXARSA' || schemeName == 'CHOLA-4Wheelers' || schemeName == 'NAGIRSA' || schemeName == 'INDIANMOTORCYCLESRSA' || schemeName == 'L&T-FinanceRSA' || schemeName == 'MahindraFirstChoice' || schemeName == 'OnDemandRSA' || schemeName == 'OASSRSA' || schemeName == 'MHDRRERSA') {
		serviceSunType = "four_wheeler";
	}
	return serviceSunType;

}
function createLog(logPage,logMessage,custPhone,custName,paymentStatus,caseId,micrositeId){
          console.log('log created for ' +logPage);
	      micrositeId= localStorage.getItem('micrositeId');
 	             $.ajax({
						url: apiURL + 'eaiMicroSite/createOrUpdateLog',
						type: 'POST',
						data: {
							    "customerPhone":custPhone,
								"customerName":custName,
								"currentStatus": logMessage,
								"currentPage":logPage,
								"payment_status": paymentStatus,
								"caseId": caseId,
								"microsite_LogId":micrositeId
						},
						dataType: 'json',
						success: function (data) {
						   if(micrositeId=='' || micrositeId===null){
						     micrositeId =  data.message.micrositeId;
							 localStorage.setItem('micrositeId',micrositeId);
						   }


						}

					});

}
function gethelpline(brand) {

	var helplineno = '';
	var helplineno2 = '';
	if (brand == 're') {
		helplineno = "1800 2100 007";
	} else if (brand == 'vw') {
		helplineno = '1800 419 1155';
		helplineno2 = '1800 102 1155';
	} else if (brand == 'honda') {
		helplineno = '1800 266 0130';
		helplineno2 = '1800 103 5130';
	} else if(brand =='ducati'){
		helplineno = "1800 267 9727";
	} else if(brand == 'hero'){
		helplineno = "1800 2667 166";
	} else if(brand == 'fgi'){
		helplineno = "1860 5003 333";
	} else if (brand == 'skoda') {
		helplineno = '1800 209 4646';
		helplineno2 = '1800 102 6464';
	} else if (brand == 'godigit') {
		helplineno = '1800 258 5956';
	} else if (brand == 'hdfcergo') {
		helplineno = '022 6234 6234';
	} else if (brand == 'audi') {
		helplineno = '1800 103 6800';
		helplineno2 = '1800 209 6800';
	} else if (brand == 'porsche') {
		helplineno = '1800 103 6911';
		helplineno2 = '1800 108 6911';
	}  else if (brand == 'atherenergy') {
		helplineno = '022-67872052';
	} else if (brand == 'orixrsa') {
		helplineno = '022 67872009';
	} else if (brand == 'iffcotokio') {
		helplineno = '1800 267 6787';
	} else if (brand == 'mahindraverito') {
		helplineno = '1800 266 7070';
	} else if (brand == 'fiatrsa') {
		helplineno = '1800 209 3428';
	} else if (brand == 'piaggiorsa') {
		helplineno = '1800 209 0260';
	} else if (brand == 'ktmrsa' || brand == 'ktminclusion') {
		helplineno = '1800 267 0268';
	} else if (brand == 'magmahdirsa') {
		helplineno = '1800 266 3202';
	} else if (brand == 'libertytwowheeler' || brand == 'libertyfourwheeler') {
		helplineno = '1800 266 5055';
	} else if (brand == 'benelliPremiumrsa' || brand == 'dskbenellirsa' || brand == 'benelliindiarsa') {
		helplineno = '1800 210 9161';
	} else if (brand == 'adityabirlarsa') {
		helplineno = '1800 270 7000';
	} else if (brand == 'beinghumanrsa') {
		helplineno = '1800 266 9818';
	} else if (brand == 'bhartiaxarsa') {
		helplineno = '1800 103 5243';
	} else if (brand == 'cholatwowheeler' || brand == 'cholafourwheeler') {
		helplineno = '1800 209 5354';
		helplineno2 = '1800 103 5354';
	} else if(brand == 'navigeneralrsa'){
		helplineno = '1800 266 8088';
	} else if(brand == 'indianmotorcycle'){
		helplineno = '1800 266 0766';
	} else if(brand == 'kawasaki'){
		helplineno = '1800 266 0355';
	} else if(brand == 'letstrackrrsa'){
		helplineno = '780 000 6878';
		helplineno2 = '782 782 2000';
	} else if(brand == 'lntfinancersa'){
		helplineno2 = '0226 787 2064';
	} else if(brand == 'mahindrafcrsa'){
		helplineno = '1800 224 008';
	} else if(brand == 'motoroyalersa'){
		helplineno2 = '0226 787 2012 ';
	} else if(brand == 'ondemandrsa'){
		helplineno = '0226 787 2055';
	} else if(brand == 'oneassistrsa'){
		helplineno2 = '0226 787 2020';
	} else if(brand == 'triumphrsa'){
		helplineno = '1800 266 0375';
	} else if(brand == 'yamaharsa'){
		helplineno = '1800 209 5125';
	} else if(brand == 'mahindrareva'){
		helplineno = '1800 267 0102';
	}
	return {helplineno,helplineno2};
}

function getClientName(brand) {
	var clientName = '';
	
	if (brand == 'vw') {
		clientName = 'Volkswagen';
		
	}else if (brand == 'honda') {
		clientName = 'Honda';
		
	}else if(brand == 'skoda'){
		clientName = 'Skoda';
		
	}else if(brand == 'audi'){
		clientName = 'Audi' ;
		
	}else if(brand == 'porsche'){
		clientName = 'Porsche';
		
	}else if(brand == 're'){
		clientName = 'Royal Enfield';
		
	}
	return clientName;
	
}

function getvehicleMake(brand) {
	
	var vehicleMake=''
	if (brand == 'vw') {
		
		vehicleMake = 'Volkswagen';
	}else if (brand == 'honda') {
		
		vehicleMake = 'Honda';
	}else if(brand == 'skoda'){
		vehicleMake = 'Skoda';
	}else if(brand == 'audi'){
		
		vehicleMake = 'Audi' ;
	}else if(brand == 'porsche'){
		
		vehicleMake = 'Porsche';
	}else if(brand == 're'){
		
		vehicleMake = 'Royal Enfield';
	}
	
	return vehicleMake;
}


