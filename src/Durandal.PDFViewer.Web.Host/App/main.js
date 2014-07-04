requirejs.config({
	paths: {
		'text': '/Scripts/text',
		'durandal': '/Scripts/durandal',
		'plugins': '/Scripts/durandal/plugins',
		'transitions': '/Scripts/durandal/transitions'
	}
});

define('jquery', function () { return jQuery });
define("knockout", ko);

define(["durandal/system", "durandal/app", "durandal/viewlocator"], function (system, app, viewLocator) {
	//>>excludeStart("build",true);
	system.debug(true);
	//>>excludeEnd("build");

	app.title = "PDF Viewer";

	app.configurePlugins({
		observable: true,
		router: true,
		dialog: true,
		widget: true
	});
	app.start().then(function () {
		viewLocator.useConvention();
		app.setRoot('shell');
	});
});