import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';
import useStyles from './styles.js';

const Posts = () => {
    const post = useSelector((state) => state.posts); 
    const classes = useStyles();
    console.log(post);
    return(
        <React.Fragment>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </React.Fragment>
    );
}

export default Posts;