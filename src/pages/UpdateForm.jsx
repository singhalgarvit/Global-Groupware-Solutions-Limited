import React, {use, useContext, useState} from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import {Modal} from "react-responsive-modal";
import {editUser} from "../api/users.api";
import { LoadingContext } from "../context/loadingContext";

function UpdateForm({isOpen, onCloseModal, user}) {
    const {loading,setLoading} = useContext(LoadingContext)

  const updateUser = async (e) => {
    e.preventDefault();
    setLoading(true)
    const f_name=e.target.first_name.value;
    const l_name=e.target.last_name.value;
    const email=e.target.email.value;

    try {
      const res = await editUser(user.id,f_name,l_name,email);
      console.log(res)
    } catch (err) {
        console.log(err)
    }
    setLoading(false)
  };

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      styles={{
        modal: {
          padding: "0px",
          width: "30vw",
          minWidth: "400px",
          backgroundColor: "white",
          borderRadius: "20px",
        },
      }}
    >
      <div className="flex flex-col justify-center px-20 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Update User
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={updateUser}>
            <Input
              id="id"
              text="ID"
              value={user.id}
              readonly={true}
            />
            <Input
              id="email"
              text="Email"
              defaultValue={user.email}
            />
            <Input id="first_name" text="First Name" defaultValue={user.first_name} />
            <Input id="last_name" text="Last Name"  defaultValue={user.last_name} />
            <SubmitButton text="Submit" />
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateForm;
