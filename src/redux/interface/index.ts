export interface confirms{
    provinceState: null;
    countryRegion: string;
    lastUpdate: number;
    lat: number;
    long: number;
    recovered: null;
    active: null;
    admin2: null;
    fips: null;
    incidentRate: number;
    peopleHospitalized: null;
    uid: number;
    iso3: string;
    case28Days: number;
    death28Days: number;
    iso2: string;
}
export interface dataAPI{
    confirmed?: object;
    recovered: object;
    deaths: object;
    dailySummary: string;
    dailyTimeSeries: object;
    countries: string;
    image: string
}
export interface initialize{
    confirm?: confirms[];
    data?: dataAPI[]
}
