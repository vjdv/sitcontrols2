export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
export function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}
export function addYears(date, years) {
  var result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}
export function getDate(date, format) {
  if (typeof date === "string") {
    return dateFromString(date, format);
  }
  return date;
}
export function dateFromString(datestr, format) {
  var normalized = datestr.replace(/[^a-zA-Z0-9]/g, "-");
  var normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
  var formatItems = normalizedFormat.split("-");
  var dateItems = normalized.split("-");
  var monthIndex = formatItems.indexOf("mm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var hourIndex = formatItems.indexOf("hh");
  var minutesIndex = formatItems.indexOf("ii");
  var secondsIndex = formatItems.indexOf("ss");
  var today = new Date();
  var year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
  var month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
  var day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();
  var hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
  var minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
  var second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();
  return new Date(year, month, day, hour, minute, second);
}
export function stringFromDate(date, format) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/mm/g, prependZero(date.getMonth() + 1));
  format = format.replace(/dd/g, prependZero(date.getDate()));
  format = format.replace(/hh/g, prependZero(date.getHours()));
  format = format.replace(/ii/g, prependZero(date.getMinutes()));
  format = format.replace(/ss/g, prependZero(date.getSeconds()));
  return format;
}
export function dayEquals(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}
export function timeEquals(d1, d2) {
  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes() && d1.getSeconds() === d2.getSeconds();
}
export function prependZero(val) {
  return (val < 10 ? "0" : "") + val;
}
