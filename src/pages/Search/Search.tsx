/* Search.tsx */


// Import scss styles
import './Search.scss';

// Importing React and necessary hooks
import { useEffect, useState } from 'react';
import { useExperiences, useRelations } from '../../hooks/api';

// Importing components
import RelationCardContainer from '../../containers/RelationCardContainer/RelationCardContainer';
import ExperienceCardContainer from '../../containers/ExperienceCardContainer/ExperienceCardContainer';

// Importing types
import { RelationType } from '../../types/relation.type';
import { ExperienceType } from '../../types/experience.type';

export default function Search() {

    const search = new URLSearchParams(window.location.search).get('search');

    const relationsHook = useRelations(); // Using the custom hook to fetch relations data
    const relations = relationsHook.relations; // Extracting the relations data from the hook

    const experiencesHook = useExperiences(); // Using the custom hook to fetch experiences data
    const experiences = experiencesHook.experiences; // Extracting the experiences data from the hook

    const [searchRelationResults, setSearchRelationResults] = useState<RelationType[]>([]);
    const [searchExperienceResults, setSearchExperienceResults] = useState<ExperienceType[]>([]);


    useEffect(() => {
        if (search) {
            const searchLower = search.toLowerCase();
            const filteredRelations = relations.filter((relation: RelationType) => {
                return relation.name.toLowerCase().includes(searchLower) || relation.description.toLowerCase().includes(searchLower);
            });
            setSearchRelationResults(filteredRelations);

            const filteredExperiences = experiences.filter((experience: ExperienceType) => {
                return experience.title.toLowerCase().includes(searchLower) || experience.title.toLowerCase().includes(searchLower);
            });
            setSearchExperienceResults(filteredExperiences);
        }
    }, [search, relations, experiences]); // Adding relationsHook and experiencesHook as dependencies to useEffect


    if (!search) {
        return (
            <main className="search-page">
                <h1>Please enter a search term</h1>
            </main>
        );
    }

    return (
        <main className="search-page">
            <h1>Results for "{search}"</h1>
            <section>
                <h2>Relation ({searchRelationResults.length})</h2>
                <RelationCardContainer relations={searchRelationResults} />
            </section>
            <section>
                <h2>Experience ({searchExperienceResults.length})</h2>
                <ExperienceCardContainer experiences={searchExperienceResults} />
            </section>
        </main>
    );
}