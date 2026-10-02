import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../data/services";

export default function AdoptionPackagePage() {
  return (
    <ServiceDetail
      service={services.find((s) => s.id === "adoption")}
      image="/service-cat1.png"
      ctaHref="/adopt"
      ctaLabel="Start Adoption"
    />
  );
}