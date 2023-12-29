function Button(props) {
    return(
        <div className="go-to-panel">
            <h3>{props.title}</h3>
            {props.isShopDependant ? (
                <input type="text" placeholder="Shop ID" />
            ) : null}
            <button>Go to {props.title}</button>
        </div>
    );
}

export default Button;