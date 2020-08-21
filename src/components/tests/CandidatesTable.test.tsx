import React from 'react';

import { render, screen } from '@testing-library/react';

import { formatExternalIds, getEnglishText } from '../../xml/format';
import parseElectionData from '../../xml/parser';
import { Candidate } from '../../xml/types';
import CandidateTable from '../CandidateTable';
import xmlText from './mockXml';
import userEvent from '@testing-library/user-event';

const mockOnClick = jest.fn()

describe(CandidateTable, () => {
  let candidates: Candidate[];

  beforeAll(() => {
    parseElectionData(xmlText, data => {
      candidates = data.candidate
    });
  })

  it("contains correct number of columns and rows", () => {
    render(<CandidateTable candidates={candidates} onClick={mockOnClick}  />)

    expect(screen.getAllByRole("columnheader").length).toBe(5);
    expect(screen.getAllByRole("row").length).toBe(candidates.length + 1); // table includes header
  })

  it("displays candidate info", () => {
    const { container } = render(<CandidateTable candidates={candidates} onClick={mockOnClick}  />)
    const firstRowCells = container.querySelectorAll("tr")[ 1 ].querySelectorAll("td"); // skip header row

    expect(firstRowCells[ 0 ].innerHTML).toBe(getEnglishText(candidates[0].ballotName));
    expect(firstRowCells[ 1 ].innerHTML).toBe(candidates[0].preElectionStatus);
    expect(firstRowCells[ 2 ].innerHTML).toBe(candidates[0].partyId);
    expect(firstRowCells[ 3 ].innerHTML).toBe(formatExternalIds(candidates[0].externalIdentifiers));
    expect(firstRowCells[ 4 ].innerHTML).toBe(candidates[0]._attributes.id);
  })

  it("invokes #onClick when row is clicked", () => {
    render(<CandidateTable candidates={candidates} onClick={mockOnClick}  />)

    userEvent.click(screen.getAllByRole("row")[ 1 ]); // skip header row

    expect(mockOnClick).toHaveBeenCalledWith(candidates[ 0 ].partyId, candidates[ 0 ].personId, candidates[ 0 ]._attributes.id);
  })
});