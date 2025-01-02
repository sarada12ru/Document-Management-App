const express = require('express');
const router = express.Router();

const userRouter = require('./src/user/user.router');
router.use('/users', userRouter);

const authRouter = require('./src/auth/auth.router');
router.use('/auth', authRouter);

module.exports = router;