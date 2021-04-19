import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/postActions';

import { Post } from '../components/Post.component';

const SinglePostPage = ({
    match,
    dispatch,
    post,
    hasErrors,
    loading,
}) => {
    useEffect(() => {
        const { id } = match.params;

        dispatch(fetchPost(id))
    },[dispatch, match]);

    const renderPost = () => {
        if (loading.post) return <p>Loading post...</p>
        if (hasErrors.post) return <p>Unable to dispaly post.</p>

        return <Post post={post} />
    }

    return (
        <section>
            {renderPost()}
        </section>
    );
};

const mapStateToProps = state => ({
    post: state.post.post,
    loading: {
        post: state.post.loading,
    },
    hasErrors: {
        post: state.post.hasErrors,
    }
});

export default connect(mapStateToProps)(SinglePostPage);