/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management endpoints
 * 
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the customer
 *         phone:
 *           type: string
 *           description: The phone number of the customer
 *         isGold:
 *           type: boolean
 *           description: Indicates if the customer is a gold member
 *       example:
 *         name: John Doe
 *         phone: "+1234567890"
 *         isGold: true
 * 
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message describing validation failure
 *       example:
 *         message: 'Name is required'
 * 
 *   parameters:
 *     customerId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the customer
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Retrieve all customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: A list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: The created customer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Invalid customer data provided
 */

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - $ref: '#/components/parameters/customerId'
 *     responses:
 *       200:
 *         description: The requested customer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer with the given ID not found
 */

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - $ref: '#/components/parameters/customerId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: The updated customer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Invalid customer data provided
 *       404:
 *         description: Customer with the given ID not found
 */

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Delete a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - $ref: '#/components/parameters/customerId'
 *     responses:
 *       200:
 *         description: The deleted customer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer with the given ID not found
 */

