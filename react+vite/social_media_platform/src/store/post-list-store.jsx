/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// const default_postList = [
//   {
//     id: "1",
//     title: "going to mumbai",
//     body: "Hi frnds I am going to mumbai for vacation",
//     reactions: 2,
//     userId: 9,
//     tags: ["vacation", "mumbai", "enjoy"],
//   },
//   {
//     id: "2",
//     title: "going to chennai",
//     body: "Hi frnds I am going to chennai for vacation",
//     reactions: 2,
//     userId: 9,
//     tags: ["vacation", "chennai", "enjoy"],
//   },
// ];

const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((fetchedItems) => {
        setPostList(fetchedItems.posts);
      });

    return () => {
      controller.signal;
    };
  }, []);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

const bb = (discount)=>(price)=>price-discount;
const discountFixed = bb(10);
const output = discountFixed (20);
console.log(output);
