import './Input.scss';

interface InputProps {
  type: string;
  list: string;
  placeholder: string;
}

const Input = ({ type, list, placeholder }: InputProps) => {
  return (
    <input
      className="select-box"
      type={type}
      list={list}
      placeholder={placeholder}
    />
  );
};

export default Input;
