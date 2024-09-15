import Link from "next/link";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header>
      <div className="flex items-center justify-between mx-auto">
        <Link href={"/"} className="font-semibold text-3xl ">
          Future Intern
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link className="bg-gray-200 px-4 rounded-md py-2" href={signInUrl}>
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-gray-200 px-4 rounded-md py-2"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            className="bg-blue-600 text-white px-4 rounded-md py-2"
            href={"/new-listing"}
          >
            Post a intership
          </Link>
        </nav>
      </div>
    </header>
  );
}
