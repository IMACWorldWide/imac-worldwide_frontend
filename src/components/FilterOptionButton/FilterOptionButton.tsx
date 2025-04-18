/* FilterOptionButton.tsx */

// Import scss styles
import { useState } from 'react';
import './FilterOptionButton.scss';

export default function FilterOptionButton({ name, emoji, isCheck, onChange }: { name: string, emoji: string, isCheck: boolean, onChange?: () => void }) {

    // return (
    //     <div className="filter-option-button">
    //         <input type="checkbox" id={name} name={name} value={name} onChange={onChange} />
    //         <label htmlFor={name}>
    //             <span className="filter-option-emoji">{emoji}</span>
    //             <span className="filter-option-name">{name}</span>
    //         </label>
    //     </div>
    // );

    const [checked, setChecked] = useState(isCheck);

    const handleChange = () => {
        setChecked(!checked);
        if (onChange) {
            onChange();
        }
    };

    return (
        <button className="filter-option-button" onClick={handleChange} style={{ backgroundColor: checked ? '#f0f0f0' : 'white' }}>
            <span className="filter-option-emoji">{emoji}</span>
            <span className="filter-option-name">{name}</span>
        </button>
    );
}