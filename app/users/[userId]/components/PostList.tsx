// type
import type { Post } from "@/services/post";
// components
import { Card } from "@/components/Card";

interface Props {
  list: Post[];
}

export const PostList = async ({ list }: Props) => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {list?.map((post) => {
        return (
          <Card key={post.id}>
            <div className={`mb-5 text-lg font-semibold`}>{post.title}</div>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-3`}>
              {post.body}
            </p>
          </Card>
        );
      })}
    </div>
  );
};
