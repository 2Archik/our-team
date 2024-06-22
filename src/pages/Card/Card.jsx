import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardData } from "../../api/apiCard";
import PageLayout from "../../components/PageLayout/PageLayout";
import HeaderCard from "../.././components/HeaderCard/HeaderCard";
import CardInfo from "../../components/CardInfo/CardInfo";

function Card() {
  const { id } = useParams();

  const [cardData, setCardData] = useState({});

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await getCardData(id);
        setCardData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCardData();
  }, [id]);

  return (
    <PageLayout>
      <HeaderCard cardData={cardData} />
      {cardData ? <CardInfo info={cardData} /> : null}
    </PageLayout>
  );
}

export default Card;
