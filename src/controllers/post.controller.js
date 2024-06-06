import asyncHandler from "express-async-handler"
import Post from "../models/post.model.js"

// get all posts
const getPosts = asyncHandler( async (req,res) => {
    const posts= await Post.find({})
    res.json(posts);
})

// create a new post
const createPosts = asyncHandler( async (req,res) => {
    const {title, content, author} = req.body
    const post = await Post.create({
        title,
        content,
        author
    })
    res.status(201).json(post);
})

// get a post by Id
const getPostById = asyncHandler( async (req,res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        res.json(post)
    } else {
        res.status(404).json({message: "Post not found"})
    }
})

// update a post
const updatePost = asyncHandler( async (req,res) => {
    const post = await Post.findById(req.params.id);
    const {title, content} = req.body;
    if (post) {
        post.title = title || post.title;
        post.content = content || post.content;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } else {
        res.status(404).json({message: "Post not found"})
    }
});


// delete post
const deletePost = asyncHandler( async (req,res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        await post.deleteOne();
        res.json({message: "Post Removed"})
    } else {
        res.status(404).json({message: "Post not found"});
    }
})

export {getPosts, createPosts, getPostById, updatePost, deletePost};