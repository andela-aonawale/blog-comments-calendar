/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('CommentsModule')
.directive('commentList', [function(){
    return{
        restrict: 'E',
        templateUrl: './app/comments/partials/comment-list.html'
    };
}]);