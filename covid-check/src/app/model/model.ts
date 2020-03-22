export interface Patient {
    id: string; //technical ID for firebase -> internal use only
    // inspired by RKI form = Aktenzeichen
    filenumber: string;
    firstname: string;
    lastname: string;
    dateofbirth: firebase.firestore.Timestamp;
    street: string;
    zip: string;
    city: string;
    gender?: Gender;
    examinations?: Array<Examination>;
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
    id: string; //technical ID for firebase -> internal use only
    // inspired by RKI form = Aktenzeichen
    filenumber: string;
    date: firebase.firestore.Timestamp;
    nameOfLocation?: string;
    nameOfContactPerson?: string;
    street?: string;
    zip?: string;
    city?: string;
    documents?: Array<string>;
    probes?: Array<Probe>;
    visitedSuspectRegions?: string;
    currentSymptoms?: string;
    contactToSuspectPersons?: boolean;
    status: ExaminationStatus;
}
export enum ProbeResult {
    unknown = 0,
    neg = 1,
    pos = 2
}

export interface Probe {
    creationDate: firebase.firestore.Timestamp;
    examinationDate: firebase.firestore.Timestamp;
    result: ProbeResult;
    id: string;
}

