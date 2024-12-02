import { Route } from "./+types/search";
import { ArticleCard } from "~/components/ArticleCard";
import { SearchForm } from "~/components/SearchForm";

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Search' },
        { name: 'description', content: 'search' },
    ];
}

export function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("s")
    return { searchQuery };
}

export default function Search({loaderData }: Route.ComponentProps) {
    return (
        <main className="w-full rounded-2xl bg-white p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-display">Results for "{ loaderData.searchQuery }"</h1>
                <SearchForm />
            </div>
            <section className="flex flex-col gap-2">
                <ul className="columns-3">
                    {[1, 2, 3].map((id, index) => (
                        <li key={"article-1-" + index} className="mb-4">
                            <ArticleCard variant={"compact"} id={id} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}