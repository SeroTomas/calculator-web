import SharingInformationService from "@src/services/sharing-information.services"
import { SubjectInfo } from "@src/utilities/subject-manager.utilities"

interface Props {
    value: string
    type:string
    classname?:string
}

const Button: React.FC<Props> = ({ value, classname, type }) => {

    const infoToSend : SubjectInfo = { 
        value,
        type
    }

    const handleClick = () => {
        SharingInformationService.setSubject(infoToSend);
    }

    return (
        <button onClick={handleClick} className={`border p-5 ${classname}`} >{value}</button>
    )
}
export default Button;