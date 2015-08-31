(function(){
	var app = angular.module('memeMaker', ['pascalprecht.translate']);
	app.constant('appSettings', {
		title: 'Meme Maker',
		version: '0.1.5',

	});
    app.config(['$translateProvider', function ($translateProvider) {
    	$translateProvider.translations('en', {
    		'USER': 'User Name',
    		'PASSWORD': 'Password',
    		'SIGNIN': 'Sign In',
    		'DONATE': 'Donate',
    		'SETTING': 'Setting',
    		'TEXTCOLOR': 'Text Color',
    		'BGTYPE': 'Background Type',
    		'BGCOLOR':'Background Color',
    		'CANVASW': 'Canvas Width',
    		'CANVASH':'Canvas Height',
    		'PREVIEW': 'Preview',
    		'SAVE':'Save',
    		'YOURMEME': 'Your meme is here',
    		'TOPLINE': 'Top Line',
    		'BOTTONMLINE': 'Bottom Line'
    	});

    	$translateProvider.translations('fr', {
    		'USER': "Nom d'utilisateur",
    		'PASSWORD': 'Mot de passe',
    		'SIGNIN': 'Se connecter',
    		'DONATE': 'Faire un don',
    		'SETTING': 'Réglage',
    		'TEXTCOLOR': 'Couleur du texte',
    		'BGTYPE': 'Type de fond',
    		'BGCOLOR':'Couleur de fond',
    		'CANVASW': 'Largeur Toile',
    		'CANVASH':'Toile Hauteur',
    		'PREVIEW': 'Aperçu',
    		'SAVE':'Enregistrer',
    		'YOURMEME': 'Votre meme est ici',
    		'TOPLINE': 'ligne supérieure',
    		'BOTTONMLINE': 'Ligne inférieure'
    	});

    	$translateProvider.translations('sp', {
    		'USER': 'Nombre de usuario',
    		'PASSWORD': 'Contraseña',
    		'SIGNIN': 'Firme',
    		'DONATE': 'Donar',
    		'SETTING': 'Ajuste',
    		'TEXTCOLOR': 'Color de texto',
    		'BGTYPE': 'Tipo de fondo',
    		'BGCOLOR':'Color de fondo',
    		'CANVASW': 'Ancho lienzo',
    		'CANVASH':'lienzo Altura',
    		'PREVIEW': 'Vista previa',
    		'SAVE':'Guardar',
    		'YOURMEME': 'Su meme está aquí',
    		'TOPLINE': 'Línea superior',
    		'BOTTONMLINE': 'línea inferior'
    	});
    	$translateProvider.preferredLanguage('en');    	    
    }]);

}());