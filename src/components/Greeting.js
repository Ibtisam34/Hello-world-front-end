import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage, selectMessage } from '../store';
function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
export default Greeting;
