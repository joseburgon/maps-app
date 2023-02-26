export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_en:       string;
    place_name_en: string;
    text:          string;
    place_name:    string;
    bbox?:         number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:           string;
    text_en:      string;
    text:         string;
    wikidata?:    string;
    language_en?: Language;
    language?:    Language;
    short_code?:  ShortCode;
}

export enum Language {
    En = "en",
}

export enum ShortCode {
    Us = "us",
    UsNy = "US-NY",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
    maki?:       string;
}
