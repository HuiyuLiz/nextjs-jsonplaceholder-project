import { Suspense } from "react";
import type { Metadata } from "next";
// services
import { getUser, getUsers } from "@/services/user";
import { getPosts } from "@/services/post";
// components
import { PostList } from "./components/PostList";

type Params = { params: { userId: string } };

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const user = await getUser(userId);
  if (!user?.data?.name) {
    return {
      title: "User not found",
      description: "User not found",
    };
  }
  return {
    title: user.data.name,
    description: `This is the page for ${user.data.name}.`,
  };
}

const UsersPage = async ({ params: { userId } }: Params) => {
  const { data: user } = await getUser(userId);
  const { data: posts } = await getPosts(userId);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-5 text-xl font-semibold">{user?.name} </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PostList list={posts} />
      </Suspense>
    </main>
  );
};

export async function generateStaticParams() {
  const { data: users } = await getUsers();
  return users?.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default UsersPage;
