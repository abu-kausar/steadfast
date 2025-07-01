// src/hooks/useProduct.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useProductDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/api/productDetails");
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return { data, loading, error };
}