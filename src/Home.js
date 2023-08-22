import { Box, Button, Container, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomCard from './Components/CustomCard'
import HeadCard from './Components/HeadCard'

const optionData = ["Option 1","Option 2","Option 4"]

function Home() {
  return (
    <Box
    component={"div"}
    style={MainBodyStyle}
    >
      <Container maxWidth={"md"}>
        <Box component={"form"} sx={FormBody} >
          <HeadCard/>
          <CustomCard Title={"MCQ"} NeedRadio  data={optionData}/>
          <CustomCard Title={"Checkbox"} NeedCheckBox data={optionData}/>
          <CustomCard Title={"Short Answer"} NeedInput/>
          <CustomCard Title={"ParaGraph"} NeedInput multiline fullWidth/>
          <CustomCard Title={"Drop down"} DropDownMenu  data={optionData}/>
          <CustomCard Title={"File Upload"} NeedFileUploader/>
          <CustomCard Title={"Linear Scale"} Needscale data={[1,2,3,4,5]} />
          <CustomCard Title={"Multi choice Grid"}  RadioTable />
          <CustomCard Title={"Tick box Grid"} CheckboxTable />
          <Stack direction={"row"} alignItems={"center"}>
            <Button type="submit" variant="contained">Submit</Button>
            <span style={{flex:1}} />
            <Stack direction={"row"} alignItems={"center"}> 
            <LinearProgress
            variant={"determinate"}
            color="success"
            thikness={500}
            sx={{width:"180px"}}
            value={100}
            />
            <Typography sx={{paddingLeft:"10px",fontSize:"14px",color:"#202124"}}>Page 1 of 1</Typography>
            </Stack>
             <span style={{flex:1}} />
          <Button type="submit">Clear form</Button>
          </Stack>
        </Box>
        
      </Container>
    </Box>
  )
}

const MainBodyStyle = 
{
     background : "rgb(240, 235, 248)",
     minHeight : "100vh",
     display:"flex",
     justifyContent : "center",
     alignItems :"center",
     flexDirection:"horizontal"
}

const FormBody = {
  display:"flex",
  flexDirection:"column" ,
  gap:"12px",
  padding:{md:"10px 120px",sm:"10px 30px"}
}


export default Home;