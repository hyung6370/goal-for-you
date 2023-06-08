import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";
import { ImPencil2 } from "react-icons/im";
import { IoFootball } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrPlan } from "react-icons/gr";
import { TbBeach } from "react-icons/tb";
import { GiPlanetConquest } from "react-icons/gi";


export const categoris = [
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
    icon: GrPlan,
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

const Categoris = () => {
  const params = useSearchParams();
  const category = params?.get('category');

  return ( 
    <div>
      <div
        className="flex flex-row items-center justify-between gap-1 pt-4 overflow-x-auto"
      >
        {categoris.map((item) => (
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
 
export default Categoris;