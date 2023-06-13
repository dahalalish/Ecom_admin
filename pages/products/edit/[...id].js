import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useEffect } from "react";
import ProductForm from "../../../components/ProductForm";
import { useState } from "react";
import axios from "axios";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get("/api/products/?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}
