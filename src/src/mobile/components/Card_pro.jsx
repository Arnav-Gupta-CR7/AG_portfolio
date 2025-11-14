import styled from "styled-components";

const CardPro = ({ image, category, heading, author, daysAgo }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image">
          <img
            src={image}
            alt={heading}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="category">{category}</div>
        <div className="heading">
          {heading}
          <div className="author">
            By <span className="name">{author}</span> {daysAgo} ago
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    background: #1a0000;
    padding: 0.4em;
    border-radius: 6px;
    border: 1px solid #ff1a1a; /* thin red border */
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card-image {
    width: 100%;
    height: 130px;
    overflow: hidden;
    border-radius: 6px 6px 0 0;
  }

  .card-image img {
    transition: transform 0.3s ease;
  }

  .card-image:hover img {
    transform: scale(1.05);
  }

  .category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: #ff4d4d;
    padding: 10px 7px 0;
  }

  .category:hover {
    cursor: pointer;
    color: #ff1a1a;
  }

  .heading {
    font-weight: 600;
    color: #ff9999;
    padding: 7px;
  }

  .heading:hover {
    cursor: pointer;
    color: #ff4d4d;
  }

  .author {
    color: #ff6666;
    font-weight: 400;
    font-size: 11px;
    padding-top: 10px;
  }

  .name {
    font-weight: 600;
    color: #ff1a1a;
  }

  .name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default CardPro;
