
//<script type="text/javascript">
var 
  ref = document.referrer; //записываем в переменную ref значение реферера
  siteurl = document.location.href; //записываем в переменную siteurl адрес просмотренной страницы
  visitParams = {NotFoundURL: {[siteurl]:{Реферер:ref}} }; //записываем в переменную visitParams иерархию с параметрами

ym(7777777, 'reachGoal', '404error', visitParams); //достигаем цель на посещение страницы 404 и передаем в параметрах визитов URL-адрес 404 cтраницы и её реферер.

//</script>
