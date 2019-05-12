分隔显示内容

![](../../../../ignorePack/separate.png)

```jsx
import Separate from '@/components/Separate';
const { SeparateItem } = Separate;

ReactDOM.render(
  <Separate>
    <SeparateItem title='用时5分钟' />
    <SeparateItem title='距离5km' />
    <SeparateItem title='¥5' color='red' />
  </Separate>,
  mountNode
);
```