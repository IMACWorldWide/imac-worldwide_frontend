/* experience.type.tsx */

import { LanguageType } from "./language.type";
import { RelationType } from "./relation.type";
import { TagType } from "./tag.type";

export interface ExperienceType {
    id: number;
    title: string;
    imageURL: string;
    summary: string;
    departure_date: string;
    return_date: string;
    relation: RelationType;
    tags: TagType[];
    courses: { name: string, description: string, language: LanguageType[] }[];
    contact: { name: string, class: string, email: string, phone: string, linkedin: string, discord: string, instagram: string };
}