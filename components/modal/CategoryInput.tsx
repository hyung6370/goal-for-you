
interface CategoryInputProps {
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
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
        flex-col
        gap-3
        hover:border-fuchsia-400
        transition
        cursor-pointer
        ${selected ? 'border-fuchsia-400' : 'border-neutral-200'}
      `}
    >
        <div className="font-semibold">
          {label}
        </div>
    </div>
   );
}
 
export default CategoryInput;