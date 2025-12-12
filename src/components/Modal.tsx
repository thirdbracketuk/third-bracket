'use client'

import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
// import { IoCloseSharp } from 'react-icons/io5' // Not used

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 dark:bg-white/50 backdrop-blur-md justify-center p-4">
      <div className="bg-white dark:bg-black backdrop-blur-2xl px-8 pt-16 pb-8 max-w-lg w-full relative border border-primary-500/20 rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-light text-primary-500 z-10"
          aria-label="Close"
        >
          <IoCloseOutline size={32} />
        </button>
        {children}
      </div>
    </div>
  )
}
