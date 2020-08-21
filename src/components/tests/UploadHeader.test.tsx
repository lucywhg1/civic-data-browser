import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UploadHeader from '../UploadHeader';

const mockOnChange = jest.fn();

describe(UploadHeader, () => {
  beforeEach(() => {
    render(<UploadHeader onChange={mockOnChange} />);
  });

  it('displays header and file input', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByLabelText(/upload/i)).toBeInTheDocument();
  });

  it('invokes #onChange when file is uploaded', () => {
    const file = new File(['elections are important!'], 'file.xml', {
      type: 'text/xml'
    });
    userEvent.upload(screen.getByLabelText(/upload/i), file);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
