/* filter.tsx */

import { useEffect, useState } from "react";
import { ExperienceType } from "../types/experience.type";
import { FiltersType } from "../types/filters.type";
import { TagType } from "../types/tag.type";
import { RelationType } from "../types/relation.type";

function useFilteredExperiences(
    experiences: ExperienceType[],
    filters: FiltersType
) {
    const [filteredExperiences, setFilteredExperiences] = useState<ExperienceType[]>([]);

    useEffect(() => {
        let filteredExperiences: ExperienceType[] = experiences;

        // If no countries are selected, show all relations
        if (!Object.values(filters.countries).every((value: boolean) => !value)) {
            filteredExperiences = filteredExperiences.filter((experience: ExperienceType) => filters.countries[experience.relation.country.code]);
        }
        if (!Object.values(filters.tags).every((value: boolean) => !value)) {
            Object.entries(filters.tags).forEach(([key, value]) => {
                if (value) {
                    filteredExperiences = filteredExperiences.filter((experience: ExperienceType) => experience.tags.some((tag: TagType) => tag.code === key));
                }
            });
        }

        setFilteredExperiences(filteredExperiences);
    }, [experiences, filters]);

    return { filteredExperiences };
}

function useFilteredRelations(
    relations: RelationType[], // Replace 'any' with the actual type of relations
    filters: FiltersType
) {
    const [filteredRelations, setFilteredRelations] = useState<RelationType[]>([]);

    useEffect(() => {
        let filtered = relations;

        // If no countries are selected, show all relations
        if (!Object.values(filters.countries).every((value: boolean) => !value)) {
            filtered = filtered.filter((relation: RelationType) => filters.countries[relation.country.code]);
        }
        if (!Object.values(filters.tags).every((value: boolean) => !value)) {
            Object.entries(filters.tags).forEach(([key, value]) => {
                if (value) {
                    filtered = filtered.filter((relation: RelationType) => relation.tags.some((tag: TagType) => tag.code === key));
                }
            });
        }

        setFilteredRelations(filtered);
    }, [relations, filters]);

    return { filteredRelations };
}


export { useFilteredExperiences, useFilteredRelations };