import TableBody from "./body";
import TableHeader, { Column } from "./header";

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
}

const Table = <T,>(props: TableProps<T>) => {
    const { columns, data } = props;

    return (
        <div className="inline-block w-screen overflow-x-auto align-middle sm:w-full">
            <table className="w-full">
                <TableHeader columns={columns} />
                <TableBody columns={columns} data={data} />
            </table>
        </div>
    );
};

export default Table;
