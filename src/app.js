import { chart } from "./modules/chart"
import { getChartData } from "./data"
import './styles.scss'

const tgChart = chart(document.querySelector('#chart'), getChartData()).init()