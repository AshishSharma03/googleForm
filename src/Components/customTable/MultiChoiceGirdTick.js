// MultiChoiceGrid.js
import React from 'react';
import { Checkbox,Box, FormControlLabel, FormGroup, Radio } from '@mui/material';

const MultiChoiceGridTick = () => {
  return (
    <FormGroup>
      <Box sx={{textAlign:"center"}}>
     <Checkbox/>
      </Box>
    </FormGroup>
  );
};

export default MultiChoiceGridTick;
