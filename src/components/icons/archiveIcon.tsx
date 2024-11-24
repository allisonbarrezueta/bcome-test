import Icon from "./icon";
import { IconProps } from "./icon.type";

const ArchiveIcon = (props: IconProps) => {
    return (
        <Icon viewBox="0 0 26 26" className={props.className} width={props.width || "1.625rem"} height={props.height || "1.625rem"} fill="none">
            <g clip-path="url(#clip0_25_775)">
                <path
                    d="M19.1538 10.9487V8.89743C19.1538 7.75897 18.2307 6.84615 17.1025 6.84615H13.2461C12.4256 6.84615 11.6461 6.51794 11.0717 5.94358L9.79995 4.67179C9.22559 4.09743 8.43584 3.76923 7.62559 3.76923H4.79482C3.09225 3.76923 1.7179 5.14359 1.7179 6.84615V19.6667C1.7179 21.082 2.86661 22.2308 4.282 22.2308M4.282 22.2308C5.69738 22.2308 6.8461 21.082 6.8461 19.6667V14.0256C6.8461 12.3231 8.22046 10.9487 9.92302 10.9487H21.2051C22.9076 10.9487 24.282 12.3231 24.282 14.0256V19.1538C24.282 20.8564 22.9076 22.2308 21.2051 22.2308H4.282Z"
                    stroke={props.stroke ?? "#706F7A"}
                    strokeWidth="1.53846"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_25_775">
                    <rect width="24.6154" height="20.5128" fill="white" transform="translate(0.692261 2.74359)" />
                </clipPath>
            </defs>
        </Icon>
    );
};

export default ArchiveIcon;
