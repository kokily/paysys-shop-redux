import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { readWedding, unloadWedding } from '../../libs/modules/weddings';
import { setOriginalExpense } from '../../libs/modules/expense';
import { removeWedding } from '../../libs/api/weddings';
import { RootState } from '../../libs/modules';
import WeddingDetailWide from '../../components/weddings/WeddingDetailWide';
import WeddingDetailMobile from '../../components/weddings/WeddingDetailMobile';

const WeddingDetailContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { weddingId } = useParams();
  const { wedding, error, loading, user } = useSelector(
    ({ weddings, loading, user }: RootState) => ({
      wedding: weddings.wedding,
      error: weddings.error,
      loading: loading['weddings/READ_WEDDING'],
      user: user.user,
    })
  );

  const onEdit = () => {
    if (wedding) {
      dispatch(setOriginalExpense(wedding));
      history.push('/expense/edit');
    }
    return;
  };

  const onWeddingList = () => {
    history.push('/wedding');
  };

  const onRemove = async () => {
    try {
      if (weddingId) {
        await removeWedding(weddingId);
        history.push('/wedding');
      }
      return;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (weddingId) {
      dispatch(readWedding(weddingId));
    }
    return () => {
      dispatch(unloadWedding());
    };
  }, [dispatch, weddingId]);

  return (
    <>
      <BrowserView>
        <WeddingDetailWide
          wedding={wedding}
          error={error}
          loading={loading}
          user={user}
          onEdit={onEdit}
          onWeddingList={onWeddingList}
          onRemove={onRemove}
        />
      </BrowserView>

      <MobileView>
        <WeddingDetailMobile
          wedding={wedding}
          error={error}
          loading={loading}
          user={user}
          onEdit={onEdit}
          onWeddingList={onWeddingList}
          onRemove={onRemove}
        />
      </MobileView>
    </>
  );
};

export default WeddingDetailContainer;
