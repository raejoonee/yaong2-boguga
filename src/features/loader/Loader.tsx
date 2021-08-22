import React from 'react';
import './Loader.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Loader = () => {
  const initialLoading = useSelector(
    (state: RootState) => state.loader.initialLoading,
  );
  const loading = useSelector((state: RootState) => state.loader.loading);
  return (
    <div
      className={classNames('loader-wrapper', {
        reveal: initialLoading || loading,
      })}
    >
      <div className="cat">
        <div className="cat__body" />
        <div className="cat__body" />
        <div className="cat__tail" />
        <div className="cat__head" />
      </div>
    </div>
  );
};

export default React.memo(Loader);
