import React from 'react';
import Modal from './Modal';

interface RemoveModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const RemoveModal: React.FC<RemoveModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      title="전표 삭제"
      content="이 전표를 정말 삭제하시겠습니까?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default RemoveModal;
