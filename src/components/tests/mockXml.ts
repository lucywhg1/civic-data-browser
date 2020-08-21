const xmlText = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generated: 2020-07-24 14:43:54-05:00 -->
<VipObject schemaVersion="5.1">
  <Source id="src1">
    <DateTime>2020-06-30T10:20:20</DateTime>
    <Description>
      <Text language="en">Wikipedia is the official source of this data.</Text>
    </Description>
    <Name>Wikipedia, Elections Office of Oklahoma</Name>
    <OrganizationUri>http://www.wikipedia.com/</OrganizationUri>
    <VipId>40</VipId>
  </Source>
  <Candidate id="can193574">
    <BallotName>
      <Text language="en">Todd Hiett</Text>
    </BallotName>
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>other</Type>
        <OtherType>ctcl-uuid</OtherType>
        <Value>0d877d3f-bc65-52fd-9589-c4d8a7a4cdc3</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <PartyId>par33</PartyId>
    <PersonId>per187575</PersonId>
    <PreElectionStatus>qualified</PreElectionStatus>
  </Candidate>
  <Candidate id="can193575">
    <BallotName>
      <Text language="en">Eddy Dempsey</Text>
    </BallotName>
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>other</Type>
        <OtherType>ctcl-uuid</OtherType>
        <Value>820de4a3-6a84-5660-ace6-d5f1cfba231c</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <PartyId>par33</PartyId>
    <PersonId>per187467</PersonId>
    <PreElectionStatus>qualified</PreElectionStatus>
  </Candidate>
  <Election id="ele1">
    <Date>2020-06-30</Date>
    <ElectionType>
      <Text language="en">Primary</Text>
    </ElectionType>
    <StateId>st1</StateId>
    <Name>
      <Text language="en">06-30 Primaries</Text>
    </Name>
  </Election>
  <Party id="par33">
    <Abbreviation>REP</Abbreviation>
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>other</Type>
        <OtherType>ctcl-uuid</OtherType>
        <Value>9f39e69c-13b1-41c6-b90f-9293cc9fd147</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <Name label="Republican Party">
      <Text language="en">Republican Party</Text>
    </Name>
  </Party>
  <Party id="par7">
    <Abbreviation>DEM</Abbreviation>
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>other</Type>
        <OtherType>ctcl-uuid</OtherType>
        <Value>eb26ea9f-1451-4e20-b108-a7cabbd17dfd</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <Name label="Democratic Party">
      <Text language="en">Democratic Party</Text>
    </Name>
  </Party>
  <Person id="per187575">
    <ContactInformation>
      <Uri annotation="facebook">https://www.facebook.com/Todd-Hiett-544509782333402/</Uri>
    </ContactInformation>
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>other</Type>
        <OtherType>ctcl-uuid</OtherType>
        <Value>c502ab07-a295-4406-a86b-085dd00bea21</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <FirstName>Todd</FirstName>
    <FullName>
      <Text language="en">Todd Hiett</Text>
    </FullName>
    <LastName>Hiett</LastName>
    <PartyId>par33</PartyId>
  </Person>
  <Person id="per187467">
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>other</Type>
        <OtherType>ctcl-uuid</OtherType>
        <Value>6366a343-4174-4c0d-bf6b-e4c2ca5a7f60</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <FirstName>Eddy</FirstName>
    <FullName>
      <Text language="en">Eddy Dempsey</Text>
    </FullName>
    <LastName>Dempsey</LastName>
    <PartyId>par33</PartyId>
  </Person>
  <State id="st1">
    <ExternalIdentifiers>
      <ExternalIdentifier>
        <Type>ocd-id</Type>
        <Value>ocd-division/country:us/state:ok</Value>
      </ExternalIdentifier>
    </ExternalIdentifiers>
    <Name>Oklahoma</Name>
  </State>
</VipObject>`

export default xmlText;