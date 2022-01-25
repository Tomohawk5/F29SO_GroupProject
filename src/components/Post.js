import "./Post.css"

const Post = ({post }) => {
    return <div className='post'>
        <h3>{post.Title}</h3>
        <p>{post.Description}</p>
    </div>;
};

export default Post;
