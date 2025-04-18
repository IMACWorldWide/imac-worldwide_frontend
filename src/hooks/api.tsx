/* api.tsx */

import { useEffect, useState } from "react";
import { ExperienceType } from "../types/experience.type";
import { RelationType } from "../types/relation.type";

function useExperience(id: string) {
    const [experience, setExperience] = useState<ExperienceType>({} as ExperienceType); // State to hold the experience data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch experience data from API or any other source
        fetch(`http://localhost:3000/experience/${id}`) // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setExperience(data); console.log(data); }) // Set the experience data in state
            .catch(error => console.error('Error fetching experience:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, [id]);

    return { experience, loading };
}

function useRelation(code: string) {
    const [relation, setRelation] = useState<RelationType>({} as RelationType); // State to hold the relation data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch relation data from API or any other source
        fetch(`http://localhost:3000/relation/${code}`) // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setRelation(data); console.log(data); }) // Set the relation data in state
            .catch(error => console.error('Error fetching relation:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }
        , [code]);

    return { relation, loading };
}

function useRelationExperiences(code: string) {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]); // State to hold the experiences data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch relation data based on the id from the URL
        fetch(`http://localhost:3000/relation/${code}/experiences`) // Fetch experiences related to the relation
            .then(response => response.json())
            .then(data => { setExperiences(data); console.log(data); }) // Set the experiences data in state
            .catch(error => console.error('Error fetching experiences:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, [code]);

    return { experiences, loading };
}

function useExperiences(limit: number = 1000) {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]); // State to hold the experiences data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch experiences data from API or any other source
        fetch(`http://localhost:3000/experiences?limit=${limit.toString()}`) // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setExperiences(data); console.log(data); }) // Set the experiences data in state
            .catch(error => console.error('Error fetching experiences:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, []);

    return { experiences, loading }; // Return the experiences and loading state
}

function useExperiencesCountries() {
    const [countries, setCountries] = useState([]); // State to hold the countries data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch countries data from API or any other source
        fetch('http://localhost:3000/experiences/countries') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setCountries(data); console.log(data); }) // Set the countries data in state
            .catch(error => console.error('Error fetching countries:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, []);

    return { countries, loading }; // Return the countries and loading state
}

function useExperiencesTags() {
    const [tags, setTags] = useState([]); // State to hold the tags data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch tags data from API or any other source
        fetch('http://localhost:3000/experiences/tags') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setTags(data); console.log(data); }) // Set the tags data in state
            .catch(error => console.error('Error fetching tags:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }
        , []);

    return { tags, loading }; // Return the tags and loading state
}

function useRelations(limit: number = 1000) {
    const [relations, setRelations] = useState<RelationType[]>([]); // State to hold the relations data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch relations data from API or any other source
        fetch(`http://localhost:3000/relations?limit=${limit}`) // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setRelations(data); console.log(data); }) // Set the relations data in state
            .catch(error => console.error('Error fetching relations:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, []);

    return { relations, loading }; // Return the relations and loading state
}

function useRelationsTags() {
    const [tags, setTags] = useState([]); // State to hold the tags data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch tags data from API or any other source
        fetch('http://localhost:3000/relations/tags') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setTags(data); console.log(data); }) // Set the tags data in state
            .catch(error => console.error('Error fetching tags:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, []);

    return { tags, loading }; // Return the tags and loading state
}

function useRelationsCountries() {
    const [countries, setCountries] = useState([]); // State to hold the countries data
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch countries data from API or any other source
        fetch('http://localhost:3000/relations/countries') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => { setCountries(data); console.log(data); }) // Set the countries data in state
            .catch(error => console.error('Error fetching countries:', error))
            .finally(() => setLoading(false)); // Set loading to false after fetching data
    }, []);

    return { countries, loading }; // Return the countries and loading state
}

export { useExperience, useRelation, useRelationExperiences, useExperiences, useExperiencesCountries, useExperiencesTags, useRelations, useRelationsTags, useRelationsCountries };
