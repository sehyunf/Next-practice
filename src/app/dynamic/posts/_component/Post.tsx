"use client"

import { useParams } from "next/navigation";
import { getData } from "../_function/getDatas";
import { use } from "react";
import Link from "next/link";

const Post = () => {

  const {id} = useParams()
  const post = use(getData(`https://jsonplaceholder.typicode.com/posts/${id}`))

  console.log(id);
  console.log(post);
  
  return (
    <div>
      게시글
      <p>제목 : {post.title}</p>
      <p>내용 : {post.body}</p>
      <Link href="/dynamic/posts">목록으로 이동</Link>
    </div>
  );
};

export default Post
