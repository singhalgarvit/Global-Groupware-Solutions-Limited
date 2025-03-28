import {useContext, useEffect} from "react";
import {usersList} from "../api/users.api";
import {useState} from "react";
import UserCard from "../components/UserCard";
import {LoadingContext} from "../context/loadingContext";
import UpdateForm from "./UpdateForm";

function UserData() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const {loading, setLoading} = useContext(LoadingContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    id:"",
    email: "",
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const res = await usersList(page);
        setUsers(res.data);
        setTotalPages(res.total_pages);
      } catch (err) {
        alert("Something Went Wrong", err);
        alert(err);
      }
      setLoading(false);
    };
    getUserData();
  }, [page]);

  const pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(
      <button
        className={`p-1 px-2 m-0.5 rounded cursor-pointer ${
          i == page ? " border-2" : ""
        }`}
        onClick={() => setPage(i)}
      >
        {i}
      </button>
    );
  }

  const deleteUserByID = (uId) => {
    const filteredUsers = users.filter((userId) => uId != userId.id);
    setUsers(filteredUsers);
  };
  const editUserByID = (id,first_name,last_name,email) => {
    setIsModalOpen(true);
    setUserData({
      id,
      first_name,
      last_name,
      email
    });
  };

  return (
    <>
      <h1 className="text-3xl">Users</h1>
      <div className="flex flex-wrap gap-6 justify-center m-10">
        {users.map((value, index) => (
          <UserCard
            key={index}
            avatar={value.avatar}
            first_name={value.first_name}
            last_name={value.last_name}
            id={value.id}
            email={value.email}
            ondelete={deleteUserByID}
            onEdit={editUserByID}
          />
        ))}
      </div>
      <UpdateForm
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(!isModalOpen)}
        user={userData}
      />
      {pagination}
    </>
  );
}

export default UserData;
