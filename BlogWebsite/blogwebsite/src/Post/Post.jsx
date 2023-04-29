import React from "react";

import "./post.css";
function Post() {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet</span>
        <hr />
        <span className="postData">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
        necessitatibus reiciendis magnam ex nihil provident tenetur voluptatum
        ut non voluptas fuga temporibus voluptate soluta, omnis nulla saepe
        suscipit est optio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
        necessitatibus reiciendis magnam ex nihil provident tenetur voluptatum
        ut non voluptas fuga temporibus voluptate soluta, omnis nulla saepe
        suscipit est optio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
        necessitatibus reiciendis magnam ex nihil provident tenetur voluptatum
        ut non voluptas fuga temporibus voluptate soluta, omnis nulla saepe
        suscipit est optio!
      </p>
    </div>
  );
}

export default Post;
