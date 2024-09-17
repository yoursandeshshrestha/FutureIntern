import { getUser } from "@workos-inc/authkit-nextjs";
import { createCompany } from "../actions/workosActions";

export default async function NewCompanyPage() {
  const { user } = await getUser();

  async function handleNewCompanyFormSubmit(data: FormData) {
    "use server";
    if (user) {
      await createCompany(data.get("newComapanyName") as string, user.id);
    }
  }

  if (!user) {
    <div>Login to use this page</div>;
  }
  return (
    <div className="container">
      <h2 className="text-lg mt-6">Create a new company</h2>
      <p className="text-gray-500 mb-4">
        To create a job listing you first need to register a company
      </p>
      <form action={handleNewCompanyFormSubmit} className="flex gap-2">
        <input
          name="newComapanyName"
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          placeholder="company name"
          id=""
        />
        <button
          type="submit"
          className="bg-gray-200 flex gap-2 px-4 py-2 rounded-md items-center"
        >
          Create company
        </button>
      </form>
    </div>
  );
}
