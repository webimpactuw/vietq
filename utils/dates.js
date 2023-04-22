import { compareAsc, format } from "date-fns";

function getDaysLeft(date) {
  return Math.round(
    (date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
}

export function generateDate(dateRange, date = null) {
  if (!dateRange) {
    if (date) {
      return {
        date: new Date(date),
        longest: format(new Date(date), "EEEE, MMMM d, yyyy"),
        long: format(new Date(date), "MMM d, yyyy"),
        short: format(new Date(date), "MMM d"),
        daysLeft: getDaysLeft(new Date(date)),
      };
    } else {
      return "";
    }
  }

  const startDate = new Date(dateRange.start);

  const daysLeft = getDaysLeft(startDate);

  if (!dateRange.end) {
    return {
      date: startDate,
      longest: format(startDate, "EEEE, MMMM d, yyyy"),
      long: format(startDate, "MMM d, yyyy"),
      short: format(startDate, "MMM d"),
      daysLeft,
    };
  }

  const endDate = new Date(dateRange.end);

  if (compareAsc(startDate, endDate) === 0) {
    return {
      longest: format(startDate, "EEEE, MMMM d, yyyy"),
      long: format(startDate, "MMM d, yyyy"),
      short: format(startDate, "MMM d"),
      daysLeft,
    };
  }

  if (startDate.getMonth() === endDate.getMonth()) {
    return {
      longest: `${format(startDate, "EEEE, MMMM d")} to ${format(
        endDate,
        "d, yyyy"
      )}`,
      long: `${format(startDate, "MMM d")}-${format(endDate, "d, yyyy")}`,
      short: `${format(startDate, "MMM d")}-${format(endDate, "d")}`,
      daysLeft,
    };
  }

  return {
    end: format(endDate, "-MMM d"),
    longest: `${format(startDate, "EEEE, MMMM d")} to ${format(
      endDate,
      "MMMM d, yyyy"
    )}`,
    long: `${format(startDate, "MMM d")}-${format(endDate, "MMM d, yyyy")}`,
    short: `${format(startDate, "MMM d")}`,
    daysLeft,
  };
}
