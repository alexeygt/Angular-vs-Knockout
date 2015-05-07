#!/bin/sh
pm2 start -i 1 ./SPA/AngularFrontEnd/angular.js --name AngularJS
pm2 start -i 1 ./SPA/KnockoutFrontEnd/knockout.js --name KnockoutJS
