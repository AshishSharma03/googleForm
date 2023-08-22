
import { Box, Button, Checkbox, FormControl,MenuItem,Select,InputLabel, FormControlLabel, Input, Radio, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MultiChoiceTable from '../customTable/MultiChoiceTable';


function CustomCard({NeedCheckBox,NeedRadio,NeedInput,NeedFileUploader,Title,onFileUpload,multiline,fullWidth,Needscale,RadioTable,CheckboxTable,data,DropDownMenu}) {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };
  return (
    <Box
     component={"div"} 
     sx={CustomCardStyle()}>
          <Typography
            sx={{fontSize:"16px",marginBottom:"16px"}}  
           >{Title} <span style={{fontSize:"20px",color:"red"}}>*</span></Typography>
           {(NeedRadio)?
           <Stack>
           {data?.map((a)=>
           <FormControlLabel key={a}
           label={a}
           control={
             <Radio/>
           }
           />
           )}
            
            </Stack>
          :""}    
           {(NeedCheckBox)?
            <Stack>
            {data?.map((a)=>
            <FormControlLabel
            label={a}
            control={
              <Checkbox/>
            }
            />
            )}
             
             </Stack>  
              :""
            } 
          {
            (NeedInput)?
            <Input
            multiline={multiline}
            placeholder='Your Answer'
            fullWidth={fullWidth}
            />
            :""
          }

          {(NeedFileUploader)?
          <>
              <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{gap:"10px",border:"1px solid #dadce0",padding:"8px 15px"}}
              onClick={() => fileInputRef.current.click()}
            >
              <FileUploadOutlinedIcon sx={{fontSize:"18px"}}/>
              <Typography sx={{fontSize:"16x"}}>Add File</Typography> 
            </Button>
            </>
            :""
          }

      {(Needscale)?
            <Box sx={{display:"flex",flexDirection:{md:"row",xs:"column"},alignItems:{md:"end",sm:"start"},justifyContent:"center",gap:"0px 30px"}}>
              <Typography>Worst</Typography>
              {data?.map((a)=>
              <Box key={a} sx={{display:"flex",flexDirection:{md:"column",sm:"row"},alignItems:"center"}}>
                <Typography>{a}</Typography>
                <Radio/>
              </Box>
                )}
           
            
              <Typography>Best</Typography>
            </Box>
          :""} 

      {(RadioTable)?
      <>
        <MultiChoiceTable radio/>
      </>
      :
      ""}

    {(CheckboxTable)?
      <>
        <MultiChoiceTable/>
      </>
      :
      ""}

      {(DropDownMenu)?
        <>
          <FormControl>
          <InputLabel>Choose</InputLabel>
          <Select
          sx={{width:"200px"}}
          label="Choose"
        // value={selectedOption}
        // onChange={handleOptionChange}
      >
        <MenuItem value="">Choose</MenuItem>
        {
          data?.map((a)=> <MenuItem key={a} value={a}>{a}</MenuItem>)
        }
        
      </Select>
          </FormControl>
        </>
      :""}
              
    </Box>
  )
}

const CustomCardStyle = (color,Fontolor) => {
    return {
        background  :"#fff",
        padding:"24px",
        borderRadius :"8px",
        border: "1px solid #dadce0",

    }
}


export default CustomCard;