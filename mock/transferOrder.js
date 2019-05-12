import Mock from 'mockjs';

Mock.mock(/\/orders\/switch\/courier/, 'get', {
  results: [
    {
      courierId: 1,
      distance: '1461.686',
      mobile: '17823705180',
      name: '曾友洪'
    },
    {
      courierId: 4,
      distance: '10974.805',
      mobile: '17729881993',
      name: '李姝雯'
    },
    {
      courierId: 103,
      distance: '0.134',
      mobile: '18875082742',
      name: '22'
    },
    {
      courierId: 106,
      distance: '0.138',
      mobile: '18565782159',
      name: 'tyj88888'
    },
    {
      courierId: 107,
      distance: '0.125',
      mobile: '15723471995',
      name: '胡汉三'
    },
    {
      courierId: 109,
      distance: '0.137',
      mobile: '15123552246',
      name: 'Antoy'
    },
    {
      courierId: 117,
      distance: '0.135',
      mobile: '13011123514',
      name: 'qying'
    }
  ]
});

Mock.mock(/\/orders\/switch\/from_requ/, 'post', {
  result: true
});
