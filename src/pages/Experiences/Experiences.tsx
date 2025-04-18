/* Experiences.tsx */

// Import scss styles
import './Experiences.scss';

// Importing React and necessary hooks
import { useEffect, useState } from "react";

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
        countries: {},
        tags: {},
        languages: {},
        date: { startDate: new Date(), endDate: new Date() }
    });

    useEffect(() => {
        if (sessionStorage.getItem('experiencesFilters')) {
            const storedFilters = sessionStorage.getItem('experiencesFilters'); // Retrieving filters from local storage
            if (storedFilters) {
                const parsedFilters = JSON.parse(storedFilters); // Parsing the filters from local storage
                setFilters({ ...parsedFilters, date: { startDate: new Date(), endDate: new Date() } }); // Parsing and setting the filters state
            }
            return; // Exiting if filters are found in local storage
        }
        if (experiencesHook.loading === false && countriesHook.loading === false && tagsHook.loading === false) {
            const initialFilters: FiltersType = {
                countries: Object.fromEntries(countries.map((country: CountryType) => [country.code, false])),
                tags: Object.fromEntries(tags.map((tag: TagType) => [tag.name, false])),
                languages: {},
                date: { startDate: new Date(), endDate: new Date() }
            };
            setFilters(initialFilters); // Setting the initial filters state
        }
    }, [experiencesHook.loading, countriesHook.loading, tagsHook.loading]); // Empty useEffect to mimic componentDidMount

    useEffect(() => {
        // Remove date from filters
        const { date, ...rest } = filters; // Destructuring to remove date from filters
        const newFilters = { ...rest }; // Creating a new filters object with default date values
        sessionStorage.setItem('experiencesFilters', JSON.stringify(newFilters)); // Storing the filters in session storage
    }
        , [filters]); // Updating local storage whenever filters change

    const { filteredExperiences } = useFilteredExperiences(experiences, filters); // Using the custom hook to filter experiences based on selected filters

    const [filterOpen, setFilterOpen] = useState(false);

    const handleFilterOpen = () => {
        setFilterOpen(!filterOpen);
    };

    if (experiencesHook.loading || countriesHook.loading || tagsHook.loading) return <div>Loading...</div>; // Show loading state while fetching data

    console.log("Filters: ", filters); // Logging the experiences data for debugging

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