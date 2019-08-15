import React, { Component } from 'react';

const PostRow = props => {
  const rows = props.posts.map((post, index) => {
    return(
      <li key={index}>
        <p className="post_title">{post.title}</p>
        <p className="post_meta"><span>{post.category}</span><span>{post.date}</span></p>
      </li>
    )
  });

  return rows
}

class PostList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <ul className="post_list">
        <PostRow posts={posts} />
      </ul>
    );
  }
}

export default PostList;