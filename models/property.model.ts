export interface Geoloc {
    lat: number;
    lng: number;
}

export interface Geography {
    lat: number;
    lng: number;
}

export interface Location {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    type: string;
}

export interface Category {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    nameSingular: string;
    nameSingular_l1: string;
    nameSingular_l2: string;
}

export interface CoverPhoto {
    id: number;
    externalID: string;
    title?: any;
    orderIndex: number;
    nimaScore: number;
    url: string;
    main: boolean;
}

export interface PhoneNumber {
    mobile: string;
    phone: string;
    whatsapp: string;
    proxyMobile: string;
    phoneNumbers: string[];
    mobileNumbers: string[];
    proxyPhone: string;
}

export interface License {
    number: string;
    authority: string;
}

export interface Logo {
    id: number;
    url: string;
}

export interface Agency {
    id: number;
    objectID: number;
    name: string;
    name_l1: string;
    name_l2: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: License[];
    logo: Logo;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    tr: number;
    tier: number;
    roles: any[];
    active: boolean;
    createdAt: Date;
    commercialNumber?: any;
    shortNumber?: any;
}

export interface OwnerAgent {
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    user_image: string;
    user_image_id?: number;
    isTruBroker: boolean;
}

export interface ReferenceNumber {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Title {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface ExternalID {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Name {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Agency2 {
    name: Name;
}

export interface Keyword {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface HighlightResult {
    referenceNumber: ReferenceNumber;
    title: Title;
    externalID: ExternalID;
    agency: Agency2;
    keywords: Keyword[];
}

export interface CoverVideo {
    externalID: number;
    title?: any;
    host: string;
    url: string;
    orderIndex: number;
}

export interface Photo {
    id: number;
    externalID: string;
    title: string;
    url: string;
    orderIndex: number;
    nimaScore: number;
}

export interface Hit {
    id: number;
    objectID: number;
    ownerID: number;
    userExternalID: string;
    sourceID: number;
    state: string;
    geography: Geography;
    purpose: string;
    price: number;
    product: string;
    productLabel: string;
    rentFrequency: string;
    referenceNumber: string;
    permitNumber?: any;
    projectNumber?: any;
    title: string;
    title_l1: string;
    title_l2: string;
    description: string;
    description_l1: string;
    description_l2: string;
    externalID: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    location: Location[];
    category: Category[];
    createdAt: number;
    approvedAt: number;
    updatedAt: number;
    touchedAt: number;
    reactivatedAt: number;
    rooms: number;
    baths: number;
    area: number;
    score: number;
    score_l1: number;
    score_l2: number;
    coverPhoto: CoverPhoto;
    photoCount: number;
    videoCount: number;
    panoramaCount: number;
    photos: Photo[];
    floorPlans: any[];
    videos: any[];
    panoramas: any[];
    amenities: Amenity[];
    phoneNumber: PhoneNumber;
    contactName: string;
    agency: Agency;
    active: boolean;
    hasExactGeography: boolean;
    verification: Verification;
    isVerified: boolean;
    completionStatus: string;
    randBoostScore: number;
    randBoostScore_l1: number;
    randBoostScore_l2: number;
    furnishingStatus: string;
    extraFields: ExtraFields;
    type: string;
    cityLevelScore: number;
    indyScore: number;
    indyScore_l1: number;
    indyScore_l2: number;
    hasMatchingFloorPlans: boolean;
    hidePrice: boolean;
    locationPurposeTier: number;
}

export interface Exhaustive {
    nbHits: boolean;
}

export interface Format {
    total: number;
}

export interface AfterFetch {
    format: Format;
    total: number;
}

export interface Fetch {
    scanning: number;
    total: number;
}

export interface Request {
    roundTrip: number;
}

export interface ProcessingTimingsMS {
    afterFetch: AfterFetch;
    fetch: Fetch;
    request: Request;
    total: number;
}

export interface Property {
    hits: Hit[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    exhaustive: Exhaustive;
    query: string;
    params: string;
    processingTimeMS: number;
    processingTimingsMS: ProcessingTimingsMS;
    serverTimeMS: number;
}


    // ===============


    export interface Amenity2 {
        text: string;
        text_l1: string;
        text_l2: string;
        value: string;
        rank: number;
        slug: string;
        format: string;
        externalID: number;
    }

    export interface Amenity {
        externalGroupID: number;
        groupRank: number;
        text: string;
        text_l1: string;
        text_l2: string;
        amenities: Amenity2[];
    }

    export interface Verification {
        status: string;
        type: string;
        eligible: boolean;
        comment?: any;
        updatedAt: number;
        verifiedAt: number;
        visitedAt?: any;
    }

    export interface ExtraFields {
        dldBuildingNK: string;
        dldPropertySK: string;
        'amenity-sauna-20042': boolean;
        'amenity-jacuzzi-20033': boolean;
        'amenity-intercom-20030': boolean;
        'amenity-furnished-20020': boolean;
        'amenity-pet-policy-20021': string;
        'amenity-barbeque-area-20004': boolean;
        'amenity-cctv-security-20063': boolean;
        'amenity-swimming-pool-20045': boolean;
        'amenity-kids-play-area-20034': boolean;
        'amenity-lawn-or-garden-20036': boolean;
        'amenity-parking-spaces-20068': number;
        'amenity-security-staff-20062': boolean;
        'amenity-lobby-in-building-20005': boolean;
        'amenity-balcony-or-terrace-20003': boolean;
        'amenity-broadband-internet-20026': boolean;
        'amenity-gym-or-health-club-20022': boolean;
        'amenity-double-glazed-windows-20006': boolean;
        'amenity-facilities-for-disabled-20067': boolean;
        'amenity-centrally-air-conditioned-20007': boolean;
    }

