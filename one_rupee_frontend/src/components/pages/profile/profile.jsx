import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <html id="html">
        <div id="div">
          <div className="imgcontainer">
            <img
              className="avatar1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABO1BMVEX////qQzU0qFNChfT7vAXZ5/1OjPXqQTNAg/Rimvbu9P7p8f5Xk/X61dIxp1DuZFnqRznzl4/9/v/m9OrtYFT/++7++Pf4/PlUtm7uaV47q1n84d+84sb60M37vg///PTsU0b/+OWjxPqyzfvA1vt0w4n96uj4vrldunaNzp5ypPff8eRovn/8zEPY7t73tK/vcmj8xzH+6Kz+89X93oX902H+7b7923j95Z8+jczG589Gr2Kl2bNAi9g2pGX8z1E1pl3LtxfS4vw5m433oBDxhn3sWEv0mpP4qgzwfHL91mc4nn+i17GMtfg9kb02om02oHaUv+c6mZs9k7VAieD1pZ48lqiky9/LyFryfB3vaCbtWiz0hxrvZifsUy/4sFKesylWq0a7th17qvdsrj3t5auNsTDnuQqrtCRlntlbAAAG70lEQVR4nO2ae3+aVhiAEY3mSlQseK9NKkikatPLVnGXdlNrm65dN7e1u/ayZt//EwxQIioHDnLgYPo+fyW/NIbH93bOaxkGAAAAAAAAAAAAAAAAAAAAAAAAAIC4I+hIUkVHkoyvaT/PJghSTZ4Oh5Pe8WjUaIxGx6XJcDiV5YpE+8l8IB11x71CI5HIrJLIFkq5aU3agtgIkpwrNUyFhBPGD7LHw24l3i6SPCxkUQ52m8RoEl8X4ShnWHhI2FyGtTiqSPKkgWthuWR73bjVviD3sIOxpFKKlYqp4ddi7pIoybFJsNpkUw1TJTup0TYwkcaNABqmSmNMP78EueS/NtZM6OeXlAuSVfagTKkGpdYLHo65SWJSoaYhdEeENEyVAq2aFwil1ZXJqEulUCrDBFEPoxGPKZhUeoQ1DJPENHKPoxJ5j0Tm+Ag8Pm+PynXxCKHOaXgIw2vikfP3hNYCJW4eTBd7npuP3xiNCoXCqDH/Nj4eNbzzlbH1GfVyXblWkXQqNbmbm6A2LDQ8JKxCNy7j41plZUkqSLVpz2FDQcNDyGF4ZBKFXA1xvRCOpqWV3KThwcje11r9uue+GZGWVxVUPCTPSZjJHHsveKTu8VWCUfEQxp7haOSwrqxSbh5aKh7MkUdiZTI93C2osbSg5iFMPDyyeOGYUZkYeUjDg5GzHmnl76oqjbN0PAT3EeJ/eSB0qXgw53+6etB5dzfgxp2nb66DB3NeT6X++AuZV1vjcfNBSuf73xF1Ho+FOg4P64ZI6ulbJ49s9GucjfkiNcchvTK52HxW48mtu5bIenplSvQ/3sDmvH4lknq63IczDZn20/ngWcrGch/O5Gg/nA9smbVaKJkCvQ82/GPPLIO6rVC2qGPZetYivd5aI32LKl0/nqyJ6Om1hQG5V3cQMfvwdlUI86WTh5leW9WynEpkzpstOmQxiBKZ8TfG4SS/E4B9kiKrU8TGfYxfP9hLb85tkiIPHWvdoP4QR+QwuTG7JyRFVsfhgru3whZ5kScoch+ZWQ9uhi1yRrJIniFFcEokkEhyj6DI7JbrWCLnoYscHkQici90kfQOORH0GIlChGD/RY+ROzdCF0meRiHyDU7Tio+I89kXREAERCyuTbFfm/ZLdSCSFKF6RIlIJPxDI0kRqsf4JMm7LmIblIrgYpVMPyEoQvGqS/Q+QnP5QPSGGHgddLjrBdKD7J3dZZD8Jnr/+v7ZnhfImJHdoiBXppefyn3v387ve3IbKUJ0r4VqW48/spxC5A+cInOL5BhBnH/r79+xLFdsE3j9/AtUlRDtvs5FUv+HYw0GBF7/YA8VkD2S3ZdxKpLLT6YGy7X44C+PLhGiTYtxGImP37EWF4FfHZ1ZuydEm9baJKn/t/AgUCU76IlJ9FMFg6Vz4+UnjrWhYMwSV06QHkQPKCb23Lr8yC6hYcwSN9ClvvuBcGYt5db7d8seQes9jw5Ikuw4NLH6ltV1lwiUXC4VQniKmMxPwFbXXaYcYJjsf0B6EG++BrP77uPVtApcJvlTdGKFkVlmudu77kqZFDsbvuxtl8vKIcHPRhbcuLPSdYmY7CA7Vig9y+Tfj0iNjU0OzlwSi/w0nCGq6ICYJv7rZMfVg/SB8Ypq2U2E5bSBzy78xNUjnFI3EJuuIdG7sOJnMubd6jzMgDBMR3MXYVm1jx0U/se0q0eS9MHXRl7xEuE0zKCI1darR+jlSbgB0d/Flkdy6RQH3ipiv1nmuK9/cosJ2cv6Kh71bgaFbXmo6Bqa+YaUXx8igxLG6cT+DJ7JZaoUlT7KRexcqOWruD7/CmFC9v9pOcC7DxNLhSu3lH5bXK58UWz3L1SNtb0C9/IHZxGyezkn+hqOielSVJVBtd/hddqdanXQVDW9Mlb+2be/pB2CshfKKWuZgXeZLGT0OtCKOppWnn3rwHc/r5mEnlgGWGWyrIMwsHj1KPrEMk2aPk08TVf78FmYI8QGXsH7ofzanl5RFMiMDsZc9Mnzr6ItkNBMFn04fRpJgYRnMu/D6RDPitGYzPtwxB66iUpchH35KH0S7hHLiTbpLmz04V+jjoeBqODPeDwP33dlUiYDzHMXpkexSsdDp0+yUNRNd3wk4JUymaBw/hYX5NHv3kREKKaVBa8ErhQ9HCQ+5A6KuUkIosGq9MMxQ6yqG6t47yoiZVMVXeMiRhoGYrWpedwE1zXKapyiYSF2lOLacsEtGFozLrWxBl/Fc+EMi0E7rhoGed2lpbHofYPxk3JLqcbaYkae7wwUtVie7U+4q+c3v9aMZVeHj7+Fhcj3qwOl2VSNnZZOsaU2m8qguk0OC/KiKPJ824DnRXEbFQAAAAAAAAAAAAAAAAAAAAAAAADgc+N/GrvykvC58oAAAAAASUVORK5CYII="
            />
          </div>

          <div className="profileForm" />
          <h2 float="center">Username</h2>
          <div className="personalInfo">
            Email:<small> user-email </small>
            <br />
            Contact no.:<small>9999999</small>
          </div>
          <div />
        </div>
      </html>
    );
  }
}

export default Profile;
