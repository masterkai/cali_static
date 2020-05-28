const betRecordsTemplate = [
  {
    'repeat(5, 10)': {
      _id: '{{date(new Date(2014, 0, 1), new Date()).getTime()}}',
      dateFormatted: '{{moment(this.date(new Date(2019, 0, 1), new Date())).format("LLLL")}}',
      balance: '{{floating(-1000, 4000, 2, "$0,0.00")}}',
      betValue: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      grandTotal: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      gamePlatform(tags) {
        const games = ['卡利百家樂',
          '歐博',
          '沙龍百家樂',
          'DG百家樂',
          'WM百家樂',
          '卡利體育',
          'Super體育',
          '雷火電競',
          '幸運棋牌',
          'MG棋牌',
          'RTG天地',
          'DreamTech',
          'BTX',
          '9K彩票',
          '六合彩539'];
        return games[tags.integer(0, games.length - 1)];
      },
      grade(tags) {
        const grades = ['一星級',
          '二星級',
          '三星級',
          '四星級',
          '五星級',
          '六星級'];
        return grades[tags.integer(0, grades.length - 1)];
      },
      kind(tags) {
        const kinds = ['真人百家樂',
          '體育博彩',
          '賓果彩票',
          '電子遊戲',
          '棋牌',
          '捕魚王'];
        return kinds[tags.integer(0, kinds.length - 1)];
      }
    }
  }
]