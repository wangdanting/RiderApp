代购信息展示组件

![](../../../../ignorePack/daigou.png)

```jsx
import Daigou from '@/components/Daigou';

const orderRemark = '可口可乐 1瓶 可口可乐 1瓶 可口可乐 1瓶 可口可乐 1瓶 可口可乐 1瓶 可口可乐 1瓶 可口可乐 1瓶';

const estimateFee = 30;

ReactDOM.render(
  <Daigou orderRemark={orderRemark} estimateFee={estimateFee} />,
  mountNode
);
```