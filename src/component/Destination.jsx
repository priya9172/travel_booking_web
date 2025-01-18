import React from 'react';

function Destination() {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f4f4f9",
    },
    card: {
      width: "18rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    body: {
      padding: "15px",
      textAlign: "left",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    list: {
      display: "flex",
      justifyContent: "space-around",
      padding: "0",
      margin: "0",
      listStyle: "none",
    },
    listItem: {
      fontSize: "16px",
      color: "#555",
    },
  };

  const destinations = [
    {
      img: "https://static.toiimg.com/photo/63282406.cms",
      title: "Taj Mahal",
      details: ["₹2000", "2 day", "Agra"],
    },
    {
      img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186647/top-10-tourist-attractions-in-india-harmandir-sahib/top-10-tourist-attractions-in-india-harmandir-sahib-1120x732.jpg",
      title: "Harmandir Sahib",
      details: ["₹3000", "2 day", "Amritsar"],
    },
    {
      img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186675/top-10-tourist-attractions-in-indiaa-gateway-of-india/top-10-tourist-attractions-in-indiaa-gateway-of-india-1120x732.jpg",
      title: "Gateway of India",
      details: ["₹2000", "1 day", "Mumbai"],
    },
    {
      img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186654/top-10-tourist-attractions-in-india-manikarnika-ghat/top-10-tourist-attractions-in-india-manikarnika-ghat-1120x732.jpg",
      title: "Manikarnika Ghat",
      details: ["₹5000", "3 day", "Varanasi"],
    },
    {
      img: "https://static.investindia.gov.in/s3fs-public/2023-06/1.jpg",
      title: "Unveiling India",
      details: ["₹5000", "5 day", "India"],
    },
    {
      img: "https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640",
      title: "Eiffel Tower",
      details: ["₹30000", "10day", "Paris"],
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d6/a1/6b/buckingham-palace.jpg?w=800&h=500&s=1",
      title: "Buckingham Palace",
      details: ["₹35000", "10 day", "London"],
    },
    {
      img: "https://static.independent.co.uk/2024/08/30/14/newFile-1.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp",
      title: "Sacré-Cœur",
      details: ["₹20000", "10 day", "Paris"],
    },
  ];

  return (
    <div style={styles.container}>
      {destinations.map((destination, index) => (
        <div
          key={index}
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={destination.img} style={styles.img} alt={destination.title} />
          <div style={styles.body}>
            <h4 style={styles.title}>{destination.title}</h4>
            <ul style={styles.list}>
              {destination.details.map((detail, i) => (
                <li key={i} style={styles.listItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Destination;
