interface Patient {
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    street: string;
    zip: string;
    city: string;
    visitedSuspectRegions: boolean;
    currentSymptoms : string;
    contactToSuspectPersons : boolean;
    examinations: Array<Examination>;
   
};


interface Examination {
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
}
enum ProbeResult {
    unknown = 0,
    neg = 1,
    pos = 2
}

interface Probe {
    creationDate: Date;
    probeDate: Date;
    result : ProbeResult;
    id: string;
}