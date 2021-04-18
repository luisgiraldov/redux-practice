import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Bring in the asynchronous fetchPosts action
import { fetchPosts } from '../actions/postsActions';

//Redux state is now in the props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <section>
            <h1>Posts</h1>
        </section>
    )
}

//Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

//Connect Redux to Reacgt
export default connect(mapStateToProps)(PostsPage);