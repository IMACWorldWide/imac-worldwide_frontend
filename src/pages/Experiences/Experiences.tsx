/* Experiences.tsx */

// Import scss styles
import './Experiences.scss';

// Importing React and necessary hooks
import { useState } from "react";

// Importing components
import ExperienceCardContainer from "../../containers/ExperienceCardContainer/ExperienceCardContainer";
import { FiltersType } from '../../types/filters.type';
import { CountryType } from '../../types/country.type';
import { TagType } from '../../types/tag.type';
import FilterButton from '../../components/FilterButton/FilterButton';

import TuneIcon from '@mui/icons-material/Tune';
import ExperienceFilterWidget from '../../containers/ExperienceFilterWidget/ExperienceFilterWidget';

import { useExperiences, useExperiencesCountries, useExperiencesTags } from '../../hooks/api';
import { useFilteredExperiences } from '../../hooks/filter';


export default function Experiences() {

    const experiencesHook = useExperiences(); // Using the custom hook to fetch experiences data
    const countriesHook = useExperiencesCountries(); // Using the custom hook to fetch countries data
    const tagsHook = useExperiencesTags(); // Using the custom hook to fetch tags data


    const experiences = experiencesHook.experiences; // Extracting the experiences data from the hook
    const countries = countriesHook.countries; // Extracting the countries data from the hook
    const tags = tagsHook.tags; // Extracting the tags data from the hook

    const [filters, setFilters] = useState<FiltersType>({
        countries: Object.fromEntries(countries.map((country: CountryType) => [country.code, true])),
        tags: Object.fromEntries(tags.map((tag: TagType) => [tag.name, true])),
        languages: {},
        date: { startDate: new Date(), endDate: new Date() }
    });

    const { filteredExperiences } = useFilteredExperiences(experiences, filters); // Using the custom hook to filter experiences based on selected filters

    const [filterOpen, setFilterOpen] = useState(false);

    const handleFilterOpen = () => {
        setFilterOpen(!filterOpen);
    };

    if (experiencesHook.loading || countriesHook.loading || tagsHook.loading) return <div>Loading...</div>; // Show loading state while fetching data

    return (
        <main>
            <h1>Experiences</h1>
            <div className="filter-container">
                <FilterButton filterName="Filter" filerIcon={<TuneIcon />} onClick={handleFilterOpen} />
                {filterOpen ? <ExperienceFilterWidget countries={countries} tags={tags} filters={filters} setFilters={setFilters} /> : null}
            </div>
            <ExperienceCardContainer experiences={filteredExperiences} />
        </main>
    );
}