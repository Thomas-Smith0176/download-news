import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {
    return (
        <section>
            <Link to={`/topics/${topic.slug}`}>
        <h3>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
        <p>{topic.description}</p>
            </Link>
        </section>
    )
};

export default TopicCard