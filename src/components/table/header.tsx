export interface Column<T> {
    header: string;
    name?: keyof T;
    style?: React.CSSProperties;
    accessor?: (data: T) => React.ReactNode;
}

interface HeaderProps<T> {
    columns: Column<T>[];
}

const TableHeader = <T,>(props: HeaderProps<T>) => {
    const { columns } = props;
    return (
        <thead>
            <tr>
                {columns.map((col, index) => {
                    return (
                        <th key={index} scope="col" className="text-left text-xs font-medium text-[#706F7A]" style={col.style}>
                            {col.header}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
