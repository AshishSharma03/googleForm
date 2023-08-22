
import { Box, Button, Checkbox, FormControl, FormControlLabel, Input, Radio, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MultiChoiceGrid from '../customTable/MultiChoiceGrid';
import MultiChoiceTable from '../customTable/MultiChoiceTable';


function CustomCard({NeedCheckBox,NeedRadio,NeedInput,NeedFileUploader,Title,onFileUpload,multiline,fullWidth,Needscale,RadioTable,CheckboxTable}) {
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
            <FormControlLabel
            label="Option 1"
              control={
                <Radio/>
              }
            />
          :""}    
           {(NeedCheckBox)?
             <FormControlLabel
             style={{display:"flex",gap:"1px"}}
             label="Option 2"
             control={
               <Checkbox/>
              }
              />  
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
              
              <Box sx={{display:"flex",flexDirection:{md:"column",sm:"row"},alignItems:"center"}}>
                <Typography>1</Typography>
                <Radio/>
              </Box>
              <Box sx={{display:"flex",flexDirection:{md:"column",sm:"row"},alignItems:"center"}}>
                <Typography>2</Typography>
                <Radio/>
              </Box>
            
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

const FormControlLabelStyle = () => {
  return {

  }
}
export default CustomCard;