日期范围选择框组件

![](../../../../ignorePack/data-range-picker.png)

```jsx
import DateRangePicker from '@/components/DateRangePicker';

setCustomTime = ({ startDate, endDate }) => {
    const { queryData: prev } = this.state;
    const queryData = Object.assign({}, prev, { start: startDate, end: endDate });
    this.handleSearch(queryData);
  };

ReactDOM.render(
  <DateRangePicker handleChange={this.setCustomTime} />,
  mountNode
);
```