import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import MultiChoiceGrid from './MultiChoiceGrid'; 
import MultiChoiceGridTick from './MultiChoiceGirdTick';

const MultiChoiceTable = ({radio,rowHeaders ,columnHeaders,MultiChoiceGridRow,SetMultiChoiceGridRow,MultiChoiceGridTickRow,SetMultiChoiceGridTickRow}) => {

const handleRadio = (colIndex, rowIndex) => {
  SetMultiChoiceGridRow((prevRows) => {
    const newRow = [...prevRows[rowHeaders[rowIndex]]];
    newRow.fill(false); 
    newRow[colIndex] = true; 

    return {
      ...prevRows,
      [rowHeaders[rowIndex]]: newRow,
    };
  });
};

const handleTick = (colIndex, rowIndex) => {
  SetMultiChoiceGridTickRow((prevRows) => {
    const newRow = [...prevRows[rowHeaders[rowIndex]]];
    newRow[colIndex] = !newRow[colIndex];

    return {
      ...prevRows,
      [rowHeaders[rowIndex]]: newRow,
    };
  });
};

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
            {columnHeaders?.map((header) => (
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
          {rowHeaders?.map((rowHeader, rowIndex) => (
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
              {columnHeaders?.map((colIndex,colIndexKey) => (
                <TableCell key={colIndex}>
                  {radio ? <MultiChoiceGrid  
                         checked={MultiChoiceGridRow[rowHeaders[rowIndex]][colIndexKey]}
                        onChange={()=> handleRadio(colIndexKey,rowIndex) }
                  /> : <MultiChoiceGridTick
                  checked={MultiChoiceGridTickRow[rowHeaders[rowIndex]][colIndexKey]}
                  onChange={() => handleTick(colIndexKey,rowIndex)}
                  />}
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
