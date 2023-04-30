import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
function Home({
  bill,
  people,
  reset,
  result,
  custom,
  handleInput,
  handlePeople,
  handleBill,
  handleCustom,
}) {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="amount">
          <span>Bill</span>
          <div className="inputIcons">
            <BsCurrencyDollar className="icons" />
            <input
              type="number"
              placeholder="0"
              value={bill}
              onChange={handleBill}
            />
          </div>
          <span>Select Tip%</span>
          <div className="btns">
            <button onClick={handleInput} value={0.05}>
              5%
            </button>
            <button onClick={handleInput} value={0.1}>
              10%
            </button>
            <button onClick={handleInput} value={0.15}>
              15%
            </button>
            <button onClick={handleInput} value={0.25}>
              25%
            </button>
            <button onClick={handleInput} value={0.5}>
              50%
            </button>
            <input
              className="custom"
              type="text"
              placeholder="Custom"
              value={custom}
              onChange={handleCustom}
            />
          </div>
          <span>Number of people</span>
            <div className="inputIcons">
              <FaUserPlus className="icons" />
              <input
                type="number"
                placeholder="0"
                value={people}
                onChange={handlePeople}
              />
            </div>
          
        </div>
        <div className="tipClaculated">
          <div className="title">
            <span>Tip Amount</span>
            <p>/person</p>
            <span>Total</span>
            <p>/person</p>
          </div>
          <div className="tipAmount">
            <span>$ {result ? result : '0.00'}</span>

            <span>$ 0.00</span>
          </div>
          <div className="btn">
            <button onClick={reset} className={result ? "btn-active" : ""}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
