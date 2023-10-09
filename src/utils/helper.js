export function secondsToHms(min) {
   const hour  = Math.floor(min / 60);
   const minute = Math.round((min / 60) - hour) *  60;
   return `${hour}h ${minute}m`
}