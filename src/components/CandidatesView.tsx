import React, { useState } from 'react';
import { Candidate } from '../xml/types';
import Form from 'react-bootstrap/Form';
import { getEnglishText } from '../xml/format';
import CandidateTable from './CandidateTable';

interface CandidatesViewProps {
  candidates: Candidate[];
  onClick: (partyId: string, personId: string) => void;
}

const CandidatesView: React.FC<CandidatesViewProps> = ({
  candidates,
  onClick
}): JSX.Element => {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

  const filterCandidates = (): Candidate[] => {
    return candidates.filter((candidate) =>
      getEnglishText(candidate.ballotName).toLowerCase().includes(query)
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleClick = (
    partyId: string,
    personId: string,
    candidateId: string
  ): void => {
    setSelectedId(candidateId);
    onClick(partyId, personId);
  };

  return (
    <>
      <Form inline className='m-2'>
        <Form.Control
          type='text'
          placeholder='Filter by ballot name...'
          value={query}
          onChange={handleChange}
        />
      </Form>
      <CandidateTable
        selectedCandidateId={selectedId}
        candidates={filterCandidates()}
        onClick={handleClick}
      />
    </>
  );
};

export default CandidatesView;
