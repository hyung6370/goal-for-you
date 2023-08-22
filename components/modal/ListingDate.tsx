import { Range } from "react-date-range";
import PickerCalendar from "./PickerCalendar";

interface ListingDateProps {
  dateRange: Range,
  onChangeDate: (value: Range) => void;
  disabled?: boolean;
  // disabledDates: Date[];
}

const ListingDate: React.FC<ListingDateProps> = ({
  dateRange,
  onChangeDate,
  disabled,
  // disabledDates
}) => {

  return ( 
    <div>
      <PickerCalendar
        value={dateRange}
        // disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}

      />
    </div>
   );
}
 
export default ListingDate;