export default function Stats({ items }) {
    if (!items.length) {
        return (<p className="stats">
            <em>Start adding some items to your packing list <i className="fas fa-plane-departure" /></em>
        </p>);
    }

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <>
            <div className="stats">
                <footer>
                    <em>
                        {percentage === 100
                            ? `You got everything! Ready to go.`
                            : `You have ${numItems} items on your list, and you are already ${numPacked} (${percentage}%)`
                        }
                    </em>
                </footer>
            </div>
        </>
    );
}