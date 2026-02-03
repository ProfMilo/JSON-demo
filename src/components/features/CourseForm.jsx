import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Hash, BookOpen, Clock, FileText, Tag, Plus, Edit2, Trash2, Search } from 'lucide-react'

const INITIAL_FORM_STATE = {
  kodeMK: '',
  namaMK: '',
  semester: '1',
  sks: '3',
  kodeKurikulum: '',
  jenisMK: 'Wajib'
}

export function CourseForm({ onSubmit, editingCourse, onCancelEdit, onOpenSearch }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

  useEffect(() => {
    if (editingCourse) {
      setFormData({
        ...editingCourse,
        semester: editingCourse.semester.toString(),
        sks: editingCourse.sks.toString()
      })
    } else {
      setFormData(INITIAL_FORM_STATE)
    }
  }, [editingCourse])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      semester: parseInt(formData.semester),
      sks: parseInt(formData.sks)
    })
    setFormData(INITIAL_FORM_STATE)
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE)
    if (editingCourse) onCancelEdit()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="form-card mb-8"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup icon={<Hash />} label="Kode MK">
            <input
              type="text"
              name="kodeMK"
              value={formData.kodeMK}
              onChange={handleChange}
              className="input-field"
              placeholder="Masukkan kode mata kuliah"
              required
            />
          </InputGroup>

          <InputGroup icon={<BookOpen />} label="Nama MK">
            <input
              type="text"
              name="namaMK"
              value={formData.namaMK}
              onChange={handleChange}
              className="input-field"
              placeholder="Masukkan nama mata kuliah"
              required
            />
          </InputGroup>

          <InputGroup icon={<Clock />} label="Semester">
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="select-field"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </InputGroup>

          <InputGroup icon={<FileText />} label="SKS">
            <input
              type="number"
              name="sks"
              min="1"
              max="6"
              value={formData.sks}
              onChange={handleChange}
              className="input-field"
              placeholder="Jumlah SKS"
              required
            />
          </InputGroup>

          <InputGroup icon={<FileText />} label="Kurikulum">
            <input
              type="text"
              name="kodeKurikulum"
              value={formData.kodeKurikulum}
              onChange={handleChange}
              className="input-field"
              placeholder="Masukkan kode kurikulum"
              required
            />
          </InputGroup>

          <InputGroup icon={<Tag />} label="Jenis MK">
            <select
              name="jenisMK"
              value={formData.jenisMK}
              onChange={handleChange}
              className="select-field"
              required
            >
              <option value="Wajib">Wajib</option>
              <option value="Pilihan">Pilihan</option>
            </select>
          </InputGroup>
        </div>

        <ActionButtons
          isEditing={!!editingCourse}
          onCancel={onCancelEdit}
          onReset={handleReset}
          onSearch={onOpenSearch}
        />
      </form>
    </motion.div>
  )
}

// Sub-components for internal cleanliness
function InputGroup({ icon, label, children }) {
  return (
    <motion.div
      className="input-row"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="input-icon">
        {icon && <div className="w-5 h-5">{icon}</div>}
      </div>
      <label className="input-label">{label}:</label>
      {children}
    </motion.div>
  )
}

function ActionButtons({ isEditing, onCancel, onReset, onSearch }) {
  return (
    <motion.div className="button-row mt-6">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="btn btn-primary"
      >
        <Plus className="w-4 h-4" />
        {isEditing ? 'Simpan' : 'Tambah'}
      </motion.button>

      {isEditing && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          onClick={onCancel}
          className="btn btn-secondary"
        >
          <Edit2 className="w-4 h-4" />
          Batal
        </motion.button>
      )}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="button"
        className="btn btn-danger"
        onClick={onReset}
      >
        <Trash2 className="w-4 h-4" />
        Reset Form
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="button"
        className="btn btn-info"
        onClick={onSearch}
      >
        <Search className="w-4 h-4" />
        Cari
      </motion.button>
    </motion.div>
  )
}
