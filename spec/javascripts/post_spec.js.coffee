# use require to load any .js file available to the asset pipeline

describe "Post model", ->

	beforeEach ->
		this.post = new App.Models.Post()

	it "should be able to define", ->

		expect(this.post).toBeDefined()
	
	it "should be inValid without title: and body:", ->
		
		this.post.validate()
		expect(this.post.isValid()).not.toBeTruthy()
	
	it "should create error messages when validate fails", ->
		validationErrors = this.post.validate()
		
		expect(validationErrors.title).toBeDefined()
		expect(validationErrors.body).toBeDefined()

	it "should be Valid when set title: and body:", ->
		this.post.set({title: "Title of post."}).set({body: "Many many text here..."})
		this.post.validate()
		expect(this.post.isValid()).toBeTruthy()
