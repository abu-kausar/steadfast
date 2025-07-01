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
        const response = await axios.get(
          "http://157.230.240.97:9999/api/v1/product/iphone-15-plus"
        );
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