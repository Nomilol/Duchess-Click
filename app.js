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
			var infos = {
				status : 'Filleule',
				prenom : 'Axelle',
				nom : 'Lezina',
				job : 'Développeuse chez Blizzard Entertainement',
				location : 'Toulouse',
				description : 'Je suis très intelligente',
				communication : 'Slack'
			}
			$('#carteProfil').show();
			$('.status').text(infos.status);
			$('.prenom').text(infos.prenom);
			$('.nom').text(infos.nom);
			$('.boulot').text(infos.job);
			$('.lieu').text(infos.location);
			$('.presentation').text(infos.description);
			$('.communication').text(infos.communication);
			$('#carteProfil').css("background-color", '#f100e5'); 
		}
	}
















	app.init()
})();