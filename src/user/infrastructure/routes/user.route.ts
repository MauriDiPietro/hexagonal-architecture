import { Router } from 'express';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../controllers/user.controller';
import { MongoRepository } from '../repository/mongo.repository';

const router = Router();

/**
 * Iniciar Repository --> interface que tiene los métodos abstraidos de la db
 */
const mongoUserRepository = new MongoRepository()

/**
 * Iniciar casos de uso
 */

const userUseCase = new UserUseCase(mongoUserRepository);

/**
 * Iniciar el user controller
 */
const userCtrl = new UserController(userUseCase)

/**
 * Routes
 */

router.post('/user', userCtrl.insertController);
router.get('/user/:uuid', userCtrl.getController);

export default router;