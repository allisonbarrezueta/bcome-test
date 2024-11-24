import { Column } from "./header";

interface Body<T> {
    columns: Column<T>[];
    data: T[];
}

const TableBody = <T,>(props: Body<T>) => {
    const { data, columns } = props;
    return (
        <tbody className="">
            {data.map((item, index) => {
                const even = index % 2 === 0 ? "#fff" : "#FBFBFC";
                return (
                    <tr key={index} style={{ backgroundColor: even }}>
                        {columns.map((col, index) => {
                            if (col.accessor) {
                                return (
                                    <td key={index} className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0" style={col.style}>
                                        {col.accessor(item) as React.ReactNode}
                                    </td>
                                );
                            }
                            return (
                                <td key={index} className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0" style={col.style}>
                                    {col.name ? ((item[col.name] as React.ReactNode) ?? "") : ""}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
