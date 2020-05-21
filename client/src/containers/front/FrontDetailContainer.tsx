import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { readFront, unloadFront } from '../../libs/modules/fronts';
import { setOriginalBill } from '../../libs/modules/bills';
import { removeBill, removeReserve } from '../../libs/api/bills';
import FrontDetail from '../../components/front/FrontDetail';
import { RootState } from '../../libs/modules';

const FrontDetailContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { frontId } = useParams();
  const { front, error, loading, user } = useSelector(
    ({ fronts, loading, user }: RootState) => ({
      front: fronts.front,
      error: fronts.error,
      loading: loading['fronts/READ_FRONT'],
      user: user.user,
    })
  );

  const onList = () => {
    history.push('/front');
  };

  const onRemove = async () => {
    try {
      if (frontId) {
        await removeBill(frontId);
        history.push('/front');
      }
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const onRemoveReserve = async () => {
    try {
      if (frontId) {
        if (window.confirm('예약금을 삭제하시겠습니까?')) {
          await removeReserve(frontId);
          history.push('/front');
        }
      }
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const onReserve = () => {
    if (front) {
      dispatch(setOriginalBill(front));
      history.push('/update');
    }
  };

  useEffect(() => {
    if (frontId) {
      dispatch(readFront(frontId));

      return () => {
        dispatch(unloadFront());
      };
    }
  }, [dispatch, frontId]);

  return (
    <FrontDetail
      front={front}
      error={error}
      loading={loading}
      user={user}
      onList={onList}
      onRemove={onRemove}
      onReserve={onReserve}
      onRemoveReserve={onRemoveReserve}
    />
  );
};

export default FrontDetailContainer;
