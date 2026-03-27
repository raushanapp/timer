class UtilsMethods {
  // convert minutes to milliseconds
  minutesToMs(minutes: number): number {
    return minutes * 1000 * 60;
  }
  // format time to add leading zero
  formateTime(time: number): string | number {
    return time < 10 ? `0${time}` : time;
  }
}

export default new UtilsMethods();
