"use server";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import Link from "next/link";

export default async function NewListingPage() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const { user } = await getUser();

  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post a intership</div>
      </div>
    );
  }

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  const activeOrganizationMemberships = organizationMemberships.data.filter(
    (om) => om.status === "active"
  );
  const organizationsNames: { [key: string]: string } = {};
  for (const activeMembership of activeOrganizationMemberships) {
    const orginazation = await workos.organizations.getOrganization(
      activeMembership.organizationId
    );
    organizationsNames[orginazation.id] = orginazation.name;
  }

  return (
    <div className="container">
      <div>
        <h2 className="text-lg mt-6">Your companies</h2>
        <p className="text-gray-500 mb-4">Select a company</p>
        <div>
          <div className="border inline-block rounded-md">
            {Object.keys(organizationsNames).map((orgId) => (
              <Link
                href={"/new-listing/" + orgId}
                className="block py-2 px-4 border-bo"
              >
                <div>{organizationsNames[orgId]}</div>
              </Link>
            ))}
          </div>
        </div>

        {organizationMemberships.data.length === 0 && (
          <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
            {" "}
            No companies found
          </div>
        )}
        <Link
          className="bg-gray-200 px-4 py-2 rounded-md inline-block mt-6"
          href={"/new-company"}
        >
          Create new company
        </Link>
      </div>
    </div>
  );
}
