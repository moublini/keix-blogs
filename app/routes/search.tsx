import { Route } from "./+types/search";

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Search' },
        { name: 'description', content: 'search' },
    ];
}

export default function Search() {
    return (<input />);
}