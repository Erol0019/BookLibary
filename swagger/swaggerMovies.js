/**
 * @swagger
 * tags:
 *   name: Movie
 *   description: Movie management endpoints
 * 
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the movie
 *         genre:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The ID of the genre
 *             name:
 *               type: string
 *               description: The name of the genre
 *           description: The genre of the movie
 *         numberInStock:
 *           type: integer
 *           description: Number of copies in stock
 *         dailyRentalRate:
 *           type: number
 *           description: Daily rental rate of the movie
 *       example:
 *         title: "Inception"
 *         genre:
 *           _id: "60ab5f05d53900f81c826d0f"
 *           name: "Sci-Fi"
 *         numberInStock: 10
 *         dailyRentalRate: 2.5
 * 
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message describing validation failure
 *       example:
 *         message: 'Title is required'
 * 
 *   parameters:
 *     movieId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the movie
 *     genreId:
 *       in: path
 *       name: genreId
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the genre associated with the movie
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Retrieve all movies
 *     tags: [Movie]
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movie]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The created movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Invalid movie data provided
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movie]
 *     parameters:
 *       - $ref: '#/components/parameters/movieId'
 *     responses:
 *       200:
 *         description: The requested movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie with the given ID not found
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie by ID
 *     tags: [Movie]
 *     parameters:
 *       - $ref: '#/components/parameters/movieId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The updated movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Invalid movie data provided
 *       404:
 *         description: Movie with the given ID not found
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags: [Movie]
 *     parameters:
 *       - $ref: '#/components/parameters/movieId'
 *     responses:
 *       200:
 *         description: The deleted movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie with the given ID not found
 */

