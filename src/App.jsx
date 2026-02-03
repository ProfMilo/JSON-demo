import { useState } from "react";
import "./App.css";
import { useCourses } from "./hooks/useCourses";
import { Header } from "./components/features/Header";
import { CourseForm } from "./components/features/CourseForm";
import { CourseList } from "./components/features/CourseList";
import { SearchModal } from "./components/features/SearchModal";

function App() {
  const { courses, addCourse, updateCourse, deleteCourse, resetCourses } =
    useCourses();

  // Local UI State
  const [editingCourse, setEditingCourse] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Derived State
  const filteredCourses = searchTerm
    ? courses.filter(
        (c) =>
          c.kodeMK.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.namaMK.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : courses;

  // Handlers
  const handleSave = (courseData) => {
    if (editingCourse) {
      updateCourse(editingCourse.id, courseData);
      setEditingCourse(null);
    } else {
      addCourse(courseData);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    // Optional: Scroll to top or form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsSearchModalOpen(false);
  };

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header onReset={resetCourses} />

        <CourseForm
          onSubmit={handleSave}
          editingCourse={editingCourse}
          onCancelEdit={() => setEditingCourse(null)}
          onOpenSearch={() => setIsSearchModalOpen(true)}
        />

        <CourseList
          courses={filteredCourses}
          onEdit={handleEdit}
          onDelete={deleteCourse}
          searchTerm={searchTerm}
          onClearSearch={() => setSearchTerm("")}
          onOpenSearch={() => setIsSearchModalOpen(true)}
        />

        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
          onSearch={handleSearch}
          currentSearch={searchTerm}
        />
      </div>
    </div>
  );
}

export default App;
