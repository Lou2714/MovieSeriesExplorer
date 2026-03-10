import { RiErrorWarningLine } from "react-icons/ri";

const ErrorMessage = ({ message }) => {
    return(
        <div className="flex flex-col items-center gap-3 relative top-32 px-10">
            <RiErrorWarningLine className="text-6xl text-Wild-Sand-100" />
            <p className="text-Wild-Sand-100 text-lg text-center">Ha ocurrido un error. {message}</p>
        </div>
    )
}

export default ErrorMessage;