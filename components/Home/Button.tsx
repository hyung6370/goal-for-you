import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon
}) => {
  return ( 
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
       font_kor_medium
       relative
       disabled:opacity-70
       disabled:cursor-not-allowed
       rounded-3xl
       hover:opacity-80
       transition
       w-full
       ${outline ? 'bg-white' : 'bg-purple-400'}
       ${outline ? 'border-black' : 'bg-purple-400'}
       ${outline ? 'text-black' : 'text-white'}
       ${small ? 'py-1' : 'py-3'}
       ${small ? 'text-sm' : 'text-md'}
       ${small ? 'font-light' : 'text-md'}
      `}
    >
      {Icon && (
        <Icon 
          size={24}
          className="absolute left-4 top-3"
        />
      )}
      {label}
    </button>
   );
}
 
export default Button;