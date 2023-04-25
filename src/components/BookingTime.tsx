import BookingBtn from './BookingBtn';
import { eachMinuteOfInterval, add, format, setHours } from 'date-fns';

interface Props {
  onSelect: (date: Date) => void;
  selectedDate: Date | null;
}

export default function BookingDate({ onSelect, selectedDate }: Props) {
  let day = selectedDate || new Date();

  if (day.getDay() === new Date().getDay()) day = new Date();

  if (day.getDay() === new Date().getDay()) {
    day = new Date();
  }

  const intervals = eachMinuteOfInterval({
    start: setHours(day, 10),
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
            selectedDate
              ? selectedDate.toISOString() === date.toISOString()
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
