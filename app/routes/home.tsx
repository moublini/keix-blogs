import { Chip } from "~/components/Chip";
import type { Route } from "./+types/home";
import { ArticleCard } from "~/components/ArticleCard";
import { Header } from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header/>

        <div className="p-8 flex justify-center max-w-5xl">
          <main className="w-full rounded-2xl bg-white p-8 flex flex-col gap-6">
            <h1 className="text-3xl font-display"><a href="#" className="text-call-to-action underline">Sign in</a> to have your personalized articles.</h1>
            <div className="flex gap-2 flex-wrap">
              {[ 'Gastronomia', 'Cultura', 'Tecnologia', 'Poesia', 'Letteratura', 'Musica' ].map(category => (<Chip key={'cat-' + category} label={category}/>))}
            </div>
            <section className="flex flex-col gap-2">
              <header className="flex justify-between items-center h-12">
                <div className="h-full w-1/2 flex items-center gap-2">
                  <img className="aspect-square h-full rounded-full border-black border-2" src="#"/>
                  <h2 className="font-bold text-xl">Magazzino Virtuale</h2>
                </div>
                <a href="#" className="text-call-to-action text-lg font-medium">See profile</a>
              </header>
              <ul className="columns-3">
                {[1, 2, 3].map((_, index) => (
                  <li key={"article-1-" + index} className="mb-4">
                    <ArticleCard title="10 Motivi per cui devi andare a Salamanca" categories={[ 'Cultura', 'Arte' ]} imageSrc="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F33%2FSalamanca_Catedral.JPG&f=1&nofb=1&ipt=27795b52587e145175cfd3c18392545c6eb04ec54a64c91f5b3083c63cf2f39a&ipo=images" />
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-2">
              <header className="flex justify-between items-center h-12">
                <div className="h-full w-1/2 flex items-center gap-2">
                  <img className="aspect-square h-full rounded-full border-black border-2" src="#"/>
                  <h2 className="font-bold text-xl">moublini</h2>
                </div>
                <a href="#" className="text-call-to-action text-lg font-medium">See profile</a>
              </header>
              <ul className="columns-3">
                {[1, 2, 3].map((_, index) => (
                  <li key={"article-1-" + index} className="mb-4">
                    <ArticleCard title="10 Motivi per cui devi andare a Salamanca" categories={[ 'Cultura', 'Arte' ]} imageSrc="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F33%2FSalamanca_Catedral.JPG&f=1&nofb=1&ipt=27795b52587e145175cfd3c18392545c6eb04ec54a64c91f5b3083c63cf2f39a&ipo=images" />
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-2">
              <header className="flex justify-between items-center h-12">
                <div className="h-full w-1/2 flex items-center gap-2">
                  <img className="aspect-square h-full rounded-full border-black border-2" src="#"/>
                  <h2 className="font-bold text-xl">keix</h2>
                </div>
                <a href="#" className="text-call-to-action text-lg font-medium">See profile</a>
              </header>
              <ul className="columns-3">
                {[1, 2, 3].map((_, index) => (
                  <li key={"article-1-" + index} className="mb-4">
                    <ArticleCard title="10 Motivi per cui devi andare a Salamanca" categories={[ 'Cultura', 'Arte' ]} imageSrc="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F33%2FSalamanca_Catedral.JPG&f=1&nofb=1&ipt=27795b52587e145175cfd3c18392545c6eb04ec54a64c91f5b3083c63cf2f39a&ipo=images" />
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>

    </>
  );
}
