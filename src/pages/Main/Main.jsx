import { useEffect, useState } from "react";
import { getUsers } from "../../api/apiUsers";
import PageLayout from "../../components/PageLayout/PageLayout";
import Header from "../.././components/Header/Header";
import UsersList from "../../components/UsersList/UsersList";

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <PageLayout>
      <Header />
      {users.length ? <UsersList users={users} /> : null}
    </PageLayout>
  );
}

export default Main;
