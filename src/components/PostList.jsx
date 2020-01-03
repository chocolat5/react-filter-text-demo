import React from 'react';

const PostRow = ({ posts }) => {
  return posts.map((post, index) => {
    return (
      <li key={index}>
        <p className="post_title">{post.title}</p>
        <p className="post_meta"><span>{post.category}</span><span>{post.date}</span></p>
      </li>
    );
  });
};

const PostList = ({ posts }) => {
  return (
    <ul className="post_list">
      <PostRow posts={posts} />
    </ul>
  );
};

export default PostList;