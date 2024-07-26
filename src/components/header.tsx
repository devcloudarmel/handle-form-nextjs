import { Logo } from "../components/logo";
import { Actions } from "../components/actions";
import { Navigation } from "../components/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="h-16 border-b">
            <nav className="flex justify-between max-w-screen-xl mx-auto h-full items-center px-6">
                <Link href='/'>
                    <Logo />
                </Link>
                <Navigation />
                <Button variant='outline' className="rounded">
                    <Link href='/add'>
                        Order
                    </Link>
                </Button>
                <Actions />
            </nav>
        </header>
    );
};