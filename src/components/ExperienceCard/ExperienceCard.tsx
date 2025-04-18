/* ExperienceCard.tsx */

// Import scss styles
import './ExperienceCard.scss';
import dayjs from 'dayjs';
import { ExperienceType } from '../../types/experience.type';
import TagContainer from '../../containers/TagContainer/TagContainer';
import Tag from '../Tag/Tag';

export default function ExperienceCard({ experience }: { experience: ExperienceType }) {
    return (
        <div className="experience-card">
            <img src={experience.imageURL} alt={experience.title} />
            <div className="experience-card-content">
                <h1>{experience.title}</h1>
                <h2>{dayjs(experience.departure_date).format("MMM YYYY")} - {dayjs(experience.return_date).format("MMM YYYY")}</h2>
                <p className='experience-card-summary'>{experience.summary}</p>
                <TagContainer tags={experience.tags} />

                <Tag tag={{
                    code: experience.relation.code,
                    name: experience.relation.code.toUpperCase(),
                    emoji: experience.relation.country.emoji
                }} />
            </div>
        </div>
    );
}