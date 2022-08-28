
import express from 'express';
import { addEntries, findById, getEntriesWithoutSensitiveInfo } from '../services/diaryServices';
import toNewDiaryEntry from '../services/utils';

const router = express.Router();

router.get('/', ( _req, res ) => {
  res.send( getEntriesWithoutSensitiveInfo() );
})

router.get('/:id', ( req, res ) => {
  const diary = findById( Number( req.params.id ) );
  res.send( diary );
})

router.post('/', ( req, res ) => {
  try {
    const newDiaryEntry = toNewDiaryEntry( req.body );
    const addedDiaryEntry = addEntries( newDiaryEntry );
    console.log('Comentando desde por ahi');
    res.json( addedDiaryEntry );
  } catch (error) {
    res.status(400).json({ error })
  }
})

export default router;

