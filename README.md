#HTML-linker#

HTML-Linker is a micro-framework built in HTML5 and JavaScript that allows you to link HTML pages together for a static website without using Express or Node. This application is published as an npx command ```npx html-linker <project-name>```.

##Getting Started##
To get started with HTML-Linker, you need to have Node.js installed on your computer. Once you have Node.js installed, you can run the following command to create a new project: ```npx html-linker <project-name>```

##Usage##
Once you have created your project, you can use HTML-Linker to link your HTML pages together.
###Tour##
* In ```index.html``` you can insert a ```<page>``` element to summon a new HTML page from ```'./views'```.
* Pages are linked in alphabetical/numerical order.
* Inside of the scripts folder the ```app.js``` file contains any script you desire to add to your page.
* Inside of ```index.css``` you can put all of your project's CSS.
* Inside of ```index.js``` is the engine that links your index.html to the <page> elements.
##Contributing##
If you would like to contribute to HTML-Linker, please feel free to submit a pull request. We welcome any contributions, including bug fixes, new features, and documentation improvements.
