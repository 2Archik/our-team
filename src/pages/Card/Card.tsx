import { useParams } from "react-router-dom";
import { useGetCardQuery } from "../../store/services/usersApi";
import PageLayout from "../../components/PageLayout/PageLayout";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import CardInfo from "../../components/CardInfo/CardInfo";

function Card() {
  const { id } = useParams();
  const { data } = useGetCardQuery(id);

  return (
    <PageLayout>
      <HeaderCard data={data?.data} />
      {data && <CardInfo info={data.data} />}
    </PageLayout>
  );
}

export default Card;
