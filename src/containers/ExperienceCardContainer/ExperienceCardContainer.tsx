/* ExperienceCardContainer.tsx */

// Import scss styles
import { useEffect, useState } from 'react';
import { ExperienceType } from '../../types/experience.type';
import './ExperienceCardContainer.scss';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { Link } from 'react-router-dom';

export default function ExperienceCardContainer({ experiences }: { experiences: ExperienceType[] }) {

    const [filteredExperiences, setFilteredExperiences] = useState<ExperienceType[]>(experiences);

    useEffect(() => {
        setFilteredExperiences(experiences);
    }, [experiences]);


    return (
        <div className="experience-card-container">
            {filteredExperiences.map((experience, index) => (
                <Link key={index} to={`/experience/${experience.id}`} className="experience-card-link">
                    <ExperienceCard key={index} experience={experience} />
                </Link>
            ))}
        </div>
    );
}