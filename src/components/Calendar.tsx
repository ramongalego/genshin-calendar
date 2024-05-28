import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import Modal from './Modal';
import { useSelectedDate } from '../hooks/useSelectedDate';

const Calendar = () => {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedDate, setSelectedDate } = useSelectedDate();

  const handleDateClick = (info: DateClickArg) => {
    setSelectedDate(info.dateStr);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // setSelectedDate(null);
  };

  const handleSubmit = (title: string) => {
    if (title && selectedDate) {
      setEvents([...events, { title, start: selectedDate }]);
    }
    handleClose();
  };

  return (
    <>
      {isModalOpen && <Modal onClose={handleClose} onSubmit={handleSubmit} />}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridWeek'
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'today',
          center: 'title',
          right: 'prev,next',
        }}
        height='100%'
      />
    </>
  );
};

export default Calendar;
