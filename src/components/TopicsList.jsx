import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getTopics().then((res) => {
            setTopics(res.data.topics)
            setIsLoading(false)
        });
    }, []);


    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section className="topics">
            <h2>All Topics</h2>
            {topics.map((topic) => {
                    return (
                        <TopicCard key={topic.slug} topic={topic}/>
                    )
            })}
        </section>
    );
};

export default Topics;