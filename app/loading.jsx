"use client"


import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <main className="min-h-screen  flex items-center justify-center text-center">
      <motion.div
        className="p-8 rounded-lg shadow-md bg-white"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <motion.h2
          className="text-2xl font-bold text-blue-600 mb-4"
          animate={{ opacity: [0, 1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.h2>
        <p className="text-gray-500">Hopefully not for too long ⚡</p>
      </motion.div>
    </main>
  )
}

export default Loading
