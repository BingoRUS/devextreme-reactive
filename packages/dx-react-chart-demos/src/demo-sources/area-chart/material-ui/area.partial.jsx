// BLOCK:imports
import { withStyles } from '@material-ui/core/styles';
// BLOCK:imports

// BLOCK:body
const chartRootStyles = {
  chart: {
    paddingRight: '20px',
  },
};
const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
};
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing.unit,
  },
});
const legendItemStyles = {
  item: {
    flexDirection: 'column',
  },
};

const ChartRootBase = ({ classes, ...restProps }) => (
  <Chart.Root {...restProps} className={classes.chart} />
);
const LegendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item {...restProps} className={classes.item} />
);
const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);
// BLOCK:body
