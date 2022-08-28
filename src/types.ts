
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'storny';

export enum WeatherEnum {
  Sunny  = 'sunny',
  Rainy  = 'rainy',
  Cloudy = 'cloudy',
  Windy  = 'windy',
  Stormy = 'stormy'
}

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export enum VisibilityEnum {
  Great = 'great',
  Good  = 'good',
  Ok    = 'ok',
  Poor  = 'poor'
}

export interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id', 'date', 'weather', 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

