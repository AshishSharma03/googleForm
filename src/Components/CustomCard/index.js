
import { Box, Button, Checkbox, FormControl,MenuItem,Select,InputLabel, FormControlLabel, Input, Radio, Stack, Typography, IconButton } from '@mui/material';
import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MultiChoiceTable from '../customTable/MultiChoiceTable';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
function CustomCard({NeedCheckBox,NeedRadio,NeedInput,NeedFileUploader,Title,onFileUpload,fileUpload,multiline,
  fullWidth,Needscale,RadioTable,CheckboxTable,data,DropDownMenu,error
 , rowHeaders,columnHeaders,MultiChoiceGridRow,SetMultiChoiceGridRow,
 MultiChoiceGridTickRow,selectedRadioOption,selectedChekedOption
 ,setSelectedRadioOption,setSelectedChekedOption,selectedScaleOption
 ,setSelectedScaleOption,setSelectedOption,fileInputRef,selectedOption,SetMultiChoiceGridTickRow,
 setShortAnsSatate,setLongAnsSatate,LongAnsSatate,ShortAnsSatate
}) {
  

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleRadioChange = (event) => {
    setSelectedRadioOption(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setSelectedChekedOption(event.target.value);
  };

  const handleScaleChange = (index) => {
    const updatedOptions = selectedScaleOption?.map((value, i) => i === index);
    setSelectedScaleOption(updatedOptions);
  };

  const  handleOptionChange= (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <Box
     component={"div"} 
     sx={{
      background  :"#fff",
        padding:"24px",
        borderRadius :"8px",
        border:(error)? "1px solid red" : "1px solid #dadce0",
     }}>
          <Typography
            sx={{fontSize:"16px",marginBottom:"16px"}}  
           >{Title} <span style={{fontSize:"20px",color:"red"}}>*</span></Typography>
           {(NeedRadio)?
           <Stack>
           {data?.map((a)=>
           <FormControlLabel key={a}
           label={a}
           control={
             <Radio
             checked={selectedRadioOption === a}
             onChange={handleRadioChange}
             value={a}
             />
           }
           />
           )}
            
            </Stack>
          :""}    
           {(NeedCheckBox)?
            <Stack>
            {data?.map((a)=>
            <FormControlLabel
            key={a}
            label={a}
            control={
              <Checkbox
              checked={selectedChekedOption === a}
             onChange={handleCheckboxChange}
             value={a}
              />
            }
            />
            )}
             
             </Stack>  
              :""
            } 
          {
            (NeedInput)?
            <Input
            value={(multiline)?LongAnsSatate:ShortAnsSatate}
            onChange={(e)=>{ (multiline)?setLongAnsSatate(e.target.value) :setShortAnsSatate(e.target.value)}}
            multiline={multiline}
            placeholder='Your Answer'
            fullWidth={fullWidth}
            />
            :""
          }

          {(NeedFileUploader)?
           (!fileUpload)?<>
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
            </> :
              <Box sx={{display:"flex",alignItems:"center",gap:"3px",padding:"10px 10px",border:"1px solid #dadce0",borderRadius:"6px",width:"fit-content",cursor: "pointer",}}>
                <ImageIcon sx={{color:"red"}}/>
               <Typography sx={{textDecoration:"underline"}}>{fileUpload.name}</Typography> 
              <IconButton size="small" onClick={()=>{onFileUpload()}}>
                 <CloseIcon/>
              </IconButton>
              </Box>
            :""
          }

      {(Needscale)?
            <Box sx={{display:"flex",flexDirection:{md:"row",xs:"column"},alignItems:{md:"end",sm:"start"},justifyContent:"center",gap:"0px 30px"}}>
              <Typography>Worst</Typography>
              {data?.map((a,index)=>
              <Box key={a} sx={{display:"flex",flexDirection:{md:"column",sm:"row"},alignItems:"center"}}>
                <Typography>{a}</Typography>
                <Radio
                 checked={selectedScaleOption[index]}
                 onChange={()=> handleScaleChange(index)}
                 value={a}
                />
              </Box>
                )}
           
            
              <Typography>Best</Typography>
            </Box>
          :""} 

      {(RadioTable)?
      <>
        <MultiChoiceTable radio
     rowHeaders={rowHeaders}
     columnHeaders={columnHeaders}
     MultiChoiceGridRow={MultiChoiceGridRow}
     SetMultiChoiceGridRow={SetMultiChoiceGridRow}
         />
      </>
      :
      ""}

    {(CheckboxTable)?
      <>
        <MultiChoiceTable
        rowHeaders={rowHeaders}
        columnHeaders={columnHeaders}
        MultiChoiceGridTickRow={MultiChoiceGridTickRow}
        SetMultiChoiceGridTickRow={SetMultiChoiceGridTickRow}
        />
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
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <MenuItem value="">Choose</MenuItem>
        {
          data?.map((a)=> <MenuItem key={a} value={a}>{a}</MenuItem>)
        }
        
      </Select>
          </FormControl>
        </>
      :""}

       {(error)?
      <Box sx={{display:"flex" , alignItems:"center",gap:"8px",marginTop:"8px"}} >

          <ErrorOutlineOutlinedIcon sx={{color:"#D93025"}}/>
          <Typography sx={{fontSize:"12px",color:"#D93025"}}> {(CheckboxTable || RadioTable )?"This question requires at least one response per row":"This is a required question"}</Typography> 
      </Box>
        :""
       }
    </Box>
  )
}

export default CustomCard;