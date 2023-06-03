import Layout from "@/components/Home/Layout";
import React, { useState } from "react";
import { format, addMonths, subMonths } from 'date-fns';
import RenderHeader from "@/components/Calendar/RenderHeader";
import RenderDays from "@/components/Calendar/RenderDays";
import RenderCells from "@/components/Calendar/RenderCells";

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
            <div className="flex justify-center h-screen mt-2">
                <div className="calendar">
                    <RenderHeader
                        currentMonth={currentMonth}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                    />
                    <RenderDays />
                    <RenderCells
                        currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        onDateClick={onDateClick}
                    />
                    
                </div>
            </div>
            
        </Layout>
    );
};

export default Calendar;