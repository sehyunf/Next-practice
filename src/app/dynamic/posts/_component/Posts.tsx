import Link from "next/link";
import { Post } from "../_type/post";
import { getDatas } from "../_function/getDatas";
import { use } from "react";


export default function Posts() {

  const posts = use(getDatas("https://jsonplaceholder.typicode.com/posts"))

  const postList = posts.map(({title, id}:Post) => (
    <li key={id}>
      <Link href={`/dynamic/posts/${id}`}>제목: {title}</Link>
    </li>
  ))

  return (
    <>
      게시글 목록
      {postList}
    </>
  );
}
