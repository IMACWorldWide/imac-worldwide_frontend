/* filters.type.tsx */

export interface FiltersType {
    countries: { [key: string]: boolean };
    tags: { [key: string]: boolean };
    languages: { [key: string]: boolean };
    date: { startDate: Date, endDate: Date };
}