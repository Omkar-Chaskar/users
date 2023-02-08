import { createContext, useContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const addNewUsersHandler = async (page = 1) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://reqres.in/api/users?page=${page}`,
      });
      setUser(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ user, addNewUsersHandler, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
