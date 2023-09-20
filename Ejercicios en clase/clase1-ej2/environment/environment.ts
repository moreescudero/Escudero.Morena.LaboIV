import { initializeApp } from "firebase/app";

export const environment = {
    production: false,
    firebaseConfig : {
        apiKey: "AIzaSyCCnu4a5e4hKpWfVrwBtTR9Qt6LKv9bt3w",
        authDomain: "clase1-ej2.firebaseapp.com",
        projectId: "clase1-ej2",
        storageBucket: "clase1-ej2.appspot.com",
        messagingSenderId: "927648709446",
        appId: "1:927648709446:web:b6a1199e7087a376598347"
    }
};

const app = initializeApp(environment.firebaseConfig);