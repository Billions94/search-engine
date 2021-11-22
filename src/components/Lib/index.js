export const postTimer = (x) => {
    const postedDateISO = x;
    const postedDate = new Date(postedDateISO).getTime();
    const dateToday = new Date().getTime();
    const milliseconds = Math.abs(dateToday - postedDate).toString();
  
    const minutes = parseInt(milliseconds / 1000 / 60);
    const hours = parseInt(minutes / 60);
    const days = parseInt(hours / 24);
    const weeks = parseInt(days / 7);
    let date;
  
    if (weeks <= 1) {
      date = `${weeks} week`;
    } else if (weeks > 1) {
        date = `${weeks} weeks`;
    } else if (days > 0) {
      date = `${days} day`;
    } else if (days === 0 && hours >= 1) {
      date = `${hours} hour`;
    } else if (hours < 1) {
      date = `${minutes}min`;
    }
    return date;
  };