import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface RenderHeaderProps {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
}

const RenderHeader: React.FC<RenderHeaderProps> = ({
     currentMonth, prevMonth, nextMonth
    }) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <span className="m-4 text-xl font_kor_light">
                    <span className="text-3xl font_kor_light">
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div className="flex flex-row m-4">
                <FaArrowLeft 
                    className='w-6 h-6 cursor-pointer'
                    onClick={prevMonth}
                />
                <FaArrowRight 
                    className='w-6 h-6 ml-2 cursor-pointer' 
                    onClick={nextMonth}
                />
            </div>
        </div>
    )
}

export default RenderHeader;