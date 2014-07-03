Durandal.PDFViewer
==================

PDF Viewer Module for DurandalJS

One of the lacking elements I haven't been able to find for DurandalJS, or any client-side framework right now (AngularJS - I'm talking to you too!) is an ability to display a report to the end user.  In console applications, you have an ability to do this using a ReportViewer control (like you get for Sql Server Reporting Services).

With the web, the traditional mechanism is to download a pdf document that the end user has to open in a supported pdf browser.  Although this works, it's a context switch, and doesn't make the web application as viable of an option as a thick client application in regard to report generation and display.

Searching the internet, I've come across Mozilla's PDF Viewer many times, but it only recently clicked that it could be used for this scenario.

So the goal for this is to create a basic dashboard that I can, within a DurandalJS application, download a pdf document from a NancyFX Endpoint, render it within the PDF.JS tools, and also provide the user a link to download the physical file, if they so desire.

From here, the project will fork to a new repository to integrate the Sql Server Report Viewer into the NancyFX application, and allow the rendering of the prompts, values, etc. as well as execute the report without the need of Sql Server Reporting Services.


References
======================
###Mozilla PDF Viewer
http://mozilla.github.io/pdf.js/

###Durandal JS
http://durandaljs.com/
