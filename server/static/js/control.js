// 控制信息
var controleINFO = {
  del_success: '删除管理员成功!',
  del_fail: '删除管理员失败!',
  del_err: '对不起你没有操作权限',
  edit_success: '数据修改成功！',
  edit_error: '数据修改失败，请重新填写'
};

/********************************
**  管理员控制界面编写         **
*********************************/
// 删除管理员
$('.del-user').on('click', function () {
  $(this).attr('disabled','disabled');
  var name = $(this).data('user');
  $.post(URL.userDel, {user_name: name}, function (res) {
    switch (parseInt(res)) {
      case 0:
        activeMessge(controleINFO.del_fail, 'remove', '#f00');
        break;
      case 4:
        activeMessge(controleINFO.del_err, 'remove', '#f00');
        break;
      default:
        activeMessge(controleINFO.del_success, 'ok', '#8bc34a');
        break;
    }
    $.get(URL.userList, function (res) {
      $('.control-win').html(res);
    });
  });
});

/********************************
**   头部信息录入编写          **
********************************/
// 初始头部封面图片模块
var imgModel_header = new Imgmodel('.up-post', '.choose-post', URL.upHeader);
imgModel_header.upimg();
imgModel_header.chooseimg();

// 提交数据
$('.sub-header').on('click', function () {
  $(this).attr('disabled', true);
  // 执行数据提交处理
  up_form_data(URL.sub_header, URL.headerSet, '.header-form');
  // $.post(URL.sub_header, $('.header-form').serialize(), function (res) {
  //   console.log(res);
  // });
});

/********************************
**   导航条设置  编写          **
********************************/
// 提交数据
$('.sub-nav').on('click', function () {
  $(this).attr('disabled', true);
  // 执行数据提交处理
  up_form_data(URL.sub_nav, URL.navSet, '.nav-form');
  // $.post(URL.sub_nav, $('.nav-form').serialize(), function (res) {
  //   console.log(res);
  // });
});

/********************************
**       关于我们编写          **
********************************/
// 提交数据
$('.sub-about').on('click', function () {
  // $(this).attr('disabled', true);
  // 执行数据提交处理
  up_form_data(URL.sub_about, URL.aboutSet, '.about-form');
  // $.post(URL.sub_about, $('.about-form').serialize(), function (res) {
  //   document.write(res);
  //   console.log(res);
  // });
});

/********************************
**       footer数据编写        **
********************************/
// 启动复选框模块
var check = new Check_link();
// 复选框操作
$('.is-link').on('click', function () {
  check.run($(this));
});

// 提交数据
$('.sub-footer').on('click', function () {
  // $(this).attr('disabled', true);
  // 执行数据提交处理
  // up_form_data(URL.sub_footer, URL.footerSet, '.web-form');
  $.post(URL.sub_footer, $('.web-form').serialize(), function (res) {
    // document.write(res);
    console.log(res);
  });
});

/********************************
**   产品页面界面编写          **
********************************/
// 产品页面
// 初始添加图片按钮
// argument 文件上传接口
$('.addimg-product').on('click', function() {
  new Imgwin('product', URL.upProduct);
});

// 初始产品图片模块
var imgModel_product = new Imgmodel('.up-0', '.choose-product', URL.upProduct);
imgModel_product.upimg();
imgModel_product.chooseimg();
// 初始logo图片模块
var imgModel_logo = new Imgmodel('.up-logo', '.choose-logo', URL.upLogo);
imgModel_logo.upimg();
imgModel_logo.chooseimg();

// 图片删除
$('.del-scan').on('click', function () {
  var id = $(this).data('id');
  $('.scan-box-' + id).fadeOut().remove();

});

// 产品信息提交
// 提交数据到json文件
$('.sub-data').on('click', function () {
  $(this).attr('disabled', true);
  // 数据提交地址
  var url = '';
  // 重定向地址
  var re_url = '';
  switch ($(this).data('up')) {
    case 'show':
      url = URL.sub_pro_show;
      re_url = URL.productShow;
    break;
    case 'ad':
      url = URL.sub_pro_ad;
      re_url = URL.productAd;
    break;
    case 'ac':
      url = URL.sub_pro_ac;
      re_url = URL.productAc;
    break;
  }
  // 执行数据提交处理
  up_form_data(url, re_url, '.products-form');
});
