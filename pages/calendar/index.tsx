import Layout from "@/components/Home/Layout";
import React, { useState } from "react";
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
        <div>
            <div>
                <span>
                    <span>
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div>
                <FaArrowLeft />
                <FaArrowRight />
            </div>
        </div>
    )
}

const RenderDays = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div key={i}>
                {date[i]}
            </div>
        );
    }
    return <div>{days}</div>;
}

// const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
//     const MonthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const startDate = startOfWeek(monthStart);
//     const endDate = endOfWeek(monthEnd);

//     const rows = [];
//     let days = [];
//     let day = startDate;
//     let formattedDate = '';

//     while (day <= endDate) {
//         for (let i = 0; i < 7; i++) {
//             formattedDate = format(day, 'd');
//             const cloneDay = day;
//             days.push(
//                 <div
                
//                 >

//                 </div>
//             )
//         }
//     }
// }

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());



    return (
        <Layout>
            <div className="calendar">
                <div className="header">Header</div>
                <div className="days">Days</div>
                <div className="body">Cells</div>
            </div>
            
        </Layout>
    )
}

export default Calendar;