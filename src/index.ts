import * as d01 from './d01'
import * as d02 from './d02'
import { rf } from './utils/read'

const pretty = (val: Object) => console.log(JSON.stringify(val, null, 2))
const data01 = rf('src/d01/input').split('\n').map(Number)

pretty(Object.entries(d01).map(([k, v]) => ({ [k]: v(data01) })))
