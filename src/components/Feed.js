import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';

import './Feed.css';

function Feed({ posts }) {
    function now() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    return (
        <div className='feed masonryContainer'>
            {/* <MessageSender /> */}
            <Post
                message="Aut perferendis voluptatem aut voluptatem labore aut molestias voluptate. Et iusto temporibus ex doloribus alias non accusantium eligendi ut facere veritatis At facere veritatis non commodi perspiciatis qui omnis commodi. Ut consequatur corrupti in optio maiores sed assumenda optio et magnam autem sed molestias alias et quae facilis eos velit exercitationem."
                timestamp={now()}
                username="Username"
                image={"https://assets.codepen.io/12005/windmill.jpg"}
            />
            <Post
                message="Et odio officia hic illo eaque vel rerum dolores est velit voluptatum eum porro harum non nihil quia qui quidem repellendus. At unde dolor et vitae doloremque sit molestiae eaque sit dignissimos ipsum et molestiae alias sit galisum commodi."
                timestamp={now()}
                username="Username"
                image={"https://assets.codepen.io/12005/suspension-bridge.jpg"}
            />
            <Post
                message="Et sequi beatae id suscipit galisum sit praesentium perspiciatis? Qui illum porro aut dicta suscipit in deserunt internos ut porro voluptas. Quo ipsum quia qui numquam voluptas est assumenda reprehenderit nam cupiditate nobis sit galisum fugiat eum rerum fugit non earum voluptatem. Eum quas nemo ut laudantium cumque sit nihil cupiditate vel eius quia vel dolores voluptatem nam dolorem consequatur aut molestiae reiciendis."
                timestamp={now()}
                username="Username"
                image={"https://assets.codepen.io/12005/sunset.jpg"}
            />
            <Post
                message="Eu sunt deserunt mollit sunt nostrud dolore. Sint cupidatat consectetur nulla ad eu adipisicing nulla ipsum nisi. Enim ea laboris mollit dolore consequat cillum commodo nulla laboris laboris Lorem deserunt consequat. Ad ea eu excepteur eu consequat exercitation excepteur sit fugiat proident occaecat. Dolor in cupidatat labore culpa aliquip pariatur voluptate ipsum fugiat laborum. Incididunt enim duis esse irure ea et consectetur exercitation est amet mollit voluptate."
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="Velit est sint enim duis pariatur Lorem duis enim deserunt labore nisi. Elit dolore cillum ipsum culpa ea culpa sit proident deserunt. Ex id Lorem est exercitation qui sunt mollit ex esse velit aliqua sunt minim."
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="Nostrud aliqua proident consectetur minim ex nulla commodo excepteur nulla laboris eiusmod magna. Adipisicing irure qui labore pariatur. Irure sunt ex sunt laborum sunt cupidatat. Irure velit exercitation ipsum consequat et ex commodo non veniam dolor. Ad nostrud eiusmod ipsum pariatur Lorem laboris. Esse voluptate id ad reprehenderit do amet aliquip ut ipsum sit."
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="Commodo pariatur ad mollit elit amet. Sit occaecat nostrud velit et. Aute labore enim do cupidatat do id consequat enim. Sit esse mollit ex aliquip anim voluptate laborum fugiat nostrud voluptate aliqua laborum. Do aliqua dolore quis ipsum laborum. Non magna commodo eu et irure ad."
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="Fugiat id incididunt esse aliquip ea aute. Ad deserunt proident cupidatat est excepteur nulla. Nisi fugiat in nisi amet ipsum ipsum velit ea consectetur id aliqua do laboris. Anim anim id pariatur et dolore nisi laborum sit id."
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="this works"
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="this works"
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="this works"
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
            <Post
                message="this works"
                timestamp={now()}
                username="Username"
                image={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
            />
        </div>
    );
}

export default Feed 