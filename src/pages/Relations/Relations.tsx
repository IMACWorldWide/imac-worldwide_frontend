/* Relations.tsx */

// Import scss styles
import './Relations.scss';

// Importing React and necessary hooks
import { useState } from "react";
import { useRelations, useRelationsCountries, useRelationsTags } from '../../hooks/api';
import { useFilteredRelations } from '../../hooks/filter';

// Importing components
import RelationCardContainer from "../../containers/RelationCardContainer/RelationCardContainer";
import FilterButton from '../../components/FilterButton/FilterButton';
import RelationFilterWidget from '../../containers/RelationFilterWidget/RelationFilterWidget';

// Importing types
import { CountryType } from '../../types/country.type';
import { FiltersType } from '../../types/filters.type';
import { TagType } from '../../types/tag.type';

// Importing icons
import TuneIcon from '@mui/icons-material/Tune';

export default function Relations() {

    const relationsHook = useRelations(); // Using the custom hook to fetch relations data
    const countriesHook = useRelationsCountries(); // Using the custom hook to fetch countries data
    const tagsHook = useRelationsTags(); // Using the custom hook to fetch tags data

    const relations = relationsHook.relations; // Extracting the relations data from the hook
    const countries = countriesHook.countries; // Extracting the countries data from the hook
    const tags = tagsHook.tags; // Extracting the tags data from the hook

    const [filters, setFilters] = useState<FiltersType>({
        countries: Object.fromEntries(countries.map((country: CountryType) => [country.code, true])),
        tags: Object.fromEntries(tags.map((tag: TagType) => [tag.name, true])),
        languages: {},
        date: { startDate: new Date(), endDate: new Date() }
    });

    const { filteredRelations } = useFilteredRelations(relations, filters); // Using the custom hook to filter relations based on selected filters

    const [filterOpen, setFilterOpen] = useState(false);
    const handleFilterOpen = () => {
        setFilterOpen(!filterOpen);
    };

    if (relationsHook.loading || countriesHook.loading || tagsHook.loading) return <div>Loading...</div>; // Show loading state while fetching data

    return (
        <main>
            <h1>Relations</h1>
            <div className="filter-container">
                <FilterButton filterName="Filter" filerIcon={<TuneIcon />} onClick={handleFilterOpen} />
                {filterOpen ? <RelationFilterWidget countries={countries} tags={tags} filters={filters} setFilters={setFilters} /> : null}
            </div>
            <RelationCardContainer relations={filteredRelations} />
        </main>
    );
}