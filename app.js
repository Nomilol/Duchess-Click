console.log('start');
(function(){
	var app = {
		init : function(){
			app.listeners();
			$('#carteProfil').hide();
			$('#profilCard').hide();
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
				description : 'J\'adore le JavaScript',
				communication : 'Slack'
			}
			$('#profilCard').show();
			$('#carteProfil').show();
			$('.status').text(infos.status);
			$('.prenom').text(infos.prenom);
			$('.nom').text(infos.nom);
			$('.boulot').text(infos.job);
			$('.lieu').text(infos.location);
			$('.presentation').text(infos.description);
			$('.communication').text(infos.communication);

		}
	}
















	app.init()
})();