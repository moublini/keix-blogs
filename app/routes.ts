import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/base.tsx", [
        index("routes/home.tsx"),
        route("search", "routes/search.tsx"),
        route("users/:id", "routes/users.tsx"),
    ])
] satisfies RouteConfig;
