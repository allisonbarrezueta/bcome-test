

import Icon from "./Icon"
import { IconProps } from "./icon.type"


const RightIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 17 17" className={props.className} width={props.width || "1.0625rem"} height={props.height || "1.0625rem"} fill="none">
            <rect x="1.34604" y="0.669357" width="15" height="15.3581" rx="7.5" fill="#CCAA5B" stroke="#CCAA5B"/>
            <path d="M8.17938 10.3932L10.1794 8.34839L8.17938 6.30363" stroke="#FBFBFC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
}

export default RightIcon
