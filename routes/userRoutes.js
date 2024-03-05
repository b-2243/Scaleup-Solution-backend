const express = require('express');
const { allUser, singleUser, editUSer, deleteUSer, createUserJobsHistory } = require('../controller/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();

//user route

router.get('/allusers',isAuthenticated,isAdmin, allUser);
router.get('/user/:id',isAuthenticated, singleUser);
router.put('/user/edit/:id',isAuthenticated, editUSer);
router.delete('/admin/user/delete/:id',isAuthenticated, isAdmin, deleteUSer);
router.post('/user/jobshistrory', isAuthenticated, createUserJobsHistory)
module.exports = router;