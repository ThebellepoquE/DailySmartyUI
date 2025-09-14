
import React from 'react';

const Post = ({ title, body, associated_topics }) => (
    <li className="post">
        <div className="post__title">{title}</div>
        <div className="post__body">{body}</div>
        {associated_topics && (
            <div className="post__topics">
                {associated_topics.map((topic, i) => (
                    <span className="post__topic" key={i}>{topic}</span>
                ))}
            </div>
        )}
    </li>
);

export default Post;