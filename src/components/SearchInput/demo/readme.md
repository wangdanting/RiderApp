搜索框

![](../../../../ignorePack/search-input.png)

```jsx
import SearchInput from '@/components/SearchInput';

ReactDOM.render(
  <SearchInput
    placeholder='请输入订单号、商家名称进行查询'
    text='123'
    onChangeText={this.onChangeText}
  />,
  mountNode
);
```