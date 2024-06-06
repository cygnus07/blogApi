import express from "express"
import asyncHandler from "express-async-handler"
import {
    getPosts,
    createPosts,
    getPostById,
    updatePost,
    deletePost
} from "../controllers/post.controller.js"

import {
    createComment,
    getCommentsForPost,
    updateComment,
    deleteComment
} from "../controllers/comment.controller.js"

const router = express.Router()

// get all posts
router.get('/', asyncHandler(getPosts));

// create a new post
router.post('/', asyncHandler(createPosts));

// get a post by Id
router.get('/:id', asyncHandler(getPostById));

// update a post
router.put('/:id', asyncHandler(updatePost));

// delete a post
router.delete('/:id', asyncHandler(deletePost))



// to create a comment
router.post('/:id/comments', asyncHandler(createComment));

// get all the comments
router.get('/:id/comments', asyncHandler(getCommentsForPost));

// update a comment
router.put('/:id/comments/:commentsId', asyncHandler(updateComment));

// delete a comment
router.delete('/:id/comments/:commentsId', asyncHandler(deleteComment));

export default router;