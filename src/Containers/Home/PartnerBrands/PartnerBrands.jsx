import client1 from "../../../assets/Partners/client1.svg";
import client2 from "../../../assets/Partners/client02.svg";
import client3 from "../../../assets/Partners/client03.svg";
import client4 from "../../../assets/Partners/client04.svg";
import client5 from "../../../assets/Partners/client05.svg";

import classes from "./PartnerBrands.module.css";
const PartnerBrands = () => {
  return (
    <div className={classes.partnerBrands}>
      <img src={client1} />
      <img src={client2} />
      <img src={client3} />
      <img src={client4} />
      <img src={client5} />
    </div>
  );
};

export default PartnerBrands;
