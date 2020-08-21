import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Source, Election, State } from '../xml/types';
import { getEnglishText } from '../xml/format';

interface ElectionHeaderProps {
  source: Source;
  election: Election;
  state: State;
}

const ElectionHeader: React.FC<ElectionHeaderProps> = ({
  source,
  election,
  state
}): JSX.Element => {
  return (
    <Row>
      <Col>
        <h3>{`Election ${getEnglishText(election.name)} for ${state.name}`}</h3>
        <h5>{getEnglishText(election.electionType)}</h5>
        <p>
          <em>{election.date}</em>
        </p>
      </Col>
      <Col sm={4}>
        <p>
          <strong>
            <a href={source.organizationUri}>{source.name}</a>
          </strong>
        </p>
        <p>
          {getEnglishText(source.description)} (<em>{source.dateTime}</em>)
        </p>
      </Col>
    </Row>
  );
};

export default ElectionHeader;
