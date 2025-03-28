
const login = async(email,password) =>{
    const url=`https://reqres.in/api/login`;
      const response = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password})
      })
      
      if(!response.ok){
        const errMsg=await response.json();
        throw new Error(errMsg);
      }
  
      const data= await response.json();
      return data
}
export default login