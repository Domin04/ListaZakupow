import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App() {
	const [inputItemName, setInputItemName] = useState("");
	const [inputItemNumber, setInputItemNumber] = useState("");
	const [arrayOfItems, setArrayOfItems] = useState([]);

	const handleChangeNewName = (event) => {
		setInputItemName(event.target.value);
	};

	const handleChangeNewNumber = (event) => {
		setInputItemNumber(event.target.value);
	};

	const handleAddNewItem = () => {
		if (!inputItemName) {
			alert("Wprowadz nazwe produktu");
		} else {
			const newItem = {
				itemName: inputItemName,
				quantity: inputItemNumber,
				id: Math.random(),
			};

			const newArrayOfItems = [...arrayOfItems, newItem];

			setArrayOfItems(newArrayOfItems);
			setInputItemNumber("");
			setInputItemName("");
		}
	};

	const handleDeleteAllItems = () => {
		setArrayOfItems([]);
		setInputItemNumber("");
		setInputItemName("");
	};

	return (
		<div className="full-height">
			<Header />
			<main>
        <div className="allList">
				<div className="item">
					<input
						value={inputItemName}
						type="text"
						className="name-input"
						placeholder="Nazwa produktu..."
						onChange={handleChangeNewName}
						maxLength="50"
					></input>
					<input
						value={inputItemNumber}
						type="number"
						className="number-input"
						placeholder="Ilosc..."
						onChange={handleChangeNewNumber}
						min="1"
						max="1000000000"
					></input>
					<div className="btn-container">
						<button className="float-right-btn-add" onClick={handleAddNewItem}>
							Dodaj
						</button>
					</div>
				</div>

				<div className="new-item-preview">
					{inputItemName} {inputItemNumber}
				</div>

				<ul className="list-of-items">
					{arrayOfItems.map((item) => (
						<li
							className="new-item"
							key={item.itemName + item.quantity + item.id}
						>
							<input type="checkbox" className="check" />

							<span className="item-name-added">Nazwa: {item.itemName} </span>
							<span className="item-number-added">Ilosc: {item.quantity} </span>
						</li>
					))}
				</ul>
				{/* Usuwa wszystkie produkty */}

				<button className="btn-delete-all" onClick={handleDeleteAllItems}>
					Usuń liste
				</button>
        </div>
			</main>
		</div>
	);
}

export default App;