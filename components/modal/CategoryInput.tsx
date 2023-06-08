
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick
}) => {
  return ( 
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-full
        border-2
        p-4
        flex
        flex-row
        gap-3
        hover:border-fuchsia-400
        transition
        cursor-pointer
        ${selected ? 'border-fuchsia-400' : 'border-neutral-200'}
      `}
    >   
        <Icon size={20} className="" />
        <div className="font-semibold">
          {label}
        </div>
    </div>
   );
}
 
export default CategoryInput;