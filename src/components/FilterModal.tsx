import React, { useState } from 'react';
import { ModalProps } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FETCH_BOOKS, RESET_BOOKS } from '../store/slices/booksSlice';
import { IRootState } from '../store/store';
import { categories } from '../utils/categories';
import { CategoryProps } from '../@types/CategoryProps';
import CloseSvg from '../assets/close.svg';

interface PropsStyle {
  isSelected: boolean;
}

const StyledContainer = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input_background};
`;

const StyledContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.input_background};
`;

const StyledContent = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

const StyledHeader = styled.View`
  align-items: flex-end;
`;

const StyledCloseButton = styled.TouchableOpacity`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(16)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
`;

const StyledClose = styled(CloseSvg).attrs({
  width: RFValue(16),
  height: RFValue(16),
})``;

const StyledCategory = styled.View``;

const StyledCategoryTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledCategories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledCategoryButton = styled.TouchableOpacity<PropsStyle>`
  margin-right: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  padding: ${RFValue(6)}px ${RFValue(16)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
  border-radius: ${RFValue(44)}px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.dark : theme.colors.shape};
`;

const StyledCategoryName = styled.Text<PropsStyle>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, isSelected }) => (!isSelected ? theme.colors.dark : theme.colors.shape)};
`;

const StyledSubmit = styled.TouchableOpacity`
  width: ${RFValue(90)}px;
  align-self: center;
  margin-top: ${RFValue(48)}px;
  padding: ${RFValue(12)}px ${RFValue(8)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.button};
  border-radius: ${RFValue(44)}px;
`;

const StyledSubmitText = styled.Text`
  align-self: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.button};
`;

interface Props extends ModalProps {
  handleModal: () => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export default function FilterModal({ visible, handleModal, setOffset }: Props) {
  const [category, setCategory] = useState<CategoryProps>({
    key: '',
    title: '',
  });
  const dispatch = useDispatch();
  const { search } = useSelector(({ books }: IRootState) => books);

  function handleSelectCategory(cat: CategoryProps) {
    if (category.key === cat.key) {
      setCategory({ key: '', title: '' });
    } else {
      setCategory(cat);
    }
  }

  function submit() {
    dispatch(RESET_BOOKS());
    setOffset(1);
    dispatch(FETCH_BOOKS({ offset: 1, category, search }));
    handleModal();
  }

  return (
    <StyledContainer
      animationType='slide'
      transparent
      visible={visible}
      onRequestClose={handleModal}
    >
      <StyledContentContainer>
        <StyledContent>
          <StyledHeader>
            <StyledCloseButton onPress={handleModal}>
              <StyledClose />
            </StyledCloseButton>
          </StyledHeader>
          <StyledCategory>
            <StyledCategoryTitle>Selecione a categoria</StyledCategoryTitle>
            <StyledCategories>
              {categories.map(item => (
                <StyledCategoryButton
                  isSelected={item.key === category.key}
                  onPress={() => handleSelectCategory(item)}
                  key={item.key}
                >
                  <StyledCategoryName isSelected={item.key === category.key}>
                    {item.title}
                  </StyledCategoryName>
                </StyledCategoryButton>
              ))}
            </StyledCategories>
          </StyledCategory>
          <StyledSubmit onPress={() => submit()}>
            <StyledSubmitText>Filtrar</StyledSubmitText>
          </StyledSubmit>
        </StyledContent>
      </StyledContentContainer>
    </StyledContainer>
  );
}
