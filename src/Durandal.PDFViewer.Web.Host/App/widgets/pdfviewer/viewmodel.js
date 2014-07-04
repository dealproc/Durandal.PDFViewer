define(["jquery"], function ($) {
	var ctor = function () { };

	ctor.prototype.PDFCanvas = undefined;
	ctor.prototype.PDFCanvasContext = undefined;
	ctor.prototype.PDF = undefined;

	ctor.prototype.CurrentPage = 1;
	ctor.prototype.TotalPages = 1;
	ctor.prototype.toolbarWidth = 50;

	ctor.prototype.attached = function (view) {
		var _Self = this;
		_Self.PDFCanvas = $("#pdfcanvas", view).get(0);
		//_Self.PDFCanvasContext = _Self.PDFCanvas.getContext("2d");
		//
		//
		//PDFJS.getDocument("/compressed.tracemonkey-pldi-09.pdf").then(function (pdf) {
		//	_Self.PDF = pdf;
		//	_Self.TotalPages = pdf.numPages;
		//	
		//	_Self.getPage(_Self.CurrentPage);
		//});
		// Using promise to fetch the page
		PDFJS.getDocument("/compressed.tracemonkey-pldi-09.pdf").then(function (pdf) {
			_Self.PDF = pdf;
			_Self.TotalPages = pdf.numPages;
			_Self.getPage(_Self.CurrentPage);
		});
	};
	ctor.prototype.getPage = function (pageNumber) {
		var _Self = this;

		_Self.PDF.getPage(pageNumber).then(function (page) {
			var scale = 1.0;
			var viewport = page.getViewport(scale);

			//
			// Prepare canvas using PDF page dimensions
			//
			var context = _Self.PDFCanvas.getContext('2d');
			_Self.PDFCanvas.height = viewport.height;
			_Self.PDFCanvas.width = viewport.width;
			_Self.toolbarWidth = viewport.width + "px";

			//
			// Render PDF page into canvas context
			//
			var renderContext = {
				canvasContext: context,
				viewport: viewport
			};
			page.render(renderContext);
		});
	};
	ctor.prototype.nextPage = function () {
		if (this.CurrentPage + 1 <= this.TotalPages) {
			this.CurrentPage += 1;
			this.getPage(this.CurrentPage);
		}
	};
	ctor.prototype.prevPage = function () {
		if (this.CurrentPage - 1 >= 1) {
			this.CurrentPage -= 1;
			this.getPage(this.CurrentPage);
		}
	};

	return ctor;
});