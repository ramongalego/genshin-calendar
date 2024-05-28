import { useState } from 'react';

type ModalProps = {
  onClose: () => void;
  onSubmit: (title: string) => void;
};

const Modal = ({ onClose, onSubmit }: ModalProps) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(input);
  };

  return (
    <div>
      <h1>Modal here!</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={input} />
      </form>
      <button onClick={onClose}>x</button>
    </div>
  );
};

export default Modal;
