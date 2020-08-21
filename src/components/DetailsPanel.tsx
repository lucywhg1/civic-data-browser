import React from 'react';
import { Party, Person } from '../xml/types';
import { getEnglishText } from '../xml/format';

export interface SelectedDetails {
  party?: Party;
  person?: Person;
}

interface DetailsPanelProps {
  details: SelectedDetails;
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({
  details
}): JSX.Element => {
  const { party, person } = details;

  return (
    <>
      <h4>Details for Candidate</h4>
      {person && (
        <div className='m-2'>
          <h5>
            <strong>{getEnglishText(person.fullName)}</strong>
          </h5>
          <pre>
            <code>{JSON.stringify(person, null, 2)}</code>
          </pre>
        </div>
      )}
      {party && (
        <div className='m-2'>
          <h5>
            <strong>{getEnglishText(party.name)}</strong>
          </h5>
          <pre>
            <code>{JSON.stringify(party, null, 2)}</code>
          </pre>
        </div>
      )}
    </>
  );
};

export default DetailsPanel;
