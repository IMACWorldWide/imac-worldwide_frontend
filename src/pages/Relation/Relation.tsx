/* Relation.tsx */

import "./Relation.scss";

import { useParams } from "react-router-dom";

import { useRelation, useRelationExperiences } from "../../hooks/api";

import TagContainer from "../../containers/TagContainer/TagContainer";
import ExperienceCardContainer from "../../containers/ExperienceCardContainer/ExperienceCardContainer";

export default function Relation() {

    const { code } = useParams();

    console.log(code); // Log the code for debugging

    if (!code) return <div>Invalid relation ID</div>; // Check if code is valid

    const relationHook = useRelation(code); // Using the custom hook to fetch relation data

    const experiencesHook = useRelationExperiences(code); // Using the custom hook to fetch experiences data

    if (relationHook.loading || experiencesHook.loading) return <div>Loading...</div>; // Show loading state while fetching data

    const relation = relationHook.relation; // Extracting the relation data from the hook
    const experiences = experiencesHook.experiences; // Extracting the experiences data from the hook

    return (
        <main className="relation-page">
            <h1>{relation.country.emoji} {relation.name}</h1>
            <TagContainer tags={relation.tags} />
            <div className="relation-content">
                <div className="relation-description">
                    <p>{relation.description}.</p>

                    <section>
                        <h3>Experiences</h3>
                        <ExperienceCardContainer experiences={experiences} />
                    </section>
                </div>

                <div className="relation-details">
                    <img src={relation.imageURL} alt={relation.name} />
                </div>

            </div>
        </main>
    );
}