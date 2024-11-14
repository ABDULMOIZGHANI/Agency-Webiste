import React, { useState } from "react";
import "./Services.css";
import service_data from "../../assets/services";
import Service_Heading from "../Service Heading/Service_Heading";

const Services = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(
    service_data[0].id
  );

  const handleServiceClick = (id) => {
    setSelectedServiceId(id);
  };

  const selectedService = service_data.find(
    (item) => item.id === selectedServiceId
  );

  return (
    <div>
      <div className="services-section">
        <div className="services">
          <h2>What we do</h2>
          <p className="services-para">
            We turn your idea into reality, on time and within budget.
          </p>

          <div className="service-list">
            <div className="service-main">
              {service_data.map((item) => {
                return (
                  <Service_Heading
                    key={item.id}
                    img={item.number_img}
                    heading={item.heding}
                    isSelected={item.id === selectedServiceId}
                    onClick={() => handleServiceClick(item.id)}
                  />
                );
              })}
            </div>
            <div className="service-detail">
              <h1>{selectedService?.heding}</h1>
              <p>{selectedService?.detail_about_project}</p>
              <img src={selectedService?.poject_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
