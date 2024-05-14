import React from 'react'
import axios from 'axios'

import { useEffect } from 'react'
import { useState } from 'react'

const useCustomHook = (api) => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get(api,{ auth: {
            username: 'coalition',
            password: 'skills-test'
        }})
        .then((res)=>{
            const result= res.data.filter(d=>d.name==='Jessica Taylor')
            setdata(result)
            })
       
    },[])

  return data
    
  
}

export default useCustomHook