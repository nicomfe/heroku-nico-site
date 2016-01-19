'use strict';

angular.module('herokuNicoApp').service('emailService',function($http, configValues){
  return{
    sendEmail: function(contactModel){
      if(contactModel){
        contactModel.emailTo = configValues.emailTo;
        var url = configValues.emailServiceUrl;
        return $http({
          method: 'POST',
          url: url,
          'Content-Type': 'application/json',
          data: contactModel
        });
      }
    }
  };
});