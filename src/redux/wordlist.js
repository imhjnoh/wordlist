import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore/lite";
import { db } from "../firebase";

const initialState = new Map();

const CREATE = "wordlist/CREATE";
const LOAD = "wordlist/LOAD";
const UPDATE = "wordlist/UPDATE";
const DELETE = "wordlist/DELETE";

export function loadWord(wordlist) {
  return { type: LOAD, wordlist };
}
export function createWord(worddata) {
  return { type: CREATE, worddata };
}
export function updateWord(worddata) {
  return { type: UPDATE, worddata };
}
export function deleteWord(id) {
  return { type: DELETE, word_id: id };
}

// middle
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "wordlist"));
    let word_list = new Map();
    word_data.forEach((x) => {
      console.log(x.id);
      word_list.set(x.id, { ...x.data() });
    });
    console.log(word_list);
    dispatch(loadWord(word_list));
  };
};
export const createWordFB = (word) => {
  return async function (dispatch) {
    const doc = await addDoc(collection(db, "wordlist"), word);
    console.log(doc);
    const word_data = [doc.id, word];
    console.log(word_data);
    dispatch(createWord(word_data));
  };
};
export const updateWordFB = (id, data) => {
  return async function (dispatch) {
    const docRef = doc(db, "wordlist", id);
    await updateDoc(docRef, data);
    const worddata = [id, data];
    dispatch(updateWord(worddata));
  };
};
export const deleteWordFB = (id) => {
  return async function (dispatch) {
    console.log(id);
    const docRef = doc(db, "wordlist", id);
    await deleteDoc(docRef);
    dispatch(deleteWord(id));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "wordlist/LOAD": {
      return action.wordlist;
    }
    case "wordlist/CREATE": {
      const word = action.worddata;
      let new_wordlist = state;
      new_wordlist.set(word[0], word[1]);
      console.log(new_wordlist);
      return new Map([...new_wordlist]);
    }
    case "wordlist/UPDATE": {
      let new_wordlist = state;
      const id = action.worddata[0];
      new_wordlist.set(id, { ...state.get(id), ...action.worddata[1] });
      return new Map([...new_wordlist]);
    }
    case "wordlist/DELETE": {
      const new_wordlist = state;
      new_wordlist.delete(action.word_id);
      console.log(action.word_id, new_wordlist);
      return [...new_wordlist];
    }
    default: {
      return state;
    }
  }
}
