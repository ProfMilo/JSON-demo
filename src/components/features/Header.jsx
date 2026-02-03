import { motion } from 'framer-motion'
import { GraduationCap, RefreshCw } from 'lucide-react'

export function Header({ onReset }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="header-bar mb-8"
    >
      <div className="flex items-center gap-5">
        <div className="header-icon">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-semibold" style={{ color: '#ffffff' }}>
          Master Mata Kuliah
        </h1>
      </div>
      <motion.button
        whileHover={{ scale: 1.05, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="p-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
        title="Reset ke data default"
      >
        <RefreshCw className="w-5 h-5" />
      </motion.button>
    </motion.header>
  )
}
