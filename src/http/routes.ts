import { Router } from 'express'
import {
  labAddController,
  labActiveListController,
  labUpdateController,
  labRemoveController,
  medicalAnalysisAddController,
  medicalAnalysisActiveListController,
  medicalAnalysisUpdateController,
  medicalAnalysisRemoveController,
  associateLabController,
  desassociateLabController
} from '../modules'

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
router.get('/medical-analysis', medicalAnalysisActiveListController.handle)
router.put('/medical-analysis/:id', medicalAnalysisUpdateController.handle)
router.delete('/medical-analysis/:id', medicalAnalysisRemoveController.handle)
router.patch('/medical-analysis/:id/associate-lab', associateLabController.handle)
router.delete('/medical-analysis/:id/desassociate-lab', desassociateLabController.handle)

export { router }
