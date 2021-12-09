import * as d01 from './d01'
import * as d02 from './d02'
import { rf } from './utils/read'
import chalk from 'chalk'

const pretty = (val: Object) =>
    console.log(chalk.cyan(JSON.stringify(val, null, 2)))

const data01 = rf('src/d01/input').split('\n').map(Number)
pretty(Object.entries(d01).map(([k, v]) => ({ [k]: v(data01) })))

const data02 = rf('src/d02/input')
    .split('\n')
    .map((val) => val.trim())
pretty(Object.entries(d02).map(([k, v]) => ({ [k]: v(data02) })))
