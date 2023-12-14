const Error = ({location, status, message}) => {
    if (!message) {
        return <h3>Error 404: Page not found</h3>
    }
    return <section>
        <h2>Could not display {location}</h2>
        <h3>Error {status}: {message}</h3>
        </section>
};

export default Error;