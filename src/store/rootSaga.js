import { spawn } from 'redux-saga/effects';
import chatSagas from "../components/Chat/redux/sagas/chatSagas";

export default function* rootSaga() {
    yield spawn(chatSagas);
}
