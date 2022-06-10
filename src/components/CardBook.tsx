import React, { memo } from 'react';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import BookDTO from '../@types/BookDTO';

interface Props {
  data: BookDTO;
  /* eslint no-unused-vars: [0] */
  handleGoToBookDetails: (book: BookDTO) => void;
}

interface PropsStyle {
  isLast: boolean;
}

const StyledWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(16)}px;
`;

const StyledContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(180)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(16)}px;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(4)}px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  background-color: ${({ theme }) => theme.colors.shape};
`;

const StyledImageBook = styled.Image`
  width: ${RFValue(81)}px;
  height: ${RFValue(122)}px;
  margin-right: ${RFValue(16)}px;
`;

const StyledInfo = styled.View`
  flex: 1;
  height: ${RFValue(180)}px;
  justify-content: space-between;
  padding: ${RFValue(16)}px 0;
`;

const StyledHeader = styled.View``;

const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledAuthor = styled.Text<PropsStyle>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.button};
`;

const StyledFooter = styled.View``;

const StyledInfoDetails = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.details};
`;

export function CardBookComponent({ data, handleGoToBookDetails }: Props) {
  return (
    <StyledWrapper>
      <StyledContainer onPress={() => handleGoToBookDetails(data)}>
        <StyledImageBook source={{ uri: data.imageUrl }} />
        <StyledInfo>
          <StyledHeader>
            <StyledTitle numberOfLines={1}>{data.title}</StyledTitle>
            {data.authors?.map((author, index) => (
              /* eslint no-unsafe-optional-chaining: [0] */
              <StyledAuthor key={author} isLast={index !== data.authors?.length - 1}>
                {author}
                {index !== data.authors?.length - 1 && ','}
              </StyledAuthor>
            ))}
          </StyledHeader>
          <StyledFooter>
            <StyledInfoDetails>{data.pageCount} páginas</StyledInfoDetails>
            <StyledInfoDetails numberOfLines={1}>{data.publisher}</StyledInfoDetails>
            <StyledInfoDetails>{`Publicado em ${data.category}`}</StyledInfoDetails>
          </StyledFooter>
        </StyledInfo>
      </StyledContainer>
    </StyledWrapper>
  );
}

const CardBook = memo(CardBookComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});

export default CardBook;
