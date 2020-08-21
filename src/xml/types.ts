interface IdAttributes {
  id: string;
}

interface Text {
  _content: string;
  _attributes: Record<string, string>;
}

export interface ExternalIdentifier {
  type: string;
  otherType: string;
  value: string;
}

export interface ExternalIdentifiers {
  externalIdentifier: ExternalIdentifier | ExternalIdentifier[];
}

export interface TextContainer {
  text: Text | Text[];
}


export interface Source {
  _attributes: IdAttributes;
  dateTime: Date;
  description: TextContainer;
  name: string;
  organizationUri: string;
  vipId: string;
}

export interface Election {
  _attributes: IdAttributes;
  date: string;
  electionType: TextContainer;
  stateId: string;
  name: TextContainer;
}

export interface State {
  _attributes: IdAttributes;
  externalIdentifiers: ExternalIdentifiers;
  name: string;
}

export interface Candidate {
  _attributes: IdAttributes;
  ballotName: TextContainer;
  externalIdentifiers: ExternalIdentifiers;
  partyId: string;
  personId: string;
  preElectionStatus: string;
}

export interface Party {
  _attributes: IdAttributes;
  abbreviation: string;
  externalIdentifiers: ExternalIdentifiers;
  name: TextContainer;
}

export interface Person {
  _attributes: IdAttributes;
  contactInformation: Record<string, any>;
  externalIdentifiers: ExternalIdentifiers;
  firstName: string;
  fullName: TextContainer;
  lastName: string;
  middleName: string;
  partyId: string;
}

export interface ElectionData {
  source: Source;
  candidate: Candidate[];
  election: Election;
  party: Party[];
  person: Person[];
  state: State;
}