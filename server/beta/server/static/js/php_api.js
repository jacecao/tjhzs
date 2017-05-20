// 所有后端的接口
var PATH = 'http://localhost/beta/server';
var URL = {
  // 入口
  enter: PATH + "/enter/main.php",
  // 退出接口
  exit: PATH + '/enter/main.php?controller=admin&method=logout',
  // 识别码检查
  captchar: PATH + '/enter/checkCaptchar.php',
  // 链接识别码
  captcharIMG: PATH + '/enter/captchar.php?r=' + Math.random(),
  // 注册入口
  userREG: PATH + '/enter/main.php?controller=admin&method=register',
  // 提交登录入口
  userLOG: PATH + '/enter/main.php?controller=admin&method=submit',
  // 管理员注册页面
  userREGwin: PATH + '/enter/main.php?controller=admin&method=reg_user',
  // 管理员列表
  userList: PATH + '/enter/main.php?controller=admin&method=user_list',
  // 删除管理员
  userDel: PATH + '/enter/main.php?controller=admin&method=del_user',
  // 检查用户名是否唯一
  usernameCheck: PATH + '/enter/main.php?controller=admin&method=checkusername',
  // 用户信息获取
  userINFO: PATH + '/enter/main.php?controller=admin&method=userinfo',
  // 管理界面首页
  win: PATH + '/enter/main.php?controller=admin&method=win',

  // 获取头部信息设置
  headerSet: PATH + '/enter/main.php?controller=admin&method=view&view=header&other=header',
  // 顶部广告图片上传
  upHeader: PATH + '/enter/main.php?controller=data&method=headerup',
  // 顶部数据提交
  sub_header: PATH + '/enter/main.php?controller=data&method=header_sub',

  // 导航条设置
  navSet: PATH + '/enter/main.php?controller=admin&method=view&view=nav',
  // 导航条数据设置
  sub_nav: PATH + '/enter/main.php?controller=data&method=nav_sub',


  // 获取新闻录制界面
  newsAdd: PATH + '/enter/main.php?controller=admin&method=view&view=news',
  // 新闻列表界面
  newsList: PATH + '/enter/main.php?controller=admin&method=list_win&list=news',
  // 新闻图片上传
  upNews: PATH + '/enter/main.php?controller=data&method=newsup',
  // 新闻数据上传
  sub_news: PATH + '/enter/main.php?controller=data&method=news_sub',
  // 删除数据
  del_news: PATH + '/enter/main.php?controller=data&method=news_del',
  // 招聘数据修改
  edit_news: PATH + '/enter/main.php?controller=admin&method=view&view=news&id=',
  // 修改后的新闻数据上传
  sub_edit_news: PATH + '/enter/main.php?controller=data&method=news_update',

  // 获取酒店录制界面
  hotelAdd: PATH + '/enter/main.php?controller=admin&method=view&view=hotel',
  // 酒店列表界面
  hotelList: PATH + '/enter/main.php?controller=admin&method=list_win&list=hotel',
  // 新闻图片上传
  upHotel: PATH + '/enter/main.php?controller=data&method=hotelup',
  // 新闻数据上传
  sub_hotel: PATH + '/enter/main.php?controller=data&method=hotel_sub',
  // 删除数据
  del_hotel: PATH + '/enter/main.php?controller=data&method=hotel_del',
  // 招聘数据修改
  edit_hotel: PATH + '/enter/main.php?controller=admin&method=view&view=hotel&id=',
  // 修改后的新闻数据上传
  sub_edit_hotel: PATH + '/enter/main.php?controller=data&method=hotel_update',


  // 设置关于我们
  aboutSet: PATH + '/enter/main.php?controller=admin&method=view&view=about',
  // 关于我们数据上传
  sub_about: PATH + '/enter/main.php?controller=data&method=about_sub',

  // 招聘发布
  jobAdd: PATH + '/enter/main.php?controller=admin&method=view&view=job',
  // 招聘列表
  jobList: PATH + '/enter/main.php?controller=admin&method=list_win&list=job',
  // 招聘数据上传
  sub_job: PATH + '/enter/main.php?controller=data&method=job_sub',
  // 修改后的招聘数据上传
  sub_edit_job: PATH + '/enter/main.php?controller=data&method=job_update',
  // 删除数据
  del_job: PATH + '/enter/main.php?controller=data&method=job_del',
  // 招聘数据修改
  edit_job: PATH + '/enter/main.php?controller=admin&method=view&view=job&id=',

  // 底部信息设置
  footerSet: PATH + '/enter/main.php?controller=admin&method=view&view=footer',
  // 底部数据上传
  sub_footer: PATH + '/enter/main.php?controller=data&method=footer_sub',

  // 获取产品录制界面
  productShow: PATH + '/enter/main.php?controller=admin&method=view&view=product&other=show',
  productAd: PATH + '/enter/main.php?controller=admin&method=view&view=product&other=ad',
  productAc: PATH + '/enter/main.php?controller=admin&method=view&view=product&other=ac',

  // 产品图片上传
  upProduct: PATH + '/enter/main.php?controller=data&method=productup',
  // logo图片上传
  upLogo: PATH + '/enter/main.php?controller=data&method=logoup',

  // 数据提交
  // 产品数据提交
  sub_pro_show: PATH + '/enter/main.php?controller=data&method=product_show',
  sub_pro_ad: PATH + '/enter/main.php?controller=data&method=product_ad',
  sub_pro_ac: PATH + '/enter/main.php?controller=data&method=product_ac',

  // 获取图片
  getImg: PATH + '/enter/main.php?controller=admin&method=imglist',
};
