export default async function Home() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next dream internship
      </h1>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Discover exciting opportunities tailored to your skills and ambitions.
        Whether you're looking to gain hands-on experience, build your network,
        or kick-start your career, we connect you with top companies and
        organizations offering internships that match your passion.
      </p>
      <form action="" className="flex gap-2 mt-4 max-w-sm mx-auto">
        <input
          type="search"
          value=""
          className="border w-full py-2 px-3 rounded-md border-gray-400"
          placeholder="Search phrase.."
        />
        <button className="bg-blue-600 text-white  py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
