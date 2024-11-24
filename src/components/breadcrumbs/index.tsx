import { ChevronRightIcon, HomeIcon } from "@heroicons/react/16/solid";

const Breadcrumbs = () => {
    const pages = ["Traceability", "Data Collection", "Projects"].map((name, index) => ({
        name,
        href: `#${name.toLowerCase()}`,
        current: index === 2,
    }));

    return (
        <div className="flex items-center">
            <nav aria-label="Breadcrumb" className="flex">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                        <div>
                            <a href="#">
                                <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                                <span className="sr-only">Home</span>
                            </a>
                        </div>
                    </li>
                    {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0" />
                                <a href={page.href} aria-current={page.current ? "page" : undefined} className={`ml-2 text-sm font-medium sm:ml-4 ${page.current && "underline"}`}>
                                    {page.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
