// MultiChoiceGrid.js
import React from 'react';
import { Box, FormGroup, Radio } from '@mui/material';

const MultiChoiceGrid = ({onChange,checked}) => {
  return (
    <FormGroup>
      <Box sx={{textAlign:"center"}}>
     <Radio
     checked={checked}
     onChange={onChange}
     />
      </Box>
    </FormGroup>
  );
};

export default MultiChoiceGrid;
