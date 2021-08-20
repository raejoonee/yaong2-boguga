import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import mount from '../styles/mount';
import Input from './atoms/Input';
import Breed from '../features/breed/Breed';
import Button from './atoms/Button';
import { RootState } from '../store';
import { loaderActions } from '../features/loader/loaderSlice';
import api from '../api/TheCatAPI';
import makeToast from '../utils/makeToast';
import { informationActions } from '../features/information/informationSlice';

const Section = styled.section`
  text-align: center;
  animation: 0.75s ${mount};
`;

const SearchSection = () => {
  const [value, setValue] = useState('');
  const { breedInfo } = useSelector((state: RootState) => state.breed);
  const dispatch = useDispatch();
  const onClick = () => {
    if (!value) {
      makeToast('no-value', '✏️', '검색어를 입력해주세요.');
      return;
    }
    // if (!breeds.includes(value.toLowerCase())) {
    //   makeToast('no-breed', '😢', '검색어에 해당하는 고양이 종이 없습니다.');
    //   return;
    // }
    setValue('');
    dispatch(loaderActions.startLoading());
    // api
    //   .getSpecificCats(ids[breeds.indexOf(value.toLowerCase())])
    //   .then((data) => {
    //     dispatch(informationActions.update(data[0].breeds[0]));
    //     dispatch(loaderActions.finishLoading());
    //   });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClick();
  };
  return (
    <Section>
      <Input
        type="text"
        list="cat-list"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Pick a breed"
      />
      <Breed />
      <Button text="검색" onClick={onClick} />
    </Section>
  );
};

export default React.memo(SearchSection);
