import _ from "lodash";

type Data = {
  user: string,
  role: string
}


const data: Data[] = [
  {
    user: "Kunjo lee",
    role: "admin"
  },
  {
    user: "Kunji lee",
    role: "admin"
  },
  {
    user: "Kunu lee",
    role: "seller"
  },
  {
    user: "Jonathan lee",
    role: "customer"
  },
]

const res = _.groupBy(data, (el) => el.role);

console.log(res);

const rta = 1 + '1';
