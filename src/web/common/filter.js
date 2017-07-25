import * as moment from 'moment';

export default {
  install(Vue) {
    Vue.filter('datetime', function(value){
      return moment(value).format('YYYY--MM--DD HH:mm:ss')
    });
  }
};