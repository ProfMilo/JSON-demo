import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, BookOpen } from 'lucide-react'

export function CourseList({ courses, onEdit, onDelete, onClearSearch, searchTerm, onOpenSearch }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="table-card"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="table-title mb-0 border-0 pb-0">Daftar Mata Kuliah</h2>
        <div className="flex items-center gap-3">
          {searchTerm && (
            <FilterBadge term={searchTerm} onClear={onClearSearch} />
          )}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-slate-600 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm">Cari</span>
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th className="text-center">Kode MK</th>
              <th className="text-center">Nama Mata Kuliah</th>
              <th className="text-center">Semester</th>
              <th className="text-center">SKS</th>
              <th className="text-center">Kurikulum</th>
              <th className="text-center">Jenis</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {courses.map((course) => (
                <motion.tr
                  key={course.id}
                  variants={rowVariants}
                  exit="exit"
                  layout
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <td className="code-cell">{course.kodeMK}</td>
                  <td className="name-cell">{course.namaMK}</td>
                  <td>{course.semester}</td>
                  <td>{course.sks}</td>
                  <td>{course.kodeKurikulum}</td>
                  <td>
                    <span className={`badge ${course.jenisMK === 'Wajib' ? 'badge-wajib' : 'badge-pilihan'}`}>
                      {course.jenisMK}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onEdit(course)}
                        className="table-action-btn action-edit"
                      >
                        Edit
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onDelete(course.id)}
                        className="table-action-btn action-delete"
                      >
                        Hapus
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </motion.tbody>
        </table>
      </div>

      {courses.length === 0 && (
        <EmptyState />
      )}
    </motion.div>
  )
}

function FilterBadge({ term, onClear }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg"
    >
      <span className="text-sm text-blue-600">Filter: "{term}"</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClear}
        className="text-blue-400 hover:text-blue-600"
      >
        <X className="w-4 h-4" />
      </motion.button>
    </motion.div>
  )
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <p className="text-slate-400">Tidak ada data ditemukan</p>
    </motion.div>
  )
}
