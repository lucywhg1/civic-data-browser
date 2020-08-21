import React from 'react';

import { render, screen } from '@testing-library/react';

import { getEnglishText } from '../../xml/format';
import parseElectionData from '../../xml/parser';
import { Party, Person } from '../../xml/types';
import DetailsPanel from '../DetailsPanel';
import xmlText from './mockXml';

describe(DetailsPanel, () => {
  let party: Party, person: Person;

  beforeAll(() => {
    parseElectionData(xmlText, data => {
      party = data.party[ 0 ];
      person = data.person[ 0 ];
    });
  })

  beforeEach(() => {
    render(<DetailsPanel details={{party, person}} />)
  })

  it("displays person details", () => {
    expect(screen.getByText(getEnglishText(person.fullName))).toBeInTheDocument();
    expect(screen.getByText(/"id": "per187575"/)).toBeInTheDocument();
  })

  it("displays party details", () => {
    expect(screen.getByText(getEnglishText(party.name))).toBeInTheDocument();
    expect(screen.getByText(/"id": "par33"/)).toBeInTheDocument();
  })
})