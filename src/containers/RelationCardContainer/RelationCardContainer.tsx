/* RelationCardContainer.tsx */

// Import scss styles
import './RelationCardContainer.scss';

// Importing the RelationCard component
import RelationCard from '../../components/RelationCard/RelationCard';
import { RelationType } from '../../types/relation.type';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RelationCardContainer({ relations }: { relations: RelationType[] }) {
    const [filteredRelations, setFilteredRelations] = useState<RelationType[]>(relations);

    useEffect(() => {
        setFilteredRelations(relations);
    }, [relations]);

    return (
        <div className="relation-card-container">
            {filteredRelations.map((relation, index) => (
                <Link to={`/relation/${relation.code}`} key={index} className="relation-card-link">
                    <RelationCard key={index} relation={relation} />
                </Link>
            ))}
        </div>
    );
}