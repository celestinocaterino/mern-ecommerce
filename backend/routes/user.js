import express from 'express';
import {userAuth, getuserProfile, userRegister} from './../controllers/userController.js';
import {auth} from '../middleware/authUserMiddleware.js';
const router=express.Router();

router.post('/login',userAuth);
router.route('/profile').get(auth,getuserProfile);
router.post('/register',userRegister);

export default router;