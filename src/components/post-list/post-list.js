import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((post) => {
        if (typeof(Object(post)) && isNaN(post)) {
            const {id, ...itemProps} = post;
            return (
                <li className="list-group-item" key={id}>
                    <PostListItem {...itemProps} />
                </li>
            );
        }
    });

    return (
        <ListGroup className = "app-list">
            {elements}
        </ListGroup>
    );
};

export default PostList;