/**
 * @swagger
 * tags:
 *   name: Genre
 *   description: Genre management endpoints
 * 
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the genre
 *       example:
 *         name: Comedy
 */

/**
 * @swagger
 * /api/genres:
 *   get:
 *     summary: Retrieve all genres
 *     tags: [Genre]
 *     responses:
 *       200:
 *         description: A list of genres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genre'
 */

/**
 * @swagger
 * /api/genres:
 *   post:
 *     summary: Create a new genre
 *     tags: [Genre]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genre'
 *     responses:
 *       200:
 *         description: The created genre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *       400:
 *         description: Invalid genre data provided
 */

/**
 * @swagger
 * /api/genres/{id}:
 *   put:
 *     summary: Update a genre by ID
 *     tags: [Genre]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the genre to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genre'
 *     responses:
 *       200:
 *         description: The updated genre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *       400:
 *         description: Invalid genre data provided
 *       404:
 *         description: Genre with the given ID not found
 * 
 *   delete:
 *     summary: Delete a genre by ID
 *     tags: [Genre]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the genre to delete
 *     responses:
 *       200:
 *         description: The deleted genre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *       404:
 *         description: Genre with the given ID not found
 * 
 *   get:
 *     summary: Get a genre by ID
 *     tags: [Genre]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the genre to retrieve
 *     responses:
 *       200:
 *         description: The requested genre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *       404:
 *         description: Genre with the given ID not found
 */

