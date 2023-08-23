// MultiChoiceGrid.js
import React from 'react';
import { Checkbox,Box, FormGroup } from '@mui/material';

const MultiChoiceGridTick = ({onChange,checked}) => {
  return (
    <FormGroup>
      <Box sx={{textAlign:"center"}}>
     <Checkbox
       checked={checked}
       onChange={onChange}
     />
      </Box>
    </FormGroup>
  );
};

export default MultiChoiceGridTick;
