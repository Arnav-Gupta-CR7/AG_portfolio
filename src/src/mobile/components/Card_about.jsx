import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card relative">
          <img src="/download.gif" alt="" className="w-full h-auto block" />

         
          

          <div className="content-box">
            <span className="card-title">Arnav Gupta</span>
            <p className="card-content">
              Delivering clarity, performance, and precision in every build.
            </p>
            <a href="#projects" className="see-more">Projects</a>
          </div>

          <div className="date-box">
            <span className="month">MAY</span>
            <span className="date">29</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 300px;
    padding: 20px;
    perspective: 1000px;
  }

  .card {
    padding-top: 50px;
    border: 3px solid rgb(255, 0, 0);
    transform-style: preserve-3d;
    background: linear-gradient(135deg, #0000 18.75%, #1a0000 0 31.25%, #0000 0),
      repeating-linear-gradient(45deg, #1a0000 -6.25% 6.25%, #330000 0 18.75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 0;
    background-color: #0a0000;
    width: 100%;
    box-shadow: rgba(255, 0, 0, 0.3) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    background-position: -100px 100px, -100px 100px;
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background: rgba(255, 0, 0, 0.6);
    transition: all 0.5s ease-in-out;
    padding: 10px 25px 25px 25px;
    transform-style: preserve-3d;
  }

  .content-box .card-title {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: #ff0000;
    background: white;
    padding: 0.5rem 0.7rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
  }

  .content-box .see-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background: white;
    border: 1px solid #ff0000;
    padding: 10px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(255, 0, 0, 0.3) 0px 17px 10px -10px;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

  .date-box .month {
    color: #ff0000;
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: #ff0000;
  }
`;

export default Card;
