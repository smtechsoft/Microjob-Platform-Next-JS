"use client"

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ModalType = "CREATE_USER" | "EDIT_USER" | "DELETE_USER" | "CREATE_TASK" | "EDIT_TASK" | "DELETE_TASK" | "EDIT_PAYMENT"

interface ModalData {
  user?: any
  task?: any
  payment?: any
  apiUrl?: string
  query?: any
}

interface ModalState {
  type: ModalType | null
  data: ModalData
  isOpen: boolean
}

const initialState: ModalState = {
  type: null,
  data: {},
  isOpen: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<{ type: ModalType; data?: ModalData }>) => {
      state.isOpen = true
      state.type = action.payload.type
      state.data = action.payload.data || {}
    },
    onClose: (state) => {
      state.isOpen = false
      state.type = null
    },
  },
})

export const { onOpen, onClose } = modalSlice.actions

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
