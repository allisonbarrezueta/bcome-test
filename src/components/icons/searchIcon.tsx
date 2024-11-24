import Icon from "./icon";
import { IconProps } from "./icon.type";

const SearchIcon = (props: IconProps) => {
    return (
        <Icon viewBox="0 0 24 24" className={props.className} width={props.width || "1.5rem"} height={props.height || "1.5rem"} fill="none">
            <g clip-path="url(#clip0_25_58)">
                <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="#1C1C30"
                    strokeMiterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M19 19L14.67 14.67" stroke="#1C1C30" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_25_58">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </Icon>
    );
};

export default SearchIcon;
