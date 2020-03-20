type Patient = {
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    street: string;
    zip: string;
    city: string;
    visitedSuspectRegions: boolean;
    currentSymptoms : string;
    contactToSuspectPersons : boolean;
    appointments: Array<Appointment>;
    probes: Array<Probe>;
};


type Appointment = {
    date: Date;
    caseIdentifier: string;
    nameOfLocation: string;
    nameOfContactPerson: string;
    street: string;
    zip: string;
    city: string;
}
enum ProbeResult {
    unknown = 0,
    neg = 1,
    pos = 2
}

type Probe = {
    creationDate: Date;
    probeDate: Date;
    result : ProbeResult;
}