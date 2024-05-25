import getOwners from "@/api/route";
import ResultsList from "@/components/resultsList";
import SearchBar from "@/components/searchBar";

export default async function ProPage({
  searchParams,
}: {
  searchParams?: { name?: string; per_page?: string };
}) {
  const nameQuery = searchParams?.name || "";
  const perPageQuery = searchParams?.per_page || "";

  return (
    <section className="flex flex-col items-center justify-center ">
      <h1 className="mb-10 text-3xl font-bold">Pro</h1>
      <div className="mb-10 w-full">
        <SearchBar />
      </div>
      <ResultsList params={{ name: nameQuery, perPage: perPageQuery }} />
    </section>
  );
}
