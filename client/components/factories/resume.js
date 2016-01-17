'use strict';

angular.module('herokuNicoApp').factory('ResumeFactory',function(){
    return {
      getTechnologies: function(){
        return[
          {
            name: 'Angular',
            stars: 'stars-4'
          },
          {
            name: 'SASS',
            stars: 'stars-3'
          },
          {
            name: 'HTML5',
            stars: 'stars-3'
          },
          {
            name: 'GRUNT',
            stars: 'stars-4'
          },
          {
            name: 'Maven',
            stars: 'stars-4'
          },
          {
            name: 'Bower',
            stars: 'stars-4'
          },
          {
            name: 'CouchDB',
            stars: 'stars-3'
          },
          {
            name: 'MongoDB',
            stars: 'stars-3'
          },
          {
            name: 'NPM',
            stars: 'stars-4'
          },
          {
            name: 'Javascript',
            stars: 'stars-4'
          },
          {
            name: 'CSS3',
            stars: 'stars-4'
          },
          {
            name: 'Jquery',
            stars: 'stars-5'
          },
          {
            name: 'NODEJs',
            stars: 'stars-4'
          },
          {
            name: 'Java',
            stars: 'stars-4'
          },
          {
            name: 'Hibernate',
            stars: 'stars-3'
          },
          {
            name: 'C#',
            stars: 'stars-3'
          },
          {
            name: '.NET',
            stars: 'stars-3'
          }
        ];
      },
      getWorkExperience: function(){
        return[
          {
            img:'../../assets/images/resume/spark.svg',
            company:'Spark Ventures',
            city: 'Auckland, New Zealand',
            period:'March 2014 - present',
            description:'Developing and maintaining web applications using java and nodejs in the backend, angular, html5, css3 in the frontend.',
            website: 'http://www.sparkventures.co.nz/'
          },
          {
            img:'../../assets/images/resume/mako.svg',
            company:'Mako Networks',
            city: 'Auckland, New Zealand',
            period:'July 2013 - Februrary 2014',
            description:'Development of a cloud management platform that provides: network administration and configuration.',
            website: 'https://www.makonetworks.com/'
          },
          {
            img:'../../assets/images/resume/moto.svg',
            company:'Motorola Mobility',
            city: 'Cordoba, Argentina',
            period:'April 2011 - March 2013',
            description:'Development of Java Enterprise Integration projects using Service Oriented Architecture for world largest telecommunication companies.',
            website: 'http://www.arrisi.com/'
          },
          {
            img:'../../assets/images/resume/utn.svg',
            company:'UTN - CIDS',
            city: 'Cordoba, Argentina',
            period:'February 2011 - March 2011',
            description:'Development of a web site for the Education department of the Argentina government.',
            website: 'http://www.frc.utn.edu.ar/'
          },
        ];
      },
      getCertifications: function(){
        return[
          {
            img:'../../assets/images/resume/java.svg',
            title:'Java SE 6 Programmer',
            date:'January 2012'
          }
        ];
      },
      getEducations: function(){
        return[
          {
            img:'../../assets/images/resume/utn.svg',
            title:'Software Engineer',
            entity:'Universidad Tecnologica Nacional',
            date:'March 2005 - December 2010',
            city: 'Cordoba, Argentina',
            website: 'http://www.frc.utn.edu.ar/'
          }
        ];
      }
    };
});