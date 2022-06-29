import { useContext, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  ContentContainer,
  PageContainer,
  PageTitle,
  StyledSmallText,
  StyledLinkButton,
  StyledArticle,
} from '../components/Common.style';
import { DataContext } from '../utils/DataContext';

export const DetailPage = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const itemData = useMemo(() => {
    return data.find((item) => item.id === Number(id));
  }, [data, id]);

  useEffect(() => {
    if (Number(id) !== itemData?.id) {
      navigate('/not-found');
    }
  }, [id, itemData?.id, navigate]);

  return (
    <PageContainer>
      <PageTitle>Detail Page</PageTitle>
      <StyledLinkButton onClick={() => navigate(-1)}>
        &larr; Back
      </StyledLinkButton>
      {itemData && (
        <ContentContainer>
          <StyledSmallText>{itemData.sent_date}</StyledSmallText>
          <h3>{itemData.subject}</h3>
          <StyledArticle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              voluptate quisquam ex ullam, quas, quaerat in ipsum sapiente minus
              modi inventore nihil quod quia accusantium. Est doloremque
              cupiditate eos officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis aliquam dolorem expedita suscipit est earum ex fugiat
              dolores minima! Officia ullam atque facere quibusdam vitae eum
              exercitationem culpa voluptas accusantium!
            </p>
          </StyledArticle>
        </ContentContainer>
      )}
    </PageContainer>
  );
};
