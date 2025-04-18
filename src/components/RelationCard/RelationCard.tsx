/* RelationCard.tsx */

// Import scss styles
import './RelationCard.scss';

import { RelationType } from '../../types/relation.type';
import TagContainer from '../../containers/TagContainer/TagContainer';


export default function RelationCard({ relation }: { relation: RelationType }) {
    return (
        <div className="relation-card">
            <img src={relation.imageURL} alt={relation.name} />
            <div className="relation-card-content">
                <h1>{relation.country.emoji} {relation.name}</h1>
                <h2>{relation.locations.join(", ")}</h2>
                <TagContainer tags={relation.tags} />
            </div>
        </div>
    );
}
