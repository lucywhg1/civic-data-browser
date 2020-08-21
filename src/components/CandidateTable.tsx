import React from 'react';
import { Candidate } from '../xml/types';
import Table from 'react-bootstrap/Table';
import { getEnglishText, formatExternalIds } from '../xml/format';

const columns = [
  'Ballot Name',
  'Pre-Election Status',
  'Party ID',
  'External IDs',
  'VIP ID'
];

interface CandidateTableProps {
  selectedCandidateId?: string;
  candidates: Candidate[];
  onClick: (partyId: string, personId: string, candidateId: string) => void;
}

const CandidateTable: React.FC<CandidateTableProps> = ({
  selectedCandidateId,
  candidates,
  onClick
}): JSX.Element => {
  const getCandidateRows = (): JSX.Element[] => {
    return candidates.map((candidate) => {
      const candidateId = candidate._attributes.id;

      return (
        <tr
          className={
            selectedCandidateId === candidateId
              ? 'bg-info text-light'
              : undefined
          }
          key={candidateId}
          onClick={() =>
            onClick(candidate.partyId, candidate.personId, candidateId)
          }
        >
          <td>{getEnglishText(candidate.ballotName)}</td>
          <td>{candidate.preElectionStatus}</td>
          <td>{candidate.partyId}</td>
          <td>{formatExternalIds(candidate.externalIdentifiers)}</td>
          <td>{candidateId}</td>
        </tr>
      );
    });
  };

  return (
    <Table hover responsive>
      <thead>
        <tr key='header'>
          {columns.map((name) => (
            <th key={name}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{getCandidateRows()}</tbody>
    </Table>
  );
};

export default CandidateTable;
