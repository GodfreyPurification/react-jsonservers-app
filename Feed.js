import Post from './Post';

const Feed = ({ posts }) => {
    return (
        <>
            {posts?.length ? (
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            ) : (
                <p style={{ marginTop: "2rem" }}>No posts to display.</p>
            )}
        </>
    );
};

export default Feed;
