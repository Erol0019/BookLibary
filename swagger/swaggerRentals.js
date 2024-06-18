/**
 * @swagger
 * tags:
 *   name: Rental
 *   description: Rental management endpoints
 * 
 * components:
 *   schemas:
 *     Rental:
 *       type: object
 *       properties:
 *         customer:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The ID of the customer
 *             name:
 *               type: string
 *               description: The name of the customer
 *             phone:
 *               type: string
 *               description: The phone number of the customer
 *           description: The customer renting the movie
 *         movie:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The ID of the movie
 *             title:
 *               type: string
 *               description: The title of the movie
 *             dailyRentalRate:
 *               type: number
 *               description: The daily rental rate of the movie
 *           description: The movie being rented
 *         dateOut:
 *           type: string
 *           format: date-time
 *           description: The date and time when the rental was made
 *       example:
 *         customer:
 *           _id: "60ab5f05d53900f81c826d0f"
 *           name: "John Doe"
 *           phone: "1234567890"
 *         movie:
 *           _id: "60ab5f05d53900f81c826d1a"
 *           title: "Inception"
 *           dailyRentalRate: 2.5
 *         dateOut: "2023-06-12T12:00:00Z"
 * 
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message describing validation failure
 *       example:
 *         message: 'Customer ID is required'
 * 
 *   parameters:
 *     rentalId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the rental
 *     customerId:
 *       in: path
 *       name: customerId
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the customer associated with the rental
 *     movieId:
 *       in: path
 *       name: movieId
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the movie associated with the rental
 */

/**
 * @swagger
 * /api/rentals:
 *   get:
 *     summary: Retrieve all rentals
 *     tags: [Rental]
 *     responses:
 *       200:
 *         description: A list of rentals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rental'
 */

/**
 * @swagger
 * /api/rentals:
 *   post:
 *     summary: Create a new rental
 *     tags: [Rental]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: string
 *                 description: ID of the customer renting the movie
 *               movieId:
 *                 type: string
 *                 description: ID of the movie being rented
 *             required:
 *               - customerId
 *               - movieId
 *     responses:
 *       200:
 *         description: The created rental
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rental'
 *       400:
 *         description: Invalid rental data provided
 */

/**
 * @swagger
 * /api/rentals/{id}:
 *   get:
 *     summary: Get a rental by ID
 *     tags: [Rental]
 *     parameters:
 *       - $ref: '#/components/parameters/rentalId'
 *     responses:
 *       200:
 *         description: The requested rental
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rental'
 *       404:
 *         description: Rental with the given ID not found
 */

