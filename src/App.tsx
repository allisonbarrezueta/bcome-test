import { Bars3Icon, HomeIcon } from "@heroicons/react/16/solid";
import "./App.css";
import Breadcrumbs from "./components/breadcrumbs";
import RightIcon from "./components/icons/rightIcon";
import Projects from "./pages/projects";

function App() {
    return (
        <div className="flex h-full">
            <div className="hidden h-full w-12 flex-col py-4 sm:flex">
                <RightIcon />
            </div>
            <div className="flex w-full flex-col">
                <nav className="flex h-auto flex-col px-2 py-2 sm:h-12 sm:flex-row sm:justify-between sm:py-0">
                    <Breadcrumbs />
                    <div className="hidden space-x-4 sm:flex sm:items-center">
                        <a href="help">Help</a>
                        <a href="contact">Contact</a>
                        <a href="account">Account</a>
                    </div>
                </nav>
                <main className="flex flex-1 flex-col items-center justify-start px-2">
                    <Projects />
                </main>
                <footer className="sm:h-12">
                    <div className="flex w-full justify-between border-t border-[#F0F0F2] p-2">
                        <div className="flex space-x-2">
                            <span>407 articles</span>
                            <span>|</span>
                            <span>1.6 version</span>
                        </div>
                        <a href="info">Info</a>
                    </div>
                    <div className="flex h-12 items-center bg-[#CCAA5B] sm:hidden">
                        <button className="flex w-full justify-center text-white">
                            <HomeIcon className="mx-2 h-6 w-6" />
                        </button>
                        <button className="flex w-full justify-center text-white">
                            <Bars3Icon className="mx-2 h-6 w-6" />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
