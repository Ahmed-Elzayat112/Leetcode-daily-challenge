class MyCalendar {
  constructor(private calendar: number[][] = []) {}

  book(start: number, end: number): boolean {
    if (this.calendar.length === 0) {
      this.calendar.push([start, end]);
      return true;
    }

    for (let i = 0; i < this.calendar.length; i++) {
      if (
        (this.calendar[i][0] <= start && this.calendar[i][1] > start) ||
        (this.calendar[i][0] < end && this.calendar[i][1] >= end) ||
        (this.calendar[i][0] >= start && this.calendar[i][0] < end)
      ) {
        return false;
      }
    }
    this.calendar.push([start, end]);
    return true;
  }
}

const myCalendar = new MyCalendar();
console.log(myCalendar.book(47, 50));
console.log(myCalendar.book(33, 41));
console.log(myCalendar.book(39, 45));
console.log(myCalendar.book(33, 42));
console.log(myCalendar.book(25, 32));
console.log(myCalendar.book(26, 35));
console.log(myCalendar.book(19, 25));
console.log(myCalendar.book(3, 8));
console.log(myCalendar.book(8, 13));
console.log(myCalendar.book(18, 27));
