/* relation.type.tsx */

// Importing necessary types
import { CountryType } from './country.type';
import { LanguageType } from './language.type';
import { TagType } from './tag.type';

export interface RelationType {
    id: number;
    code: string;
    name: string;
    description: string;
    locations: string[];
    imageURL: string;
    country: CountryType;
    languages: LanguageType[];
    tags: TagType[];
};