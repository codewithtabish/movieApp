import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
import { Toast } from "toastify-react-native";
import { changeAppLoader } from "./appReducer";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";



// const dispatch=useDispatch()

const userSlice=createSlice({
  name:"user",
    initialState:{
        userToken:null,
        registerUserStorage:"",
        loginUserStorage:null,
        userCreationLoader:false,
        userObj:null,
        userCreationError:null
      },
      reducers:{
        createUser:(state,action)=>{
          // alert(state.registerUserStorage)
        // state.registerUserStorage="kkkk"
        // alert(state.registerUserStorage)


        const {email,password,yes}=action.payload

       createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    Toast.success("Account Created Successfully ....")
    // state.registerUserStorage=user.email
    // alert(state.registerUserStorage)




    // state.userCreationLoader=!yes
    // changeAppLoader(false)
    // ...
  })
  .catch((error) => {
    // state.userCreationLoader=!yes
    const errorCode = error.code;
    const errorMessage = error.message;
    Toast.error(errorMessage)
    // changeAppLoader(false)
    // ..
  });

    },
    checkUserToken:(state,action)=>{
      state.userToken=action.payload
    },
    loginUser:(state,action)=>{
      const {email,password}=action.payload
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    Toast.success("Login Successfully ....")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toast.error(errorMessage)
  });

    }

}
})
export const  {createUser,loginUser,checkUserToken} =userSlice.actions
export default userSlice.reducer