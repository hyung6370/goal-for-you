import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, formatISO, format } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

interface RenderCellsProps {
    currentMonth: Date;
    selectedDate: Date;
    onDateClick: (date: Date) => void;
}

const RenderCells: React.FC<RenderCellsProps> = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'not-valid'
                            : 'valid'
                    }`}
                    key={day.toISOString()}
                    onClick={() => onDateClick(cloneDay)}
                >
                    <span
                        className={
                            format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text not-valid'
                                : ''
                        }
                    >
                        {formattedDate}
                    </span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day.toISOString()}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="bodys">{rows}</div>;
};

export default RenderCells;
