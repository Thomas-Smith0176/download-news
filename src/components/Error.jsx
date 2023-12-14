const Error = ({location, status, message}) => {
    if (!message) {
        return <p>Page not found</p>
    }
    return <section>
        <h2>Could not display {location}</h2>
        <h3>Error {status}: {message}</h3>
        </section>
};

export default Error;