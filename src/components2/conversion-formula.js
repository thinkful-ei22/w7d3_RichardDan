
// export function convertC(num) {
//   return (num * 1.8 + 32).toFixed(2);
// }

// export function convertF(num) {
//   return ((num - 32) / 1.8).toFixed(2);
// }

export default function convert(num, type) {
  switch(type) {
  case 'cf': 
    return (num * 1.8 + 32).toFixed(2);
  case 'ck':
    return (num + 273.15).toFixed(2);
  case 'kc':
    return (num - 273.15).toFixed(2);
  case 'kf':
    return (1.8*(num - 273) + 32).toFixed(2);
  case 'fc':
    return ((num - 32) / 1.8).toFixed(2);
  case 'fk':
    return ((num - 32)/1.8 + 273).toFixed(2);
  default:
    return num;
  }
}