/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('CommentsModule')
.factory('CommentService', ['MonthService', function (MonthService) {
        var commentService = {};

        commentService.currentEvent = MonthService.getCurrentEvent();
        commentService.getCurrentEvent = function () {
            return this.currentEvent;
        };

        commentService.setCurrentEvent = function (eventID) {
            this.currentEvent = eventID;
        };

        commentService.getEvent = function () {
            return MonthService.getEvent(this.getCurrentEvent());
        };

        commentService.allComment = [];
        commentService.currentVote = 1;

        commentService.getComments = function () {
            return MonthService.getComments(this.getCurrentEvent());
        };

        commentService.addComment = function(commentData){
            MonthService.addComment(this.getCurrentEvent(), commentData);
        };

        commentService.edit = function(arg){
            arg.hide = true;
            arg.show = false;
        };
        commentService.save = function(arg){
            arg.hide = false;
            arg.show = true;
        };
        commentService.delete = function(arg){
            //commentService.allComment.splice(commentService.allComment.indexOf(arg), 1);
            arg.shw = false;
        };
        commentService.addVote = function(arg){
            if(arg.downvote === arg.upvote){
                if(arg.upvote >= 1){
                    arg.upvote = 1;
                }else{
                    ++arg.upvote;
                }
            }else if(arg.downvote !== arg.upvote){
                if(arg.upvote === 0){
                    arg.upvote++;
                    arg.downvote = 0;
                }else{
                    arg.upvote--;
                }
            }
        };
        commentService.remVote = function(arg){
            if(arg.upvote === arg.downvote){
                if(arg.downvote >= 1){
                    arg.downvote = 1;
                }else{
                    ++arg.downvote;
                }
            }else if(arg.downvote !== arg.upvote){
                if(arg.downvote === 0){
                    arg.downvote++;
                    arg.upvote = 0;
                }else{
                    arg.downvote--;
                }
            }
        };

        return commentService;
}]);