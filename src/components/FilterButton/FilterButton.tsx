/* FilerButton.tsx */

// Import scss styles
import { ReactElement } from 'react';
import './FilterButton.scss';

export default function FilterButton({ filterName, filerIcon, onClick }: { filterName: string, filerIcon: ReactElement, onClick: () => void }) {
    return (
        <div className='filter-button'>
            <button onClick={onClick}>
                {filerIcon}
                <span>{filterName}</span>
            </button>
        </div>
    );
}