# orm-ecommerce-backend

## Description
Through this homework assignment, a back end for a e-commerce site was built by using given starter code. With this starter code, Sequelize was also installed in order to interact with a MySQL database. In order to begin this project, "npm i" was installed through Gitbash and an ".env" file was created. The ".env" file allows the user to input their envrionemtn variables that eventually overrides the variables in the file. In addition, the ".env" file is primarly used so that the user can input their password without allowing others to obtain access. Once the user wants to start the application, "npm run seeds" can simply be typed into the terminal and then "npm start". Once that is completed, the user must go into their terminal and head into their "db" folder. Then, the user will type "mysql -u root -p" and input their password. Finally, the user will type "SOURCE schema.sql;" to create their database with the MySQL shell commands. 

In the server.js file, a sync sequelize model was used to listen to the port and ultimately let the user know what port the app is listening on. Code that was written in the routes/api folder, "async" and "await" expressions are used to make promise-returning functions. The get routes allow a user to use the endpoint "/api/categories" in order to view all of the categories or "/api/categories/:id" in order to view a single category. Also, the user can put "/api/categories/"newID"" as their endpoint in a post request in order to create a new ID for a different category. A new category name will have to be inputted underneath. A put request with the endpoint "/api/categories/:id" will allow the user to change/update the existing ID. Again, a new category name will have to be inputted. Lastly, the user can delete an existing ID by using the delete route with the endpoint "/api/categories/:id". This will delete the exisitng ID and the information with it. These steps can be used for tags and products as well. 

In the models folder, characteristics are inputted for each individual model. These either permit or prohibit different requirements for a specific model. The "id" for each model will be an integer, won't allow null values, set as a primary key,and will use auto increment. The "..._name" for each model will be a string and won't allow null values. The "..._id" for each model will be an integer and will reference the specific model with the key as "id". In the "Product" model, the "price" will be a decimal, won't allow null values, and will validate that a decimal is being used. The "stock" will be an integer, won't allow null values, will have a set default value of 10, and wil validate that the value is numeric. 

## npm run seed, npm start, SOURCE schema.sql, and GET all
![Start Gif](vids/orm-runseed-start-schema-all.gif)

[Video Link](vids/orm-runseed-start-schema-all.webm)

## GET routes to return a single category, product, or tag
![Single Gif](vids/orm-single.gif)

[Video Link](vids/orm-single.webm)

## POST, PUT, DELETE routes for categories
![POST, PUT, DELETE](vids/orm-post-put-delete.gif)

[Video Link](vids/orm-post-put-delete.webm)