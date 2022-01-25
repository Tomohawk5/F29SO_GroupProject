import Post from './Post';

import './Feed.css';

function Feed({ posts }) {
    return (
        <div className='feed'>
            {
                posts.map((post) => (
                    <Post key={post.Id+1} post={post} />
                ))
            }
        </div>
    );
}

export default Feed 