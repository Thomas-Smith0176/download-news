import { Toast } from "react-bootstrap";

const ErrorToast = ({setShowError, showError, errorMsg}) => {
    return (
        <Toast onClose={() => setShowError(false)} show={showError} delay={3000} autohide>  
                <Toast.Body>{errorMsg} please try again</Toast.Body>
                </Toast>
    )
};

export default ErrorToast;