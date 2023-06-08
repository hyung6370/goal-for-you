import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";
import { ImPencil2 } from "react-icons/im";
import { IoFootball } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiMemoPad } from "react-icons/ci";
import { GrPlan } from "react-icons/gr";
import { TbBeach } from "react-icons/tb";
import { GiPlanetConquest } from "react-icons/gi";
import Container from "../Container";


export const categories = [
  {
    label: 'Study',
    icon: ImPencil2,
    description: '스터디 목표 이루기!'
  },
  {
    label: 'Exercise',
    icon: IoFootball,
    description: '운동 목표 이루기!'
  },
  {
    label: 'Exam',
    icon: GoClock,
    description: '시험 목표 이루기!'
  },
  {
    label: 'Work',
    icon: BsPersonWorkspace,
    description: '일 목표 이루기!'
  },
  {
    label: 'Project',
    icon: AiOutlineFundProjectionScreen,
    description: '프로젝트 목표 이루기!'
  },
  {
    label: 'Planning',
    icon: CiMemoPad,
    description: '계획 이루기!'
  },
  {
    label: 'Travel',
    icon: TbBeach,
    description: '여행 목표 이루기!'
  },
  {
    label: 'Etc',
    icon: GiPlanetConquest,
    description: '기타 목표 이루기!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/ongoing';

  if (!isMainPage) {
    return null;
  }

  return ( 
    <div className="ml-14 mr-14">
      <div
        className="flex flex-row items-center justify-between gap-1 pt-4 overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Categories;