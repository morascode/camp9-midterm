import BookingBtn from './BookingBtn';
import { eachDayOfInterval, add, format } from 'date-fns';

interface Props {
  onSelect: (date: Date) => void;
  selectedDate: Date | null;
}

export default function BookingDate({ onSelect, selectedDate }: Props) {
  const days = eachDayOfInterval({
    start: new Date(),
    end: add(new Date(), { days: 11 }),
  });

  function onClickHandler(date: Date) {
    onSelect(date);
  }

  // create 12 buttons
  const dateBtns = days.map(date => (
    <BookingBtn
      key={date.getTime()}
      isSelected={
        selectedDate ? selectedDate.toISOString() === date.toISOString() : false
      }
      onClick={() => onClickHandler(date)}
    >
      {format(new Date(date), 'dd MMM')}
    </BookingBtn>
  ));

  // select 4 random dates buttons
  function FourDates(dateBtns: JSX.Element[]) {
    const disabledDates: JSX.Element[] = [];
    while (disabledDates.length < 4) {
      const randomIndex = Math.floor(Math.random() * dateBtns.length);
      if (!disabledDates.some(date => date.key === dateBtns[randomIndex].key)) {
        disabledDates.push(dateBtns[randomIndex]);
      } //splice returns modified array
      dateBtns.splice(randomIndex, 1);
    }

    // adding disable to the four random dates buttons
    const disabledDatesWithKey = disabledDates.map(date => (
      <BookingBtn
        key={date.key}
        isSelected={date.props.isSelected}
        onClick={date.props.onClick}
        disabled
      >
        {date.props.children}
      </BookingBtn>
    ));
    return disabledDatesWithKey;
  }

  const finalDisabledDates = FourDates(dateBtns);
  console.log(finalDisabledDates);

  const allDates = [...dateBtns, ...finalDisabledDates];

  const sortedDates = allDates.sort(function (a, b) {
    let x = parseInt(a.key as string);
    let y = parseInt(b.key as string);
    const result = x - y;
    return result;
  });

  return <>{sortedDates}</>;
}
