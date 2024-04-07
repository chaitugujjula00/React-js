import { useState,useEffect } from "react";

const useOnlineStatus = ()=>{
        const [Status, setStatus]=useState(true);
        useEffect(()=>{
              window.addEventListener("online",()=>{
                setStatus(true);
              });  
        },[]);

        useEffect(()=>{
                window.addEventListener("offline",()=>{
                  setStatus(false);
                });  
          },[]);

        return Status;
}
export default useOnlineStatus;