import {Router} from 'express';
const router = Router();
import {getPosts,createUser,listUser,deleteUser,updateUser,registerUser} from "../controllers/post.controller";

router.route('/')
    .get(getPosts)
    .post(registerUser)

router.route('/:id')
    .get(listUser)
    .delete(deleteUser)
    .put(updateUser)
// router.route('/password')

export default router;