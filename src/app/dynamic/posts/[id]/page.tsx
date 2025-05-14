import { Suspense } from "react";
import Post from "../_component/Post";

export default function page() {

  return (
    <div>
      <Suspense fallback={<p>...로딩중!</p>}>
        <Post />
      </Suspense>
    </div>
  );
}