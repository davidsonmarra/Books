import React, { useState } from 'react';
import { ModalProps } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryProps } from '../../screens/Home';
import { FETCH_BOOKS, RESET_BOOKS } from '../../store/slices/booksSlice';
import { IRootState } from '../../store/store';
import { categories } from '../../utils/categories';
import {
  Categories,
  Category,
  CategoryButton,
  CategoryName,
  CategoryTitle,
  Close,
  CloseButton,
  Container,
  Content,
  ContentContainer,
  Header,
  Submit,
  SubmitText,
} from './styles';

interface Props extends ModalProps {
  handleModal: () => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export function FilterModal({ visible, handleModal, setOffset }: Props) {
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
    <Container
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={handleModal}
    >
      <ContentContainer>
        <Content>
          <Header>
            <CloseButton onPress={handleModal}>
              <Close />
            </CloseButton>
          </Header>
          <Category>
            <CategoryTitle>Selecione a categoria</CategoryTitle>
            <Categories>
              {categories.map((item) => (
                <CategoryButton
                  isSelected={item.key === category.key}
                  onPress={() => handleSelectCategory(item)}
                  key={item.key}
                >
                  <CategoryName isSelected={item.key === category.key}>
                    {item.title}
                  </CategoryName>
                </CategoryButton>
              ))}
            </Categories>
          </Category>
          <Submit onPress={() => submit()}>
            <SubmitText>Filtrar</SubmitText>
          </Submit>
        </Content>
      </ContentContainer>
    </Container>
  );
}
