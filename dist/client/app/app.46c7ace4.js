"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}angular.module("herokuNicoApp",["herokuNicoApp.constants","ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("herokuNicoApp.util",[]),angular.module("herokuNicoApp").controller("ResumeCtrl",["$scope","ResumeFactory",function(a,b){a.technologies=b.getTechnologies(),a.workExperience=b.getWorkExperience(),a.certifications=b.getCertifications(),a.educations=b.getEducations()}]),angular.module("herokuNicoApp").config(["$routeProvider",function(a){a.when("/get-in-touch",{url:"/get-in-touch",templateUrl:"app/get-in-touch/get-in-touch.html",controller:"GetInTouchCtrl"})}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var a=function(){function a(b){var c=this;_classCallCheck(this,a),this.$http=b,this.awesomeThings=[],b.get("/api/things").then(function(a){c.awesomeThings=a.data})}return a.$inject=["$http"],_createClass(a,[{key:"addThing",value:function(){this.newThing&&(this.$http.post("/api/things",{name:this.newThing}),this.newThing="")}},{key:"deleteThing",value:function(a){this.$http["delete"]("/api/things/"+a._id)}}]),a}();angular.module("herokuNicoApp").controller("MainController",a)}(),angular.module("herokuNicoApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainController"})}]),angular.module("herokuNicoApp").controller("ProjectsCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("herokuNicoApp").config(["$routeProvider",function(a){a.when("/projects",{url:"/projects",templateUrl:"app/projects/projects.html",controller:"ProjectsCtrl"})}]),angular.module("herokuNicoApp").controller("GetInTouchCtrl",["$scope","emailService",function(a,b){a.hideMessage=!1,a.sendEmail=function(){a.contactForm&&a.contactForm.$invalid||b.sendEmail(a.contactModel).then(function(b){a.successMessage="Thanks for your message!",setTimeout(function(){a.disableBtn=!0,a.hideMessage=!0,a.$apply()},5e3)})["catch"](function(b){a.errorMessage="Something went wrong :(, sh*&%t happens, please try again later",setTimeout(function(){a.hideMessage=!0,a.$apply()},5e3),console.warn(b)})}}]),angular.module("herokuNicoApp").config(["$routeProvider",function(a){a.when("/resume",{url:"/resume",templateUrl:"app/resume/resume.html",controller:"ResumeCtrl"})}]),angular.module("herokuNicoApp").factory("ResumeFactory",function(){return{getTechnologies:function(){return[{name:"Angular",stars:"stars-4"},{name:"SASS",stars:"stars-3"},{name:"HTML5",stars:"stars-3"},{name:"GRUNT",stars:"stars-4"},{name:"Maven",stars:"stars-4"},{name:"Bower",stars:"stars-4"},{name:"CouchDB",stars:"stars-3"},{name:"MongoDB",stars:"stars-3"},{name:"NPM",stars:"stars-4"},{name:"Javascript",stars:"stars-4"},{name:"CSS3",stars:"stars-4"},{name:"Jquery",stars:"stars-5"},{name:"NODEJs",stars:"stars-4"},{name:"Java",stars:"stars-4"},{name:"Hibernate",stars:"stars-3"},{name:"C#",stars:"stars-3"},{name:".NET",stars:"stars-3"}]},getWorkExperience:function(){return[{img:"../../assets/images/resume/spark.e631650c.svg",company:"Spark Ventures",city:"Auckland, New Zealand",period:"March 2014 - present",description:"Developing and maintaining web applications using java and nodejs in the backend, angular, html5, css3 in the frontend.",website:"http://www.sparkventures.co.nz/"},{img:"../../assets/images/resume/mako.df3e2db8.svg",company:"Mako Networks",city:"Auckland, New Zealand",period:"July 2013 - Februrary 2014",description:"Development of a cloud management platform that provides: network administration and configuration.",website:"https://www.makonetworks.com/"},{img:"../../assets/images/resume/moto.e0aa16e9.svg",company:"Motorola Mobility",city:"Cordoba, Argentina",period:"April 2011 - March 2013",description:"Development of Java Enterprise Integration projects using Service Oriented Architecture for world largest telecommunication companies.",website:"http://www.arrisi.com/"},{img:"../../assets/images/resume/utn.479fb6f0.svg",company:"UTN - CIDS",city:"Cordoba, Argentina",period:"February 2011 - March 2011",description:"Development of a web site for the Education department of the Argentina government.",website:"http://www.frc.utn.edu.ar/"}]},getCertifications:function(){return[{img:"../../assets/images/resume/java.c697c6d5.svg",title:"Java SE 6 Programmer",date:"January 2012"}]},getEducations:function(){return[{img:"../../assets/images/resume/utn.479fb6f0.svg",title:"Software Engineer",entity:"Universidad Tecnologica Nacional",date:"March 2005 - December 2010",city:"Cordoba, Argentina",website:"http://www.frc.utn.edu.ar/"}]}}}),angular.module("herokuNicoApp").service("emailService",["$http","configValues",function(a,b){return{sendEmail:function(c){if(c){c.emailTo=b.emailTo;var d=b.emailServiceUrl;return a({method:"POST",url:d,"Content-Type":"application/json",data:c})}}}}]),function(a,b){a.module("herokuNicoApp.constants",[]).constant("appConfig",{userRoles:["guest","user","admin"]})}(angular),function(){function a(a){var b={safeCb:function(a){return angular.isFunction(a)?a:angular.noop},urlParse:function(a){var b=document.createElement("a");return b.href=a,b},isSameOrigin:function(c,d){return c=b.urlParse(c),d=d&&[].concat(d)||[],d=d.map(b.urlParse),d.push(a.location),d=d.filter(function(a){return c.hostname===a.hostname&&c.port===a.port&&c.protocol===a.protocol}),d.length>=1}};return b}a.$inject=["$window"],angular.module("herokuNicoApp.util").factory("Util",a)}(),angular.module("herokuNicoApp").value("configValues",{emailServiceUrl:"/api/emails",emailTo:"contact@nicofetter.com"}),angular.module("herokuNicoApp").run(["$templateCache",function(a){a.put("app/get-in-touch/get-in-touch.html",'<div class="center-content get-in-touch"><h1>GET IN TOUCH</h1><div class=row><div class=col-xs-12><ul><li><form name=contactForm class=form-horizontal><div class=form-group><div class=col-xs-12><input class=form-control placeholder="Your name ..." name=name ng-model="contactModel.name"></div></div><div class=form-group><div class=col-xs-12><input class="col-xs-12 form-control" placeholder="Your email ..." name=emailFrom ng-model="contactModel.emailFrom"></div></div><div class=form-group><div class=col-xs-12><textarea type=text class="col-xs-12 form-control" placeholder="Your message ..." rows=6 name=content ng-model="contactModel.content">\r\n              </div>\r\n            </div>\r\n            <div class=form-group>\r\n              <div class=col-xs-12>\r\n                <input type=button ng-disabled=disableBtn class="btn btn-lg" ng-click=sendEmail() value="SEND">\r\n              </div>\r\n              <div class=messages>\r\n                <p class=success ng-class="(hideMessage)?\'hide-message\':\'\'">{{successMessage}}</p>\r\n                <p class=error ng-class="(hideMessage)?\'hide-message\':\'\'">{{errorMessage}}</p>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </li>\r\n        <li>\r\n          <section class=ss-icon>\r\n            <div class=icon-container>\r\n              <a href=#><article><span>facebook</span></article></a>\r\n              <a href=#><article><span>twitter</span></article></a>\r\n              <a href=#><article><span>linkedin</span></article></a>\r\n            </div>\r\n          </section>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>'),a.put("app/main/main.html","<div class=center-content><h1>Hi! Im Nicolas, a software engineer passionate about tech startups and web development.</h1></div>"),a.put("app/projects/projects.html",'<div class="center-content projects"><h1>PROJECTS</h1><div class=row><div class=col-xs-12><ul><li><a href=http://www.rugbyexchangenz.com target=_blank title="Rugby Exchange NZ"><img src=../../assets/images/projects/rugbyx.1d16ed85.png alt=""></a><h3><a href=http://www.rugbyexchangenz.com target=_blank title="Rugby Exchange NZ">Rugby Exchange NZ</a></h3><h4>Website for a New Zealand company committed to providing a unique life experience through Rugby as a means of cultural connection.</h4></li></ul></div></div></div>'),a.put("app/resume/resume.html",'<div class="center-content resume"><h1>RESUME</h1><div class=row><div class=col-sm-5><h2>Technologies</h2><ul><li class="resume-tech {{tech.stars}}" ng-repeat="tech in technologies"><div class=row><div class="col-xs-3 col-sm-12 col-lg-3"><h4>{{tech.name}}</h4></div><div class="col-xs-6 col-sm-12 col-lg-9"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div></div></li></ul><h2>Certifications</h2><ul><li class=experience-item ng-repeat="certification in certifications"><div class=experience-header><img ng-src={{certification.img}}><div><h3>{{certification.title}}</h3></div><div><h4>{{certification.date}}</h4></div></div></li></ul></div><div class=col-sm-7><h2>Work Experience</h2><ul><li class=experience-item ng-repeat="experience in workExperience"><div class=experience-header><img ng-src={{experience.img}}><div><h3>{{experience.company}}</h3></div><div><h4>{{experience.period}}</h4></div></div><p>{{experience.description}}</p><div><div class=col-xs-6><i class="fa fa-map-marker"></i> {{experience.city}}</div><div class=col-xs-6><a href={{experience.website}} target=_blank><i class="fa fa-link"></i> Website</a></div></div></li></ul><h2>Education</h2><ul><li class=experience-item ng-repeat="education in educations"><div class=experience-header><img ng-src={{education.img}}><div><h3>{{education.title}}</h3></div><div><h4>{{education.date}}</h4></div></div><div><div class=col-xs-6><i class="fa fa-map-marker"></i> {{education.city}}</div><div class=col-xs-6><a href={{education.website}} target=_blank><i class="fa fa-link"></i> Website</a></div></div></li></ul></div></div></div>')}]);