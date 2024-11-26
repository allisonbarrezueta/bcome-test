import dayjs from "dayjs";
import ArchiveIcon from "../../components/icons/archiveIcon";
import LinkIcon from "../../components/icons/linkIcon";
import SearchIcon from "../../components/icons/searchIcon";
import Table from "../../components/table";
import { Column } from "../../components/table/header";

interface IProject {
    name: string;
    total_ref: string;
    reference_type: string;
    url: string;
    status: string;
    creation_date: string;
    closing_date: string;
    archive: string;
}

const Projects = () => {
    //TODO: this should be fetched from the server
    const columns: Column<IProject>[] = [
        { name: "name", header: "Name", accessor: (data) => <span className="text-sm font-medium leading-[1.625rem]">{data.name}</span> },
        { name: "total_ref", header: "Total Ref", accessor: (data) => <span className="text-sm leading-[1.625rem]">{data.total_ref}</span> },
        { name: "reference_type", header: "Reference Type", accessor: (data) => <span className="text-sm leading-[1.625rem]">{data.reference_type}</span> },
        {
            name: "url",
            header: "Form url",
            accessor: (data) => {
                return (
                    <a className="flex text-sm leading-5 text-[#CCAA5B]" href={data.url} target="_blank" rel="noopener noreferrer">
                        Data collection form <LinkIcon className="ml-1 size-4" />
                    </a>
                );
            },
        },
        { name: "status", header: "Status", accessor: (data) => <span className="rounded-full bg-[#52780033] px-3 py-2 text-sm leading-[1.0444rem] text-[#527800]">{data.status}</span> },
        { name: "creation_date", header: "Creation Date", accessor: (data) => <span className="text-sm leading-[1.625rem]">{dayjs(data.creation_date).format("MMM DD, YYYY")}</span> },
        { name: "closing_date", header: "Closing Date", accessor: (data) => <span className="text-sm leading-[1.625rem]">{dayjs(data.closing_date).format("MMM DD, YYYY")}</span> },
        {
            name: "archive",
            header: "",
            accessor: () => (
                <button className="hover:text-[#CCAA5B]">
                    <ArchiveIcon stroke="currentColor" />
                </button>
            ),
        },
    ];

    return (
        <>
            <div className="mt-4 flex w-full items-end justify-end border-b border-t border-[#D6D6D7] p-2 sm:mt-6">
                <SearchIcon />
            </div>
            <div className="w-full">
                <div className="mb-3 w-full border-b border-[#1C1C30] py-3 text-xs leading-[0.875rem]">Project description</div>
                <Table columns={columns} data={projectData} />
            </div>
        </>
    );
};

export default Projects;

const projectData: IProject[] = [
    { name: "Apparel", total_ref: "68", reference_type: "Apparel", url: "https://www.google.com", status: "Completed", creation_date: "2021-09-01", closing_date: "2021-09-01", archive: "" },
    { name: "Apparel", total_ref: "68", reference_type: "Apparel", url: "https://www.google.com", status: "Completed", creation_date: "2021-09-01", closing_date: "2021-09-01", archive: "" },
    { name: "Apparel", total_ref: "68", reference_type: "Apparel", url: "https://www.google.com", status: "Completed", creation_date: "2021-09-01", closing_date: "2021-09-01", archive: "" },
    { name: "Apparel", total_ref: "68", reference_type: "Apparel", url: "https://www.google.com", status: "Completed", creation_date: "2021-09-01", closing_date: "2021-09-01", archive: "" },
];
