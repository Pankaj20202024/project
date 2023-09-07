import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const [selectedTag, setSelectedTag] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const tag_list = [
    "All",
    "Pork",
    "Seafood",
    "Chicken",
    "Beef",
    "Vegetarian",
    "Celebrate on board",
    "Kids menu",
    "Breakfast",
  ];

  // Filter meals based on the selected tag
  const filteredMeals =
    selectedTag === "All"
      ? meals
      : meals.filter((item) => item.labels.includes(selectedTag.toLowerCase()));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMeals.slice(indexOfFirstItem, indexOfLastItem);

  // Previous Page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next Page
  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredMeals.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [selectedMeals, setSelectedMeals] = useState([[], [], []]);
  const [selectedPassenger, setSelectedPassenger] = useState(1);

  const [totalAmount, setTotalAmount] = useState([0, 0, 0]);

  // Function to add a selected meal for the selected passenger
  const handleSelectMeal = (meal, price) => {
    const updatedSelectedMeals = [...selectedMeals];
    updatedSelectedMeals[selectedPassenger - 1] = [
      ...updatedSelectedMeals[selectedPassenger - 1],
      meal,
    ];
    setSelectedMeals(updatedSelectedMeals);

    const updatedTotalAmount = [...totalAmount];
    updatedTotalAmount[selectedPassenger - 1] += price;
    setTotalAmount(updatedTotalAmount);
  };

  // Function to remove a meal for the selected passenger
  const handleDeselectMeal = (meal, price) => {
    const updatedSelectedMeals = [...selectedMeals];
    updatedSelectedMeals[selectedPassenger - 1] = updatedSelectedMeals[
      selectedPassenger - 1
    ].filter((selectedMeal) => selectedMeal !== meal);
    setSelectedMeals(updatedSelectedMeals);

    const updatedTotalAmount = [...totalAmount];
    updatedTotalAmount[selectedPassenger - 1] -= price;
    setTotalAmount(updatedTotalAmount);
  };

  // variable to store the total expense
  const totalExpense = totalAmount.reduce((acc, amount) => acc + amount, 0);

  // function to toogle the image of up and down arrow and also for hiding and shoeing  the inner content

  let isClick = true;
  let innercontent = document.getElementById("accordionPanelsStayOpenExample");
  let updownimage = document.getElementById("UpDownImg");

  const hideInnerContent = () => {
    if (isClick) {
      innercontent.style.display = "none";
      isClick = false;
      updownimage.src = "/assets/down.png";
    } else {
      innercontent.style.display = "block";
      isClick = true;
      updownimage.src = "/assets/up.png";
    }
  };

  return (
    <div id="MainContainer">
      <div id="FoodMenuContainer">
        <div id="TagsContainer">
          {tag_list.map((tag_item, index) => {
            return (
              <button
                key={index}
                className={
                  selectedTag === tag_item ? "selected_tag" : "unselected_tag"
                }
                onClick={() => setSelectedTag(tag_item)}
              >
                {tag_item}
              </button>
            );
          })}
        </div>
        {currentItems.map((items) => {
          const selectedDrink = selectedDrinks[items.id];
          const selectedDrinkId = selectedDrinks[items.id];

          const selectedMeal = items.title;
          const mealPrice = items.price;


          return (
            <div id="FoodListContainer" key={items.id}>
              <div id="Food_Image_Container">
                <img src={items.img} alt="MyAssignment" />
              </div>
              <div id="FoodDetailsAndDrinksContainer">
                <div id="Food_Details_Container">
                  <p id="menuTitle">{items.title} + drink</p>
                  <h4 id="menuDescription">
                    <b>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo amet natus iure sit quam beatae libero fugit
                      consequuntd.
                    </b>
                  </h4>
                  <p id="moreinfo">
                    <b>stater : </b>
                    {items.starter}
                  </p>
                  <p id="moreinfo">
                    <b>desert : </b>
                    {items.desert}
                  </p>
                  <p id="moreinfo">
                    <b>selected drink : </b>
                    {selectedDrink}
                  </p>
                </div>
                <div id="DrinkContainer">
                  <div id="DrinkImages">
                    <img
                      src="/assets/Vine.png"
                      alt="MyAssignment"
                      className={
                        selectedDrinkId === items.drinks[0].title
                          ? "selected_drink"
                          : "unselected_drink"
                      }
                      onClick={() => {
                        setSelectedDrinks((prevSelectedDrinks) => ({
                          ...prevSelectedDrinks,
                          [items.id]: items.drinks[0].title,
                        }));
                      }}
                    />
                    <img
                      src="/assets/Juice.png"
                      alt="MyAssignment"
                      className={
                        selectedDrinkId === items.drinks[1].title
                          ? "selected_drink"
                          : "unselected_drink"
                      }
                      onClick={() => {
                        setSelectedDrinks((prevSelectedDrinks) => ({
                          ...prevSelectedDrinks,
                          [items.id]: items.drinks[1].title,
                        }));
                      }}
                    />
                    <img
                      src="/assets/Beer.png"
                      alt="MyAssignment"
                      className={
                        selectedDrinkId === items.drinks[2].title
                          ? "selected_drink"
                          : "unselected_drink"
                      }
                      onClick={() => {
                        setSelectedDrinks((prevSelectedDrinks) => ({
                          ...prevSelectedDrinks,
                          [items.id]: items.drinks[2].title,
                        }));
                      }}
                    />
                  </div>
                  <div id="PriceWithSelectOption">
                    {selectedPassenger !== 0 ? (
                      selectedMeals[selectedPassenger - 1].includes(
                        selectedMeal
                      ) ? (
                        <button
                          onClick={() =>
                            handleDeselectMeal(selectedMeal, mealPrice)
                          }
                        >
                          Deselect
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleSelectMeal(selectedMeal, mealPrice)
                          }
                        >
                          Select
                        </button>
                      )
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <nav aria-label="Page navigation example" className="mt-4">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" onClick={handlePrevPage}>
                Previous
              </a>
            </li>

            {Array.from({
              length: Math.ceil(filteredMeals.length / itemsPerPage),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#" onClick={handleNextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="BillingContainer">
        <div id="Select_meal_container">
          <div id="FlightImageContainer">
            <img src="/assets/airplane.png" alt="myAssignment" />
          </div>
          <p>
            <b>Select meal</b>
          </p>
        </div>

        <div id="PassengerOrderContainer">
          <div id="HeaderContainer" onClick={hideInnerContent}>
            <div id="HeaderDetailContainer">
              <h3>
                <b>Dubai, United Arab Emirates</b>
              </h3>
              <p>flight duration : 3h 40min</p>
            </div>

            <div id="down_up_button">
              <img src="/assets/up.png" alt="myAssignment" id="UpDownImg" />
            </div>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {Array.from({ length: 3 }).map((_, passengerIndex) => (
              <div className="accordion-item" key={passengerIndex}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse-${passengerIndex}`}
                    aria-expanded="true"
                    aria-controls={`panelsStayOpen-collapse-${passengerIndex}`}
                    onClick={() => setSelectedPassenger(passengerIndex + 1)}
                  >
                    <b className="Passengername">
                      Adult passenger {passengerIndex + 1}
                    </b>
                    <span className="MealStatus">
                      {selectedMeals[passengerIndex].length > 0
                        ? "Meal Selected"
                        : "Meal Not Selected"}
                    </span>
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse-${passengerIndex}`}
                  className={`accordion-collapse collapse ${
                    selectedPassenger === passengerIndex + 1 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body SelectedItemsContainer">
                    {selectedMeals[passengerIndex].length > 0 ? (
                      selectedMeals[passengerIndex].map(
                        (selectedMeal, index) => (
                          <div className="slectedItemName" key={index}>
                            <li>{selectedMeal}</li>
                          </div>
                        )
                      )
                    ) : (
                      <p className="emptyselction"> Empty Selection </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="total_amount_container">
          <div id="total_amount_container">
            <p>
              <b>
                Total Amount for All Passengers: {totalExpense.toFixed(2)} €
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

