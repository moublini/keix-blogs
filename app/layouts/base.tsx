import { Outlet } from 'react-router'
import { Header } from '~/components/Header';
export default function Base() {
    return (
        <div className="flex flex-col items-center">
            <Header/>
            <div className="p-8 flex justify-center w-full max-w-5xl">
                <Outlet />
            </div>
        </div>
    );
}