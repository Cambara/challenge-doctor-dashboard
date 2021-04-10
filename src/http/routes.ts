import { Router } from 'express'
import { labAddController, labActiveListController, labUpdateController, labRemoveController, medicalAnalysisAddController } from '../modules'

const router = Router()

router.get('/', (request, response) => response.status(200).send())

router.get('/health', (request, response) => response.status(200).send())

// Lab Routers
router.post('/labs', labAddController.handle)
router.get('/labs', labActiveListController.handle)
router.put('/labs/:id', labUpdateController.handle)
router.delete('/labs/:id', labRemoveController.handle)

// Medical Analysis Routers

router.post('/medical-analysis', medicalAnalysisAddController.handle)

export { router }
