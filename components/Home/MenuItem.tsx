

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label
}) => {
  return ( 
    <div
      onClick={onClick}
      className="flex justify-center px-4 py-3 transition font_kor_medium add_goal_btn"
    >
      
      {label}
    </div>
   );
}
 
export default MenuItem;