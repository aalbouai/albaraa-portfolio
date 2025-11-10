import express from 'express';
import { signup, signin, signout, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/profile', protect, getProfile);

export default router;

