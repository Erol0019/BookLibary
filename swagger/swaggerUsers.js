/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 * 
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email address of the user
 *       example:
 *         _id: "60ab5f05d53900f81c826d0f"
 *         name: "John Doe"
 *         email: "john.doe@example.com"
 * 
 *     UserRegistration:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         name: "John Doe"
 *         email: "john.doe@example.com"
 *         password: "password123"
 * 
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         email: "john.doe@example.com"
 *         password: "password123"
 * 
 *   responses:
 *     ValidationError:
 *       description: Error response when validation fails
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Error message describing validation failure
 *               details:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Specific validation error message
 * 
 *   parameters:
 *     userId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: ID of the user
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get current user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized request
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegistration'
 *     responses:
 *       200:
 *         description: New user registered successfully
 *         headers:
 *           x-auth-token:
 *             schema:
 *               type: string
 *               description: JWT token for authentication
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid user data provided
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login and obtain authentication token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *         headers:
 *           x-auth-token:
 *             schema:
 *               type: string
 *               description: JWT token for authentication
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid email or password
 */

