import './Map.style.css'

const Map = () => {
  return (
    <div className="map-responsive">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12689.830105309824!2d-122.030189!3d37.3316756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b6c4951d0f%3A0xb651414deb31e9fb!2sApple%20Infinite%20Loop!5e0!3m2!1sen!2sbd!4v1703500144266!5m2!1sen!2sbd"
        width="100%"
        height="450"
       allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="responsive google map"
      ></iframe>
    </div>
  );
};

export default Map;
