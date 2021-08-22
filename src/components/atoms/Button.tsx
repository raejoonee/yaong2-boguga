import './Button.scss';

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="search-button" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
