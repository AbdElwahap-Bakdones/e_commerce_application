import {
  Select,
  Table,
  TextInput,
  Button,
  Text,
  FileInput,
  Box,
  Avatar,
} from "@mantine/core";
import useGetCategories from "../../hooks/product/useGetCategories";
import CustomLoader from "../Loader";
import { useState } from "react";
import useAddProduct from "../../hooks/product/useAddProduct";
import ProductsType from "../../types/products";

interface Category {
  name: string;
}

interface Errors {
  name?: boolean;
  description?: boolean;
  price?: boolean;
  category?: boolean;
  stock?: boolean;
  features?: boolean;
  image?: boolean;
}

function AddRow() {
  const { mutate } = useAddProduct();
  const { data, error, isFetching } = useGetCategories();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string | null>(null);
  const [stock, setStock] = useState<string>("");
  const [features, setFeatures] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!name) newErrors.name = true;
    if (!description) newErrors.description = true;
    if (!price || isNaN(Number(price)) || parseFloat(price) <= 0) {
      newErrors.price = true;
    }
    if (!category) newErrors.category = true;
    if (!stock || isNaN(Number(stock)) || parseInt(stock, 10) < 0) {
      newErrors.stock = true;
    }
    if (!features) newErrors.features = true;
    if (!image) newErrors.image = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      const jsonData: Omit<ProductsType, "id"> = {
        // id: "0",
        name,
        description,
        price: parseFloat(price),
        category: category || "",
        stock: parseInt(stock, 10),
        features: [],
        ratings: { average: 0, totalReviews: 0 },
        images: imagePreview || "",
      };
      console.log(JSON.stringify(jsonData));
      setLoading(true);
      mutate(jsonData);
    }
  };
  const handleImageChange = (image: File | null) => {
    const file = image;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  if (!data || error || isFetching) return <CustomLoader />;

  return (
    // <Center>
    <Table.Tr key={"new"}>
      <Table.Td>
        {loading ? (
          <CustomLoader />
        ) : (
          <Button onClick={handleSubmit}>Save</Button>
        )}
      </Table.Td>{" "}
      <Table.Td></Table.Td>
      <Table.Td style={{ color: "#FCD128" }}>
        <TextInput
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          error={errors.name}
          onWaiting={validate}
        />
        {errors.name && <Text color="red">{errors.name}</Text>}
      </Table.Td>
      <Table.Td>
        <TextInput
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          error={errors.description}
          onBlur={validate}
        />
        {errors.description && <Text color="red">{errors.description}</Text>}
      </Table.Td>
      <Table.Td style={{ color: "#FCD128" }}>
        <TextInput
          placeholder="Enter Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
          error={errors.price}
          onBlur={validate}
        />
        {errors.price && <Text color="red">{errors.price}</Text>}
      </Table.Td>
      <Table.Td style={{ color: "#FCD128" }}>
        <Select
          placeholder="Category"
          data={data.map((cat: Category) => cat.name)}
          value={category}
          onChange={setCategory}
          error={errors.category}
          onBlur={validate}
        />
        {errors.category && <Text color="red">{errors.category}</Text>}
      </Table.Td>
      <Table.Td>
        <TextInput
          placeholder="Enter Stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.currentTarget.value)}
          error={errors.stock}
          onBlur={validate}
        />
        {errors.stock && <Text color="red">{errors.stock}</Text>}
      </Table.Td>
      <Table.Td>
        <TextInput
          placeholder="Enter Features"
          value={features}
          onChange={(e) => setFeatures(e.currentTarget.value)}
          error={errors.features}
          onBlur={validate}
        />
        {errors.features && <Text color="red">{errors.features}</Text>}
      </Table.Td>
      <Table.Td>reviews</Table.Td>
      <Table.Td>
        <Box w={"4rem"}>
          {imagePreview && (
            <Avatar src={imagePreview} alt="Image Preview" size={"xl"} />
          )}
          <FileInput
            accept="image/png,image/jpeg"
            placeholder="Image"
            error={errors.image}
            onChange={(e) => {
              handleImageChange(e);
              setImage(e);
            }}
          />
        </Box>
      </Table.Td>
    </Table.Tr>
    // </Center>
  );
}

export default AddRow;
