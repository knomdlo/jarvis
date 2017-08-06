angular
  .module('jarvis')
  .config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
      verticalPosition: 'top',
      horizontalPosition: 'center',
      animation: 'fade'
    });
  }]);