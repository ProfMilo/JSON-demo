import { useState, useEffect } from "react";
import defaultData from "../data.json";

const STORAGE_KEY = "mataKuliahData";

export function useCourses() {
  const [courses, setCourses] = useState([]);

  // Initialize data
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setCourses(JSON.parse(savedData));
    } else {
      setCourses(defaultData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }
  }, []);

  // Persistence
  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    }
  }, [courses]);

  const addCourse = (course) => {
    const newId =
      courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
    const newEntry = { ...course, id: newId };
    setCourses((prev) => [...prev, newEntry]);
  };

  const updateCourse = (id, updatedData) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, ...updatedData } : course,
      ),
    );
  };

  const deleteCourse = (id) => {
    if (window.confirm("Hapus mata kuliah ini?")) {
      setCourses((prev) => prev.filter((course) => course.id !== id));
    }
  };

  const resetCourses = () => {
    if (
      window.confirm(
        "Reset semua data ke default? Semua perubahan akan hilang.",
      )
    ) {
      setCourses(defaultData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    }
  };

  return {
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    resetCourses,
  };
}
