import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({items}) => (
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
        {items.map((item, index) => (
            <Item key={index} item={item} />
        ))}
        </ol>
    </div>
)

ItemList.propTypes = {
    items: PropTypes.array.isRequired
}

export default ItemList;