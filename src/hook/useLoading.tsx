import {useCallback, useEffect} from 'react';
import {setLoading, useAppDispatch} from '../redux';

interface useLoadingProps {
  isLoading?: boolean;
}

// hook untuk mengubah loading
const useLoading = ({isLoading}: useLoadingProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoading !== undefined) dispatch(setLoading(isLoading));
  }, [isLoading]);

  const setIsLoading = useCallback(
    (loading: boolean) => {
      dispatch(setLoading(loading));
    },
    [dispatch, setLoading],
  );

  return {isLoading, setIsLoading};
};

export default useLoading;
