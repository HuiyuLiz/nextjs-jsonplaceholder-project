import Image from "next/image";
import Link from "next/link";
// services
import { getUsers } from "@/services/user";
// components
import { Card } from "@/components/Card";

const App = async () => {
  const { data: users } = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {users?.map((user) => {
          return (
            <Link href={`/users/${user.id}`} key={user.id}>
              <Card>
                <div className={`mb-3 text-xl font-semibold`}>
                  {user.name}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </div>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-3`}>
                  {user.email}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {user.phone}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default App;
