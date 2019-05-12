将列表封装成组件，实现下拉刷新，上拉加载，空列表状态展示。运用的页面只需要传入参数即可。

```jsx
import FlatList from '@/components/FlatList';

const keyExtractor = item => String(item.expressOrderId);

const renderItem = ({ item }) => <OrderCell item={item} />;

ReactDOM.render(
  <FlatList
    data={data}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    queryData={queryData}
    handleSearch={handleSearch}
    refreshing={refreshing}
    dataTotal={dataTotal}
    />,
  mountNode
);
```