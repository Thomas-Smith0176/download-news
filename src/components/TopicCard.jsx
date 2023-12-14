const TopicCard = ({topic}) => {
    return (
        <section>
            <a href={`/topics/${topic.slug}`}>
        <h3>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
        <p>{topic.description}</p>
            </a>
        </section>
    )
};

export default TopicCard