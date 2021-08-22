import './Input.scss';

interface InputProps {
  type: string;
  list: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
}

const Input = ({
  type,
  list,
  value,
  onChange,
  onKeyPress,
  placeholder,
}: InputProps) => {
  return (
    <input
      className="select-box"
      type={type}
      list={list}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
};

export default Input;
