import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("Components/Layout/Navbar.tsx", [
        index("routes/home.tsx"),
        route('onboarding','routes/Onboarding.tsx'),
        route('profile', 'routes/Profile.tsx'),
        route('auth/:pathname', 'routes/Auth.tsx'),
        route('account/:pathname','routes/Account.tsx'),
    ])
] satisfies RouteConfig;
