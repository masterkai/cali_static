const depositTemplateData = [
  {
    'repeat(5, 10)': {
      id: '{{objectId()}}',
      time: '{{moment(this.date(new Date(2019, 0, 1), new Date())).format("l")}}',
      status: '{{bool()}}',
      value: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      methods(tags) {
        const fruits = ['現上轉帳', '線上刷卡', 'VIP存款區','超商'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  }
]