
import Empty from "../../../components/Empty/Empty";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CustomButton from "../../../hooks/CustomButton";
import useProperties from "../../../hooks/useProperties";
import Container from "../../../shared/Container/Container";

const AdvertiseProperty = () => {
    const [properties] = useProperties();
    return (
      <Container>
        <SectionTitle heading={"Requested Properties"}></SectionTitle>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg text-primary bg-secondary">
                <th></th>
                <th>Property Image</th>
                <th>Property Title</th>
             
                <th>Agent Name</th>
                <th>Offer Price</th>
                <th>Advertise</th>
                <th>Remove from Advertise</th>
              </tr>
            </thead>
            {properties?.length > 0 ? (
              <tbody>
                {properties?.map((item, idx) => (
                  <tr key={item?._id} className="text-lg">
                    <th>{idx + 1}</th>
                    <th><img src={item.propertyImg} alt="" /></th>
                    <th>{item.title}</th>
                    <td>{item.agentName}</td>
                    <td>
                      ({item.priceRange.min}-{item.priceRange.max})$
                    </td>
                    <td>
                      {item.status === "pending" && (
                        <span onClick={() => handleVerify(item._id)}>
                          <CustomButton buttonText={"Advertise"}></CustomButton>
                        </span>
                      )}
                    </td>

                    <td>
                      {item.status === "pending" && (
                        <span onClick={() => handleReject(item._id)}>
                          <CustomButton buttonText={"Reject"}></CustomButton>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <Empty text={"This"}></Empty>
            )}
          </table>
        </div>
      </Container>
    );
};

export default AdvertiseProperty;
