if(Meteor.isClient){

Tinytest.add('Faker client - faker object should be available', function(test){
  test.isTrue(!!window.faker);
});	

}
