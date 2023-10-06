import { takeEvery } from 'redux-saga/effects';
import {globalActions} from "../global.slice";
import callMessagePublishSagaCB from "./callMessagePublishSaga";

export default function* chatSagas() {
    yield takeEvery(globalActions.chatSectionViewHandle, callMessagePublishSagaCB);
}
