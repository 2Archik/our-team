import { useParams } from "react-router-dom";
import { getCardData } from "../../api/apiCard";
import { useAxios } from "../../hooks/useAxios";
import { IUser } from "../../interfaces";
import PageLayout from "../../components/PageLayout/PageLayout";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import CardInfo from "../../components/CardInfo/CardInfo";

function Card() {
  const { id } = useParams();
  const { data } = useAxios<IUser, string | undefined>(getCardData, id);

  return (
    <PageLayout>
      <HeaderCard data={data} />
      {data && <CardInfo info={data} />}
    </PageLayout>
  );
}

export default Card;
