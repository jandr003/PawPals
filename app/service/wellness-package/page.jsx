import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../data/services";

export default function WellnessPackagePage() {
  return (
    <ServiceDetail
      service={services.find((s) => s.id === "wellness")}
      image="/service-dog1.png"
      ctaHref="/service/book-appointment"
      ctaLabel="Book Now"
    />
  );
}