import Firebase from '../firebase/firebase'

// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const LOGINANON = 'LOGINANON'

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}


export const login = () => {
	return async (dispatch, getState) => {
		try {

			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
			dispatch({ type: LOGIN, payload: {uid: response.user.uid} })

		} catch (e) {

            var errorCode = e.code;
			var errorMessage = e.message;
			
            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña incorrecta.');
            } else if (errorCode === 'auth/user-not-found'){
                alert('Usuario no registrado');
            } else if (errorCode === 'auth/user-disabled') {
                alert('Tu cuenta ha sido deshabilitada')
            } else if (errorCode === 'auth/invalid-email' || errorCode === 'auth/argument-error'  ){
                alert('Ingresa un correo electrónico con el siguiente formato:\nalguien@ejemplo.com')
            } else {
                alert("Algo salió mal. Intenta de nuevo. :(")
			}
			
		}
	}
}


export const loginAnon = () => {
	return async (dispatch, getState) => {
		try {

			const response = await Firebase.auth().signInAnonymously()
			dispatch({ type: LOGINANON, payload: {uid: response.user.uid} })

		} catch (e) {

            var errorCode = e.code;
			var errorMessage = e.message;
			
            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña incorrecta.');
            } else if (errorCode === 'auth/user-not-found'){
                alert('Usuario no registrado');
            } else if (errorCode === 'auth/user-disabled') {
                alert('Tu cuenta ha sido deshabilitada')
            } else if (errorCode === 'auth/invalid-email' || errorCode === 'auth/argument-error'  ){
                alert('Ingresa un correo electrónico con el siguiente formato:\nalguien@ejemplo.com')
            } else {
                alert("Algo salió mal. Intenta de nuevo. :(")
			}
			
		}
	}
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {

			dispatch({ type: LOGIN, payload: {uid: uid} })

		} catch (e) {

			alert(e)
			
		}
	}
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email
				}

				db.collection('users')
					.doc(response.user.uid)
					.set(user)

				dispatch({ type: SIGNUP, payload: user })
			}
		} catch (e) {
			alert(e)
		}
	}
}
