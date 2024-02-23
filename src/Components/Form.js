import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(event);

        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        }

        // console.log(newItem);

        // handleAddItems(newItem);
        // Adding newItem object into the new array without mutating an original array.
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <>
            <form className="add-form" onSubmit={handleSubmit}>

                <h3>What do you need for your <i className="fas fa-grin-hearts" /> trip?</h3>

                <select
                    value={quantity}
                    onChange={(e) => {
                        // console.log(e.target);
                        // console.log(Number(e.target.value));
                        setQuantity(Number(e.target.value));
                    }}
                >

                    {Array.from({ length: 20 }, (_, i) => i + 1).map
                        ((num) =>
                            <option
                                value={num}
                                key={num}
                            >
                                {num}
                            </option>
                        )
                    }
                </select>

                <input
                    type="text"
                    placeholder={"Add Items..."}
                    value={description}
                    onChange={(e) => {
                        // console.log(e.target);
                        // console.log(e.target.value);
                        setDescription(e.target.value);
                    }}
                />

                <button>Add</button>
            </form >
        </>
    );
}