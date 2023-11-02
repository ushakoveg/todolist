import React, { useState } from 'react';

function App() {
const [posts, setPosts] = useState([]);

const addPost = () => {
const newPost = {
id: Date.now(),
title: 'New Post',
content: 'Lorem ipsum dolor sit amet',
};

setPosts([...posts, newPost]);
};

const deletePost = (id) => {
const updatedPosts = posts.filter((post) => post.id !== id);
setPosts(updatedPosts);
};

return (
<div>
<h1>Posts</h1>
<button onClick={addPost}>Add Post</button>
{posts.map((post) => (
<div key={post.id}>
<h2>{post.title}</h2>
<p>{post.content}</p>
<button onClick={() => deletePost(post.id)}>Delete</button>
</div>
))}
</div>
);
}

export default App;
