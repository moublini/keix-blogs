import { Chip } from "~/components/Chip";
import type { Route } from "./+types/home";
import { ArticleCard, SkeletonArticleCard } from "~/components/ArticleCard";
import { SearchForm } from "~/components/SearchForm";
import { trpc } from "~/trpc";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const authors = [ 1, 2, 3 ];
  return (
    <main className="w-full rounded-2xl bg-white p-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display"><a href="#" className="text-call-to-action underline">Sign in</a> to have your personalized articles.</h1>
        <SearchForm />
      </div>
      <div className="flex gap-2 flex-wrap">
        {[ 'Gastronomia', 'Cultura', 'Tecnologia', 'Poesia', 'Letteratura', 'Musica' ].map(category => (<Chip key={'cat-' + category} label={category} />))}
      </div>

      {authors.map(authorId => {
        const author = trpc.findUser.useQuery(authorId);
        const articles = trpc.findArticlesBy.useQuery(authorId);

        return (
          <section className="flex flex-col gap-2" key={'articles-of-author-' + authorId}>
            <header className="flex justify-between items-center h-12">
              {author.data && (<>
                <div className="h-full w-1/2 flex items-center gap-2">
                  <img className="aspect-square h-full object-cover rounded-full border-black border-2" src={author.data.imageSrc} />
                  <h2 className="font-bold text-xl">{author.data.name}</h2>
                </div>
                <a href={`users/${author.data.id}`} className="text-call-to-action text-lg font-medium">See profile</a>
              </>)}

              {!author.data && (<>
                <div className="h-full w-1/2 flex items-center gap-2">
                  <div className="aspect-square h-full bg-neutral rounded-full"></div>
                  <div className="h-5 bg-neutral w-1/3"></div>
                </div>
                <div className="h-5 bg-neutral w-36"></div>
              </>)}
            </header>

            <ul className="grid grid-cols-3 gap-3">
              {/* Skeleton cards while it's fetching author data */}
              {!articles.data && [ 1, 2, 3 ].map(id => (
                <li className="flex-1" key={`article-skeleton-${authorId}-${id}`}>
                  <SkeletonArticleCard />
                </li>
              ))}

              {articles.data && articles.data.slice(0, 3).map(({ id }) => (
                <li key={"article-" + id} className="flex-1">
                  <ArticleCard id={id} />
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </main>
  );
}
