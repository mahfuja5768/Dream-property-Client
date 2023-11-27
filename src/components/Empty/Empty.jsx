/* eslint-disable react/prop-types */
import Container from "../../shared/Container/Container";
import emptyImg from '../../assets/images/empty.png'

const Empty = ({text}) => {
    return (
       <Container>
         <div className="flex flex-col text-center mx-auto justify-center items-center">
            <img src={emptyImg} className="" alt="" />
            <h3 className="text-2xl font-medium">{text} is empty!</h3>
         </div>
       </Container>
    );
};

export default Empty;