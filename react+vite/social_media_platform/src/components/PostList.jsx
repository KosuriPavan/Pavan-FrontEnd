import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  // console.log(postList.length);
  return (
    <>
      {postList.length > 0 ? (
        postList.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            text={item.body}
            reactions={item.reactions}
            tags={item.tags}
          />
        ))
      ) : (
        <p>
          Loading Posts.......
          <br />
          (meanWhile check your internet connection)
        </p>
      )}
    </>
  );
};

export default PostList;
