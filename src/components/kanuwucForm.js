import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useState,useEffect } from 'react';



const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.NAME,
});

export default function KanuUcForm() {
  // const [error, setError] = useState(undefined);
  //   const [isLoading, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);


    

    useEffect(() => {
      fetch("http://192.168.10.30:3001/kanugo", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
            .then((res) => {
              return res.json();
            })
            .then(
              (data) => {
                
    
                // setIsLoaded(false);
                setItems(data.data);
                // console.log(data.data)
              }
                           
            // ,
            //     (error) => {
            //       console.log("ERORRR = "+error)
            //       setIsLoaded(true);
            //       setError(error);
            //     }
              )
          }, [])
  
  return (<> <Autocomplete
      id={items.ID}
      options={items}
      getOptionLabel={(option) => option.NAME}
      filterOptions={filterOptions}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="KanoGo" color="secondary"  />}
    />
    
    </>

  );
}