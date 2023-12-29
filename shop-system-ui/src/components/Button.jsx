function Button(props) {
    return(
        <div className="go-to-panel">
            <h1>{props.title}</h1>
            {props.isShopDependant ? (
                <input type="text" placeholder="Shop ID" />
            ) : null}
            <button>Go to {props.title}</button>
        </div>
    );
}

export default Button;