function Button(props) {
    return(
        <div className="go-to-panel">
            <h3>{props.title}</h3>
            {props.isShopDependant ? (
                <input type="text" placeholder="Shop ID" />
            ) : null}
        </div>
    );
}

export default Button;