import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface RenderHeaderProps {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
}

const RenderHeader: React.FC<RenderHeaderProps> = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header row">
            <div className="col col-start">
                <span className="font_kor_light">
                    <span className="mr-1 text-3xl">
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div className="col col-end">
                <FaArrowLeft onClick={prevMonth} />
                <FaArrowRight onClick={nextMonth} />

            </div>
        </div>
    );
};

export default RenderHeader;