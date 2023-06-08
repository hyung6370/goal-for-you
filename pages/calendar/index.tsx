import Layout from "@/components/home/Layout";
import React, { useState } from "react";
import { format, addMonths, subMonths } from 'date-fns';
import RenderHeader from "@/components/calendar/RenderHeader";
import RenderDays from "@/components/calendar/RenderDays";
import RenderCells from "@/components/calendar/RenderCells";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

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