import BookingBtn from './BookingBtn';
import { eachMinuteOfInterval, format, setHours, isSameDay } from 'date-fns';

interface Props {
  onSelect: (date: Date) => void;
  selectedTime: Date | null;
}

export default function BookingDate({ onSelect, selectedTime }: Props) {
  const today = new Date();

  const day = selectedTime ? new Date(selectedTime) : today;
  day.setMinutes(0);
  const startHour = isSameDay(day, today) ? new Date().getHours() : 11;

  const intervals = eachMinuteOfInterval({
    start: setHours(day, startHour),
    end: setHours(day, 23),
  }).filter(date => date.getMinutes() === 0 && date.getHours() % 2 === 0);

  function onClickHandler(date: Date) {
    onSelect(date);
  }

  return (
    <>
      {intervals.map(date => (
        <BookingBtn
          key={date.toISOString()}
          isSelected={
            selectedTime
              ? selectedTime.toISOString() === date.toISOString()
              : false
          }
          onClick={() => onClickHandler(date)}
        >
          {format(new Date(date), 'HH:mm')}
        </BookingBtn>
      ))}
    </>
  );
}
