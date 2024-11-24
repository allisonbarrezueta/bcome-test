import SearchIcon from "../icons/searchIcon";

interface SearchInputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const inputStyle =
    "w-full py-3 pl-10 text-sm text-gray-darker focus:ring-transparent placeholder:text-gray-400 placeholder:text-opacity-70 placeholder:text-sm outline-none bg-gray-300 pr-2 rounded-md shadow-sm border border-gray-350";

const SearchInput = (props: SearchInputProps) => {
    const { handleChange, placeholder, className } = props;

    return (
        <div className={`relative flex w-60 max-w-sm items-center`}>
            <div className="absolute bottom-0 left-0 top-0 flex items-center px-3">
                <SearchIcon className="h-4 w-5 fill-current sm:h-5 sm:w-5" />
            </div>
            <div className={`h-full w-full`}>
                <input autoFocus type="search" className={`${inputStyle} ${className}`} minLength={2} placeholder={placeholder ?? "Search"} onChange={handleChange} />
            </div>
        </div>
    );
};

export default SearchInput;
