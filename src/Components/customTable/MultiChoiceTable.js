// MultiChoiceTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import MultiChoiceGrid from './MultiChoiceGrid'; // Create this component separately
import MultiChoiceGridTick from './MultiChoiceGirdTick';

const MultiChoiceTable = ({tick,radio}) => {
  const rowHeaders = ['Row 1', 'Row 2', 'Row 3'];
  const columnHeaders = ['Column 1', 'Column 2', 'Column 3'];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {columnHeaders.map((header) => (
              <TableCell key={header} align="center">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowHeaders.map((rowHeader, rowIndex) => (
            <TableRow key={rowHeader}>
              <TableCell component="th" scope="row">
                {rowHeader}
              </TableCell>
              {[0, 1, 2].map((colIndex) => (
                <TableCell key={colIndex}>
                  {
                    (radio)?
                    <MultiChoiceGrid />
                    :
                    <MultiChoiceGridTick />
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MultiChoiceTable;
