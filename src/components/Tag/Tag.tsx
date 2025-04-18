/* Tag.tsx */

// Import scss styles
import './Tag.scss';

import { TagType } from "../../types/tag.type";

export default function Tag({ tag }: { tag: TagType }) {
    return (
        <div className="tag">
            <p className='tag-emoji'>{tag.emoji}</p>
            <p className="tag-text">{tag.name}</p>
        </div>
    );
}