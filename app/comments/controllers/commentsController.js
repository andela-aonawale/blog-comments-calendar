/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('CommentsModule')
    .controller('CommentsController', ['CommentService', function(CommentService){
    this.comments = CommentService.allComment;
    this.comment = {text: '', name: '', email: '', date: new Date(), shw: true, show: true, hide: false, upvote: 0, downvote: 0};
    this.addComment = function(){
        CommentService.add(this.comment);
        this.comment = {date: new Date(), shw: true, show: true, hide: false, upvote: 0, downvote: 0};
    };
    this.deleteComment = function(com){
        CommentService.delete(com);
    };
    this.editComment = function(com){
        CommentService.edit(com);
    };
    this.saveComment = function(com){
        CommentService.save(com);
    };
    this.addVote = function(com){
        CommentService.addVote(com);
    }
    this.remVote = function(com){
        CommentService.remVote(com);
    };
}]);