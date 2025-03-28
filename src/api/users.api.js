const usersList = async (page) => {
  const url = `https://reqres.in/api/users?page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    const errMsg = await response.json();
    throw new Error(errMsg);
  }

  const data = await response.json();
  return data;
};

const editUser = async(id,first_name,last_name,email)=>{
  const url = `https://reqres.in/api/users/${id}`;
  const response = await fetch(url,{
    method : 'PUT',
    headers:{
      "Content-typr" : "application/json"
    },
    body:JSON.stringify({id,first_name,last_name,email})
  })
  if(!response.ok){
    const errMsg = await response.json();
    throw new Error(errMsg)
  }
  return response
}

const deleteUser = async(id)=>{
  const url = `https://reqres.in/api/users/${id}`;
  const response = await fetch(url,{
    method : 'DELETE',
    headers:{
      "Content-typr" : "application/json"
    }
  })
  if(!response.ok){
    const errMsg = await response.json();
    throw new Error(errMsg)
  }
  return response
}
export {usersList,editUser,deleteUser};
