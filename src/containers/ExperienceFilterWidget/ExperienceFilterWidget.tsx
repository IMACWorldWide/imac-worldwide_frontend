/* ExperienceFilterWidget.tsx */

// Import scss styles
import FilterOptionButton from '../../components/FilterOptionButton/FilterOptionButton';
import { CountryType } from '../../types/country.type';
import { FiltersType } from '../../types/filters.type';
import { TagType } from '../../types/tag.type';

import './ExperienceFilterWidget.scss';

export default function ExperienceFilterWidget({ countries, tags, filters, setFilters }: { countries: CountryType[], tags: TagType[], filters: FiltersType, setFilters: (filters: FiltersType) => void }) {


    return (
        <div className="filter-widget">
            <section>
                <div className='filter-option-header'>
                    <h2>Country</h2>
                </div>
                <div className='filter-option-container'>
                    {countries.map((country) => {
                        return <FilterOptionButton key={country.name} name={country.name} emoji={country.emoji} isCheck={filters.countries[country.code]} onChange={() => {
                            const newFilters = { ...filters };
                            newFilters.countries[country.code] = !newFilters.countries[country.code];
                            setFilters(newFilters);
                        }} />
                    })}
                </div>
            </section>
            <section>
                <div className='filter-option-header'>
                    <h2>Tag</h2>
                </div>
                <div className='filter-option-container'>
                    {tags.map((tag: TagType) => (
                        <FilterOptionButton
                            key={tag.code}
                            name={tag.name}
                            emoji={tag.emoji}
                            isCheck={filters.tags[tag.code]}
                            onChange={() => {
                                const newFilters = { ...filters };
                                newFilters.tags[tag.code] = !newFilters.tags[tag.code];
                                setFilters(newFilters);
                            }} />
                    ))}
                </div>
            </section>
            <section>
                <div className='filter-option-header'>
                    <h2>Date</h2>
                </div>
                <div className='filter-option-container filter-option-container-date'>
                    <label htmlFor="date-from">From:</label>
                    <label htmlFor="date-to">To:</label>
                    <input type="date" name='date-from' value={filters.date.startDate.toISOString().split('T')[0]} onChange={(e) => {
                        const newFilters = { ...filters };
                        newFilters.date.startDate = new Date(e.target.value);
                        setFilters(newFilters);
                    }} />
                    <input type="date" name='date-to' value={filters.date.endDate.toISOString().split('T')[0]} onChange={(e) => {
                        const newFilters = { ...filters };
                        newFilters.date.endDate = new Date(e.target.value);
                        setFilters(newFilters);
                    }} />
                </div>

            </section>
        </div>
    );
}