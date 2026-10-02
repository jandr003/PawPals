import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../data/services";

export default function StayPlayCarePage() {
  return (
    <ServiceDetail
      service={services.find((s) => s.id === "stayplay")}
      image="/service-dog2.png"
      ctaHref="/service/book-appointment"
      ctaLabel="Reserve a Spot"
    />
  );
}