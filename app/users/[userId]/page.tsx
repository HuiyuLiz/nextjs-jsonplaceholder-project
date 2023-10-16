import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  const user = await getUser(userId);
  const posts = await getPosts(userId);

  if (!user?.data?.name) return notFound();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <div className="flex mb-5">
        <div className="text-xl font-semibold mr-5">{user?.data?.name}</div>
        <div className="group px-5">
          <Link href={"/"} className={`mb-5 text-xl font-semibold`}>
            Back
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </Link>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PostList list={posts?.data} />
      </Suspense>
    </main>
  );
};

export async function generateStaticParams() {
  const users = await getUsers();
  return users?.data?.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default UsersPage;
