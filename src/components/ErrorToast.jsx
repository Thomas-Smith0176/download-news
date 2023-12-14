import { Toast } from "react-bootstrap";

const ErrorToast = ({setShowError, showError, errorMsg}) => {
    return (
        <Toast onClose={() => setShowError(false)} show={showError} delay={3000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                </Toast.Header>
                <Toast.Body>{errorMsg} please try again</Toast.Body>
                </Toast>
    )
};

export default ErrorToast;