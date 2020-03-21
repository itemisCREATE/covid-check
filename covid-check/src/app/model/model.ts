export interface Patient {
    // inspired by RKI form = Aktenzeichen
    fileNumber: string;
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    street: string;
    zip: string;
    city: string;
    gender?: Gender;
};

export enum Gender {
    m = 0,
    f = 1,
    d = 2
}

export enum ExaminationStatus {
    scheduled = 1,
    probeOutstanding = 2,
    closed = 3
}


export interface Examination {
    // human readable id
    id: string;
    date: Date;
    nameOfLocation: string;
    nameOfContactPerson: string;
    street: string;
    zip: string;
    city: string;
    documents: Array<String>;
    probes: Array<Probe>;
    visitedSuspectRegions: boolean;
    currentSymptoms: string;
    contactToSuspectPersons: boolean;
    status: ExaminationStatus;
}
export enum ProbeResult {
    unknown = 0,
    neg = 1,
    pos = 2
}

export interface Probe {
    creationDate: Date;
    examinationDate: Date;
    result: ProbeResult;
    id: string;
}

