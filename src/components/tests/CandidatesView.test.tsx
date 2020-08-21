import React from 'react';

import { render, screen } from '@testing-library/react';

import { formatExternalIds, getEnglishText } from '../../xml/format';
import parseElectionData from '../../xml/parser';
import { Candidate } from '../../xml/types';
import CandidateTable from '../CandidateTable';
import xmlText from './mockXml';
import CandidatesView from '../CandidatesView';
import userEvent from '@testing-library/user-event';

const mockOnClick = jest.fn()

describe(CandidatesView, () => {
  let candidates: Candidate[];

  beforeAll(() => {
    parseElectionData(xmlText, data => {
      candidates = data.candidate
    });
  })

  beforeEach(() => {
    render(<CandidatesView candidates={candidates} onClick={mockOnClick} />)
  })

  it("displays search bar and table", () => {
    expect(screen.getByPlaceholderText(/Filter/)).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  })

  it("filters table by lowercased input", () => {
    const excludedName = getEnglishText(candidates[ 1 ].ballotName);
    expect(screen.getByText(excludedName)).toBeInTheDocument();

    const includedName = getEnglishText(candidates[ 0 ].ballotName);
    userEvent.type(screen.getByPlaceholderText(/Filter/), includedName.toUpperCase());

    expect(screen.queryByText(excludedName)).not.toBeInTheDocument();
    expect(screen.getByText(includedName)).toBeInTheDocument();
  })

  it("invokes #onClick without candidate id when row is clicked", () => {
    userEvent.click(screen.getAllByRole("row")[ 1 ]); // skip header row

    expect(mockOnClick).toHaveBeenCalledWith(candidates[ 0 ].partyId, candidates[ 0 ].personId);
  })
});