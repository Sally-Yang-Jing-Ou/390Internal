 angular.module('myApp', ['ngTagsInput'])
    .controller('MyCtrl', function($scope, $http) {
    $scope.tags = [
        { text: 'just' },
        { text: 'some' },
        { text: 'cool' },
        { text: 'tags' }
    ];
    // $scope.loadTags = function(query) {
    //     return $http.get('/tags?query=' + query);
    // };
});