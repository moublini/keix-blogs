import {FaBoxArchive} from 'react-icons/fa6'
export interface ArticleCardProps {
    className?: string,
    title: string,
    imageSrc: string,
    categories?: string[],
    variant?: 'no-compact' | 'compact',
}

export function ArticleCard({ className, title, imageSrc, categories, variant }: ArticleCardProps) {
    return (
        <article className={`flex flex-col ${className || ''} row-gap-1`}>
            <figure className="rounded-lg aspect-video overflow-hidden">
                <img src={imageSrc} className='object-fill' />
            </figure>
            <h3 className="text-2xl font-display">{title}</h3>
            {categories && categories.length > 0 && (
                <div className="flex gap-1 content-center">
                    <FaBoxArchive size={24} className='text-secondary'/>
                    <span className="font-medium text-lg">
                        <span className="text-primary">{categories[ 0 ]}</span>
                        {categories.length > 1 && (
                            <span className="text-secondary">
                                &nbsp;- {categories.slice(1).join(' - ')}
                            </span>
                        )}
                    </span>
                </div>
            )}
        </article>
    )
}