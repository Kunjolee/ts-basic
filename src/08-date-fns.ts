// Using external libraries that support typescript
import { format, subDays } from "date-fns";


const date = new Date(2003, 3, 28);
const res = subDays(date, 40);
const byFormat = format(res, "yyyy/MM/dd");

console.log(byFormat)


