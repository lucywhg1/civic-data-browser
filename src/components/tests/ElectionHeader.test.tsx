import React from 'react';
import { render, screen } from '@testing-library/react';

import xmlText from './mockXml'
import { Party, Person, ElectionData, State, Source, Election } from '../../xml/types';
import { getEnglishText } from '../../xml/format';
import parseElectionData from '../../xml/parser';
import ElectionHeader from '../ElectionHeader';

describe(ElectionHeader, () => {
  let source: Source, election: Election, state: State;

  beforeAll(() => {
    parseElectionData(xmlText, data => {
      source = data.source;
      election = data.election;
      state = data.state;
    });
  })

  beforeEach(() => {
    render(<ElectionHeader source={source} election={election} state={state} />)
  })

  it("displays election summary", () => {
    const electionMatcher = new RegExp("Election " + getEnglishText(election.name))
    expect(screen.getByText(electionMatcher)).toBeInTheDocument();
  })

  it("includes state name", () => {
    const stateMatcher = new RegExp(state.name);
    expect(screen.getAllByText(stateMatcher)[0]).toBeInTheDocument();
  })

  it("links to source uri", () => {
    expect(screen.getByRole("link")).toHaveAttribute("href", source.organizationUri);
  })
})