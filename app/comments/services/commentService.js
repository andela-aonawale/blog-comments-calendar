/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('CommentsApp')
.factory('CommentService', [function(){
        var data={};
        data.allComment = [];
        data.currentVote = 1;
        data.add = function(arg){
            data.newComment = arg;
            data.allComment.push(data.newComment);
        };
        data.edit = function(arg){
            arg.hide = true;
            arg.show = false;
        };
        data.save = function(arg){
            arg.hide = false;
            arg.show = true;
        };
        data.delete = function(arg){
            //data.allComment.splice(data.allComment.indexOf(arg), 1);
            arg.shw = false;
        };
        data.addVote = function(arg){
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
        data.remVote = function(arg){
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
        return data;
}]);