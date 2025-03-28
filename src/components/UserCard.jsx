import React, { useContext, useState } from "react";
import {deleteUser} from "../api/users.api";
import { LoadingContext } from "../context/loadingContext";
import UpdateForm from "../pages/UpdateForm";

function UserCard({avatar, first_name, last_name, id,email,ondelete,onEdit}) {

    const {loading,setLoading} = useContext(LoadingContext);

  const editUser=async ()=>{
    onEdit(id,first_name,last_name,email);
  }

  const deleteUserById = async () => {
    setLoading(true)
    try {
      const res = await deleteUser(id);
      console.log(res)
      ondelete(id)
    } catch (err) {
      alert(err);
      console.log(err);
    }
    setLoading(false)
  };

  return (
    <div
      className="w-80 border-2 p-3 rounded-md flex items-center flex-col justify-start gap-2 "
    >
      <img src={avatar} alt="" className="w-20 rounded-full" />
      <h3 className="text-xl ">
        {first_name}
        <> </>
        {last_name}
      </h3>
      <div className="flex flex-col md:flex-row gap-2">
        <button className="border-2 px-2 py-1 rounded bg-green-500 text-white" onClick={editUser}>
          Edit
        </button>
        <button className="border-2 px-2 py-1 rounded bg-red-500 text-white" onClick={deleteUserById}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
