/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('CommentsModule')
    .controller('CommentsController', ['CommentService', function(CommentService){
        var commentController = this;

        commentController.currentEvent = CommentService.getEvent();
        commentController.comments = CommentService.getComments();

        commentController.addComment = function (commentData) {
            var newComment = {};
            newComment.name = commentData.name;
            newComment.email = commentData.email;
            newComment.text = commentData.text;
            newComment.date = new Date();
            newComment.shw = true;
            newComment.show = true;
            newComment.hide = false;
            newComment.upvote = 0;
            newComment.downvote = 0;

            CommentService.addComment(newComment);
        };

        commentController.deleteComment = function(com){
            CommentService.delete(com);
        };
        commentController.editComment = function(com){
            CommentService.edit(com);
        };
        commentController.saveComment = function(com){
            CommentService.save(com);
        };
        commentController.addVote = function(com){
            CommentService.addVote(com);
        }
        commentController.remVote = function(com){
            CommentService.remVote(com);
        };
}]);