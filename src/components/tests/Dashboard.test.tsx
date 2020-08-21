import Dashboard from '../Dashboard';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import xmlText from './mockXml'

describe(Dashboard, () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  describe("when no data is loaded", () => {
    it("displays upload header", () => {
      expect(screen.getByLabelText(/Upload/)).toBeInTheDocument();
    })

    it("does not display election data", () => {
      expect(screen.queryByRole("table")).not.toBeInTheDocument();
      expect(screen.queryByText(/Click on a candidate/)).not.toBeInTheDocument();
    })
  })

  describe("when valid data is loaded", () => {
    beforeEach(async () => {
      const xmlFile = new File([ xmlText ], 'election.xml', { type: "text/xml" })

      userEvent.upload(screen.getByTestId("xml-upload"), xmlFile)

      await screen.findByRole("table");
    });

    it("displays header and table with election data", () => {
      expect(screen.getByText(/Primaries for Oklahoma/)).toBeInTheDocument();
      expect(screen.getByRole("table")).toBeInTheDocument();
      expect(screen.getByText(/Click on a candidate to see more/)).toBeInTheDocument();
    })

    it("displays selected details when candidate is clicked", () => {
      userEvent.click(screen.getAllByRole("row")[ 1 ]);

      expect(screen.getByText(/Details for Candidate/)).toBeInTheDocument();
    })
  })
});