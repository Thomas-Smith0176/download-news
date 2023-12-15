import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {
    return (
        <section className="topic-card">
            <Link to={`/topics/${topic.slug}`} className="topic-card-link">
        <h3>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
        <p>{topic.description}</p>
            </Link>
        </section>
    )
};

export default TopicCard