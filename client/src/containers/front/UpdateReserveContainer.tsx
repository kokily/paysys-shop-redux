import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../libs/modules';
import { updateBill } from '../../libs/modules/bills';
import UpdateReserve from '../../components/front/UpdateReserve';
import { CartType } from '../../libs/api/bills';

interface StateProps {
  reserve: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const UpdateReserveContainer = () => {
  const dis = useDispatch();
  const history = useHistory();
  const { title, hall, etc, total, list, originalBillId } = useSelector(
    ({ bills }: RootState) => ({
      title: bills.title,
      hall: bills.hall,
      etc: bills.etc,
      total: bills.total,
      list: bills.list,
      originalBillId: bills.originalBillId,
    })
  );

  const [state, dispatch] = useReducer(reducer, {
    reserve: '',
  });

  const { reserve } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    if (originalBillId) {
      let newList: CartType[] = [];

      // @ts-ignore
      list.forEach((data) => {
        delete data._id;
        newList.push(data);
      });

      dis(
        updateBill({
          id: originalBillId,
          title,
          hall,
          etc,
          total,
          list: newList,
          reserve: parseInt(reserve),
        })
      );
    }
    history.push('/front');
    return;
  };

  const onBack = () => {
    history.push('/front');
  };

  return (
    <UpdateReserve
      reserve={reserve}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  );
};

export default UpdateReserveContainer;
