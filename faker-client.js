faker.meteor = {
	user: function(){ 
		return {
			username: faker.internet.username(),
			emails: [
				{
					address: faker.internet.email(),
					verified: true
				}
			],

			profile: {
				name: faker.name.findName()
			}
		}
	}
}

Blaze.registerHelper('faker', function(){
	return faker;
});