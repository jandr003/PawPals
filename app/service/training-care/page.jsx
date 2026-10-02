import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../data/services";

export default function TrainingCarePage() {
  return (
    <ServiceDetail
      service={services.find((s) => s.id === "training")}
      image="/service-cat2.png"
      ctaHref="/service/book-appointment"
      ctaLabel="Book Training"
    />
  );
}