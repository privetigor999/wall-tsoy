import dayjs from "dayjs";

export function formatTimestamp(timestamp: number) {
  return dayjs.unix(timestamp).format("DD/MM/YYYY HH:mm");
}
