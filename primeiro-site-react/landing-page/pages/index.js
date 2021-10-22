import { Fragment } from "react";
import Header from "components/Header/Header";
import ServiceDescription from "components/ServiceDescription/ServiceDescription";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <ServiceDescription
        title={"Transform your brand"}
        description="teste"
        link="localhost:8000"
      />
      <ServiceDescription
        title={"Stand out to the right audience"}
        description="teste"
        link="localhost:8000"
      />
      <ServiceDescription />
      <ServiceDescription />
    </Fragment>
  );
}
