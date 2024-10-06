import PropTypes from "prop-types";

const DeleteItem = ({deleteLastItem, noItemsFound}) => {
    const onClickDeleteItem = (event) => {
        console.log("onClickDeleteItem was called");
        deleteLastItem();
    };

    const isButtonDisabled = noItemsFound();
    
    return (
        <button onClick={onClickDeleteItem} disabled={isButtonDisabled}>
            Delete Last Item
        </button>
    );
}

DeleteItem.propTypes = {
    deleteLastItem: PropTypes.func.isRequired,
    noItemsFound: PropTypes.func.isRequired
}

export default DeleteItem;