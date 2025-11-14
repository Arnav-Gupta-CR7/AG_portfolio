import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="browser">
        <div className="tabs-head">
          <div className="tabs">
            <div className="tab-open">
              <div className="rounded-l">
                <div className="mask-round" />
              </div>
              <span>Arnav</span>
              <div className="close-tab">✕</div>
              <div className="rounded-r">
                <div className="mask-round" />
              </div>
            </div>
          </div>
          <div className="window-opt ">
            <button>-</button>
            <button>□</button>
            <button className="window-close">✕</button>
          </div>
        </div>
        <div className="head-browser">
          <button>←</button>
          <button disabled>→</button>
          <input className="text-red-700 text-xs" type="text" name="" id="dd" defaultValue="experience"  />

          <button>⋮</button>
          <button className="star">✰</button>
        </div>

        {/* browser content */}
        <div className="browser-content ml-4">
          <h3>Full stack intern</h3>
          <p>
            I worked as a full-stack intern at dWise Healthcare, improving their scheduling system with Angular and Spring Boot. I optimized performance, reduced database load by 70%+, built faster APIs, and added a “Nearest Slot” feature to make booking quicker and smoother.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
#dd{
color: red;
}
  .browser {
  width: 300px;
  height: 300px;
  background: #1a0000;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  color: #fff;

  /* Red Cyberpunk Glow */
  box-shadow:
    0 0 15px #ff1a1a,
    0 0 30px #ff1a1a,
    0 0 60px #ff0000,
    inset 0 0 10px #ff4d4d;

  animation: red-glow-pulse 3s infinite ease-in-out;
}

@keyframes red-glow-pulse {
  0%, 100% {
    box-shadow:
      0 0 15px #ff1a1a,
      0 0 30px #ff1a1a,
      0 0 60px #ff0000,
      inset 0 0 10px #ff4d4d;
  }
  50% {
    box-shadow:
      0 0 25px #ff4d4d,
      0 0 50px #ff3333,
      0 0 80px #ff1a1a,
      inset 0 0 15px #ff6666;
  }
}


  /* tabs-head */
  .tabs-head {
    background-color: #330000;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-left: 20px;
  }

  .tabs-head .tab-open {
    width: 100px;
    height: 34px;
    border-radius: 7px 7px 0 0;
    background-color: #550000;
    display: flex;
    gap: 5px;
    align-items: start;
    justify-content: space-between;
    padding: 4px 8px;
    position: relative;
  }

  .tabs-head .tab-open .close-tab {
    color: #fff;
    font-size: 9px;
    padding: 1px 4px;
    border-radius: 50%;
    cursor: default;
  }
  .tabs-head .tab-open .close-tab:hover {
    background-color: #770000;
  }

  .tabs-head .tab-open span {
    color: #ff5555;
    font-size: 10px;
  }

  .tabs-head .window-opt button {
    height: 30px;
    width: 30px;
    border: none;
    background-color: transparent;
    color: #fff;
    margin-bottom: 10px;
  }
  .tabs-head .window-opt button:hover {
    background-color: #770000c8;
  }
  .tabs-head .window-opt .window-close:hover {
    background-color: #ff1a1a;
  }

  /* head-browser */
  .head-browser {
    position: absolute;
    top: 30px;
    width: 100%;
    height: 40px;
    background-color: #550000;
    padding: 7px;
    display: flex;
    border-radius: 7px 7px 0 0;
    gap: 5px;
  }

  .head-browser input {
    background-color: #3b0000;
    border: 2px solid transparent;
    height: 100%;
    border-radius: 20px;
    outline: none;
    color: #fff;
    padding: 0 15px;
    flex: 1;
  }

  .head-browser input:focus {
    border-color: #ff4d4d;
    background-color: #3b0000;
  }

  .head-browser input::placeholder {
    color: #ff9999;
  }

  .head-browser button {
    width: 27px;
    height: 25px;
    border: none;
    background-color: transparent;
    color: #fff;
    border-radius: 50%;
  }

  .head-browser button:hover {
    background-color: #770000;
  }

  .head-browser .star {
    color: #ff5555;
    position: absolute;
    right: 45px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    opacity: 0.8;
  }

  /* browser content */
  .browser-content {
    margin-top: 0px;
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .browser-content h3 {
    color: #ff4d4d;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .browser-content p {
    color: #ff9999;
    font-size: 12px;
    line-height: 1.4;
  }
`;

export default Card;
