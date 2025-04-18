/* TagContainer.tsx */

// Import scss styles
import Tag from '../../components/Tag/Tag';
import { TagType } from '../../types/tag.type';
import './TagContainer.scss';

export default function TagContainer({ tags }: { tags: TagType[] }) {
    return (
        <div className="tag-container">
            {tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
        </div>
    );
}