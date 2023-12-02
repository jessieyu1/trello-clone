const express = require('express')
const router = express.Router()
const {
  deleteBoard, updateBoard, getBoardById, getAllBoards, createNewBoard
} = require('../controller/boards.controllers');

// Board Routes:
/**
 * @swagger
 * tags:
 *   name: Boards
 *   description: API endpoints for managing boards
 */

// Create a new board: POST /api/boards
/**
 * @swagger
 * /api/boards:
 *   post:
 *     summary: Create a new board
 *     tags: [Boards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Board'
 *     responses:
 *       '201':
 *         description: Board created successfully
 *         content:
 *           application/json:
 *             example: { message: 'Board created successfully' }
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example: { error: 'Request body is missing' }
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example: { error: 'Board creation failed' }   
 */
router.post('/', createNewBoard);
// Get a list of all boards: GET /api/boards
/**
 * @swagger
 * /api/boards:
 *   get:
 *     summary: Get a list of all boards
 *     tags: [Boards]
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: [{ boardData }]
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example: { error: 'Failed to fetch boards' }
 */
router.get('/', getAllBoards);
// Get a specific board: GET /api/boards/:boardId
/**
 * @swagger
 * /api/boards/{boardId}:
 *   get:
 *     summary: Get a specific board by ID
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         description: ID of the board
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: { boardData }
 *       '404':
 *         description: Board not found
 *         content:
 *           application/json:
 *             example: { error: 'Board not found' }
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example: { error: 'Failed to fetch board' }
 */
router.get('/:boardId', getBoardById);
// Update a board's details: PUT /api/boards/:boardId
/**
 * @swagger
 * /api/boards/{boardId}:
 *   put:
 *     summary: Update a board's details
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         description: ID of the board
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Board'
 *     responses:
 *       '200':
 *         description: Board updated successfully
 *         content:
 *           application/json:
 *             example: { updatedBoardData }
 *       '404':
 *         description: Board not found
 *         content:
 *           application/json:
 *             example: { error: 'Board not found' }
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example: { error: 'Board update failed' }
 */
router.put('/:boardId', updateBoard);
// Delete a board: DELETE /api/boards/:boardId
/**
 * @swagger
 * /api/boards/{boardId}:
 *   delete:
 *     summary: Delete a board
 *     tags: [Boards]
 *     parameters:
 *       - in: path
 *         name: boardId
 *         required: true
 *         description: ID of the board
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Board deleted successfully
 *       '404':
 *         description: Board not found
 *         content:
 *           application/json:
 *             example: { error: 'Board not found' }
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example: { error: 'Board deletion failed' }
 */
router.delete('/:boardId', deleteBoard);

module.exports = router;
