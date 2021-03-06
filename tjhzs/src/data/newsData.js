// 新闻数据
// 存储所有的新闻数据

// 这里设定一个更目录
// 将所有的新闻图片都储存在news文件夹内
const root = '/beta/static/images/news/'
export default [
  {
    // 识别加载路径,应该来自数据库的id
    id: 'n_6',
    time: '2016-04-06',
    title: '2016我们的韩国之行',
    images: [
      {
        imgurl: root + 'hanguo/park_01.jpg',
        desc: '和邦的花儿都在这里了'
      },
      {
        imgurl: root + 'hanguo/park_02.jpg',
        desc: '坐一排看啥呢？'
      },
      {
        imgurl: root + 'hanguo/park_03.jpg',
        desc: 'hello kitty'
      }
    ],
    content: '一起去韩国感受！！韩国是一个新兴的资本主义国家，是APEC、世界贸易组织和东亚峰会的创始成员国，也是经合组织、二十国集团和联合国等重要国际组织的成员。1997年亚洲金融危机后，韩国经济进入中速增长期。产业以制造业和服务业为主，造船、汽车、电子、钢铁、纺织等产业产量均进入世界前10名'
  },
  {
    // 识别加载路径,应该来自数据库的id
    id: 'n_5',
    time: '2015-12-20',
    title: '参加第一届展会运动会',
    images: [
      {
        imgurl: root + 'sports/park_02.jpg',
        desc: '等待这入场呢'
      },
      {
        imgurl: root + 'sports/park_03.jpg',
        desc: '参加跳绳比赛'
      },
      {
        imgurl: root + 'sports/park_04.jpg',
        desc: '篮球比赛'
      },
      {
        imgurl: root + 'sports/park_06.jpg',
        desc: '还有啦啦操比赛'
      },
      {
        imgurl: root + 'sports/park_07.jpg',
        desc: '篮球比赛获奖啦'
      }
    ],
    content: '运动会来啦！！未来增加大家的凝聚力，忙完工作老板带大家一起环岛旅行！台湾文化以中华文化为主体，是中华文化的重要组成部分，原住民族的南岛文化亦有影响，近现代又融合日本和欧美文化，呈现多元风貌'
  },
  {
    // 识别加载路径,应该来自数据库的id
    id: 'n_4',
    time: '2014-11-20',
    title: '和邦泰国之行',
    images: [
      {
        imgurl: root + 'taiguo/park_01.jpg',
        desc: '别有一番味道的晚霞'
      },
      {
        imgurl: root + 'taiguo/park_02.jpg',
        desc: '这里是芭提亚，热闹哦'
      },
      {
        imgurl: root + 'taiguo/park_03.jpg',
        desc: '大家一起来个合照'
      },
      {
        imgurl: root + 'taiguo/park_04.jpg',
        desc: '大家一起来个合照'
      },
      {
        imgurl: root + 'taiguo/park_04.jpg',
        desc: '大家一起来个合照'
      }
    ],
    content: '2014泰国我们来啦！！未来增加大家的凝聚力，忙完工作老板带大家一起环岛旅行！台湾文化以中华文化为主体，是中华文化的重要组成部分，原住民族的南岛文化亦有影响，近现代又融合日本和欧美文化，呈现多元风貌'
  },
  {
    // 识别加载路径,应该来自数据库的id
    id: 'n_3',
    time: '2014-07-20',
    title: '武汉公司拓展活动',
    images: [
      {
        imgurl: root + 'tuozhan1/image04.jpg',
        desc: '集体大合照来一张'
      },
      {
        imgurl: root + 'tuozhan1/image05.jpg',
        desc: '内地伙伴们向往的碧海蓝天'
      },
      {
        imgurl: root + 'tuozhan1/image06.jpg',
        desc: '冒雨前往阿里山'
      },
      {
        imgurl: root + 'tuozhan1/image07.jpg',
        desc: '顶层基友合照'
      },
      {
        imgurl: root + 'tuozhan1/image08.jpg',
        desc: '顶层基友合照'
      }
    ],
    content: '未来增加大家的凝聚力，忙完工作老板带大家一起环岛旅行！台湾文化以中华文化为主体，是中华文化的重要组成部分，原住民族的南岛文化亦有影响，近现代又融合日本和欧美文化，呈现多元风貌'
  },
  {
    // 识别加载路径,应该来自数据库的id
    id: 'n_2',
    time: '2014-04-20',
    title: '我们的台湾之旅',
    images: [
      {
        imgurl: root + 'taiwan/image01.jpg',
        desc: '集体大合照来一张'
      },
      {
        imgurl: root + 'taiwan/image02.jpg',
        desc: '内地伙伴们向往的碧海蓝天'
      },
      {
        imgurl: root + 'taiwan/image03.jpg',
        desc: '冒雨前往阿里山'
      },
      {
        imgurl: root + 'taiwan/image04.jpg',
        desc: '顶层基友合照'
      }
    ],
    content: '台湾我们终于来啦，忙完工作老板带大家一起环岛旅行！台湾文化以中华文化为主体，是中华文化的重要组成部分，原住民族的南岛文化亦有影响，近现代又融合日本和欧美文化，呈现多元风貌'
  },
  {
    // 识别加载路径,应该来自数据库的id
    id: 'n_1',
    time: '2014-04-02',
    title: '召开2014年春季总结会',
    images: [
      {
        imgurl: root + 'zongjiehui/park_01.jpg',
        desc: '2014年4月1号全体同仁总结过去展望未来'
      },
      {
        imgurl: root + 'zongjiehui/park_02.jpg',
        desc: '感谢在本次会展中特别付出的伙伴们'
      },
      {
        imgurl: root + 'zongjiehui/park_03.jpg',
        desc: '2014年4月1号全体同仁总结过去展望未来'
      }
    ],
    content: '2014年4月1号全体同仁总结过去展望未来,我们终于来啦，忙完工作老板带大家一起环岛旅行！文化以中华文化为主体，是中华文化的重要组成部分，原住民族的南岛文化亦有影响，近现代又融合日本和欧美文化，呈现多元风貌'
  }
]
