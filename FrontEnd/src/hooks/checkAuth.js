const { useState } = require("react")
const { useEffect } = require("react")
const {  useNavigate, useLocation } = require("react-router-dom")
 

const CheckAuth=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState(null)
    const location =useLocation()

    useEffect(()=>{
        const VerifyAdmin=async()=>{
            console.log(user)
            const token=localStorage.getItem("token")
            const firstPath = "/" + location.pathname.split("/")[1];
            console.log(firstPath)
            if(!token){
                return navigate(`/login${firstPath}`)
            }else{
                try{
                    const response= await fetch('http://localhost:5000/api/admin/authverify', {
                        method: 'GET',
                        headers: {
                            Authorization: `${token}`,
                          }
                
                      })
                      console.log(response)
                      const data = await response.json()
                      console.log(data)
                      if(data.status){
                         setUser(data.user)     
                        console.log(user)                   
                      }else{
                        navigate(`/login${firstPath}`)
                        setUser(null)
                      }
                
                }catch(error){
                    navigate(`/login${firstPath}`)
                    console.error(error)        
                }
            }

        }
        VerifyAdmin()
    },[navigate,user])
    return {user}
}
export  default CheckAuth
