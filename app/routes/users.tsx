import { trpc } from "~/trpc";
import { Route } from "./+types/users";
import { MdOutlineLogout } from "react-icons/md";
import { SkeletonArticleCard, ArticleCard } from "~/components/ArticleCard";
import { Pagination } from "~/components/Pagination";
import { useState } from "react";
import { useSearchParams } from "react-router";

export function meta({ }: Route.MetaArgs) {

}

export function loader({params}: Route.LoaderArgs) {
    return {
        userId: +params.id,
    }
}

export default function Users({ loaderData: { userId } }: Route.ComponentProps) {
    const [ searchParams ] = useSearchParams();
    const pagination = searchParams.get('pagination');
    const ITEMS_PER_PAGE = 6;

    const user = trpc.findUser.useQuery(userId);
    const articles = trpc.findArticlesBy.useQuery(userId)
    const [ currentPage, setCurrentPage ] = useState(pagination ? +pagination : 1);
    if (!user.data) return <></>;
    
    const articleCount = articles.data ? articles.data.length : 0;
    const { name, mail, sex, age, dateJoined, imageSrc } = user.data;
    return (
        <main className="w-full rounded-2xl bg-white p-8 flex flex-col gap-6">
            <section className="flex flex-col gap-4">
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl font-display">{ name }'s Profile</h1>
                    <a href="#" className="text-xl font-medium text-danger">Log out <MdOutlineLogout className="inline"/></a>
                </header>
                <div className="bg-neutral p-6 rounded-lg relative">
                    <ul className="text-black font-medium text-xl">
                        <li>Username <span className="text-secondary">{name}</span></li>
                        <li>Mail <span className="text-secondary">{mail}</span></li>
                        <li>Sex <span className="text-secondary">{sex}</span></li>
                        <li>Age <span className="text-secondary">{age}</span></li>
                        <li>Joined in <span className="text-secondary">{(new Date(dateJoined)).toDateString()}</span></li>
                        <li>Articles posted <span className="text-secondary">{articleCount}</span></li>
                    </ul>
                    <img src={imageSrc} className="object-cover rounded-full aspect-square w-24 absolute bottom-6 right-6 border-2 border-black" />
                </div>
            </section>
            <section>
                {articles.data && articles.data.length <= 0 && (
                    <p className="text-xl font-medium">{name} has not posted anything yet.</p>
                )}
                <ul className="grid grid-cols-3 gap-3">
                    {/* Skeleton cards while it's fetching author data */}
                    {!articles.data && new Array(ITEMS_PER_PAGE).fill(1).map((id, index) => (
                        <li className="flex-1" key={`article-skeleton-${index}`}>
                            <SkeletonArticleCard />
                        </li>
                    ))}

                    {articles.data && articles.data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map(({ id }) => (
                        <li key={"article-" + id} className="flex-1 mb-4">
                            <ArticleCard id={id} />
                        </li>
                    ))}
                </ul>
            </section>
            <Pagination className="mx-auto" onChange={page => setCurrentPage(page)} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} totalItems={articleCount}/>
        </main>
    );
}