import Link from "next/link";

export default async function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"} className="font-semibold text-2xl ">
          Future Intern
        </Link>
        <nav className="flex gap-2 *:px-4 *:rounded-md *:py-2">
          <Link className="bg-gray-200" href={"/login"}>
            Login
          </Link>
          <Link className="bg-blue-600 text-white" href={"/new-listing"}>
            Post a intership
          </Link>
        </nav>
      </div>
    </header>
  );
}
