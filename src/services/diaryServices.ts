
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = ( id: number ): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find( item => item.id === id );
  if ( entry != null ) {
    const { comment, ...resto } = entry;
    return resto;
  }
  return undefined;
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
};

export const addEntries = ( newDiaryEntry: NewDiaryEntry ): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }
  diaries.push( newDiary );
  return newDiary;
};

