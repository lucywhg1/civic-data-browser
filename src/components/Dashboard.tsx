import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import parseElectionData from '../xml/parser';
import { ElectionData } from '../xml/types';
import CandidateTable from './CandidatesView';
import DetailsPanel, { SelectedDetails } from './DetailsPanel';
import ElectionHeader from './ElectionHeader';
import UploadHeader from './UploadHeader';

const Dashboard: React.FC = (): JSX.Element => {
  const [electionData, setElectionData] = useState<ElectionData | undefined>();
  const [selectedDetails, setSelectedDetails] = useState<
    SelectedDetails | undefined
  >();

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.currentTarget.files?.item(0);
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (): void => {
        parseElectionData(reader.result as string, (data) => {
          setElectionData(data);
        }); // convert uploaded XML to JSON
      };
    }
  };

  const handleDetailsChange = (partyId: string, personId: string): void => {
    if (electionData) {
      const party = electionData.party.find(
        (record) => record._attributes.id === partyId
      );
      const person = electionData.person.find(
        (record) => record._attributes.id === personId
      );

      setSelectedDetails({ party, person });
    }
  };

  return (
    <div>
      <Jumbotron className='bg-dark text-light fluid p-3'>
        {electionData ? (
          <ElectionHeader
            source={electionData.source}
            election={electionData.election}
            state={electionData.state}
          />
        ) : (
          <UploadHeader onChange={handleFileUpload} />
        )}
      </Jumbotron>
      <Container fluid className='p-2'>
        {electionData && (
          <Row>
            <Col md={8}>
              <CandidateTable
                candidates={electionData.candidate}
                onClick={handleDetailsChange}
              />
            </Col>
            <Col sm={4} className='d-none d-md-block'>
              <Container className='bg-light border p-2 sticky-top'>
                {selectedDetails ? (
                  <DetailsPanel details={selectedDetails} />
                ) : (
                  <h5>
                    Click on a candidate to see more info about them and their
                    party.
                  </h5>
                )}
              </Container>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
