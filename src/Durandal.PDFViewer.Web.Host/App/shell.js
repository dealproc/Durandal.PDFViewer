define(["durandal/system", "durandal/app", "plugins/router"], function (system, app, router) {
	router.map([
		{ route: "", title: "PDF Viewer", moduleId: "viewer/index", nav: true }
	]).buildNavigationModel();
	return {
		router: router,
		activate: function () {
			return this.router.activate();
		}
	}
});