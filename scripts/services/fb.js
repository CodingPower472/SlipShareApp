app.constant('FB_SLIPS_URL', 'https://slipshareapp.firebaseio.com/slips')

app.factory('slips', ['FB_SLIPS_URL', '$firebaseArray', function (FB_SLIPS_URL, $firebaseArray) {
  var ref = new Firebase(FB_SLIPS_URL);
  return $firebaseArray(ref);
}]);