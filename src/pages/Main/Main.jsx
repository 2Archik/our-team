import { getUsers } from "../../api/apiUsers";
import PageLayout from "../../components/PageLayout/PageLayout";
import Header from "../.././components/Header/Header";
import UsersList from "../../components/UsersList/UsersList";
import { useAxios } from "../../hooks/useAxios";

function Main() {
  const { data } = useAxios(getUsers);

  return (
    <PageLayout>
      <Header />
      {data && <UsersList users={data} />}
    </PageLayout>
  );
}

export default Main;
