import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { LocalizationProvider, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Main Calendar component
function Calendar({ className, onChange, value, showOutsideDays = true, ...props }) {
  const [selectedDate, setSelectedDate] = useState(value || new Date());

  const handleChange = (newDate) => {
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={className}>
        <CalendarPicker
          date={selectedDate}
          onChange={handleChange}
          componentsProps={{
            actionBar: {
              actions: [], // remove default today/ok buttons
            },
          }}
          {...props}
        />
      </div>
    </LocalizationProvider>
  );
}

// Example usage
export default function ExampleCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4">
      <Calendar value={date} onChange={setDate} />
    </div>
  );
}

// Export component
export { Calendar };
