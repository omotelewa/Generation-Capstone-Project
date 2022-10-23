# Generation-Capstone-Project
Generation Capstone project Ecommerce site 
Task 1: Design your App Wireframes
Description
Is always a good practice to design first before coding. The objective of this task is to design the application's wireframes so that you will have a better understanding of how the application will work and look.
Walkthrough
Step 1:
Select the project of your preference:
•	E-commerce
•	Social Network
Step 2:
Create an account on Moqups
Step 3: Create your App Wireframes!
In this step, we'll create the wireframes of your the project you selected. Make sure you read the acceptance criteria on the results section before you start designing. Ask the instructor if you have any questions!
Useful Resources for this step
•	beginners guide to wireframing
Test your Design!
Navigate through your designs and validate that you meet the assesment criteria.
Expected Result You should be able to navigate to all screens and fulfill the requirements.
Results
You should have implemented the different screens of your application, meeting the following assesment criteria:
•	There should be at minimum 4 pages:
o	Main page (Home) - Static Page with App Presentation
o	About Us - Static Pages
o	Products / Posts List - Consumes API (POST and GET)
o	Form Page (View / Create) - Optional (Update // Delete)
Example
 
Footer
© 2022 GitHub, Inc.
Footer navigation
•	Terms
•	Privacy
•	Security
•	Status
 
Task 2: About Us Page
Description
Create the About Us page using Bootstrap.
The page will contain the following parts:
•	A short project description
•	Team profiles (short bio, photo and role in the project)
Tools
•	HTML5
•	Bootstrap
Walkthrough
Step 1: Create the page structure
In this step, we'll create a basic HTML structure and include Bootstrap
1.	Create a new file called about.html in your project folder.
2.	Create a new file called styles.css and put this file inside a folder called css in your project folder.
3.	Include your styles.css file inside the about.html page. (Hint: If you need a reminder - look up how to include css files in html files.)
4.	Create a new Github repo and add, commit and push your files.
Step 2: Implementing your About page
Go through the different Bootstrap components and select the ones that are similar to your wireframes structure created on Task 1.
Useful Resources for this step
•	Bootstrap Get Started
Test Your Code!
 
Task 3: Basic Structure + Navigation - Front-End with Bootstrap
Description
Create the basic structure for the project with the navigation working:
•	All application views with separate HTML pages are set up.
Tools
•	HTML5
•	Bootstrap
Walkthrough
Step 1: Implement the home page
In this step, we'll create a basic HTML structure for the home page which includes Bootstrap
1.	Create a new file called index.html inside your project folder.
2.	Include your styles.css file inside the index.html page.
3.	Add a short description, image, video or any other element you like to explain what your project does.
4.	Add your new files to the Github repo, commit and push your changes.
Step 2: Implementing your Items List page
1.	Create a new file depending on the project you are implementing:
o	products.html
o	posts.html
2.	Include your styles.css file inside your html page.
3.	Create a sample list with some sample data to see how your items list will look like
Useful Resources for this step
•	List group
•	Cards 
•	Step 3: Implementing your Login page
1.	Create a new file called login.html inside your project folder.
2.	Implement a basic login form.
3.	Add a Login button.
Useful Resources for this step
•	Forms
Step 4: Implementing your model form page
1.	Create a new file called item_form.html inside your project folder.
2.	Implement a basic form with the fields needed to create a new item(post or product)
3.	Add a Save button.
Useful Resources for this step
•	Forms
Step 5: Adding a Navigation Bar
1.	Understand how the Navbar works.
2.	Add a Navbar with the menu options for each page
o	Home
o	About Us
o	Items List
o	Model Form
3.	Add a link to each menu item so it redirects to expected html page.
Useful Resources for this step
•	Navbar
Test Your Code!
Now is a good chance to test your page, open your index.html on your favorite browser and verify that the navigation works to all the pages. 
Results
We've now create the basic html pages of your project using Bootstrap!
 
# Task 5: Displaying Items List(posts or products)
## Description
For this task, we'll be creating the feature to display the objects list of the selected project:
* Products List
* Posts List

## Walkthrough

### Step 1: Define the item card layout
In this step, we'll create the item representation using the [card component](https://getbootstrap.com/docs/4.4/components/card/)

1. Read the documentation and understand how to use the [card components](https://getbootstrap.com/docs/4.4/components/card/)
2. Define the HTML structure of the item card representation.
3. Add a `div` element with id `list-items` to add your list items dynamically with JavaScript. 
4. Add 3 different sample item cards inside your `div` element.
> **Expected Result**
> You should see the items list displayed correctly

### Step 2: Adding your items cards programmatically

In this step, we'll create a function `addItemCard(item)` that
will be responsible for adding new items to the list.

> #### Useful Resources for this step
> - [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

 
1. Define a function called `addItemCard(item)` inside your in `js/items.js`
2. Write the code so your function can create the same HTML structure of your item card representation replacing the item's information.

> #### Test Your Code!
> Now is a good chance to test your code, head over to you HTML page and open it on the browser:

> 1. Open the console from the Developer Tools. 
> 2. Excecute the `addItemCard(item)` function from the console
> **Expected Result**
> You should see a new item card added to the DOM.

### Step 3: Store and read Items from the LocalStorage

In this step, we'll connect the `ItemsController` class and `items.js` with the local storage to persist your items data.

1. Modify the `items.js` adding a new function to save sample items data in the local storage. Use the following JSON structure as 
reference(make sure you save the data as a String).

```javascript

        const sampleItems = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Tayto',
        'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
        'description':'Cheese & Onion Chips'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
```

2. Modify the `ItemsController` so it loads the data from the storage implementing a new function `items.js` 

```javascript
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items)           
        }
    }
```
3. Implement a new function in the `items.js` that loads the items from the `ItemsController` using the function you already implemented `addItemCard(item)`.

4. Modify the `items.js` so it calls the `loadItemsFromLocalStorage()` and then iterate the `ItemsController.items` list to load the items into your  `items.html` page using the function implemented from  `addItemCard(item)`

## Results

We've now implemented a basic version of your application that persist the data on the local storage.

Test out your code by calling the funciton that loads the data from the local storage and verify the items are displayed correctly. You can also use the developer tools and navigate to the Application tab to verify that the items are saved in the local storage.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!
 
Task 6: Creating New Items using the form
Description
For this task, we'll be creating new Items using a form and validating the input data.
Walkthrough
Step 1: The Setup
1.	Create a new file called item-form.js inside the js folder.
2.	Add a <script> tag in your item-form.html file to include the js/item-form.js file.
Step 2: Adding Items With The Form
In this step, we will use the ItemsController class to keep track of items we add with the New Item form.
Useful Resources for this step
•	Document.querySelector()
•	EventTarget.addEventListener()
•	Event Reference
1.	Make sure a new ItemsController is initialized near the top of the item-form.js file.
2.	In item-form.js, add an event listener to the New Item form, listening to the submit event. If there is already an event listener used for validation, use that one.
3.	When the submit event fires, if validation of the form is successful, use the values of each input in the form to call the itemsController's addItem method.
o	Note: Make sure to prevent the default action of the form!
4.	Update the items list on the local storage so the data is also reflected on the items.html.
5.	Clear the values from each form input, ready for the next submission.
Results
We've now set up the ItemsController class, used an addItem and hooked it up to our New Item form!
Test out your code by adding some items using the New Item form, and checking the ItemsController instance's items array for the items.

 
Task 7: Implementing the Persistance Layer with MySQL
Description
For this task, we'll be implementing the database of your application using MySQL.
Walkthrough
Step 1: Using MySQL Workbench to implement the database structure
Useful Resources for this step
•	MySQL Workbench Tutorial: complete guide to the RDBMS tool
In this step, we'll create a EER Model to represent the application data layer.
1.	Create a new MySQL Workbench project
2.	Create a new EER Model.
3.	Create a new table that will represent your model(posts or products) and add the required columns: Eg Item:
o	id
o	name
o	description
o	imageUrl
 
4.	Generate your SQL code to create your database schema. Click on File / Export / Forward Engineer SQL CREATE Script.
 
Step 2: Connecting and Creating the database to your local instance of MYSQL
In this step, we'll create the database Schema on your local instance of MySQL database engine.
1.	If you haven't done it download and install the MySQL installer
2.	Copy the SQL sentences generated on step 1.
3.	Setup the database connection to connect to your local instance of MySQL.
4.	Open the local instance connection and paste the SQL sentences and run it.
5.	-- MySQL Script generated by MySQL Workbench
6.	-- Sun Jan 10 14:14:47 2021
7.	-- Model: New Model    Version: 1.0
8.	-- MySQL Workbench Forward Engineering
9.	
10.	SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
11.	SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
12.	SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
13.	
14.	-- -----------------------------------------------------
15.	-- Schema itemsdb
16.	-- -----------------------------------------------------
17.	
18.	-- -----------------------------------------------------
19.	-- Schema itemsdb
20.	-- -----------------------------------------------------
21.	CREATE SCHEMA IF NOT EXISTS `itemsdb` DEFAULT CHARACTER SET utf8 ;
22.	USE `itemsdb` ;
23.	
24.	-- -----------------------------------------------------
25.	-- Table `mydb`.`Item`
26.	-- -----------------------------------------------------
27.	CREATE TABLE IF NOT EXISTS `itemsdb`.`Item` (
28.	`id` INT NOT NULL,
29.	`name` VARCHAR(45) NULL,
30.	`description` VARCHAR(200) NULL,
31.	`imageUrl` VARCHAR(200) NULL,
32.	PRIMARY KEY (`id`))
33.	ENGINE = InnoDB;
34.	
35.	
36.	SET SQL_MODE=@OLD_SQL_MODE;
37.	SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
38.	SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
39.	Create a new database user running the following commands at the mysql prompt:
40.	mysql> create user 'admin'@'%' identified by 'passw0rd'; -- Creates the user
mysql> grant all on itemsdb.* to 'admin'@'%'; -- Gives all privileges to the new user on the newly created database
Test Your Code!
Now is a good chance to test your code, head over to MySQL Workbench schemas tab, click the refresh button and verify that your table is created as expected.
i.	Right click on the table you created and select the option: Select Rows - Limit 1000 to interact with the table.
ii.	Create a new entry manually using the tool to add data in result grid view.
iii.	Insert a new record manually into the database:
INSERT INTO `itemsdb`.`Item` (`id`, `name`, `description`, `imageUrl`) VALUES ('1', 'Chips', 'Sour Cream and Onion', 'https://images-na.ssl-images-amazon.com/images/I/81EUE1oZURL._SL1500_.jpg');
**Expected Result**
You should see the schema created with the tables defined on the EER Diagram
Take a screenshot of your schema and the EER Diagram. Name the file SchemaEER.jpg and create a folder for      
screenshots of the project. 


 
Task 8: Database Connection with Spring Data JPA
Description
For this task, we'll implement the backend of our web application using Spring Boot with Java.
Walkthrough
Step 1: Creating the base project
Useful Resources for this step
•	Spring Initializr
In this step, we'll generate a Spring Boot project using the spring initializr
1.	Go to the spring initializr and generate a new project with the following configuration:
o	Project: Gradle Project
o	Language: Java
o	Dependencies: Spring Web and Spring Data JPA (SQL)
o	Project Metadata: use meaningful names that describe your project, use Jar for packaging and select the Java version installed on your computer. 
2.	Click on Generate.
3.	Create a new repo on Github for the backend and upload the generated code.
Test Your Code!
Now is a good chance to test your code, open your project on the Java IDE and run the main class within your Application class.
Expected Result You should see the server is started correctly and no error is shown on the console.
Step 2: Database Connection with Spring Data JPA
Useful Resources for this step
•	Spring Data Reference Documentation
•	Accesing data with MySQL
 
In this step, we'll connect the Spring Boot project with the MySQL database created on task 7.
1.	Make sure you create the database user and grant access to your database:
2.	    mysql> create user 'admin'@'%' identified by 'passw0rd'; -- Creates the user
    mysql> grant all on itemsdb.* to 'admin'@'%'; -- Gives all privileges to the new user on the newly created database
3.	Add the following properties to the src/main/resources/application.properties:
4.	spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
5.	spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
6.	spring.jpa.hibernate.ddl-auto=none
7.	spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/itemsdb
8.	spring.datasource.username=admin
spring.datasource.password=passw0rd
9.	Add the following dependency to your build.gradle
    runtimeOnly 'mysql:mysql-connector-java'
Test Your Code!
Now is a good chance to test your code, run your Application main method to start the server.
Expected Result Your application should start and connect with your database, no error should be displayed on the console.
Step 3: Interacting with the Database form your Spring Boot Project
1.	Create new package called repository.entity and define the @Entity Model class:
2.	    package org.generation.ItemsAPI.repository.entity;
3.	
4.	    import javax.persistence.Entity;
5.	    import javax.persistence.GeneratedValue;
6.	    import javax.persistence.GenerationType;
7.	    import javax.persistence.Id;
8.	
9.	    @Entity
10.	    public class Item
11.	    {
12.	        @Id
13.	        @GeneratedValue(strategy= GenerationType.AUTO)
14.	        private Integer id;
15.	
16.	        private String name;
17.	
18.	        private String description;
19.	
20.	        private String imageUrl;
21.	
22.	        public Integer getId()
23.	        {
24.	            return id;
25.	        }
26.	
27.	        public void setId( Integer id )
28.	        {
29.	            this.id = id;
30.	        }
31.	
32.	        public String getName()
33.	        {
34.	            return name;
35.	        }
36.	
37.	        public void setName( String name )
38.	        {
39.	            this.name = name;
40.	        }
41.	
42.	        public String getDescription()
43.	        {
44.	            return description;
45.	        }
46.	
47.	        public void setDescription( String description )
48.	        {
49.	            this.description = description;
50.	        }
51.	
52.	        public String getImageUrl()
53.	        {
54.	            return imageUrl;
55.	        }
56.	
57.	        public void setImageUrl( String imageUrl )
58.	        {
59.	            this.imageUrl = imageUrl;
60.	        }
    }
61.	Create your repository interface to access the Item entity data under the repository package:
For example:
 package org.generation.ItemsAPI.repository;

 import org.generation.ItemsAPI.repository.entity.Item;
 import org.springframework.data.repository.CrudRepository;

 // This will be AUTO IMPLEMENTED by Spring into a Bean called itemRepository
 // CRUD refers Create, Read, Update, Delete
 public interface ItemRepository extends CrudRepository<Item, Integer>
 {
 }
62.	Create a REST Controller to test your code inside a new package controller called ItemController:
63.	@RestController
64.	@RequestMapping("/item")
65.	public class ItemController{
66.	
67.	    final ItemRepository itemRepository;
68.	
69.	
70.	    public ItemController(@Autowired ItemRepository itemRepository )
71.	    {
72.	        this.itemRepository = itemRepository;
73.	    }
74.	
75.	    @GetMapping
76.	    public Iterable<Item> getItems(){
77.	        return itemRepository.findAll();
78.	    }
}

Test Your Code!
Now is a good chance to test your code, start your application and open http://localhost:8080/item on your browser.
Expected Result You should see the list of items stored on your MySQL database:
[
  {
    "id": 1,
    "name": "Chips",
    "description": "Sour Cream and Onion",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81EUE1oZURL._SL1500_.jpg"
  }
]
Example
Stuck? Check out the provided example in the example/ folder



 
Task 8: Database Connection with Spring Data JPA
Description
For this task, we'll implement the backend of our web application using Spring Boot with Java.
Walkthrough
Step 1: Creating the base project
Useful Resources for this step
•	Spring Initializr
In this step, we'll generate a Spring Boot project using the spring initializr
1.	Go to the spring initializr and generate a new project with the following configuration:
o	Project: Gradle Project
o	Language: Java
o	Dependencies: Spring Web and Spring Data JPA (SQL)
o	Project Metadata: use meaningful names that describe your project, use Jar for packaging and select the Java version installed on your computer
 
 

o	
2.	Click on Generate.
3.	Create a new repo on Github for the backend and upload the generated code.
Test Your Code!
Now is a good chance to test your code, open your project on the Java IDE and run the main class within your Application class.
Expected Result You should see the server is started correctly and no error is shown on the console.
 
Step 2: Database Connection with Spring Data JPA
Useful Resources for this step
•	Spring Data Reference Documentation
•	Accesing data with MySQL
In this step, we'll connect the Spring Boot project with the MySQL database created on task 7.
1.	Make sure you create the database user and grant access to your database:
2.	    mysql> create user 'admin'@'%' identified by 'passw0rd'; -- Creates the user
    mysql> grant all on itemsdb.* to 'admin'@'%'; -- Gives all privileges to the new user on the newly created database
3.	Add the following properties to the src/main/resources/application.properties:
4.	spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
5.	spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
6.	spring.jpa.hibernate.ddl-auto=none
7.	spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/itemsdb
8.	spring.datasource.username=admin
spring.datasource.password=passw0rd
9.	Add the following dependency to your build.gradle
    runtimeOnly 'mysql:mysql-connector-java'
Test Your Code!
Now is a good chance to test your code, run your Application main method to start the server.
Expected Result Your application should start and connect with your database, no error should be displayed on the console.
Step 3: Interacting with the Database form your Spring Boot Project
1.	Create new package called repository.entity and define the @Entity Model class:
2.	    package org.generation.ItemsAPI.repository.entity;
3.	
4.	    import javax.persistence.Entity;
5.	    import javax.persistence.GeneratedValue;
6.	    import javax.persistence.GenerationType;
7.	    import javax.persistence.Id;
8.	
9.	    @Entity
10.	    public class Item
11.	    {
12.	        @Id
13.	        @GeneratedValue(strategy= GenerationType.AUTO)
14.	        private Integer id;
15.	
16.	        private String name;
17.	
18.	        private String description;
19.	
20.	        private String imageUrl;
21.	
22.	        public Integer getId()
23.	        {
24.	            return id;
25.	        }
26.	
27.	        public void setId( Integer id )
28.	        {
29.	            this.id = id;
30.	        }
31.	
32.	        public String getName()
33.	        {
34.	            return name;
35.	        }
36.	
37.	        public void setName( String name )
38.	        {
39.	            this.name = name;
40.	        }
41.	
42.	        public String getDescription()
43.	        {
44.	            return description;
45.	        }
46.	
47.	        public void setDescription( String description )
48.	        {
49.	            this.description = description;
50.	        }
51.	
52.	        public String getImageUrl()
53.	        {
54.	            return imageUrl;
55.	        }
56.	
57.	        public void setImageUrl( String imageUrl )
58.	        {
59.	            this.imageUrl = imageUrl;
60.	        }
    }
61.	Create your repository interface to access the Item entity data under the repository package:
For example:
 package org.generation.ItemsAPI.repository;

 import org.generation.ItemsAPI.repository.entity.Item;
 import org.springframework.data.repository.CrudRepository;

 // This will be AUTO IMPLEMENTED by Spring into a Bean called itemRepository
 // CRUD refers Create, Read, Update, Delete
 public interface ItemRepository extends CrudRepository<Item, Integer>
 {
 }
62.	Create a REST Controller to test your code inside a new package controller called ItemController:
63.	@RestController
64.	@RequestMapping("/item")
65.	public class ItemController{
66.	
67.	    final ItemRepository itemRepository;
68.	
69.	
70.	    public ItemController(@Autowired ItemRepository itemRepository )
71.	    {
72.	        this.itemRepository = itemRepository;
73.	    }
74.	
75.	    @GetMapping
76.	    public Iterable<Item> getItems(){
77.	        return itemRepository.findAll();
78.	    }
}
Test Your Code!
Now is a good chance to test your code, start your application and open http://localhost:8080/item on your browser.
Expected Result You should see the list of items stored on your MySQL database:
[
  {
    "id": 1,
    "name": "Chips",
    "description": "Sour Cream and Onion",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81EUE1oZURL._SL1500_.jpg"
  }
]
Example
Stuck? Check out the provided example in the example/ folder
