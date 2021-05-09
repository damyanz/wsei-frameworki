import dayjs from "dayjs";
import realtiveTime from "dayjs/plugin/relativeTime";

export const initDayJs = (): void => {
  dayjs.extend(realtiveTime, { thresholds: [{ l: "MM", r: 20, d: "month" }] });
};
