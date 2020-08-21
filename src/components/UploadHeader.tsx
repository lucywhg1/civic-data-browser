import React from 'react';
import Form from 'react-bootstrap/Form';

interface UploadHeaderProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadHeader: React.FC<UploadHeaderProps> = ({
  onChange
}): JSX.Element => {
  return (
    <>
      <h2 className='text-center'>Browse Election Data</h2>
      <Form inline>
        <Form.File
          id='xmlFileUpload'
          label='Upload a VIP-compliant XML'
          accept='.xml'
          onChange={onChange}
          custom
          data-testid='xml-upload'
        />
        <Form.Text className='ml-auto'>
          Example files (shortened and full) are in root.
        </Form.Text>
      </Form>
    </>
  );
};

export default UploadHeader;
