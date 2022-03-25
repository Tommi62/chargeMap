'use strict';
import express from 'express';
import { station_delete, station_get, station_list_get, station_post} from '../controllers/stationController';
import passport from '../utils/pass';

const router = express.Router();

router.get('/', station_list_get);

router.get('/:id', station_get);

router.post('/', passport.authenticate('jwt', { session: false }), station_post);

//router.put('/:id', passport.authenticate('jwt', { session: false }), station_put);

router.delete('/:id', passport.authenticate('jwt', { session: false }), station_delete);


export default router;
