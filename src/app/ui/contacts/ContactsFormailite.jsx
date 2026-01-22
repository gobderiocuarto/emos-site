import HeaderSection from "../layout/HeaderSection";
import CardContact from "./CardContact";
import servicesData from "./ContactServiceData";

export default function ContactsFormalite() {
  const gestionAtencion = servicesData.filter(s => s.category === "gestion");
  const adminOperaciones = servicesData.filter(s => s.category === "admin");

  return (
    <section className="formalities formalities-categories" data-read>
      <div className="container">
        
          <HeaderSection
            title="Contactos"
            subtitle="Atencion al cliente de EMOS"
          />
        
          <div className="row formalities-list mb-5 ">
            {gestionAtencion.map(service => (
              <CardContact key={service.id} service={service} />
            ))}
            
              {adminOperaciones.map(service => (
                <CardContact key={service.id} service={service} />
              ))}
            </div>
          
  
      </div>
        
      
    </section>
  );
}
