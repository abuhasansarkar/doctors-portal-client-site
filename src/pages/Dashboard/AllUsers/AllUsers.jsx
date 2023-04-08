import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const url = `http://localhost:5000/allusersData`;
  const { data: users = [], refetch } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  //   add user
  const hendelMakeAdmin = (user) => {
    // console.log(user);
    fetch(`http://localhost:5000/allusersData/admin/${user?._id}`, {
      method: "PUT",
      headers: {
          jwtAuthorization: `bearer ${localStorage.getItem('jwtAccessToken')}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Created Admin");
        if (data.modifiedCount > 0) {
          toast.success(`Wow ${user?.name} Right Now Admin`);
          refetch();
        }
      });
  };

  //   delete user
  const hendelDeleteUser = (user) => {
    // console.log("clicked",user);
    fetch(`http://localhost:5000/allusersData/admin/${user?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
          toast.error(`${user.name} Successfully Deleted`);
          refetch()
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="mb-5">
        <h2 className="text-4xl mb-3">ALl Users</h2>
        <hr />
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>UserName</th>
            <th>UserEmail</th>
            <th>UserRole</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users &&
            users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => hendelMakeAdmin(user)}
                      className="btn btn-outline btn-sm"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button className="btn btn-success btn-sm">
                      All-Ready Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => hendelDeleteUser(user)}
                    className="btn btn-sm btn-error"
                  >
                    Revove User
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
