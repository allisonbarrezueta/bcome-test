type DefaultProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputProps = DefaultProps & {
    containerClassname?: string;
    inline?: boolean;
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    containerClassnameLabel?: string;
    tippyContent?: string | React.ReactNode;
};

const TextInput = (props: InputProps) => {
    const { containerClassname = "", inline = false, label, name, type, placeholder = "Write", className = "", value, onChange, defaultValue, containerClassnameLabel, tippyContent, ...rest } = props;

    return (
        <div className={`relative flex ${inline ? "flex-row items-center space-x-2" : "flex-col"} ${containerClassname}`}>
            {label && <label className={`mr-4 flex items-center font-medium ${containerClassnameLabel}`}>{label}</label>}

            <input
                name={name}
                className={`rounded-md bg-gray-50 p-3 px-4 placeholder:text-sm placeholder:text-gray-500 focus:outline-none ${className}`}
                type={type}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default TextInput;
