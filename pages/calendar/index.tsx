import Layout from "@/components/Home/Layout";
import React, { useState } from "react";
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RenderHeader from "@/components/Calendar/RenderHeader";
import RenderDays from "@/components/Calendar/RenderDays";





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

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onDateClick = (day: React.SetStateAction<Date>) => {
        setSelectedDate(day);
    };

    return (
        <Layout>
            <div className="flex justify-center h-screen">
                <div className="w-5/6 border-2 border-purple-400 rounded-lg shadow">
                <RenderHeader
                    currentMonth={currentMonth}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />
                <RenderDays />
                </div>
            </div>
            
        </Layout>
    );
};

export default Calendar;