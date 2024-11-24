import "./App.css";
import Breadcrumbs from "./components/breadcrumbs";
import RightIcon from "./components/icons/rightIcon";
import SearchIcon from "./components/icons/searchIcon";

function App() {

  return (
    <div className="flex h-full">
        <div className="h-full w-12 py-4 flex flex-col"><RightIcon /></div>
        <div className="w-full flex flex-col">
            <nav className="flex justify-between h-12 px-2">
                <Breadcrumbs />
                <div className="flex space-x-4 items-center">
                    <a href="#help">Help</a>
                    <a href="#contact">Contact</a>
                    <a href="#account">Account</a>
                </div>
            </nav>
            <main className="flex-1 flex flex-col items-center justify-start">
                <div className="w-full flex items-end justify-end p-2 border-t border-b border-[#D6D6D7] mt-6">
                    <SearchIcon />
                </div>
                <div>table</div>
            </main>
            <footer className="h-12">Footer</footer>
        </div>

    </div>
  );
}

export default App;
