import Arrivals from "@components/Arrivals";
import Customers from "@components/Customers";
import Hero from "@components/Hero";
import Sellings from "@components/Sellings";
import Styles from "@components/Styles";

export default function PageMain() {
  return (
    <>
      <Hero/>
      <Arrivals/>
      <Sellings/>
      <Styles/>
      <Customers/>
    </>
  );
}
