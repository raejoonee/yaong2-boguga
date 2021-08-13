import { useDispatch } from 'react-redux';
import { historyActions } from '../../store/history';
import Box from '../atoms/Box';

const HistorySection = () => {
  const dispatch = useDispatch();

  const historyHandler = (query: string) => {
    dispatch(historyActions.add(query));
  };

  return (
    <Box>
      <div onClick={historyHandler('temp')} />
    </Box>
  );
};

export default HistorySection;
