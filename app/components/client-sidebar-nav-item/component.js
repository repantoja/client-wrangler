import Component from '@ember/component';
let isAdmin = true;
let menu = [];
/*menu.forEach(function(item, index) {
    console.log(`menu #${index+1}: ${item}`);
  });*/
switch (isAdmin) {
  case true:
    menu.push('dashboard');
    menu.push('users');
    break;
  default:
    break;

}

export default Component.extend({

  menu

});
