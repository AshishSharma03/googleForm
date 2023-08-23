import {
  Box,
  Button,
  Container,
  LinearProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomCard from "./Components/CustomCard";
import HeadCard from "./Components/HeadCard";

const optionData = ["Option 1", "Option 2", "Option 4"];

function Home() {
  const [selectedRadioOption, setSelectedRadioOption] = useState();
  const [selectedChekedOption, setSelectedChekedOption] = useState();
  const [shortAnsSatate,setShortAnsSatate] = useState("");
  const [LongAnsSatate,setLongAnsSatate] = useState("");
  const fileInputRef = useRef(null);
  const [fileUpload,onFileUpload] = useState()
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedScaleOption, setSelectedScaleOption] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const rowHeaders = ["Row 1", "Row 2", "Row 3"];
  const columnHeaders = ["Column 1", "Column 2", "Column 3"];
  const [MultiChoiceGridRow, SetMultiChoiceGridRow] = useState({
    "Row 1": [false, false, false],
    "Row 2": [false, false, false],
    "Row 3": [false, false, false],
  });
  const [MultiChoiceGridTickRow, SetMultiChoiceGridTickRow] = useState({
    "Row 1": [false, false, false],
    "Row 2": [false, false, false],
    "Row 3": [false, false, false],
  });
  const [error,setError] = useState(-1);
  const [ActiveErrors, setActiveErrors] = useState(false)
  const checkRowsHaveTrueValue = () => {
    for (const row in MultiChoiceGridRow) {
      if (MultiChoiceGridRow[row].every(value => value === false)) {
        return false;
      }
    }
    return true;
  };



 

  const checkRowsHaveTrueValueTick = () => {
    for (const row in MultiChoiceGridTickRow) {
      if (MultiChoiceGridTickRow[row].every(value => value === false)) {
        return false;
      }
    }
    return true;
  };


  const fromValidation = () => {
    if( selectedRadioOption === undefined){
        setError(1)
      }else if(selectedChekedOption === undefined){
        setError(2)
      }else if(shortAnsSatate.length === 0){
        setError(3)
      }else if(LongAnsSatate.length === 0){
        setError(4)
      }else if(!optionData.includes(selectedOption)){
        setError(5)
      }else if(fileUpload === undefined){
        setError(6)
      }else if(!selectedScaleOption.includes(true)){
      setError(7) 
    }else if(!checkRowsHaveTrueValue()){
      setError(8)
    }else if(!checkRowsHaveTrueValueTick()){
      setError(9)
    }else{
      setError(-1)
      setActiveErrors(false)
    }
  };
  
    useEffect(()=>{
      if(ActiveErrors){  
        fromValidation()
      }
    },[ActiveErrors, fromValidation])

  return (
    <Box component={"div"} style={MainBodyStyle}>
      <Container maxWidth={"md"}>
        <Box component={"form"} sx={FormBody}>
          <HeadCard />
          <CustomCard
            Title={"MCQ"}
            NeedRadio
            error={(error === 1 || error === 0)? true : false }
            selectedRadioOption={selectedRadioOption}
            setSelectedRadioOption={setSelectedRadioOption}
            data={optionData}
          />
          <CustomCard
           error={(error === 2 || error === 0)? true : false }
            Title={"Checkbox"}
            NeedCheckBox
            selectedChekedOption={selectedChekedOption}
            setSelectedChekedOption={setSelectedChekedOption}
            data={optionData}
          />
          <CustomCard Title={"Short Answer"}
          error={(error === 3 || error === 0)? true : false }
          ShortAnsSatate={shortAnsSatate}
          setShortAnsSatate={setShortAnsSatate}
          NeedInput />
          <CustomCard Title={"ParaGraph"} 
          error={(error === 4 || error === 0)? true : false }
        
          LongAnsSatate={LongAnsSatate}
          setLongAnsSatate={setLongAnsSatate}

          NeedInput 
          multiline 
          fullWidth />

          <CustomCard
            Title={"Drop down"}
            error={(error === 5 || error === 0)? true : false }
            DropDownMenu
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            data={optionData}
          />
          <CustomCard
         error={(error === 6 || error === 0)? true : false }
            Title={"File Upload"}
            fileUpload={fileUpload}
            onFileUpload={onFileUpload}
            fileInputRef={fileInputRef}
            NeedFileUploader
          />
          <CustomCard
            Title={"Linear Scale"}
            Needscale
            error={(error === 7 || error === 0)? true : false }
            selectedScaleOption={selectedScaleOption}
            setSelectedScaleOption={setSelectedScaleOption}
            data={[1, 2, 3, 4, 5]}
          />
          <CustomCard
            Title={"Multi choice Grid"}
            RadioTable
            error={(error === 8 || error === 0)? true : false }
            rowHeaders={rowHeaders}
            columnHeaders={columnHeaders}
            MultiChoiceGridRow={MultiChoiceGridRow}
            SetMultiChoiceGridRow={SetMultiChoiceGridRow}
          />
          <CustomCard
            Title={"Tick box Grid"}
            CheckboxTable
            error={(error === 9 || error === 0)? true : false }
            rowHeaders={rowHeaders}
            columnHeaders={columnHeaders}
            MultiChoiceGridTickRow={MultiChoiceGridTickRow}
            SetMultiChoiceGridTickRow={SetMultiChoiceGridTickRow}
          />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <LinearProgress
              variant={"determinate"}
              color="success"
              sx={LinearProgressStyle}
              value={100}
            />
            <Typography
              sx={{ paddingLeft: "10px", fontSize: "14px", color: "#202124" }}
            >
              Page 1 of 1
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Button
              // type="submit"
              variant="contained"
              sx={{ boxShadow: "none" }}
              onClick={()=>{setActiveErrors(true)}}
            >
              Submit
            </Button>
            <span style={{ flex: 1 }} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <LinearProgress
                variant={"determinate"}
                color="success"
                sx={LinearProgressStyle}
                value={100}
              />
              <Typography
                sx={{ paddingLeft: "10px", fontSize: "14px", color: "#202124" }}
              >
                Page 1 of 1
              </Typography>
            </Stack>
            <span style={{ flex: 1 }} />
            <Button>Clear form</Button>
          </Stack>
          <Box>
            <Typography sx={FooterTypo}>
              Never submit passwords through Noodle Forms.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={FooterTypo}>
              his content is neither created nor endorsed by Noodle. Report
              Abuse -{" "}
              <Link herf="/" style={FooterLink}>
                Terms of Service
              </Link>{" "}
              -{" "}
              <Link herf="/" style={FooterLink}>
                {" "}
                Privacy Policy{" "}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const MainBodyStyle = {
  background: "rgb(240, 235, 248)",
  minHeight: "100vh",
  display: "flex",
  padding: "0px 0px 20px 0px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "horizontal",
};

const FormBody = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: { md: "10px 100px", sm: "10px 30px", xs: "20px 0px" },
};

const LinearProgressStyle = {
  width: "180px",
  height: "10px",
  borderRadius: "10px",
};

const FooterTypo = {
  fontSize: "12px",
  color: "#70757a",
};

const FooterLink = {
  textDecoration: "underline",
  cursor: "pointer",
};
export default Home;
