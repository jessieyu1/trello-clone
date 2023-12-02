//TODO:  add test cases for board controller using jest
const boardController = require('../controller/boards.controllers');
const boardService = require('../service/board.services');

jest.mock('../service/board.services');

describe('Board Controller', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  //create new board test
  describe('createNewBoard', () => {
    it('should create a new board', async () => {
      const req = { body: { name: 'Test Board' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      boardService.createBoard.mockResolvedValue({ name: 'Test Board', id: '123' });

      await boardController.createNewBoard(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ name: 'Test Board', id: '123' });
    });

    it('should handle missing request body', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await boardController.createNewBoard(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Request body is missing' });
    });

    it('should handle board creation failure', async () => {
      const req = { body: { name: 'Test Board' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      boardService.createBoard.mockRejectedValue(new Error('Board creation failed'));

      await boardController.createNewBoard(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Board creation failed' });
    });
  });

  //get all boards test
  
});