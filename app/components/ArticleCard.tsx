import { BsArchive } from 'react-icons/bs';
import { FaBoxArchive } from 'react-icons/fa6'
import { trpc } from '~/trpc';

export interface ArticleCardProps {
    id: number,
    variant?: 'no-compact' | 'compact',
}

export function SkeletonArticleCard() {
    return (
        <div className="flex flex-col gap-1">
            <div className="rounded-lg animate-pulse bg-neutral aspect-video relative overflow-hidden"></div>
            <div className="h-5 animate-pulse bg-neutral w-2/3"></div>
        </div>
    );
}

export function ArticleCard({ id, variant }: ArticleCardProps) {
    const article = trpc.findArticle.useQuery(id);
    if (!article.data)
        return <SkeletonArticleCard />;

    const { title, imageSrc, categories } = article.data
    return (
        <a href={`/articles/${id}`}>
            <article className="flex flex-col row-gap-1">
                <figure className="rounded-lg aspect-video relative overflow-hidden">
                    <img src={imageSrc} className='object-fill' />
                    {variant === 'compact' && <img className="absolute bottom-2 right-2 aspect-square w-12 rounded-full border-black border-2" src="#" />}
                </figure>
                <h3 className="text-2xl font-display">{title}</h3>
                {categories && categories.length > 0 && (
                    <div className="flex gap-1 items-center">
                        <BsArchive size={24} className='text-secondary' />
                        <span className="font-medium text-lg">
                            <span className="text-primary">{categories[ 0 ]}</span>
                            {categories.length > 1 && <span className="text-secondary"> &nbsp;- {categories.slice(1).join(' - ')} </span>}
                        </span>
                    </div>
                )}
            </article>
        </a>
    );
}