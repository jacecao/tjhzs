<?php
/* Smarty version 3.1.30, created on 2019-07-06 16:37:59
  from "D:\wamp64\www\server\smart_dir\tpl\user_list.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5d20ce67c28bc0_50331414',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9df862077a7bd204322c62a3db3c9d9c76df280c' => 
    array (
      0 => 'D:\\wamp64\\www\\server\\smart_dir\\tpl\\user_list.html',
      1 => 1561275885,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5d20ce67c28bc0_50331414 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="user-list data-list">
  <h3>管理员列表</h3><hr>
  <table class="table table-hover text-center data-list">
    <thead>
      <tr>
        <th class="text-center">编号</th>
        <th class="text-center">管理员账号</th>
        <th class="text-center">注册时间</th>
        <th class="text-center">管理</th>
      </tr>
    </thead>
    <tbody>
      <?php if ($_smarty_tpl->tpl_vars['users']->value) {?>
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['users']->value, 'user');
$_smarty_tpl->tpl_vars['user']->iteration = 0;
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['user']->value) {
$_smarty_tpl->tpl_vars['user']->iteration++;
$__foreach_user_0_saved = $_smarty_tpl->tpl_vars['user'];
?>
      <tr>
        <td><?php echo $_smarty_tpl->tpl_vars['user']->iteration;?>
</td>
        <td><?php echo $_smarty_tpl->tpl_vars['user']->value['username'];?>
</td>
        <td><?php echo $_smarty_tpl->tpl_vars['user']->value['date'];?>
</td>
        <?php if ($_smarty_tpl->tpl_vars['power']->value === 'root') {?>
        <td><button class="btn btn-warning del-user" type="button" data-user="<?php echo $_smarty_tpl->tpl_vars['user']->value['username'];?>
">删除管理员</button></td>
        <?php } else { ?>
        <td><button class="btn btn-warning del-user" type="button" disabled>删除管理员</button></td>
        <?php }?>
      </tr>
        <?php
$_smarty_tpl->tpl_vars['user'] = $__foreach_user_0_saved;
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

      <?php }?>
    </tbody>
  </table>
</div>
<?php echo '<script'; ?>
 src="static/js/control.js"><?php echo '</script'; ?>
>
<?php }
}
