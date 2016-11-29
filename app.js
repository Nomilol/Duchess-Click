console.log('start');
(function(){
	var app = {
		init : function(){
			app.listeners();
			$('#carteProfil').hide();
		},
		listeners : function(){
			$('#profil').on('click', app.viewProfil);
		},
		viewProfil : function(){
			var infos = {status : 'filleule', prenom : 'Axelle', nom : 'Lezina', job : 'Dev chez Blizzard'};
			$('#carteProfil').show();
			$('#carteProfil').text(infos.status + " " + infos.prenom +" "+ infos.nom +" "+ infos.job);
			$('#carteProfil').css("background-color", 'white');
			
			

		}
	}

















	app.init()
})();