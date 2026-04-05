"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState, onOpen, onClose, ModalType } from "@/store/store"

export const useModal = () => {
  const dispatch = useDispatch()
  const { type, data, isOpen } = useSelector((state: RootState) => state.modal)

  const open = (type: ModalType, data?: any) => {
    dispatch(onOpen({ type, data }))
  }

  const close = () => {
    dispatch(onClose())
  }

  return { type, data, isOpen, open, close }
}
