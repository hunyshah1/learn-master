import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useState,useEffect } from 'react';
import { Box,Grid,Container } from '@mui/material';


const API = 'http://192.168.10.30:3001/'
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.NAME,
});
const fetchData = async(url,callBack)=>{
  fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
            .then((res) => {
              return res.json();
            })
            .then(
              (data) => {
                
    
                 
                callBack(data.data)
                // console.log(data.data)
              }
                           
            // ,
            //     (error) => {
            //       console.log("ERORRR = "+error)
            //       setIsLoaded(true);
            //       setError(error);
            //     }
              )
}
 const  KanuUcForm = ()=> {
  
  // const [error, setError] = useState(undefined);
  //   const [isLoading, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const [ucItems,setUcItems] = useState([]);
    const [loading,setloading] =useState(true);

    

    useEffect(() => {
        setloading(true)
            fetchData(API+'kanugo',(data)=>{
              setItems(data)
              setloading(false)
            })
          }, [])

      
          const getComponent = (params)=>{
            return (
              !loading?
              <TextField  {...params} label="KanoGo" color="secondary"  />
              :<h6>Pleas Wait....</h6>
            )
          }
  return (<> 
  
 {/* <Box sx={{display:'flex', justifyContent:'space-around'}}> */}
 <Container sx={{bgcolor:' '}}>
 <Grid  container spacing={1}>  
 <Grid item xs={12} sm={6}> <Autocomplete
      onChange={(event,value)=>{
        if(value){
        setloading(true)
       fetchData(API+'uc/'+value.ID,(data)=>{
        setUcItems(data)
        setloading(false)
       
       })
      }
      }}
      id='k1'
      options={items}
      getOptionLabel={(option) => option.NAME}
      filterOptions={filterOptions}
      renderInput={(params) => <TextField  {...params}  label="KanoGo" color="secondary"  /> }

    />
    </Grid>
    {loading?<h6>Wait.....</h6>:

<Grid item xs={12} sm={6}>
    <Autocomplete 
    id='c1'
    options={ucItems}
    getOptionLabel={(option) => option.UC_NUMBER+""}
    filterOptions={filterOptions}
    renderInput={(params) =>  <TextField   {...params}  label="UC-#"   color="secondary"  />}  
 
  />
    </Grid>
    }
    
</Grid>
{/* </Box>    */}
</Container>

    </>

  );
  
}

export default KanuUcForm;