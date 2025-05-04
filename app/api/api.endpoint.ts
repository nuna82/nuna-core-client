export const apiendpoin = {
    // Home
    home: "",

    // Users and User details
    getUsers: "users/all",

    // register user
    registerUser: "auth/register",

    // verify user
    verifyMagicLink: "auth/verify-magic-link",

    // login user
    loginUser: "auth/login",

    // user profile
    userProfile: "auth/profile",


    // only one user
    getOneUser: "users/:id",

    // delete user
    deleteUser: "users/delete/:id",

    // Change User Deatils
    changeUserDetails: "users/update/:id",

    // collections

    // posts and post details
    createNewPost: "posts/new",

    // get all posts
    getAllPosts: "posts/many",

    // get only one post from  id
    getOnePost: "posts/:id",

    // update post
    updatePost: "posts/update/:id",

    // delete post
    deletePost: "posts/remove/:id",
};