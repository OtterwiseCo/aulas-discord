import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

function Home() {
  const { isLoading, error, data } = useQuery("getTodos", () =>
    axios.get("https://jsonplaceholder.typicode.com/todos"),
  );
  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("data", data);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const nameWatched = watch("name");
  console.log("name", nameWatched);
  console.log(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Home</h2>
      <input defaultValue="" {...register("name")} />
      <input defaultValue="" {...register("lastName")} />
      <input type="submit" />
      {JSON.stringify(data.data[0])}
    </form>
  );
}

const schema = yup.object().shape({
  name: yup.string().required("Você precisa digitar seu nome"),
  lastName: yup.string().required("Você precisa digitar seu sobrenome"),
});

export default Home;
