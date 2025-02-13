const { useState } = require("react")
const { useEffect } = require("react")
const {  useNavigate } = require("react-router-dom")
 

const CheckAuth=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState(null)

    useEffect(()=>{
        const VerifyAdmin=async()=>{
            console.log(user)
            const token=localStorage.getItem("token")
            if(!token){
                return navigate('/login/admin')
            }else{
                try{
                    const response= await fetch('http://localhost:5000/api/admin/authverify', {
                        method: 'GET',
                        headers: {
                            Authorization: `${token}`,
                          }
                
                      })
                      const data = await response.json()
                      console.log(data)
                      if(data.status){
                         setUser(data.user)     
                        console.log(user)                   
                      }else{
                        navigate(`/login/admin`)
                        setUser(null)
                      }
                
                }catch(error){
                    navigate('/login/admin')
                    console.error(error)        
                }
            }

        }
        VerifyAdmin()
    },[navigate,user])
    return {user}
}
export  default CheckAuth
