import { takeLatest, put, all } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/Firebase";
import { signInSuccess, signInFail, signOutSuccess } from "./userActions";

function* getUserAuth(userAuth) {
  try {
    const userRef = yield createUserProfileDocument(userAuth);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    put(signInFail(error));
  }
}

function* googleStart() {
  yield takeLatest("GOOGLE_SIGN_IN_START", signInWithGoogle);
}

function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getUserAuth(user);
}

function* emailSignInStart() {
  yield takeLatest("EMAIL_SIGN_IN_START", signWithWithEmail);
}

function* signWithWithEmail({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getUserAuth(user);
}

function* SignOut() {
  yield takeLatest("SIGN_OUT_START", SignOutUser);
}

function* SignOutUser() {
  yield auth.signOut();
  yield put(signOutSuccess());
}

export function* userSagas() {
  yield all([googleStart(), emailSignInStart(), SignOut()]);
}

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged(userAuth => {
//       unsubscribe();
//       resolve(userAuth);
//     }, reject);
//   });
// };

// function* isUserAuthenticated() {
//   try {
//     const userAuth = yield getCurrentUser();
//     if (!userAuth) return;
//     yield getSnapshotFromUserAuth(userAuth);
//   } catch (error) {
//     yield put(signInFail(error));
//   }
// }