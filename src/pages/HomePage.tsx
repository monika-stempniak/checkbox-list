import {
  ContentContainer,
  PageContainer,
  PageTitle,
} from '../components/Common.style';
import { ListItem } from '../components/ListItem';
import { DataType } from '../utils/types';

type HomePageProps = {
  data: DataType[];
};

export const HomePage = ({ data }: HomePageProps) => {
  return (
    <PageContainer>
      <PageTitle>Home Page</PageTitle>
      <ContentContainer>
        <ul>
          {data.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </ContentContainer>
    </PageContainer>
  );
};
