/* Home.tsx */

// Import scss styles
import './Home.scss';

// Importing the RelationCardContainer component
import RelationCardContainer from '../../containers/RelationCardContainer/RelationCardContainer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExperienceCardContainer from '../../containers/ExperienceCardContainer/ExperienceCardContainer';

import { useExperiences, useRelations } from '../../hooks/api';

export default function Home() {

    const experiencesHook = useExperiences(3);
    const relationsHook = useRelations(3); // Using the custom hook to fetch relations data

    const experiences = experiencesHook.experiences; // Extracting the experiences data from the hook
    const relations = relationsHook.relations; // Extracting the relations data from the hook


    if (experiencesHook.loading || relationsHook.loading) return <div>Loading...</div>; // Show loading state while fetching data

    return (
        <main className="home">
            <section>
                <div className="header">
                    <h2>Relations</h2>
                    <a href="/relations" className="see-more">
                        <p>See more</p>
                        <ArrowForwardIosIcon className="arrow" />
                    </a>
                </div>
                <RelationCardContainer relations={relations} />
            </section>
            <section>
                <div className="header">
                    <h2>Experiences</h2>
                    <a href="/experiences" className="see-more">
                        <p>See more</p>
                        <ArrowForwardIosIcon className="arrow" />
                    </a>
                </div>
                <ExperienceCardContainer experiences={experiences} />
            </section>
        </main>
    );
} 