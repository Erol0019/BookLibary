/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 * 
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *         password:
 *           type: string
 *           minLength: 5
 *           maxLength: 1024
 *           description: User's password
 *       example:
 *         email: john.doe@example.com
 *         password: password123
 *     AuthToken:
 *       type: string
 *       description: JSON Web Token (JWT) for authentication
 *       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9[...]
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Authenticate user and generate access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: A valid JWT token is generated upon successful authentication
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthToken'
 *       400:
 *         description: Invalid email or password provided
 */

