export interface HeaderProps {
    progressBar?: boolean,
}
export function Header({ progressBar }: HeaderProps) {
    return (
        <header className="z-50 w-full sticky top-0">
            <div className="bg-primary text-lg text-medium p-4 flex items-center justify-between">
                <p className="text-white">Keix Blogs</p>
                <nav>
                    <ul className="flex items-center justify-end gap-6">
                        <li>
                            <a href="/" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">My Blogs</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                <button className="bg-call-to-action text-white rounded-lg px-3 py-2">Sign in</button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {progressBar && <div className="h-1 w-1/2 bg-secondary" id="js-progress-bar"></div>}
        </header>
    )
}