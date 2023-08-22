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
import MultiChoiceGrid from './MultiChoiceGrid'; 
import MultiChoiceGridTick from './MultiChoiceGirdTick';

const MultiChoiceTable = ({ tick, radio }) => {
  const rowHeaders = ['Row 1', 'Row 2', 'Row 3'];
  const columnHeaders = ['Column 1', 'Column 2', 'Column 3'];

  return (
    <TableContainer
      sx={{ border: 'none' }}
    >
      <Table
        sx={{
          borderCollapse: 'collapse',
          '& tr': {
            borderBottom: 'none',
          },
          '& td': {
            border: 'none',
            padding: '0px', 
          },
        }}
      >
        <TableHead
          sx={{
            border: 'none',
          }}
        >
          <TableRow>
            <TableCell sx={{ border: 'none' }} />
            {columnHeaders.map((header) => (
              <TableCell
                key={header}
                align="center"
                sx={{ border: 'none' }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowHeaders.map((rowHeader, rowIndex) => (
            <TableRow
              key={rowHeader}
              sx={{
                backgroundColor: '#F8F8F8',
                border: '6px solid #fff',
              }}
            >
              <TableCell component="th" scope="row" sx={{ border: 'none' }}>
                {rowHeader}
              </TableCell>
              {[0, 1, 2].map((colIndex) => (
                <TableCell key={colIndex}>
                  {radio ? <MultiChoiceGrid /> : <MultiChoiceGridTick />}
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
