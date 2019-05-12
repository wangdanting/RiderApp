import Mock from 'mockjs';

Mock.mock(/\/sessions\/send_valid_code/, 'post', {
  result: true
});
