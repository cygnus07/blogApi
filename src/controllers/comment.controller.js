import asyncHandler from "express-async-handler"
import Comment from "../models/comment.model.js"
import Post from "../models/post.model.js"

// to get all the comments
const getCommentsForPost = asyncHandler( async (req,res) => {
    const comment = await Comment.find({PostId: req.params.id})
    res.json(comment);
})

// to create a comment
const createComment = asyncHandler( async (req,res) => {
    const {content, author} = req.body;
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (post) {
        const comment = await Comment.create({
            content,
            author,
            postId
        })
        res.status(201).json(comment);
    } else {
        res.status(404).json({message: "Post not found"});
    }
});


// update a comment
const updateComment = asyncHandler( async (req,res) => {
    const {content, author} = req.body;
    // const postId = req.params.id;
    const comment = await Comment.findById(req.params.commentId);
    if (comment) {
        comment.content = content || comment.content;
        const updatedComment = await comment.save();
        res.json(updatedComment);
    } else {
        res.status(404).json({message: "Post not found"})
    }
})


// delete a comment
const deleteComment = asyncHandler( async(req,res) => {
    const comment = await Comment.findById(req.params.commentId);
    if (comment) {
        await comment.deleteOne();
        res.json({message: "Comment Removed"})
    } else {
        res.status(404).json({message: "Comment Not found"})
    }
})

export {
    createComment,
    getCommentsForPost,
    updateComment,
    deleteComment
};