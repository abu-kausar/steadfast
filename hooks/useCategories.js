// src/hooks/useCategories.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://157.230.240.97:9999/api/v1/categories");
        const filtered = response.data.data.map((category) => ({
          name: category.name,
          image: category.image,
        }));
        setCategories(filtered);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}