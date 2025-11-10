import express from 'express';
import {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, admin, getContacts)
  .post(createContact);

router.route('/:id')
  .get(protect, admin, getContactById)
  .put(protect, admin, updateContact)
  .delete(protect, admin, deleteContact);

export default router;

