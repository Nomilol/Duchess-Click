console.log('start');
(function(){
	var app = {
		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#profil').on('click', app.viewProfil);
		},
		viewProfil : function(){
			console.log('on peut voir le profil');
		}
	}

















	app.init()
})();